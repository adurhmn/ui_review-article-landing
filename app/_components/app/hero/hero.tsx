"use client";
import { useState } from "react";
import { Tabs } from "../../ui/tabs";
import { ITabOption } from "../../ui/tabs";
import Home from "./home";

export default function Hero() {
  const [tabs] = useState<ITabOption[]>([
    {
      component: <Home />,
      label: "Home",
    },
    { component: <h1>Bestseller</h1>, label: "Bestseller" },
    { component: <h1>Category</h1>, label: "Category" },
    { component: <h1>Community</h1>, label: "Community" },
    { component: <h1>Blog</h1>, label: "Blog" },
  ]);

  return (
    <section className="mt-5 mx-auto w-full max-w-[1200px]">
      <Tabs
        tabs={tabs}
        activeTabLabel="Home"
        onNavigate={console.log}
        contentBoxClass={"h-[500px]"}
      />
    </section>
  );
}
