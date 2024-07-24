import { useMemo } from "react";
import { create } from "zustand";
import { ITabsState } from "./type";

export function useInitTabsStore({ activeTab }: Pick<ITabsState, "activeTab">) {
  const useTabsStore = useMemo(
    () =>
      create<ITabsState>((set) => ({
        activeTab,
        setActiveTab: (label) => set({ activeTab: label }),
      })),
    []
  );

  return useTabsStore;
}
