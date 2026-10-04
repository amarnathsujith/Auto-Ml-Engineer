import React from 'react';
import { DashboardPage } from '../../pages/DashboardPage';
import { DatasetsPage } from '../../pages/DatasetsPage';
import { ExperimentsPage } from '../../pages/ExperimentsPage';
import { EvaluationPage } from '../../pages/EvaluationPage';
import { DeploymentPage } from '../../pages/DeploymentPage';
import { SettingsPage } from '../../pages/SettingsPage';
import { LandingPage } from '../auth/LandingPage';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { useApp } from '../../context/AppContext';

export const MainLayout: React.FC = () => {
  const { activeTab, isAuthenticated } = useApp();

  // If user is not authenticated, show landing / login page
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'datasets':
        return <DatasetsPage />;
      case 'experiments':
        return <ExperimentsPage />;
      case 'evaluation':
        return <EvaluationPage />;
      case 'deployment':
        return <DeploymentPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0219] dark:bg-[#0c0214] text-white flex transition-colors duration-150">
      {/* 1. Collapsible Sidebar */}
      <Sidebar />

      {/* 2. Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader />

        {/* 3. Section Container */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};
