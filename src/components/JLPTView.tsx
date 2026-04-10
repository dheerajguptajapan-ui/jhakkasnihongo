import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Item, ItemType } from '../types';
import { JLPTLevel, JLPTSection } from '../App';
import { KanjiExplorer } from './KanjiExplorer';
import { Badge } from './ui/badge';
import { VocabularyListView } from './VocabularyListView';
import { GrammarView } from './GrammarView';
import { DokkaiView } from './DokkaiView';
import { LessonTabsView } from './LessonTabsView';
import { useAuth } from '../lib/AuthContext';
import { INITIAL_ITEMS } from '../lib/initialData';

interface JLPTViewProps {
  level: JLPTLevel;
  section: JLPTSection;
}

export const JLPTView: React.FC<JLPTViewProps> = ({ level, section }) => {
  const { profile, isMock } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<number>(1);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const levelNum = parseInt(level.replace('n', ''));
      // Map JLPT level to internal level (N5=1, N4=2, etc.)
      const internalLevel = 6 - levelNum; 

      let itemType: ItemType = 'kanji';
      if (section === 'vocabulary') itemType = 'vocabulary';
      if (section === 'grammar') itemType = 'grammar';
      if (section === 'dokkai') itemType = 'dokkai';

      if (isMock) {
        let filtered = INITIAL_ITEMS.filter(i => i.level === internalLevel && i.type === itemType);
        // Filter by lesson if it's N5
        if (level === 'n5') {
          filtered = filtered.filter(i => i.lessonNumber === selectedLesson);
        }
        setItems(filtered);
        setLoading(false);
        return;
      }

      try {
        let q;
        if (level === 'n5') {
          q = query(
            collection(db, 'items'),
            where('level', '==', internalLevel),
            where('type', '==', itemType),
            where('lessonNumber', '==', selectedLesson)
          );
        } else {
          q = query(
            collection(db, 'items'),
            where('level', '==', internalLevel),
            where('type', '==', itemType)
          );
        }

        const snap = await getDocs(q);
        setItems(snap.docs.map(doc => doc.data() as Item));
      } catch (err) {
        console.error("Firestore JLPT fetch error:", err);
        let filtered = INITIAL_ITEMS.filter(i => i.level === internalLevel && i.type === itemType);
        if (level === 'n5') {
          filtered = filtered.filter(i => i.lessonNumber === selectedLesson);
        }
        setItems(filtered);
      }
      setLoading(false);
    };

    fetchItems();
  }, [level, section, isMock, selectedLesson]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading {section}...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
        <p className="text-slate-400 font-medium text-lg mb-4">No {section} found for this level.</p>
        {profile?.role === 'admin' && (
          <p className="text-sm text-slate-500 italic uppercase tracking-widest font-bold">Go to Dashboard to seed global items.</p>
        )}
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      {/* Lesson Picker for N5 */}
      {level === 'n5' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Select Lesson</h4>
            <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full uppercase tracking-widest">Minna no Nihongo</span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
            {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setSelectedLesson(num)}
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-sm font-black transition-all duration-300 ${
                  selectedLesson === num 
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-100 ring-4 ring-sky-50 translate-y-[-2px]' 
                    : 'bg-white border border-slate-100 text-slate-400 hover:border-sky-200 hover:text-sky-600'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      {section === 'kanji' && <KanjiExplorer items={items} />}
      {section === 'vocabulary' && (
        level === 'n5' ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Lesson {selectedLesson} Vocabulary</h3>
              <Badge variant="outline" className="bg-sky-50 text-sky-600 border-sky-100 uppercase font-black text-[10px] tracking-widest px-3 py-1">
                Tabbed View
              </Badge>
            </div>
            {items.length > 0 ? (
              <LessonTabsView items={items.filter(i => i.lessonNumber === selectedLesson)} />
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
                <p className="text-slate-400 font-medium text-lg mb-2">Lesson {selectedLesson} data is not yet available.</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Feed data to see content here</p>
              </div>
            )}
            
            {items.length > 0 && (
              <div className="pt-12 border-t border-slate-100">
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-6">List View</h3>
                <VocabularyListView items={items} />
              </div>
            )}
          </div>
        ) : (
          <VocabularyListView items={items} />
        )
      )}
      {section === 'grammar' && <GrammarView items={items} />}
      {section === 'dokkai' && <DokkaiView items={items} />}
    </div>
  );
};
