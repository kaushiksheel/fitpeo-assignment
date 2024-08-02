import { BsFillCartPlusFill } from "react-icons/bs";
import { ImCoinDollar } from "react-icons/im";
import { LuShoppingBag } from "react-icons/lu";
import { TbShoppingBagX } from "react-icons/tb";
import TotalOrderCard from "./TotalOrderCard";

const cardData = [
  {
    title: "Total Orders",
    count: 3,
    type: "profit",
    typeCount: "75",
    iconBgColor: "#2D326A",
    icon: <BsFillCartPlusFill className="size-6 text-[#4461FB]" />,
  },
  {
    title: "Total Delivered",
    count: 3,
    type: "loss",
    typeCount: "70",
    iconBgColor: "#185245",
    icon: <LuShoppingBag className="size-6 text-[#00C78C]" />,
  },
  {
    title: "Total Cancelled",
    count: 3,
    type: "profit",
    typeCount: "6",
    iconBgColor: "#613337",
    icon: <TbShoppingBagX className="size-6 text-[#F45C5B]" />,
  },
  {
    title: "Total Revenue",
    count: 3,
    type: "loss",
    typeCount: "$12k",
    iconBgColor: "#5B2A4A",
    icon: <ImCoinDollar className="size-6 text-[#E541A0]" />,
  },
];
const OrderRecords = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((card) => (
        <TotalOrderCard
          key={card.title}
          title={card.title}
          count={card.count}
          type={card.type as "profit" | "loss"}
          typeCount={card.typeCount}
          iconBgColor={card.iconBgColor}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default OrderRecords;
