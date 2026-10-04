import React from 'react';
import { BarChart3, Code2 } from 'lucide-react';

export const EvaluationPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-purple-900/40 bg-purple-950/60 dark:bg-[#13031f]/60 backdrop-blur-md p-6 shadow-xl text-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-800/50 text-purple-300 flex items-center justify-center border border-purple-600/30">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-outfit text-white">
              Model Leaderboard, Metrics & Explainability
            </h2>
            <p className="text-xs text-purple-200/70">
              Cross-validation leaderboard, confusion matrices, ROC/PR curves, and SHAP feature importance charts.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center gap-2 text-xs text-purple-300/60 font-mono">
          <Code2 className="h-3.5 w-3.5 text-purple-400" />
          <span>Assigned to: Developer D · Code location: </span>
          <code className="text-purple-200 font-bold bg-purple-900/60 px-2 py-0.5 rounded border border-purple-700/40">
            src/pages/EvaluationPage.tsx
          </code>
        </div>
      </div>
    </div>
  );
};
