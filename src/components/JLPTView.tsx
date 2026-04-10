import React, { useEffect, useState } from 'react';
import { Item, ItemType } from '../types';
import { JLPTLevel, JLPTSection } from '../App';
import { KanjiExplorer } from './KanjiExplorer';
import { Badge } from './ui/badge';
import { VocabularyListView } from './VocabularyListView';
import { GrammarView } from './GrammarView';
import { DokkaiView } from './DokkaiView';
import { LessonTabsView } from './LessonTabsView';
import { INITIAL_ITEMS } from '../lib/initialData';

interface JLPTViewProps {
  level: JLPTLevel;
  section: JLPTSection;
}

export const JLPTView: React.FC<JLPTViewProps> = ({ level, section }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<number>(1);

  useEffect(() => {
    const fetchItems = () => {
      setLoading(true);
      const levelNum = parseInt(level.replace('n', ''));
      // Map JLPT level to internal level (N5=1, N4=2, etc.)
      const internalLevel = 6 - levelNum; 

      let itemType: ItemType = 'kanji';
      if (section === 'vocabulary') itemType = 'vocabulary';
      if (section === 'grammar') itemType = 'grammar';
      if (section === 'dokkai') itemType = 'dokkai';

      // Always use INITIAL_ITEMS in offline-only mode
      let filtered = INITIAL_ITEMS.filter(i => i.level === internalLevel && i.type === itemType);
      
      // Filter by lesson if it's N5
      if (level === 'n5') {
        const lessonItems = filtered.filter(i => i.lessonNumber === selectedLesson);
        // If it's vocabulary and no lesson specific items, maybe show all (or keep specific)
        if (section === 'vocabulary') {
          setItems(lessonItems);
        } else {
          setItems(filtered);
        }
      } else {
        setItems(filtered);
      }
      
      setLoading(false);
    };

    fetchItems();
  }, [level, section, selectedLesson]);

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
        <p className="text-slate-400 font-medium text-lg mb-4">No {section} found for this level/lesson.</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Lesson {selectedLesson} might not have {section} data yet.
        </p>
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
                Explorer
              </Badge>
            </div>
            <LessonTabsView items={items} />
            
            <div className="pt-12 border-t border-slate-100">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-6">Full List</h3>
              <VocabularyListView items={items} />
            </div>
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
