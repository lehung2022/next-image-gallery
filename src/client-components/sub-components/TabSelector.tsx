"use client";
import { useState } from "react";
import TitleCard from "@/client-components/sub-components/TitleCard";

type Tab = {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
};

export default function TabSelector({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-white font-bold ${
              activeTab === tab.id
                ? "bg-gray-800"
                : "bg-gray-600 hover:bg-gray-700"
            } transition-all duration-300 w-full sm:w-auto`}
          >
            {tab.title.split(" ")[0]}
          </button>
        ))}
      </div>
      {tabs.map((tab) =>
        activeTab === tab.id ? (
          <TitleCard
            key={tab.id}
            title={tab.title}
            href={tab.href}
            imageSrc={tab.imageSrc}
          />
        ) : null
      )}
    </>
  );
}