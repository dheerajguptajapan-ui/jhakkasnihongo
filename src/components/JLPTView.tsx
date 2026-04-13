import React, { useEffect, useState } from 'react';
import { Item, ItemType } from '../types';
import { JLPTLevel, JLPTSection } from '../App';
import { KanjiExplorer } from './KanjiExplorer';
import { Badge } from './ui/badge';
import { VocabularyListView } from './VocabularyListView';
import { GrammarView } from './GrammarView';
import { DokkaiView } from './DokkaiView';
import { LessonTabsView } from './LessonTabsView';
import { getAllItems, getLesson } from '../lib/curriculum';
import LessonDashboard from './LessonDashboard';
import { ArrowLeft } from 'lucide-react';

interface JLPTViewProps {
  level: JLPTLevel;
  section: JLPTSection;
}

export const JLPTView: React.FC<JLPTViewProps> = ({ level, section }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  useEffect(() => {
    const fetchItems = () => {
      setLoading(true);
      const levelNum = parseInt(level.replace('n', ''));
      const internalLevel = 6 - levelNum; 

      let itemType: ItemType = 'kanji';
      if (section === 'vocabulary') itemType = 'vocabulary';
      if (section === 'grammar') itemType = 'grammar';
      if (section === 'dokkai') itemType = 'dokkai';

      let filtered: Item[] = [];
      if (level === 'n5') {
        // Use the new modular curriculum
        const pool = selectedLesson !== null ? getLesson(selectedLesson) : getAllItems();
        filtered = pool.filter(i => i.type === itemType);
      } else {
        // INITIAL_ITEMS handled as legacy for now
        filtered = getAllItems().filter(i => i.level === internalLevel && i.type === itemType);
      }
      
      setItems(filtered);
      setLoading(false);
    };

    fetchItems();
  }, [level, section, selectedLesson]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading...</p>
      </div>
    );
  }

  // Show Lesson Dashboard if N5 and no lesson selected
  if (level === 'n5' && selectedLesson === null) {
    return <LessonDashboard onSelectLesson={setSelectedLesson} />;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      {/* Back to Dashboard Button for N5 */}
      {level === 'n5' && (
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Lessons
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
          <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Lesson {selectedLesson}</h3>
        </div>
      )}

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
          <p className="text-slate-400 font-medium text-lg mb-4">No items found.</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            {section} data for Lesson {selectedLesson} might be coming soon!
          </p>
        </div>
      ) : (
        <>
          {section === 'kanji' && <KanjiExplorer items={items} />}
          {section === 'vocabulary' && (
            level === 'n5' ? (
              <div className="space-y-8">
                <LessonTabsView items={items} />
                <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-6">Full List</h3>
                  <VocabularyListView items={items} />
                </div>
              </div>
            ) : (
              <VocabularyListView items={items} />
            )
          )}
          {section === 'grammar' && <GrammarView items={items} />}
          {section === 'dokkai' && <DokkaiView items={items} />}
        </>
      )}
    </div>
  );
};

