import TabSelector from "@/client-components/sub-components/TabSelector";

export default function Home() {
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
      <TabSelector tabs={tabs} />
    </div>
  );
}
