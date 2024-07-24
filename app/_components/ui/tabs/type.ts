import { ReactNode } from "react";

export interface ITabOption {
  label: string;
  component: ReactNode;
}

export interface ITabsProps {
  tabs: ITabOption[];
  activeTabLabel?: string;
  onNavigate?: (label: string) => any;
}

export interface ITabsState {
  activeTab: string;
  setActiveTab: (label: string) => void;
}
