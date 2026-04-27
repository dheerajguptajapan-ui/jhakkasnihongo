import React, { useEffect, useState } from 'react';
import { fetchAllFromFirestore } from '../lib/firebase';
import { UserProfile, UserAccount } from '../types';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Shield, Clock, Flame } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const loadAdminData = async () => {
      setLoading(true);
      const fetchedProfiles = await fetchAllFromFirestore('profiles');
      const fetchedAccounts = await fetchAllFromFirestore('accounts');
      
      // Merge data if needed, or keep separate
      setUsers(fetchedProfiles as UserProfile[]);
      setAccounts(fetchedAccounts as UserAccount[]);
      setLoading(false);
    };

    if (user?.role === 'admin') {
      loadAdminData();
    }
  }, [user]);

  if (user?.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Shield size={64} className="text-red-500 mb-4 opacity-50" />
        <h2 className="text-xl font-black uppercase text-foreground">Access Denied</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">Level 4 Clearance Required</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-foreground flex items-center gap-3">
            <Shield className="text-primary" size={24} />
            Global Admin Console
          </h1>
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mt-1">
            Real-time User Synchronization Monitoring
          </p>
        </div>
        <div className="flex items-center gap-4 bg-muted/30 px-4 py-2 rounded-sm border border-border">
          <Users size={16} className="text-primary" />
          <div className="text-right">
            <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Total Recruits</p>
            <p className="text-sm font-black tabular-nums leading-none">{users.length}</p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Syncing via Satellite...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((u) => {
            const accountInfo = accounts.find(a => a.uid === u.uid);
            const joinedDate = u.joinedAt ? new Date(u.joinedAt).toLocaleDateString() : 'Unknown';
            const streak = u.dailySyncHistory ? Object.keys(u.dailySyncHistory).length : 0;

            return (
              <Card key={u.uid} className="bg-card border border-border rounded-sm hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between border-b border-border/50 pb-4">
                    <div>
                      <h3 className="text-sm font-black uppercase text-foreground tracking-widest">{u.displayName}</h3>
                      <p className="text-[9px] text-muted-foreground font-bold tracking-[0.1em] mt-1">
                        {accountInfo?.email || 'OFFLINE-GHOST'}
                      </p>
                    </div>
                    {u.role === 'admin' ? (
                      <Badge variant="default" className="bg-primary text-white text-[8px] tracking-widest uppercase rounded-sm border-0">Admin</Badge>
                    ) : (
                      <Badge variant="outline" className="text-[8px] tracking-widest uppercase rounded-sm border-muted-foreground/30 text-muted-foreground">Recruit</Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1 mb-1">
                        <Flame size={10} /> Streak
                      </p>
                      <p className="text-xs font-black tabular-nums">{streak} Days</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1 mb-1">
                        <Zap size={10} /> XP
                      </p>
                      <p className="text-xs font-black tabular-nums">{Math.floor(u.xp)}</p>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-3 rounded-sm border border-border/50 space-y-2 mt-auto">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Enrolled Sectors</p>
                    <div className="flex gap-2 flex-wrap">
                      {u.enrolledLevels && u.enrolledLevels.length > 0 ? (
                        u.enrolledLevels.map(lvl => (
                          <span key={lvl} className="text-[9px] bg-background border border-border px-1.5 py-0.5 rounded-sm font-black text-foreground">N{lvl}</span>
                        ))
                      ) : (
                        <span className="text-[9px] text-muted-foreground/50 font-bold uppercase tracking-widest">None</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between border-t border-border/50 pt-2 mt-2">
                       <p className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1">
                          <Clock size={10} /> Joined
                        </p>
                        <p className="text-[9px] font-bold text-foreground">{joinedDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          {users.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-border rounded-sm">
              <Users size={32} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">No Synced Profiles</p>
              <p className="text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-widest font-bold">Awaiting uplink from field operatives.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
