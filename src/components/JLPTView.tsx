import React, { useEffect, useState } from 'react';
import { Item, ItemType } from '../types';
import { JLPTLevel, JLPTSection } from '../App';
import { KanjiExplorer } from './KanjiExplorer';
import { VocabularyListView } from './VocabularyListView';
import { GrammarView } from './GrammarView';
import { DokkaiView } from './DokkaiView';
import { LessonTabsView } from './LessonTabsView';
import { CurriculumService } from '../lib/services/CurriculumService';
import LessonDashboard from './LessonDashboard';
import { ArrowLeft } from 'lucide-react';

interface JLPTViewProps {
  level: JLPTLevel;
  section: JLPTSection;
  onBack?: () => void;
}

export const JLPTView: React.FC<JLPTViewProps> = ({ level, section, onBack }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const internalLevel = CurriculumService.getLevelId(level);
  const isModular = true; // All supported levels are now modular
  const label = CurriculumService.getChapterLabel(internalLevel);

  useEffect(() => {
    const fetchItems = () => {
      setLoading(true);

      let itemType: ItemType = 'kanji';
      if (section === 'vocabulary') itemType = 'vocabulary';
      if (section === 'grammar') itemType = 'grammar';
      if (section === 'dokkai') itemType = 'dokkai';

      const pool = selectedLesson !== null 
        ? CurriculumService.getChapterItems(internalLevel, selectedLesson) 
        : CurriculumService.getLevelItems(internalLevel);
      
      const filtered = pool.filter(i => i.type === itemType);
      
      setItems(filtered);
      setLoading(false);
    };

    fetchItems();
  }, [level, section, selectedLesson, internalLevel]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading...</p>
      </div>
    );
  }

  // Show Lesson Dashboard if no lesson selected
  if (selectedLesson === null) {
    return (
      <div className="space-y-6">
        <LessonDashboard level={internalLevel} onSelectLesson={setSelectedLesson} onBack={onBack} />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 md:space-y-8">
      {/* Back to Lesson Dashboard Button */}
      <div className="flex items-center gap-4 mb-2">
        <button 
          onClick={() => setSelectedLesson(null)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
        >
          <ArrowLeft size={14} />
          Back to Chapters
        </button>
        <div className="h-4 w-px bg-white/10" />
        <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Chapter {selectedLesson}</h3>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
          <p className="text-slate-400 font-medium text-lg mb-4">No items found.</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            {section} data for {label} {selectedLesson} might be coming soon!
          </p>
        </div>
      ) : (
        <>
          {section === 'kanji' && <KanjiExplorer items={items} />}
          {section === 'vocabulary' && (
            <div className="space-y-8">
              <LessonTabsView items={items} />
              <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mb-6">Full List</h3>
                <VocabularyListView items={items} />
              </div>
            </div>
          )}
          {section === 'grammar' && <GrammarView items={items} />}
          {section === 'dokkai' && <DokkaiView items={items} />}
        </>
      )}
    </div>
  );
};

