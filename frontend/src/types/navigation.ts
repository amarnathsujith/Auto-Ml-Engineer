import { LucideIcon } from 'lucide-react';

export type NavTabId =
  | 'dashboard'
  | 'datasets'
  | 'experiments'
  | 'evaluation'
  | 'deployment'
  | 'settings';

export interface NavItem {
  id: NavTabId;
  label: string;
  icon: LucideIcon;
  badge?: string;
  category: 'workspace' | 'management';
  description: string;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
}

export interface ProjectContext {
  id: string;
  name: string;
  environment: 'Production' | 'Staging' | 'Development';
}
