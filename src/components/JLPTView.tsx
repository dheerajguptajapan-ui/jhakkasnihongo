import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Item, ItemType } from '../types';
import { JLPTLevel, JLPTSection } from '../App';
import { KanjiExplorer } from './KanjiExplorer';
import { VocabularyListView } from './VocabularyListView';
import { GrammarView } from './GrammarView';
import { DokkaiView } from './DokkaiView';
import { useAuth } from '../lib/AuthContext';

interface JLPTViewProps {
  level: JLPTLevel;
  section: JLPTSection;
}

export const JLPTView: React.FC<JLPTViewProps> = ({ level, section }) => {
  const { profile } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

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

      const q = query(
        collection(db, 'items'),
        where('level', '==', internalLevel),
        where('type', '==', itemType)
      );

      const snap = await getDocs(q);
      setItems(snap.docs.map(doc => doc.data() as Item));
      setLoading(false);
    };

    fetchItems();
  }, [level, section]);

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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {section === 'kanji' && <KanjiExplorer items={items} />}
      {section === 'vocabulary' && <VocabularyListView items={items} />}
      {section === 'grammar' && <GrammarView items={items} />}
      {section === 'dokkai' && <DokkaiView items={items} />}
    </div>
  );
};
