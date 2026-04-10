import React from 'react';
import { useAuth } from '../lib/AuthContext';
import { persistence } from '../lib/persistence';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Download, Upload, Moon, Sun, Monitor, ShieldCheck, Database, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export const SettingsView: React.FC = () => {
  const { settings, updateSettings, profile } = useAuth();

  const handleExport = () => {
    try {
      const data = persistence.exportData();
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
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (persistence.importData(content)) {
        toast.success('Progress restored! Reloading app...');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error('Invalid backup file.');
      }
    };
    reader.readAsText(file);
  };

  const clearProgress = () => {
    if (confirm('Are you absolutely sure? This will wipe ALL your study progress locally.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Manage your offline learning experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appearance */}
        <Card className="border-none shadow-xl shadow-slate-100 dark:shadow-none dark:bg-slate-900 rounded-3xl overflow-hidden">
          <CardHeader className="bg-sky-600 p-6 text-white">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <Label className="text-xs font-black text-slate-400 uppercase tracking-widest">Theme Mode</Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'light', icon: Sun, label: 'Light' },
                  { id: 'dark', icon: Moon, label: 'Dark' },
                  { id: 'system', icon: Monitor, label: 'Auto' }
                ].map((t) => (
                  <Button
                    key={t.id}
                    variant={settings.theme === t.id ? 'default' : 'outline'}
                    className={`h-20 flex-col gap-2 rounded-2xl ${
                      settings.theme === t.id ? 'bg-sky-600 text-white' : 'border-slate-100 dark:border-slate-800'
                    }`}
                    onClick={() => updateSettings({ theme: t.id as any })}
                  >
                    <t.icon className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase">{t.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
              <div className="space-y-0.5">
                <Label className="text-sm font-bold">Show Furigana</Label>
                <p className="text-xs text-slate-500">Always show readings above Kanji</p>
              </div>
              <Switch 
                checked={settings.showFurigana}
                onCheckedChange={(val) => updateSettings({ showFurigana: val })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="border-none shadow-xl shadow-slate-100 dark:shadow-none dark:bg-slate-900 rounded-3xl overflow-hidden">
          <CardHeader className="bg-emerald-600 p-6 text-white">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Database className="w-4 h-4" />
              Data & Backup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs text-slate-500 font-medium">Export your data to a JSON file to transfer it to a new device.</p>
              <Button 
                onClick={handleExport}
                className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 rounded-2xl font-bold gap-2"
              >
                <Download className="w-4 h-4" />
                Backup Progress
              </Button>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-50 dark:border-slate-800">
              <p className="text-xs text-slate-500 font-medium">Restore from a previously saved backup file.</p>
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button variant="outline" className="w-full h-12 rounded-2xl font-bold gap-2 border-slate-200 dark:border-slate-800">
                  <Upload className="w-4 h-4" />
                  Restore Progress
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account / Dangerous Space */}
      <Card className="border-none shadow-xl shadow-slate-100 dark:shadow-none dark:bg-slate-900 rounded-3xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-sky-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-slate-400">Current User</p>
                <p className="text-xl font-black text-slate-800 dark:text-white">{profile?.displayName}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                variant="destructive" 
                onClick={clearProgress}
                className="h-12 px-6 rounded-2xl font-bold gap-2 bg-rose-500 hover:bg-rose-600"
              >
                <Trash2 className="w-4 h-4" />
                Wipe All Data
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">Jhakkas Nihongo v2.0.0 (Gold Release)</p>
      </div>
    </div>
  );
};
