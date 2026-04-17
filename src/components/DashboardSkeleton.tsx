import React from 'react';
import { motion } from 'motion/react';

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto py-4 pb-32 px-4 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="h-10 w-64 bg-muted rounded-sm" />
          <div className="h-3 w-48 bg-muted/60 rounded-sm" />
        </div>
        <div className="h-16 w-40 bg-muted rounded-sm" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sync Status Skeleton */}
        <div className="lg:col-span-1 h-[400px] bg-muted/40 rounded-sm p-8 flex flex-col items-center justify-center gap-6">
          <div className="h-4 w-32 bg-muted rounded-sm" />
          <div className="h-12 w-24 bg-muted rounded-sm" />
          <div className="w-full h-2 bg-muted rounded-full" />
          <div className="grid grid-cols-5 gap-2 w-full mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-muted/60 rounded-sm" />
            ))}
          </div>
        </div>

        {/* Charts Skeleton */}
        <div className="lg:col-span-2 h-[400px] bg-muted/20 border border-border/50 rounded-sm" />
      </div>

      {/* Action Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-32 bg-muted/30 rounded-sm" />
        <div className="h-32 bg-muted/30 rounded-sm" />
      </div>

      {/* Tracks Skeleton */}
      <div className="space-y-6 pt-4">
        <div className="h-6 w-48 bg-muted rounded-sm" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-64 bg-muted/40 rounded-sm p-6 space-y-4">
              <div className="h-12 w-12 bg-muted rounded-sm" />
              <div className="h-4 w-20 bg-muted" />
              <div className="space-y-2">
                 <div className="h-2 w-full bg-muted/60" />
                 <div className="h-2 w-2/3 bg-muted/60" />
              </div>
              <div className="h-10 w-full bg-muted mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
