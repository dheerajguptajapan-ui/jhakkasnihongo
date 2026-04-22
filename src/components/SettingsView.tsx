import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { PersistenceService } from '../lib/services/PersistenceService';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { 
  Download, 
  Upload, 
  Moon, 
  Sun, 
  Monitor, 
  ShieldCheck, 
  Database, 
  Trash2, 
  Type, 
  RefreshCcw,
  Camera,
  BookOpen,
  User,
  Star,
  MessageSquare,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';
import { Slider } from './ui/slider';
import { CurriculumService } from '../lib/services/CurriculumService';
import { UserFeedback } from '../types';

export const SettingsView: React.FC = () => {
  const { settings, updateSettings, profile, logout } = useAuth();
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackCategory, setFeedbackCategory] = useState<'bug' | 'feature' | 'praise' | 'other'>('praise');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleExport = async () => {
    try {
      const data = await PersistenceService.exportData();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `jhakkas_backup_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      URL.revokeObjectURL(url);
      toast.success('Backup downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export data.');
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result as string;
      const success = await PersistenceService.importData(content);
      if (success) {
        toast.success('Progress restored! Reloading app...');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error('Invalid backup file.');
      }
    };
    reader.readAsText(file);
  };

  const clearProgress = async () => {
    if (confirm('Are you absolutely sure? This will wipe ALL your study progress locally.')) {
      await PersistenceService.saveUserItems([]);
      window.location.reload();
    }
  };

  const submitFeedback = async () => {
    if (!feedbackText.trim()) {
      toast.error("Please enter your feedback text.");
      return;
    }

    setIsSubmitting(true);
    const feedback: UserFeedback = {
      id: Math.random().toString(36).substr(2, 9),
      userId: profile?.uid || 'guest',
      userName: profile?.displayName || 'Guest',
      text: feedbackText,
      rating: feedbackRating,
      category: feedbackCategory,
      appVersion: '3.2.3',
      currentLevel: profile?.level || 5,
      timestamp: new Date().toISOString(),
      isResolved: false
    };

    try {
      await PersistenceService.saveFeedback(feedback);
      toast.success("Feedback Logged to Secure Feed!");
      setFeedbackText('');
      setFeedbackRating(5);
      setFeedbackCategory('praise');
    } catch (e) {
      toast.error("Feedback transmission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col gap-2 border-l-4 border-primary pl-6">
        <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">JHAKKAS <span className="text-primary NOT-italic">SETTINGS</span></h2>
        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.4em]">Personal Preference Sector</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Controls */}
        <div className="space-y-8">
            <div className="bg-card border border-border rounded-sm overflow-hidden shadow-sm">
              <div className="bg-primary p-6 flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Interface Scaling</h3>
                <Type className="w-4 h-4 text-white" />
              </div>
                <div className="p-8 space-y-8">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <Label className="text-sm font-black uppercase tracking-tight text-foreground">Global Scaling</Label>
                            <span className="text-[10px] font-black font-mono bg-primary text-white px-2 py-0.5 rounded-sm">
                                {Math.round(settings.fontScale * 100)}%
                            </span>
                        </div>
                        <Slider
                            value={[settings.fontScale]}
                            min={0.6}
                            max={1.4}
                            step={0.05}
                            onValueChange={([val]) => updateSettings({ fontScale: val })}
                        />
                        
                        {/* Live Preview */}
                        <div className="p-4 bg-muted/30 rounded-sm border border-border/50 space-y-2">
                             <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Live Preview</p>
                             <div className="p-3 bg-card border border-border rounded-sm overflow-hidden text-center">
                                <p style={{ fontSize: `${24 * settings.fontScale}px` }} className="font-black text-foreground leading-tight transition-all duration-300">
                                    日本語の勉強。
                                </p>
                                <p style={{ fontSize: `${12 * settings.fontScale}px` }} className="text-muted-foreground font-bold mt-1 transition-all duration-300">
                                    Studying Japanese.
                                </p>
                             </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div className="space-y-1">
                            <Label className="text-sm font-black uppercase tracking-tight text-foreground">Global Furigana</Label>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Secure linking assistance</p>
                        </div>
                        <Switch 
                            checked={settings.showFurigana}
                            onCheckedChange={(val) => updateSettings({ showFurigana: val })}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-card border border-border rounded-sm overflow-hidden shadow-sm">
                <div className="bg-foreground p-6 flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-background">Internal Cache</h3>
                    <RefreshCcw className="w-4 h-4 text-background" />
                </div>
                <div className="p-8 space-y-6">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                        Re-initialize the lexical matrix and rebuild local study vectors.
                    </p>
                    <Button 
                        onClick={async () => {
                            CurriculumService.initialize();
                            toast.success('Local Cache Rebuilt!');
                            setTimeout(() => window.location.reload(), 1000);
                        }}
                        className="w-full bg-primary text-white h-14 rounded-sm font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-primary/20"
                    >
                        REBUILD LOCAL CACHE
                    </Button>
                </div>
            </div>
        </div>

        {/* Core Review Loop (Feedback) */}
        <div className="bg-card border-2 border-primary/20 rounded-sm overflow-hidden shadow-2xl">
            <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Service Feedback</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Report bugs or give praise</p>
                </div>
                <MessageSquare className="w-5 h-5 text-primary animate-pulse" />
            </div>
            
            <div className="p-8 space-y-6">
                <div className="space-y-3">
                    <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Sentiment Rating</Label>
                    <div className="flex gap-2 justify-center py-2 bg-muted/20 rounded-sm">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setFeedbackRating(star)}
                                className={`transition-all duration-300 transform ${feedbackRating >= star ? 'scale-125' : 'scale-100 opacity-40'}`}
                            >
                                <Zap className={`w-8 h-8 ${feedbackRating >= star ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Intel Category</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {['praise', 'bug', 'feature', 'other'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFeedbackCategory(cat as any)}
                                className={`h-10 rounded-sm border-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                                    feedbackCategory === cat 
                                    ? 'bg-primary border-primary text-white shadow-lg' 
                                    : 'border-border text-muted-foreground hover:border-primary/50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <Label className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Your Message</Label>
                    <textarea 
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Tell us what you think..."
                        className="w-full h-32 bg-muted/30 border-2 border-border p-4 rounded-sm text-xs font-bold text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                    />
                </div>

                <Button 
                    onClick={submitFeedback}
                    disabled={isSubmitting}
                    className="w-full h-16 bg-primary text-white rounded-sm font-black text-xs uppercase tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                    {isSubmitting ? 'TRANSMITTING...' : 'EXECUTE SUBMISSION'}
                </Button>
            </div>
        </div>
      </div>

      {/* Account / Configuration */}
      <div className="bg-card border-l-4 border-rose-600 rounded-sm p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
        <div className="flex items-center gap-6">
            <div className="relative group">
                <div className="w-20 h-20 rounded-sm bg-muted flex items-center justify-center text-muted-foreground border border-border overflow-hidden">
                    {profile?.photoURL ? (
                        <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <User className="w-10 h-10" />
                    )}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                    <Camera className="w-5 h-5 text-white" />
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                const base64 = event.target?.result as string;
                                PersistenceService.getUserProfile().then(p => {
                                    if (p) PersistenceService.saveUserProfile({ ...p, photoURL: base64 }).then(() => {
                                        toast.success('Avatar Sync Complete');
                                        setTimeout(() => window.location.reload(), 500);
                                    });
                                });
                            };
                            reader.readAsDataURL(file);
                        }
                    }} />
                </label>
            </div>
            <div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground">User Identity</p>
                <div className="flex items-center gap-4">
                    <p className="text-3xl font-black text-foreground uppercase tracking-tight">{profile?.displayName}</p>
                    <div className="px-2 py-0.5 bg-rose-600 text-white text-[8px] font-black uppercase rounded-sm">
                        {profile?.role === 'admin' ? 'ARCHITECT' : 'PILOT'}
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex gap-4">
            <div className="bg-card border border-border rounded-sm p-4 hidden md:flex items-center gap-4 shadow-sm">
                <div className="space-y-1">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Data Flux</p>
                    <div className="flex gap-2">
                        <Button 
                            onClick={handleExport}
                            size="sm"
                            className="bg-muted hover:bg-muted/80 text-foreground text-[8px] font-black px-4"
                        >
                            EXPORT
                        </Button>
                        <Button 
                            size="sm"
                            className="bg-muted hover:bg-muted/80 text-foreground text-[8px] font-black px-4 relative overflow-hidden"
                        >
                            IMPORT
                            <input type="file" accept=".json" onChange={handleImport} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Button 
                    onClick={logout}
                    className="h-12 px-8 rounded-sm font-black bg-foreground text-background hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em] text-[10px] shadow-lg active:scale-95"
                >
                    DISCONNECT
                </Button>
                <Button 
                    variant="destructive" 
                    onClick={clearProgress}
                    className="h-10 px-6 rounded-sm font-black bg-rose-600 hover:bg-rose-700 text-white uppercase tracking-[0.2em] text-[10px]"
                >
                    PURGE DATA
                </Button>
            </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-border">
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] opacity-40 italic">JHAKKASNIHONGO V3.2.3 // SIMPLE EDITION</p>
      </div>
    </div>
  );
};
