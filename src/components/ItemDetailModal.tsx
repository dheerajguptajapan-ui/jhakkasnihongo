import React from 'react';
import { Item } from '../types';
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
import { motion } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { 
  Zap, 
  BookOpen, 
  Layers, 
  PenTool, 
  Quote, 
  Sparkles,
  Info
} from 'lucide-react';

interface ItemDetailModalProps {
  item: Item | null;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const { settings } = useAuth();
  const showFurigana = settings?.showFurigana ?? true;

  if (!item) return null;

  const isKanji = item.type === 'kanji';

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] md:w-full h-fit max-h-[92vh] md:max-h-[90vh] overflow-hidden flex flex-col p-0 bg-background border-border rounded-sm shadow-2xl focus:outline-none">
        <DialogHeader className="p-4 md:p-12 bg-muted/30 border-b border-border relative shrink-0">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-8 relative z-10">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`font-black text-foreground drop-shadow-sm select-none whitespace-nowrap overflow-visible ${
                isKanji 
                  ? 'text-[clamp(4rem,15vw,8rem)] leading-none' 
                  : 'text-[clamp(2rem,8vw,5rem)] md:text-7xl pt-4'
              }`}
            >
               {isKanji ? item.character : <RubyText text={item.character} showFurigana={showFurigana} />}
            </motion.div>
            <div className="space-y-4 flex-1 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm">
                  JLPT N{item.level} {item.type.toUpperCase()}
                </Badge>
                {item.radical && (
                  <Badge className="bg-muted text-muted-foreground border-border font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm">
                    Radical: {item.radical}
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tighter uppercase break-words">
                {item.meanings.join(' • ')}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 px-4 py-6 md:p-12 overscroll-contain">
          <div className="space-y-8 md:space-y-12 pb-20">
            
            {/* Primary Grid: Readings & Explanation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
               {/* Left Column: Visual/Identification */}
               <div className="space-y-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {isKanji ? <PenTool size={16} className="text-primary" /> : <Info size={16} className="text-primary" />}
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">{isKanji ? 'Writing Engine' : 'Identification'}</h3>
                  </div>
                  {isKanji ? (
                    <div className="p-6 bg-muted/20 border border-border rounded-sm flex items-center justify-center min-h-[220px] overflow-hidden">
                      <div className="w-full max-w-full overflow-x-auto custom-scrollbar flex justify-center">
                        <StrokeOrder character={item.character} />
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 md:p-8 bg-card border border-border rounded-sm space-y-4 shadow-sm w-full">
                       <p className="text-[9px] font-black text-primary uppercase tracking-widest">Main Reading</p>
                       <div className="text-3xl md:text-4xl font-black text-foreground break-all">
                         {item.readings?.[0] || '---'}
                       </div>
                    </div>
                  )}
               </div>

               {/* Right Column: Context/Calibration */}
               <div className="space-y-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Zap size={16} className="text-amber-500" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">{isKanji ? 'Phonic Calibration' : 'Core Parameters'}</h3>
                  </div>
                  
                  {isKanji ? (
                    <div className="space-y-4">
                      <div className="p-5 bg-card border border-border rounded-sm space-y-2">
                         <p className="text-[9px] font-black text-primary uppercase tracking-widest">KUNYOMI (Native)</p>
                         <div className="flex flex-wrap gap-2 text-foreground font-black">
                            {(item.kunReadings || []).length > 0 ? (
                              item.kunReadings?.map((r, i) => (
                                <span key={i} className="text-xl">{r}</span>
                              ))
                            ) : (
                              <span className="text-xs font-bold text-muted-foreground uppercase">None Recorded</span>
                            )}
                         </div>
                      </div>
                      <div className="p-5 bg-card border border-border rounded-sm space-y-2">
                         <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest">ONYOMI (Sino)</p>
                         <div className="flex flex-wrap gap-2 text-foreground font-black">
                            {(item.onReadings || item.readings || []).length > 0 ? (
                              (item.onReadings || item.readings || []).map((r, i) => (
                                <span key={i} className="text-xl">{r}</span>
                              ))
                            ) : (
                              <span className="text-xs font-bold text-muted-foreground uppercase">None Recorded</span>
                            )}
                         </div>
                      </div>
                    </div>
                  ) : (
                     <div className="space-y-4 w-full">
                      <div className="p-5 md:p-6 bg-card border border-border rounded-sm">
                         <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-3">Classification</p>
                         <div className="flex flex-wrap gap-2 md:gap-3">
                            <span className="text-xs md:sm font-black text-foreground uppercase tracking-wider bg-muted px-3 md:px-4 py-2 rounded-sm border border-border">
                                {item.type}
                            </span>
                            <span className="text-xs md:sm font-black text-primary bg-primary/10 px-3 md:px-4 py-2 rounded-sm border border-primary/20">
                                JLPT N{item.level}
                            </span>
                         </div>
                      </div>
                      {item.explanation && (
                        <div className="p-5 md:p-6 bg-primary/5 border border-primary/20 rounded-sm">
                           <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-2">Neural Directive</p>
                           <p className="text-xs md:text-sm font-bold text-foreground leading-relaxed">
                               {item.explanation}
                           </p>
                        </div>
                      )}
                    </div>
                  )}
               </div>
            </div>

            {/* Explanation Section (For Kanji or if not shown above) */}
            {isKanji && item.explanation && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Info size={16} className="text-primary" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Sector Intel</h3>
                </div>
                <div className="p-8 bg-muted/20 border border-border rounded-sm border-l-4 border-primary">
                  <p className="text-lg font-bold text-foreground leading-relaxed">{item.explanation}</p>
                </div>
              </div>
            )}

            {/* Jukugo / Phrases */}
            {(item.jukugo || item.combinations) && (item.jukugo || item.combinations)!.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Layers size={16} className="text-indigo-400" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Fusion Resonance</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(item.jukugo || item.combinations)?.map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-5 bg-card border border-border rounded-sm hover:border-primary/20 transition-colors group/item">
                      <div className="flex flex-col gap-1">
                        <span className="font-black text-foreground text-xl md:text-2xl group-hover/item:text-primary transition-colors">{c.word}</span>
                        <span className="text-[10px] text-muted-foreground font-black tracking-[0.2em] uppercase">{c.reading}</span>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight text-right max-w-[50%]">{c.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sentences */}
            {item.sentences && item.sentences.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <BookOpen size={16} className="text-emerald-500" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Context Resonance</h3>
                </div>
                <div className="space-y-4">
                  {item.sentences.map((s, i) => (
                    <div key={i} className="p-8 bg-muted/10 border border-border rounded-sm space-y-4 relative overflow-hidden group/s">
                      <Quote className="absolute -top-2 -left-2 text-primary opacity-5 group-hover/s:opacity-10" size={60} />
                      <div className="text-xl md:text-3xl font-bold text-foreground relative z-10 leading-relaxed">
                        <RubyText text={s.furigana || (typeof s.japanese === 'string' ? s.japanese : '')} showFurigana={showFurigana} />
                      </div>
                      <div className="flex gap-4 items-center relative z-10 pt-2">
                         <div className="w-8 h-[2px] bg-primary/30" />
                         <p className="text-sm font-bold text-muted-foreground italic uppercase tracking-tight">{s.english}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mnemonic */}
            {item.mnemonic && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Sparkles size={16} className="text-amber-500" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Memory Calibration</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg bg-muted/20 p-8 rounded-sm border-l-4 border-amber-500 italic">
                  {item.mnemonic}
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
