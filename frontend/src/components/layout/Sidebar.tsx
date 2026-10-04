import React from 'react';
import {
  LayoutDashboard,
  Database,
  FlaskConical,
  BarChart3,
  SendHorizontal,
  Settings,
  ChevronLeft,
  ChevronRight,
  Boxes,
  LogOut,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavItem } from '../../types/navigation';

const NAV_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    category: 'workspace',
    description: 'System overview & recent runs',
  },
  {
    id: 'datasets',
    label: 'Datasets',
    icon: Database,
    badge: '4 Active',
    category: 'workspace',
    description: 'Upload & data quality explorer',
  },
  {
    id: 'experiments',
    label: 'Experiments',
    icon: FlaskConical,
    category: 'workspace',
    description: 'Model training & configuration',
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    icon: BarChart3,
    category: 'workspace',
    description: 'Leaderboard, ROC & explainability',
  },
  {
    id: 'deployment',
    label: 'Deployment',
    icon: SendHorizontal,
    badge: 'Live',
    category: 'workspace',
    description: 'REST serving & inference sandbox',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    category: 'management',
    description: 'API keys, team roles & compute quotas',
  },
];

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, isSidebarCollapsed, toggleSidebar, logout } = useApp();

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col border-r border-purple-900/40 dark:border-purple-900/50 bg-purple-950/95 dark:bg-[#13031f]/95 text-white transition-all duration-200 z-30 select-none ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-purple-900/50">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-900/50">
            <Boxes className="h-5 w-5" />
          </div>
          {!isSidebarCollapsed && (
            <div className="flex flex-col truncate">
              <span className="font-extrabold font-outfit text-white tracking-tight text-base">
                AutoML <span className="text-purple-400">Studio</span>
              </span>
              <span className="text-[10px] text-purple-300/70 font-medium">
                AI Innovation Workspace
              </span>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden lg:flex p-1.5 rounded-lg text-purple-300/70 hover:text-white hover:bg-white/10 transition border border-white/5"
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Main Navigation Items */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          {!isSidebarCollapsed && (
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-purple-300/50">
              ML Lifecycle
            </div>
          )}
          <nav className="space-y-1">
            {NAV_ITEMS.filter((i) => i.category === 'workspace').map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={isSidebarCollapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-800/80 to-purple-900/90 text-white font-bold border border-purple-500/30 shadow-lg shadow-purple-950/50'
                      : 'text-purple-200/70 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 flex-shrink-0 ${
                      isActive
                        ? 'text-purple-300'
                        : 'text-purple-400/70'
                    }`}
                  />
                  {!isSidebarCollapsed && (
                    <div className="flex items-center justify-between w-full min-w-0">
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 bg-purple-900/80 text-purple-200 rounded-full border border-purple-700/50 font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          {!isSidebarCollapsed && (
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-purple-300/50">
              System
            </div>
          )}
          <nav className="space-y-1">
            {NAV_ITEMS.filter((i) => i.category === 'management').map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={isSidebarCollapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-800/80 to-purple-900/90 text-white font-bold border border-purple-500/30 shadow-lg shadow-purple-950/50'
                      : 'text-purple-200/70 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 flex-shrink-0 ${
                      isActive
                        ? 'text-purple-300'
                        : 'text-purple-400/70'
                    }`}
                  />
                  {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Cluster Hardware Status & Logout */}
      <div className="p-3 border-t border-purple-900/50 bg-purple-950/80 space-y-2">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            {!isSidebarCollapsed && (
              <span className="font-semibold text-purple-100 truncate">
                Cluster Ready
              </span>
            )}
          </div>
          {!isSidebarCollapsed && (
            <span className="text-[10px] text-purple-300/80 font-mono bg-purple-900/60 px-1.5 py-0.5 rounded border border-purple-700/50">
              4x A100
            </span>
          )}
        </div>

        <button
          onClick={logout}
          title={isSidebarCollapsed ? 'Exit Shell' : undefined}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-purple-300/70 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition"
        >
          <LogOut className="h-4 w-4 flex-shrink-0 text-red-400/80" />
          {!isSidebarCollapsed && <span>Exit Shell</span>}
        </button>
      </div>
    </aside>
  );
};
