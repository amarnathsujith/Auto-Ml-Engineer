import React from 'react';
import { LayoutDashboard, Code2 } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-purple-900/40 bg-purple-950/60 dark:bg-[#13031f]/60 backdrop-blur-md p-6 shadow-xl text-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-800/50 text-purple-300 flex items-center justify-center border border-purple-600/30">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-outfit text-white">
              Dashboard Overview & Quick Stats
            </h2>
            <p className="text-xs text-purple-200/70">
              Workspace analytics, recent training runs, cluster resource utilization, and model leaderboards.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center gap-2 text-xs text-purple-300/60 font-mono">
          <Code2 className="h-3.5 w-3.5 text-purple-400" />
          <span>Assigned to: Developer A · Code location: </span>
          <code className="text-purple-200 font-bold bg-purple-900/60 px-2 py-0.5 rounded border border-purple-700/40">
            src/pages/DashboardPage.tsx
          </code>
        </div>
      </div>

      {/* Quick KPI stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Active Datasets', val: '4' },
          { label: 'Trained Models', val: '18' },
          { label: 'Best F1 Score', val: '0.942' },
          { label: 'Active Endpoints', val: '2 Live' },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border border-purple-900/40 bg-purple-950/40 dark:bg-[#13031f]/40 backdrop-blur-md hover:border-purple-500/40 transition"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300/70">
              {stat.label}
            </span>
            <p className="text-2xl font-bold font-mono text-white mt-1">
              {stat.val}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
