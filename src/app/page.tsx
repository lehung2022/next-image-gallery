"use client";
import { useState } from "react";
import TitleCard from "@/client-components/sub-components/TitleCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("generals");

  const tabs = [
    {
      id: "generals",
      title: "Legendary Generals",
      href: "/generals",
      imageSrc: "/vietnamese_generals/lam_son_vs_minh_02.jpg",
    },
    {
      id: "countries",
      title: "Ancient Countries",
      href: "/countries",
      imageSrc: "/other_images/dong-son-drum-for-sale-10.jpg",
    },
    {
      id: "cities",
      title: "Modern Cities",
      href: "/cities",
      imageSrc: "/other_images/financial-tower-sai-gon.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 sm:p-8">
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
    </div>
  );
}
