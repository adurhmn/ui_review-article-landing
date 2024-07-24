// take all control and be opinionated

import cn from "@/app/_utils/cn";
import { ITabOption, ITabsProps, ITabsState } from "./type";
import { roboto } from "@/app/_assets/fonts";
import { useEffect, useMemo, useState } from "react";
import { useInitTabsStore } from "./store";
import { StoreApi, UseBoundStore } from "zustand";

const TabLabel = ({
  tab,
  useTabsStore,
}: {
  tab: ITabOption;
  useTabsStore: UseBoundStore<StoreApi<ITabsState>>;
}) => {
  const { activeTab, setActiveTab } = useTabsStore();

  // background movement animation
  return (
    <li
      key={tab.label}
      className={cn("p-5 px-8 cursor-pointer", roboto.className)}
      onClick={() => setActiveTab(tab.label)}
    >
      <p
        className={cn("text-md font-[600] tracking-wide", {
          "opacity-50": activeTab !== tab.label,
        })}
      >
        {tab.label}
      </p>
    </li>
  );
};

export default function Tabs({ tabs, activeTabLabel, onNavigate }: ITabsProps) {
  console.log({ tabs });
  const useTabsStore = useInitTabsStore({
    activeTab: activeTabLabel || tabs[0].label,
  });
  const { activeTab, setActiveTab } = useTabsStore();

  console.log({ activeTab, setActiveTab });

  const content = useMemo(
    () => tabs.filter((t) => t.label === activeTab)[0].component,
    [tabs, activeTab]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <nav>
        <ul className="flex">
          {tabs.map((tab) => (
            <TabLabel tab={tab} key={tab.label} useTabsStore={useTabsStore} />
          ))}
        </ul>
      </nav>
      <div className="w-full">{content}</div>
    </div>
  );
}
