import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Download, X } from 'lucide-react';
import { Button } from './ui/button';

export function PwaUpdater() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered', r);
      // Optional: Check for updates every hour
      if (r) {
        setInterval(() => {
          console.log('Checking for sw updates...');
          r.update();
        }, 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 md:bottom-10 md:left-auto md:right-10 md:translate-x-0 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300 w-full px-4 md:px-0 md:max-w-sm">
      <div className="bg-card border-2 border-primary shadow-[0_0_30px_rgba(225,29,72,0.3)] p-4 rounded-xl w-full relative">
        <button 
          onClick={close}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-1"
        >
          <X size={16} />
        </button>
        <div className="flex gap-4 items-start">
          <div className="bg-primary/20 p-2 rounded-lg text-primary animate-pulse">
            <Download size={24} />
          </div>
          <div className="pr-4">
            <h3 className="font-black uppercase tracking-tight text-foreground text-sm">Update Available</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-3 leading-relaxed">
              New training data has been downloaded. Restart the engine to synchronize your offline cache with the Secure Core.
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={() => updateServiceWorker(true)} 
                className="bg-primary hover:bg-primary/90 text-white text-[10px] h-8 px-4 font-black uppercase tracking-widest rounded-lg"
              >
                SYNC NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
