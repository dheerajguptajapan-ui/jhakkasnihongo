import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { persistence } from '../lib/persistence';
import { getAllItems } from '../lib/curriculum';
import { Database, ShieldAlert, FileCode, Trash2, RefreshCcw, Download, Upload } from 'lucide-react';
import { toast } from 'sonner';

export const AdminView: React.FC = () => {
  const [showJson, setShowJson] = useState(false);
  const items = getAllItems();
  const userItems = persistence.getUserItems();

  const handlePurgeData = () => {
    if (window.confirm("CRITICAL WARNING: This will permanently delete ALL localized study progress and synaptic links. Proceed?")) {
      persistence.saveUserItems([]);
      toast.error("Localized progress purged. System reset.");
      window.location.reload();
    }
  };

  const handleExport = () => {
    const data = persistence.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `neural_nexus_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast.success("Neural Link backup generated.");
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(225,29,72,0.3)]">
            <Database size={20} />
          </div>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">System Console</h2>
        </div>
        <p className="text-rose-500 font-bold italic uppercase tracking-widest text-[10px] pl-1 animate-pulse">
           Restricted Access • System Architect Identity Confirmed
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Statistics Card */}
        <Card className="lg:col-span-1 bg-white/5 border-white/10 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-white font-black uppercase tracking-[0.2em] text-xs">Lexicon Metrics</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Nodes</span>
              <span className="text-2xl font-black text-white">{items.length}</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Synapses</span>
              <span className="text-2xl font-black text-indigo-400">{userItems.length}</span>
            </div>
          </CardContent>
        </Card>

        {/* Global Controls */}
        <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-white/5">
            <CardTitle className="text-white font-black uppercase tracking-[0.2em] text-xs">Core Operations</CardTitle>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Data Management</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleExport} className="h-16 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest">
                  <Download className="mr-3 text-indigo-400" size={16} /> Export
                </Button>
                <Button variant="outline" className="h-16 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest opacity-50 cursor-not-allowed">
                  <Upload className="mr-3 text-emerald-400" size={16} /> Import
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">Destructive Actions</h4>
              <Button onClick={handlePurgeData} className="w-full h-16 rounded-2xl bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-500 hover:text-white font-black text-xs uppercase tracking-widest transition-all">
                <Trash2 className="mr-3" size={16} /> Purge Terminal Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lexicon Inspector */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Lexicon Inspector</h3>
          <Button 
            variant="ghost" 
            onClick={() => setShowJson(!showJson)}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white"
          >
            {showJson ? "Close Stream" : "Inspect Raw Stream"}
          </Button>
        </div>

        {showJson && (
          <div className="p-8 bg-zinc-950/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-4 right-8 text-[10px] font-black text-indigo-500 uppercase tracking-widest animate-pulse">
              [DECRYPTED_JSON_FEED]
            </div>
            <pre className="text-xs font-mono text-gray-300 overflow-x-auto max-h-[500px] no-scrollbar">
              {JSON.stringify(items.slice(0, 10), null, 2)}
              {"\n\n// ... showing first 10 nodes of " + items.length + " total nodes"}
            </pre>
          </div>
        )}
      </section>
    </div>
  );
};
