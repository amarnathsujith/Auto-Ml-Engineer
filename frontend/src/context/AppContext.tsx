import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavTabId, UserProfile, ProjectContext } from '../types/navigation';

interface AppContextType {
  activeTab: NavTabId;
  setActiveTab: (tab: NavTabId) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentUser: UserProfile;
  currentProject: ProjectContext;
  setCurrentProject: (project: ProjectContext) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sync tab with URL hash (defaults to 'dashboard')
  const getTabFromHash = (): NavTabId => {
    const hash = window.location.hash.replace('#', '') as NavTabId;
    const valid: NavTabId[] = [
      'dashboard',
      'datasets',
      'experiments',
      'evaluation',
      'deployment',
      'settings',
    ];
    return valid.includes(hash) ? hash : 'dashboard';
  };

  const [activeTab, setActiveTabState] = useState<NavTabId>(getTabFromHash);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser] = useState<UserProfile>({
    name: 'Sarah Connor',
    email: 's.connor@automl.ai',
    role: 'Principal ML Engineer',
    avatarInitials: 'SC',
  });

  const [currentProject, setCurrentProject] = useState<ProjectContext>({
    id: 'prj_01',
    name: 'Customer-Churn-XGBoost',
    environment: 'Development',
  });

  const setActiveTab = (tab: NavTabId) => {
    setActiveTabState(tab);
    window.location.hash = tab;
  };

  useEffect(() => {
    const handleHash = () => setActiveTabState(getTabFromHash());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const logout = () => setIsAuthenticated(false);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isSidebarCollapsed,
        toggleSidebar,
        isDarkMode,
        toggleDarkMode,
        currentUser,
        currentProject,
        setCurrentProject,
        isAuthenticated,
        setIsAuthenticated,
        logout,
      }}
    >
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
