import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface JhakkasBotProps {
  state: 'idle' | 'success' | 'error';
}

/**
 * Racing Panda Mascot
 * Features a Ferrari Red headband and high-energy victory animations.
 * Designed for the JHAKKASNIHONGO aesthetic.
 */
export const JhakkasBot: React.FC<JhakkasBotProps> = ({ state }) => {
  const isSuccess = state === 'success';

  return (
    <>
      {/* SUCCESS OVERLAY (PORTAL-LIKE CENTER VIEW) */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-md pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ 
                scale: 1, 
                y: 0,
                rotate: [0, -5, 5, -5, 0]
              }}
              transition={{ 
                type: "spring", 
                duration: 0.8,
                rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              className="flex flex-col items-center gap-8"
            >
              <div className="text-center space-y-2">
                <motion.h2 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-6xl md:text-8xl font-black text-white italic tracking-tighter"
                >
                  SUGOII!
                </motion.h2>
                <p className="text-primary font-black tracking-[0.5em] uppercase text-sm">Target Synchronized</p>
              </div>

              {/* GIANT DANCING PANDA */}
              <div className="relative w-64 h-64">
                 <PandaGraphic size={256} state={state} />
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="px-6 py-2 bg-white/10 border border-white/20 rounded-sm text-[10px] font-black text-white uppercase tracking-[0.3em]"
              >
                Press anywhere to continue
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STANDARD CORNER BOT (IDLE/ERROR) */}
      <div className={`relative w-24 h-32 pointer-events-none select-none flex items-center justify-center transition-opacity duration-300 ${isSuccess ? 'opacity-0' : 'opacity-100'}`}>
        <motion.div
          animate={
            state === 'error'
              ? { x: [0, -8, 8, -8, 8, 0] }
              : { y: [0, -5, 0] }
          }
          transition={
            state === 'idle' 
              ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.4 }
          }
          className="relative"
        >
          <PandaGraphic size={96} state={state} />

          {/* Status Tag */}
          <AnimatePresence>
            {state === 'error' && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: -20 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-widest bg-rose-600 border border-rose-500 text-white shadow-lg shadow-rose-500/20"
              >
                Zannen!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

/**
 * THE FULL BODY PANDA GRAPHIC
 * Hand-crafted SVG with independent limb motion
 */
const PandaGraphic: React.FC<{ size: number; state: JhakkasBotProps['state'] }> = ({ size, state }) => {
  const isSuccess = state === 'success';
  const isError = state === 'error';

  return (
    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
      {/* Body */}
      <circle cx="50" cy="85" r="30" fill="white" stroke="#E2E8F0" strokeWidth="0.5" />
      
      {/* Arms */}
      <motion.ellipse 
        animate={isSuccess ? { rotate: [-40, -110, -40] } : { rotate: -40 }}
        transition={{ repeat: Infinity, duration: 0.4 }}
        cx="28" cy="70" rx="7" ry="14" fill="#1A1A1A" style={{ transformOrigin: '28px 60px' }}
      />
      <motion.ellipse 
        animate={isSuccess ? { rotate: [40, 110, 40] } : { rotate: 40 }}
        transition={{ repeat: Infinity, duration: 0.4, delay: 0.1 }}
        cx="72" cy="70" rx="7" ry="14" fill="#1A1A1A" style={{ transformOrigin: '72px 60px' }}
      />

      {/* Legs */}
      <motion.ellipse 
        animate={isSuccess ? { y: [0, -10, 0], rotate: [0, -10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.4 }}
        cx="35" cy="110" rx="10" ry="8" fill="#1A1A1A" 
      />
      <motion.ellipse 
        animate={isSuccess ? { y: [0, -10, 0], rotate: [0, 10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.4, delay: 0.2 }}
        cx="65" cy="110" rx="10" ry="8" fill="#1A1A1A" 
      />

      {/* Head Group */}
      <motion.g animate={isSuccess ? { y: [0, -5, 0] } : {}}>
        {/* Head */}
        <circle cx="50" cy="45" r="28" fill="white" stroke="#E2E8F0" strokeWidth="0.5" />
        
        {/* Ears */}
        <circle cx="28" cy="25" r="9" fill="#1A1A1A" />
        <circle cx="72" cy="25" r="9" fill="#1A1A1A" />
        
        {/* Ferrari Headband */}
        <path d="M 22 32 Q 50 26 78 32 L 80 40 Q 50 34 20 40 Z" fill="#DA291C" />
        
        {/* Eye Patches */}
        <ellipse cx="40" cy="48" rx="7" ry="9" fill="#1A1A1A" />
        <ellipse cx="60" cy="48" rx="7" ry="9" fill="#1A1A1A" />
        
        {/* Eyes */}
        <motion.circle 
          animate={isSuccess ? { scaleY: [1, 0, 1] } : { scaleY: [1, 0.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          cx="40" cy="48" r="2.5" fill="white" 
        />
        <motion.circle 
          animate={isSuccess ? { scaleY: [1, 0, 1] } : { scaleY: [1, 0.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          cx="60" cy="48" r="2.5" fill="white" 
        />
        
        {/* Nose */}
        <path d="M 48 58 Q 50 61 52 58" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Small Belly Detail */}
      <ellipse cx="50" cy="90" rx="12" ry="10" fill="#F8FAFC" />
    </svg>
  );
};
