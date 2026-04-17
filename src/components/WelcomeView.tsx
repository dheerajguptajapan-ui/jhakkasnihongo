import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  UserPlus, 
  LogIn, 
  Lock, 
  KeyRound,
  Dna,
  Chrome
} from 'lucide-react';
import { AppLogo } from './AppLogo';

export const WelcomeView: React.FC = () => {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [architectSecret, setArchitectSecret] = useState('');
  const [showArchitectField, setShowArchitectField] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  
  // Dynamic Admin Detection
  useEffect(() => {
    // ONLY Reveal if Master Admin credentials are met
    const isMasterAdmin = email.toLowerCase() === 'dheeraj@admin.com' && password === 'Riya1998';
    
    if (mode === 'login' && isMasterAdmin) {
      setShowArchitectField(true);
    } else if (mode === 'login') {
      setShowArchitectField(false);
    }
  }, [email, password, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        await login(email, password, architectSecret);
      } else {
        await register(name, email, password, architectSecret);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-6 overflow-hidden z-[100]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[150px] rounded-full" />
      
      <div className="w-full max-w-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/40 backdrop-blur-2xl border border-border/50 rounded-sm p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div 
                className="cursor-pointer active:scale-95 transition-transform" 
                onClick={() => setLogoClicks(prev => prev + 1)}
              >
                <AppLogo />
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl font-black text-foreground uppercase tracking-tighter italic leading-none">
                  Jhakkas <span className="text-primary NOT-italic">Nihongo</span>
                </h1>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Secure Core Access</p>
              </div>
            </div>

            <div className="flex bg-muted/30 p-1 rounded-sm border border-border/50">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 flex items-center justify-center gap-2 h-12 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                  mode === 'login' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LogIn size={14} /> Log In
              </button>
              <button
                onClick={() => setMode('register')}
                className={`flex-1 flex items-center justify-center gap-2 h-12 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                  mode === 'register' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <UserPlus size={14} /> Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {mode === 'register' && (
                    <div className="space-y-2">
                      <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest flex items-center gap-2">
                        <Dna size={10} className="text-primary" /> Full Name
                      </Label>
                      <Input 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Dheeraj Gupta"
                        className="h-14 bg-muted/20 border-2 border-border/50 rounded-sm font-bold focus:border-primary transition-all px-6"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest flex items-center gap-2">
                      <Chrome size={10} className="text-primary" /> Email Address
                    </Label>
                    <Input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="@gmail.com"
                      className="h-14 bg-muted/20 border-2 border-border/50 rounded-sm font-bold focus:border-primary transition-all px-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest flex items-center gap-2">
                        <Lock size={10} className="text-primary" /> Password
                      </Label>
                    </div>
                    <Input 
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-14 bg-muted/20 border-2 border-border/50 rounded-sm font-bold focus:border-primary transition-all px-6"
                    />
                  </div>

                  {showArchitectField && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="space-y-2 pt-2"
                    >
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary pl-1">Architect Core Key</label>
                      <Input 
                        type="password"
                        value={architectSecret}
                        onChange={(e) => setArchitectSecret(e.target.value)}
                        placeholder="••••••••"
                        className="h-12 rounded-sm border-primary/30 bg-primary/5 text-primary placeholder:text-primary/30"
                      />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-primary text-white rounded-sm font-black text-xs uppercase tracking-[0.4em] shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'PLEASE WAIT...' : (mode === 'login' ? 'LOGIN' : 'CREATE ACCOUNT')}
              </Button>
            </form>

            <div className="pt-4 flex items-center justify-center gap-2 opacity-40">
                <ShieldCheck size={12} className="text-muted-foreground" />
                <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">
                  Secure Local Storage Active
                </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
           <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.5em] italic">
             JHAKKASNIHONGO // ARCHITECT INTERFACE
           </p>
        </div>

      </div>
    </div>
  );
};
