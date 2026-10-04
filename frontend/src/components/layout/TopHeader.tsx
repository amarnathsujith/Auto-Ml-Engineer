import React from 'react';
import { Layers, Sun, Moon, Bell, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TopHeader: React.FC = () => {
  const { activeTab, isDarkMode, toggleDarkMode, currentUser, currentProject } = useApp();

  const tabLabels: Record<string, string> = {
    dashboard: 'System Overview & Quick Stats',
    datasets: 'Dataset Ingestion & Data Quality',
    experiments: 'Model Training & Hyperparameter Tuning',
    evaluation: 'Evaluation Leaderboard & Explainability',
    deployment: 'REST Endpoints & Live Prediction Sandbox',
    settings: 'Workspace Settings & Team Collaboration',
  };

  return (
    <header className="h-16 w-full border-b border-purple-900/40 dark:border-purple-900/50 bg-purple-950/80 dark:bg-[#13031f]/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20 text-white">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center gap-2.5">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-900/60 px-2.5 py-1 rounded-lg border border-purple-700/50">
          AutoML
        </span>
        <span className="text-purple-400/50">/</span>
        <h1 className="text-sm sm:text-base font-bold text-white capitalize tracking-wide">
          {tabLabels[activeTab] || activeTab}
        </h1>
      </div>

      {/* Right: Actions, Environment, Theme Toggle & User */}
      <div className="flex items-center gap-3">
        {/* Project Selector */}
        <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs">
          <Layers className="h-3.5 w-3.5 text-purple-400" />
          <span className="font-semibold text-purple-300/70">Project:</span>
          <span className="font-mono text-white font-bold">
            {currentProject.name}
          </span>
          <ChevronDown className="h-3 w-3 text-purple-400/70" />
        </div>

        {/* Dark / Light Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-xl border border-white/10 bg-white/5 text-purple-200 hover:text-white hover:bg-white/10 transition"
        >
          {isDarkMode ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-purple-300" />}
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="p-2 rounded-xl border border-white/10 bg-white/5 text-purple-200 hover:text-white hover:bg-white/10 transition relative"
        >
          <Bell className="h-4 w-4 text-purple-300" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500 animate-ping" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-purple-900/50">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-purple-900/50 border border-purple-400/30">
            {currentUser.avatarInitials}
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-semibold text-white leading-tight">
              {currentUser.name}
            </span>
            <span className="text-[10px] text-purple-300/70 font-medium">
              {currentUser.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
