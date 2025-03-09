import FeudalTimes from "./feudal-times/page";
import FirstWorldWar from "./first-world-wars/page";
import SecondWorldWar from "./second-world-wars/page";
import ModernDay from "./modern-days/page";

export const timelineItems = [
  {
    title: "Feudal Times",
    component: FeudalTimes,
    description: "Explore the rise and fall of ancient empires.",
    link: "/timeline/feudal-times",
    
  },
  {
    title: "First World War",
    component: FirstWorldWar,
    description: "Learn about the first significant global conflicts.",
    link: "/timeline/first-world-wars",
    
  },
  {
    title: "Second World War",
    component: SecondWorldWar,
    description: "Learn about the second significant global conflicts.",
    link: "/timeline/second-world-wars",
    
  },
  {
    title: "Modern Days",
    component: ModernDay,
    description: "Dive into the events that shaped the modern world.",
    link: "/timeline/modern-days",
    
  },
];
