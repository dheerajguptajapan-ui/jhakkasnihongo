import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Zap, ShieldCheck, Cpu, Globe } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { toast } from 'sonner';

interface UpgradeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeDialog: React.FC<UpgradeDialogProps> = ({ isOpen, onClose }) => {
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    // Simulate Core Link upgrade process
    setTimeout(() => {
      setLoading(false);
      toast.success("Account Linked", {
        description: "Premium access unlocked. Welcome to the elite track.",
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-border bg-card/95 backdrop-blur-xl rounded-sm">
        <div className="relative p-8 space-y-6">
          {/* Neon Gradient Background Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 blur-[60px] -z-10 rounded-full" />

          <DialogHeader className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20">
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Priority Access</span>
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight leading-none text-foreground">
              Upgrade Your Secure Link
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-medium text-base">
              Unlock the advanced career tracks and master Tokyo Business Japanese.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <FeatureItem 
              icon={<Cpu size={20} className="text-blue-500" />}
              title="Business Track"
              description="Full access to N4-N1 professional curriculum."
            />
            <FeatureItem 
              icon={<Globe size={20} className="text-emerald-500" />}
              title="Global Network"
              description="Connect with other developers in the community track."
            />
            <FeatureItem 
              icon={<ShieldCheck size={20} className="text-amber-500" />}
              title="Secure Progress"
              description="Cloud Backup for your learning history."
            />
          </div>

          <div className="pt-4 space-y-4">
             <div className="p-4 rounded-sm bg-muted/50 border border-border space-y-2">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pricing Plan</p>
                <div className="flex justify-between items-end">
                   <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-foreground">¥499</span>
                      <span className="text-sm font-bold text-muted-foreground">/mo</span>
                   </div>
                   <Badge variant="secondary" className="font-bold text-[10px] bg-primary/5 border-primary/10 text-primary uppercase tracking-tighter">Lifetime Founder Deal</Badge>
                </div>
             </div>

             <Button 
                onClick={handleUpgrade}
                disabled={loading}
                className={`w-full h-14 text-lg font-black bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-sm ${loading ? 'animate-glitch' : ''}`}
             >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    CONNECTING...
                  </div>
                ) : (
                  "UPGRADE NOW"
                )}
             </Button>
             <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest">No credit card required for trial</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FeatureItem = ({ icon, title, description }: any) => (
  <div className="flex items-start gap-4 p-4 rounded-sm bg-muted/30 border border-border/50 group transition-all hover:bg-muted/50">
    <div className="p-2.5 rounded-sm bg-card border border-border shadow-sm group-hover:bg-background">
      {icon}
    </div>
    <div className="space-y-0.5">
      <h4 className="font-bold text-foreground leading-tight">{title}</h4>
      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

