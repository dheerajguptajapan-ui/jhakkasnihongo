import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { PersistenceService } from '../lib/services/PersistenceService';
import { CurriculumService } from '../lib/services/CurriculumService';
import { UserItem, Item, UserFeedback, UserAccount } from '../types';
import {
  Database,
  ShieldAlert,
  Trash2,
  Download,
  Upload,
  MessageSquare,
  Zap,
  CheckCircle2,
  Clock,
  User as UserIcon,
  ShieldCheck,
  Globe,
  Users
} from 'lucide-react';
import { toast } from 'sonner';

export const AdminView: React.FC = () => {
  const [showJson, setShowJson] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [allUserItems, setAllUserItems] = useState<UserItem[]>([]);
  const [feedbacks, setFeedbacks] = useState<UserFeedback[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unresolved'>('unresolved');

  const loadData = async () => {
    setLoading(true);
    const [systemItems, userItems, allFeedback, registry] = await Promise.all([
      CurriculumService.getTotalSystemItems(),
      PersistenceService.getUserItems(),
      PersistenceService.getAllFeedback(),
      PersistenceService.getAccountRegistry()
    ]);

    setItems(systemItems);
    setAllUserItems(userItems);
    setFeedbacks(allFeedback);
    setAccounts(registry);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePurgeAccounts = async () => {
    if (window.confirm("CRITICAL: Wipe ALL registered users and sessions? This cannot be undone.")) {
      await PersistenceService.saveToRegistry([]);
      await PersistenceService.clearSession();
      toast.error("Account registry wiped.");
      window.location.reload();
    }
  };

  const handleExport = async () => {
    const data = await PersistenceService.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jhakkas_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast.success("Secure Core backup generated.");
  };

  const resolveFeedback = async (id: string) => {
    await PersistenceService.resolveFeedback(id);
    toast.success("Feedback marked as Resolved.");
    loadData();
  };

  const deleteFeedback = async (id: string) => {
    if (confirm("Delete this feedback entry?")) {
      await PersistenceService.deleteFeedback(id);
      toast.info("Feedback entry purged.");
      loadData();
    }
  };

  const getUserPerformance = (uid: string) => {
    const userItems = allUserItems.filter(i => i.uid === uid);
    const masteryCount = userItems.filter(i => i.srsStage >= 7).length;
    return {
      total: userItems.length,
      mastery: masteryCount,
      percentage: userItems.length > 0 ? Math.round((masteryCount / userItems.length) * 100) : 0
    };
  };

  const handleDeleteUser = async (uid: string, name: string) => {
    if (uid === 'admin-master-001') {
      toast.error("PROTECTION VIOLATION: Cannot purge Master Architect node.");
      return;
    }
    if (confirm(`Confirm purge of user ${name}? This will permanently sever the link.`)) {
      await PersistenceService.deleteAccount(uid);
      toast.success(`User ${name} purged from registry.`);
      loadData();
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <div className="w-12 h-12 border-4 border-rose-500/20 border-t-rose-600 rounded-full animate-spin" />
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Accessing Secure Core...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(225,29,72,0.3)]">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-5xl font-black text-foreground uppercase tracking-tighter italic">JHAKKAS <span className="text-primary NOT-italic">ADMIN</span></h2>
        </div>
        <p className="text-primary font-bold italic uppercase tracking-widest text-[10px] pl-1 animate-pulse">
          ADMINISTRATIVE ACCESS ACTIVE // REPOSITORY PROTECTED
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Statistics Card */}
        <Card className="lg:col-span-1 bg-card border-border backdrop-blur-3xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-border">
            <CardTitle className="text-foreground font-black uppercase tracking-[0.2em] text-xs">User Statistics</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="flex justify-between items-center bg-muted/30 p-6 rounded-2xl border border-border">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2"><Users size={12} /> Total Users</span>
              <span className="text-2xl font-black text-foreground">{accounts.length}</span>
            </div>
            <div className="flex justify-between items-center bg-muted/30 p-6 rounded-2xl border border-border">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2"><Database size={12} /> Items Logged</span>
              <span className="text-2xl font-black text-primary">{allUserItems.length}</span>
            </div>
          </CardContent>
        </Card>

        {/* Global Controls */}
        <Card className="lg:col-span-2 bg-card border-border backdrop-blur-3xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-border">
            <CardTitle className="text-foreground font-black uppercase tracking-[0.2em] text-xs">System Operations</CardTitle>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Data Backup</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleExport} className="h-16 rounded-2xl border-border bg-muted/20 hover:bg-muted text-foreground font-black text-[10px] uppercase tracking-widest">
                  <Download className="mr-3 text-primary" size={16} /> Export
                </Button>
                <Button variant="outline" className="h-16 rounded-2xl border-border bg-muted/20 hover:bg-muted text-foreground font-black text-[10px] uppercase tracking-widest opacity-50 cursor-not-allowed">
                  <Upload className="mr-3 text-muted-foreground" size={16} /> Import
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">Danger Zone</h4>
              <Button onClick={handlePurgeAccounts} className="w-full h-16 rounded-2xl bg-rose-600/10 hover:bg-rose-600 border border-rose-500/20 text-rose-500 hover:text-white font-black text-[10px] uppercase tracking-widest transition-all">
                <Trash2 className="mr-3" size={16} /> Wipe Database
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Personnel Roster */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <Users className="text-primary w-6 h-6" />
          <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Active Users</h3>
        </div>

        <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/10 border-b border-border">
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Full Name</th>
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Email Address</th>
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Role</th>
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Study Progress</th>
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Joined</th>
                  <th className="p-6 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {accounts.map((acc) => {
                  const perf = getUserPerformance(acc.uid);
                  return (
                    <tr key={acc.uid} className="hover:bg-white/2 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                            <UserIcon size={14} />
                          </div>
                          <span className="text-xs font-black text-foreground uppercase tracking-tight">{acc.name}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="text-xs font-mono text-muted-foreground">{acc.email}</span>
                      </td>
                      <td className="p-6">
                        <div className={`inline-flex px-2 py-0.5 rounded-sm text-[8px] font-black uppercase tracking-widest ${acc.role === 'admin' ? 'bg-rose-500/20 text-rose-500' : 'bg-emerald-500/20 text-emerald-500'
                          }`}>
                          {acc.role}
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[8px] font-black text-muted-foreground uppercase">
                            <span>{perf.total} Items</span>
                            <span className="text-primary">{perf.percentage}% Mastery</span>
                          </div>
                          <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${perf.percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="text-[10px] font-black text-muted-foreground uppercase">
                          {new Date(acc.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="p-6">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteUser(acc.uid, acc.name)}
                          className="h-10 w-10 p-0 rounded-xl hover:bg-rose-500/10 hover:text-rose-500 text-muted-foreground"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Intelligence Feed (Feedback) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <MessageSquare className="text-primary w-6 h-6" />
            <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">System Feedback</h3>
          </div>
          <div className="flex gap-2 bg-muted/20 p-1 rounded-xl border border-border">
            <Button
              onClick={() => setFilter('unresolved')}
              variant={filter === 'unresolved' ? 'default' : 'ghost'}
              className={`h-8 px-4 text-[8px] font-black uppercase tracking-widest rounded-lg ${filter === 'unresolved' ? 'bg-primary text-white' : 'text-muted-foreground'}`}
            >
              Unresolved
            </Button>
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'ghost'}
              className={`h-8 px-4 text-[8px] font-black uppercase tracking-widest rounded-lg ${filter === 'all' ? 'bg-primary text-white' : 'text-muted-foreground'}`}
            >
              All Feed
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.filter(f => filter === 'all' ? true : !f.isResolved).length === 0 ? (
            <div className="col-span-full py-20 bg-muted/10 border border-dashed border-border rounded-[2.5rem] flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500/40 mb-4" />
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">All Feedback Resolved // No Action Required</p>
            </div>
          ) : (
            feedbacks.filter(f => filter === 'all' ? true : !f.isResolved).map((fb) => (
              <div key={fb.id} className={`p-6 rounded-[2rem] border transition-all duration-500 ${fb.isResolved ? 'bg-muted/10 border-border opacity-60' : 'bg-card border-border hover:border-primary/50 shadow-2xl shadow-black/10'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground border border-border">
                      <UserIcon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-foreground uppercase">{fb.userName}</p>
                      <div className="flex items-center gap-2">
                        <div className={`px-1.5 py-0.5 rounded-[4px] text-[7px] font-black uppercase tracking-widest ${fb.category === 'bug' ? 'bg-rose-500/20 text-rose-500 border border-rose-500/30' :
                            fb.category === 'feature' ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' :
                              fb.category === 'praise' ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' :
                                'bg-muted-foreground/20 text-muted-foreground border border-border'
                          }`}>
                          {fb.category}
                        </div>
                        <span className="text-[7px] font-black text-muted-foreground uppercase flex items-center gap-1">
                          <Zap size={8} className="text-primary" /> {fb.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[7px] font-black text-muted-foreground uppercase flex items-center gap-1">
                    <Clock size={8} /> {new Date(fb.timestamp).toLocaleDateString()}
                  </span>
                </div>

                <div className="mb-6 p-4 bg-muted/50 rounded-xl border border-border">
                  <p className="text-[11px] font-medium text-foreground leading-relaxed italic line-clamp-4 overflow-hidden">
                    "{fb.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {!fb.isResolved && (
                      <Button
                        onClick={() => resolveFeedback(fb.id)}
                        className="h-8 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-500 hover:text-white border border-emerald-500/30 text-[8px] font-black uppercase transition-all"
                      >
                        RESOLVE
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteFeedback(fb.id)}
                      className="h-8 w-8 rounded-lg bg-rose-500/10 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-500/20 transition-all flex items-center justify-center p-0"
                    >
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
