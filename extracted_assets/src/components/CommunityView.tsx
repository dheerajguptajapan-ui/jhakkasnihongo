import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { UserProfile } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

export const CommunityView: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(collection(db, 'users'), orderBy('xp', 'desc'), limit(10));
      const snap = await getDocs(q);
      setLeaderboard(snap.docs.map(doc => doc.data() as UserProfile));
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading leaderboard...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Global Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {leaderboard.map((user, index) => (
              <div key={user.uid} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 text-center font-bold text-slate-400">
                    {index === 0 ? <Medal className="w-6 h-6 text-yellow-500 mx-auto" /> :
                     index === 1 ? <Medal className="w-6 h-6 text-slate-400 mx-auto" /> :
                     index === 2 ? <Medal className="w-6 h-6 text-amber-600 mx-auto" /> :
                     index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{user.displayName}</p>
                    <p className="text-xs text-slate-500">Level {user.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-sky-600">{user.xp.toLocaleString()} XP</p>
                  <Award className="w-4 h-4 text-sky-200 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
