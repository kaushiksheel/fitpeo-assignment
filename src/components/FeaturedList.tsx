import { BiDish } from "react-icons/bi";

import { PiHamburger } from "react-icons/pi";
import { SlTarget } from "react-icons/sl";
import { Card } from "./Card";
import { IconCard } from "./IconCard";

const featuredList = [
  {
    title: "Goals",
    icon: <SlTarget className="size-6 rounded text-[#DC713A]" />,
    bgColor: "#5F3336",
  },
  {
    title: "Popular Dishes",
    icon: <PiHamburger className="size-6 rounded text-[#7686DD]" />,
    bgColor: "#2A3466",
  },
  {
    title: "Menus",
    icon: <BiDish className="size-6 rounded text-[#458CB9]" />,
    bgColor: "#1F4B60",
  },
  {
    title: "Goals",
    icon: <SlTarget className="size-6 rounded text-[#DC713A]" />,
    bgColor: "#5F3336",
  },
];

const FeaturedList = () => {
  return (
    <Card>
      <div className="flex flex-col space-y-2 py-2">
        {featuredList.map(({ bgColor, icon, title }) => (
          <IconCard key={title} title={title} icon={icon} bgColor={bgColor} />
        ))}
      </div>
    </Card>
  );
};

export default FeaturedList;
