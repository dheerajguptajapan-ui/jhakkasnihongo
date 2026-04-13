import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import { getAllItems } from '../lib/curriculum';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';

export const ItemsView: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setItems(getAllItems());
    setLoading(false);
  }, []);

  const filtered = items.filter(item => 
    item.character.includes(search) || 
    item.meanings.some(m => m.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) return <div className="p-8 text-center">Loading items...</div>;

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 outline-none transition-colors"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map(item => (
          <Card key={item.id} className="hover:border-sky-300 transition-colors cursor-default">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
              <div className={`text-4xl font-bold ${
                item.type === 'radical' ? 'text-sky-600' : 
                item.type === 'kanji' ? 'text-rose-600' : 'text-purple-600'
              }`}>
                {item.character}
              </div>
              <div className="text-xs font-medium text-slate-500 line-clamp-1">
                {item.meanings[0]}
              </div>
              <Badge variant="outline" className="text-[10px] uppercase">
                {item.type}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
