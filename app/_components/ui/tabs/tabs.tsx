// take all control and be opinionated

import cn from "@/app/_utils/cn";
import { ITabOption, ITabsProps, ITabsState } from "./type";
import { roboto } from "@/app/_assets/fonts";
import { useEffect, useMemo, useState } from "react";
import { useInitTabsStore } from "./store";
import { StoreApi, UseBoundStore } from "zustand";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const TabLabel = ({
  tab,
  useTabsStore,
}: {
  tab: ITabOption;
  useTabsStore: UseBoundStore<StoreApi<ITabsState>>;
}) => {
  const { activeTab, setActiveTab } = useTabsStore();

  // TODO: background movement animation
  return (
    <div
      key={tab.label}
      className={cn(
        "p-5 px-8 cursor-pointer border-b-[2px] border-transparent",
        roboto.className,
        {
          "border-b-x-green": activeTab === tab.label
        }
      )}
      onClick={() => setActiveTab(tab.label)}
    >
      <p
        className={cn("text-md font-[600] tracking-wide", {
          "opacity-50": activeTab !== tab.label,
        })}
      >
        {tab.label}
      </p>
    </div>
  );
};

export default function Tabs({ tabs, activeTabLabel, onNavigate }: ITabsProps) {
  const useTabsStore = useInitTabsStore({
    activeTab: activeTabLabel || tabs[0].label,
  });
  const { activeTab } = useTabsStore();

  return (
    <TabsPrimitive.Root
      className="flex flex-col items-center gap-4"
      defaultValue={activeTab}
    >
      <TabsPrimitive.List className="flex">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger value={tab.label} key={tab.label}>
            <TabLabel tab={tab} key={tab.label} useTabsStore={useTabsStore} />
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          value={tab.label}
          key={tab.label}
          className="w-full"
        >
          {tab.component}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
