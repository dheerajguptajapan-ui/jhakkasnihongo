import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Info, Share2, GlobeLock, Smartphone, Download } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const CommunityView: React.FC = () => {
  const { profile } = useAuth();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-none shadow-xl shadow-slate-100 rounded-3xl overflow-hidden">
          <CardHeader className="bg-sky-600 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                <GlobeLock className="w-8 h-8" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black uppercase tracking-tighter">Strictly Offline App</CardTitle>
                <p className="text-sky-100 font-medium text-sm">Privacy-first learning. No data leaves this device.</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Why Offline?</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Jhakkas Nihongo is designed to be your companion anywhere—on a plane, underground, or in areas with poor connectivity. 
                By keeping all logic and data on your device, we ensure maximum speed and zero hosting costs, allowing the app to remain lean and fast.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Security</span>
                </div>
                <p className="text-sm font-bold text-slate-700">Your SRS progress and personal data are never uploaded to a server.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Updates</span>
                </div>
                <p className="text-sm font-bold text-slate-700">New curriculum and features are delivered via app updates on the Play Store.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl shadow-slate-100 rounded-3xl">
          <CardHeader className="p-6">
            <CardTitle className="text-slate-800 font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              Hall of One
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-4xl">🏆</span>
            </div>
            <div>
              <p className="text-xl font-black text-slate-900">{profile?.displayName}</p>
              <Badge variant="secondary" className="mt-1 bg-yellow-50 text-yellow-700 border-yellow-100 font-black">TOP LEARNER</Badge>
            </div>
            <div className="pt-4 border-t border-slate-50 w-full space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase">Current XP</span>
                <span className="text-sky-600">{profile?.xp.toLocaleString()} XP</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase">Global Rank</span>
                <span className="text-emerald-600">#1 (Local)</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4 rounded-xl border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-widest gap-2">
              <Share2 className="w-3 h-3" />
              Share Progress
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-3 p-6 bg-amber-50 rounded-3xl border border-amber-100 text-amber-900">
        <Info className="w-6 h-6 shrink-0" />
        <p className="text-sm font-medium">
          <strong>Pro Tip:</strong> Currently, because we prioritize your privacy, there is no global leaderboard. You are always #1 in your own journey!
        </p>
      </div>

      <Card className="border-none shadow-xl shadow-indigo-100 rounded-3xl overflow-hidden bg-indigo-900 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <Smartphone className="w-10 h-10 text-indigo-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black uppercase tracking-tighter">🚀 Mobile Portal (Android)</h3>
                <p className="text-indigo-200 font-medium">Access your learning nexus anywhere with the official application.</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
              <Button 
                render={
                  <a href="https://github.com/dheerajguptajapan-ui/jhakkasnihongo/releases" target="_blank" rel="noopener noreferrer" />
                }
                className="w-full md:w-auto bg-white text-indigo-900 hover:bg-indigo-50 h-14 px-8 rounded-2xl font-black gap-2 transition-transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download APK (v1.0.0)
              </Button>
              <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest text-center md:text-right">
                Note: "Install from Unknown Sources" must be enabled.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
