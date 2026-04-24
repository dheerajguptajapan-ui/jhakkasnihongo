import React, { useState, useEffect } from 'react';
import { Item, Sentence } from '../types';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { RubyText } from './RubyText';
import { StrokeOrder } from './StrokeOrder';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { PersistenceService } from '../lib/services/PersistenceService';
import { toast } from 'sonner';
import { 
  Zap, 
  BookOpen, 
  Layers, 
  PenTool, 
  Quote, 
  Sparkles,
  Info,
  Pencil,
  Save,
  X,
  RotateCcw
} from 'lucide-react';

interface ItemDetailModalProps {
  item: Item | null;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item: baseItem, onClose }) => {
  const { settings } = useAuth();
  const showFurigana = settings?.showFurigana ?? true;

  // Local state for editing and merged data
  const [item, setItem] = useState<Item | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMeanings, setEditedMeanings] = useState('');
  const [editedExplanation, setEditedExplanation] = useState('');
  const [editedSentences, setEditedSentences] = useState('');

  // Load overrides on open
  useEffect(() => {
    if (!baseItem) {
      setItem(null);
      setIsEditing(false);
      return;
    }

    const loadData = async () => {
      const overrides = await PersistenceService.getItemOverrides();
      const override = overrides[baseItem.id];
      
      const merged = override ? { 
        ...baseItem, 
        ...override,
        // Ensure sentences are treated correctly if they were stored as partial
        sentences: override.sentences || baseItem.sentences,
        meanings: override.meanings || baseItem.meanings,
        explanation: override.explanation || baseItem.explanation
      } : baseItem;

      setItem(merged);
      setEditedMeanings(merged.meanings.join(', '));
      setEditedExplanation(merged.explanation || '');
      setEditedSentences((merged.sentences || []).map(s => `${s.japanese} | ${s.english}`).join('\n'));
    };

    loadData();
  }, [baseItem]);

  if (!item) return null;

  const isKanji = item.type === 'kanji';

  const handleSave = async () => {
    try {
      const meanings = editedMeanings.split(',').map(m => m.trim()).filter(Boolean);
      
      // Parse sentences back into objects
      const sentences: Sentence[] = editedSentences.split('\n').map(line => {
        const [jp, en] = line.split('|').map(s => s.trim());
        if (!jp) return null;
        return { japanese: jp, english: en || '' };
      }).filter(Boolean) as Sentence[];

      const override = {
        meanings,
        explanation: editedExplanation,
        sentences
      };

      await PersistenceService.saveItemOverride(item.id, override);
      setItem({ ...item, ...override });
      setIsEditing(false);
      toast.success("Local customization saved.");
    } catch (e) {
      toast.error("Failed to save customization.");
    }
  };

  const handleReset = async () => {
    if (!baseItem) return;
    try {
      await PersistenceService.removeItemOverride(baseItem.id);
      setItem(baseItem);
      setEditedMeanings(baseItem.meanings.join(', '));
      setEditedExplanation(baseItem.explanation || '');
      setEditedSentences((baseItem.sentences || []).map(s => `${s.japanese} | ${s.english}`).join('\n'));
      setIsEditing(false);
      toast.info("Restored to system defaults.");
    } catch (e) {
      toast.error("Failed to reset item.");
    }
  };

  return (
    <Dialog open={!!baseItem} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full h-[85vh] md:h-fit md:max-h-[90vh] top-[12%] translate-y-0 sm:top-1/2 sm:-translate-y-1/2 overflow-hidden flex flex-col p-0 bg-background border-border rounded-none md:rounded-sm shadow-2xl focus:outline-none focus-visible:outline-none">
        <ScrollArea className="h-full flex-1 px-4 py-4 md:p-12 overscroll-contain min-h-0">
          <div className="space-y-6 md:space-y-10 pb-20">
            {/* UNIFIED HEADER */}
            <header className="space-y-4 md:space-y-6 border-b border-border/50 pb-6 md:pb-10">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-10">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`font-black text-foreground drop-shadow-sm select-none text-center md:text-left ${
                    isKanji 
                      ? 'text-[clamp(1.8rem,12vw,5.5rem)] leading-none' 
                      : 'text-[clamp(1.2rem,8vw,3.5rem)] leading-tight'
                  }`}
                >
                  {isKanji ? item.character : <RubyText text={item.character} showFurigana={showFurigana} />}
                </motion.div>
                
                <div className="flex-1 space-y-2 text-center md:text-left overflow-hidden w-full min-w-0">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-1.5">
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm">
                      JLPT N{item.level} {item.type.toUpperCase()}
                    </Badge>
                    {item.radical && (
                      <Badge className="bg-muted text-muted-foreground border-border font-black text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm">
                        {item.radical}
                      </Badge>
                    )}
                    
                    {/* EDIT TOGGLE */}
                    <button 
                      onClick={() => setIsEditing(!isEditing)}
                      className={`ml-auto p-1.5 rounded-sm transition-colors ${isEditing ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground hover:bg-muted'}`}
                      title={isEditing ? "Close Editor" : "Edit Metadata"}
                    >
                      {isEditing ? <X size={14} /> : <Pencil size={14} />}
                    </button>
                  </div>
                  
                  {isEditing ? (
                    <input 
                      className="w-full bg-background border border-primary/30 p-2 text-lg font-black text-foreground uppercase tracking-tighter"
                      value={editedMeanings}
                      onChange={(e) => setEditedMeanings(e.target.value)}
                      placeholder="Meanings (comma separated)"
                    />
                  ) : (
                    <DialogTitle className="text-[clamp(0.9rem,4vw,1.8rem)] font-black text-foreground leading-tight tracking-tighter uppercase break-words hyphens-none">
                      {item.meanings.join(' • ')}
                    </DialogTitle>
                  )}
                </div>
              </div>
            </header>

            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.div 
                  key="editor"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Neural Directive (Explanation)</label>
                    <textarea 
                      className="w-full h-32 bg-muted/10 border border-border p-4 text-sm font-bold text-foreground leading-relaxed focus:border-primary/50 outline-none rounded-sm"
                      value={editedExplanation}
                      onChange={(e) => setEditedExplanation(e.target.value)}
                      placeholder="Enter grammar explanation or vocab context..."
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Context Resonance (Sentences)</label>
                      <span className="text-[8px] text-muted-foreground font-bold tracking-widest">FORMAT: JAPANESE | ENGLISH</span>
                    </div>
                    <textarea 
                      className="w-full h-48 bg-muted/10 border border-border p-4 text-sm font-bold text-foreground leading-relaxed focus:border-primary/50 outline-none font-mono rounded-sm"
                      value={editedSentences}
                      onChange={(e) => setEditedSentences(e.target.value)}
                      placeholder="私たちはエンジニアです。 | We are engineers."
                    />
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <button 
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-widest hover:brightness-110"
                    >
                      <Save size={14} /> Update Node
                    </button>
                    <button 
                      onClick={handleReset}
                      className="flex items-center gap-2 bg-muted text-muted-foreground px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-muted/80"
                    >
                      <RotateCcw size={14} /> Factory Reset
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="ml-auto text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                      Discard Changes
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="viewer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 md:space-y-10"
                >
                  {/* DOKKAI SPECIFIC PASSAGE RENDERER */}
                  {item.type === 'dokkai' && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <BookOpen size={14} className="text-primary" />
                          <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Passage Data Stream</h3>
                        </div>
                        <div className="p-6 md:p-10 bg-muted/20 border border-border rounded-sm relative overflow-hidden group/p">
                          <Quote className="absolute -top-1 -left-1 text-primary opacity-5" size={40} />
                          <div className="text-lg md:text-2xl font-medium text-foreground leading-loose relative z-10 whitespace-pre-wrap">
                            {typeof item.content === 'string' ? (
                              item.content
                            ) : (
                              <div className="flex flex-wrap gap-x-1 gap-y-2">
                                {item.content?.map((seg, i) => (
                                  <span key={i} className="inline-block">
                                    {seg.text === '\n' ? <div className="w-full h-4" /> : <RubyText text={seg.reading ? `${seg.text}[${seg.reading}]` : seg.text} showFurigana={showFurigana} />}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {item.translation && (
                        <div className="space-y-3">
                          <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Protocol Translation</p>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                            {item.translation}
                          </p>
                        </div>
                      )}

                      {item.questions && item.questions.length > 0 && (
                        <div className="space-y-6 pt-6 border-t border-border/50">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Sparkles size={14} className="text-amber-500" />
                            <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Comprehension Analysis</h3>
                          </div>
                          <div className="space-y-8">
                            {item.questions.map((q, idx) => (
                              <div key={idx} className="space-y-4">
                                <p className="text-base md:text-xl font-black text-foreground">
                                  {idx + 1}. {q.question}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {q.options.map((opt, optIdx) => (
                                    <div 
                                      key={optIdx} 
                                      className={`p-4 border rounded-sm text-sm font-bold transition-all ${
                                        optIdx === q.answerIndex 
                                          ? 'bg-primary/5 border-primary/30 text-primary ring-1 ring-primary/20' 
                                          : 'bg-muted/5 border-border text-muted-foreground opacity-80'
                                      }`}
                                    >
                                      {opt}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Standard Item Grid (Kanji/Vocab/Grammar) */}
                  {item.type !== 'dokkai' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                      {/* Left Column: Visual/Identification */}
                      <div className="space-y-4">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            {isKanji ? <PenTool size={14} className="text-primary" /> : <Info size={14} className="text-primary" />}
                            <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">{isKanji ? 'Writing Engine' : 'Identification'}</h3>
                          </div>
                          {isKanji ? (
                            <div className="p-4 bg-muted/20 border border-border rounded-sm flex items-center justify-center min-h-[160px] overflow-hidden">
                              <div className="w-full max-w-full overflow-x-auto custom-scrollbar flex justify-center scale-90 md:scale-100">
                                <StrokeOrder character={item.character} />
                              </div>
                            </div>
                          ) : (
                            <div className="p-5 md:p-8 bg-card border border-border rounded-sm space-y-3 shadow-sm w-full">
                              <p className="text-[8px] font-black text-primary uppercase tracking-widest">Main Reading</p>
                              <div className="text-2xl md:text-3xl font-black text-foreground break-all">
                                {item.readings?.[0] || '---'}
                              </div>
                            </div>
                          )}
                      </div>

                      {/* Right Column: Context/Calibration */}
                      <div className="space-y-4">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Zap size={14} className="text-amber-500" />
                            <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">{isKanji ? 'Phonic Calibration' : 'Core Parameters'}</h3>
                          </div>
                          
                          {isKanji ? (
                            <div className="space-y-2">
                              <div className="p-4 bg-card border border-border rounded-sm space-y-1">
                                <p className="text-[8px] font-black text-primary uppercase tracking-widest">KUNYOMI (Native)</p>
                                <div className="flex flex-wrap gap-2 text-foreground font-black">
                                    {(item.kunReadings || []).length > 0 ? (
                                      item.kunReadings?.map((r, i) => (
                                        <span key={i} className="text-lg">{r}</span>
                                      ))
                                    ) : (
                                      <span className="text-[10px] font-bold text-muted-foreground uppercase">None Recorded</span>
                                    )}
                                </div>
                              </div>
                              <div className="p-4 bg-card border border-border rounded-sm space-y-1">
                                <p className="text-[8px] font-black text-rose-500 uppercase tracking-widest">ONYOMI (Sino)</p>
                                <div className="flex flex-wrap gap-2 text-foreground font-black">
                                    {(item.onReadings || item.readings || []).length > 0 ? (
                                      (item.onReadings || item.readings || []).map((r, i) => (
                                        <span key={i} className="text-lg">{r}</span>
                                      ))
                                    ) : (
                                      <span className="text-[10px] font-bold text-muted-foreground uppercase">None Recorded</span>
                                    )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3 w-full">
                              <div className="p-4 md:p-6 bg-card border border-border rounded-sm">
                                <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-2">Classification</p>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    <span className="text-[10px] font-black text-foreground uppercase tracking-wider bg-muted px-2 py-1 rounded-sm border border-border">
                                        {item.type}
                                    </span>
                                    <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-sm border border-primary/20">
                                        JLPT N{item.level}
                                    </span>
                                </div>
                              </div>
                              {item.explanation && (
                                <div className="p-4 bg-primary/5 border border-primary/20 rounded-sm">
                                  <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">Neural Directive</p>
                                  <p className="text-xs font-bold text-foreground leading-relaxed line-clamp-4">
                                      {item.explanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                  )}

                  {/* Explanation Section (For Kanji or if not shown above) */}
                  {isKanji && item.explanation && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Info size={14} className="text-primary" />
                        <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Sector Intel</h3>
                      </div>
                      <div className="p-5 bg-muted/20 border border-border rounded-sm border-l-4 border-primary shadow-sm">
                        <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">{item.explanation}</p>
                      </div>
                    </div>
                  )}

                  {/* Jukugo / Phrases */}
                  {(item.jukugo || item.combinations) && (item.jukugo || item.combinations)!.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Layers size={14} className="text-indigo-400" />
                        <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Fusion Resonance</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {(item.jukugo || item.combinations)?.map((c, i) => (
                          <div key={i} className="flex justify-between items-center p-4 bg-card border border-border rounded-sm hover:border-primary/20 transition-colors group/item">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-black text-foreground text-base md:text-xl group-hover/item:text-primary transition-colors">{c.word}</span>
                              <span className="text-[8px] text-muted-foreground font-black tracking-[0.1em] uppercase">{c.reading}</span>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight text-right max-w-[50%]">{c.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sentences */}
                  {item.sentences && item.sentences.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <BookOpen size={14} className="text-emerald-500" />
                        <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Context Resonance</h3>
                      </div>
                      <div className="space-y-2.5">
                        {item.sentences.map((s, i) => (
                          <div key={i} className="p-4 md:p-6 bg-muted/10 border border-border rounded-sm space-y-2 relative overflow-hidden group/s">
                            <Quote className="absolute -top-1 -left-1 text-primary opacity-5" size={40} />
                            <div className="text-base md:text-2xl font-bold text-foreground relative z-10 leading-relaxed">
                              <RubyText text={s.furigana || (typeof s.japanese === 'string' ? s.japanese : '')} showFurigana={showFurigana} />
                            </div>
                            <div className="flex gap-2 items-center relative z-10 pt-1 border-t border-border/10">
                              <p className="text-[10px] font-bold text-muted-foreground italic uppercase tracking-tight">{s.english}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mnemonic */}
                  {item.mnemonic && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Sparkles size={14} className="text-amber-500" />
                        <h3 className="text-[9px] font-black uppercase tracking-[0.3em]">Memory Calibration</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm bg-muted/20 p-4 rounded-sm border-l-4 border-amber-500 italic">
                        {item.mnemonic}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
