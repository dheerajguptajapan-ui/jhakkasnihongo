import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { UserProfile } from '@/types';

interface ProgressChartsProps {
  profile: UserProfile | null;
  srsDistribution: {
    apprentice: number;
    guru: number;
    master: number;
    burned: number;
  };
  isDark?: boolean;
}

export const ProgressCharts: React.FC<ProgressChartsProps> = ({ profile, srsDistribution, isDark = false }) => {
  if (!profile) return null;

  // Process Daily History for Line Chart
  const historyData = Object.entries(profile.dailySyncHistory || {})
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, stats]) => ({
      name: new Date(date).toLocaleDateString(undefined, { weekday: 'short' }),
      xp: (stats.lessons * 20) + (stats.reviews * 5),
      items: stats.lessons + stats.reviews
    }))
    .slice(-7); // Last 7 days

  // Sample data if history is empty
  const displayData = historyData.length > 0 ? historyData : [
    { name: 'Mon', xp: 400, items: 20 },
    { name: 'Tue', xp: 300, items: 15 },
    { name: 'Wed', xp: 600, items: 30 },
    { name: 'Thu', xp: 800, items: 40 },
    { name: 'Fri', xp: 500, items: 25 },
    { name: 'Sat', xp: 900, items: 45 },
    { name: 'Sun', xp: 1200, items: 60 },
  ];

  // Actual SRS distribution data
  const srsData = [
    { name: 'Apprentice', value: srsDistribution.apprentice || 1, color: '#DA291C' },
    { name: 'Guru', value: srsDistribution.guru || 0, color: '#0F172A' },
    { name: 'Master', value: srsDistribution.master || 0, color: '#64748B' },
    { name: 'Burned', value: srsDistribution.burned || 0, color: '#A1A1AA' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* XP Trend - Large Chart */}
      <div className={`lg:col-span-2 ${isDark ? 'bg-black border-white/10' : 'bg-card border-border'} border rounded-sm p-6 shadow-sm transition-colors`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-xs font-black uppercase tracking-[0.3em] ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>Tactical Convergence (XP)</h3>
          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-sm font-bold tracking-widest uppercase">Live Segment</span>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={displayData}>
              <defs>
                <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DA291C" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#DA291C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.1)" : "var(--border)"} opacity={0.3} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 9, fontWeight: 900, fill: isDark ? 'rgba(255,255,255,0.4)' : 'var(--muted-foreground)' }} 
                dy={10}
              />
              <YAxis hide domain={['auto', 'auto']} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '2px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="xp" 
                stroke="#DA291C" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorXp)" 
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SRS Distribution - Side Chart */}
      <div className="bg-card border border-border rounded-sm p-6 shadow-sm">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-6">Synaptic Mastery</h3>
        <div className="h-[180px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={srsData}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {srsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-1 mt-6">
          {srsData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
