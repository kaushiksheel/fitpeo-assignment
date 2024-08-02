import { MdArrowDropDown } from "react-icons/md";
import { Card } from "./Card";
import BarGraph from "./BarGraph";

const Activity = () => {
  return (
    <Card>
      <header className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Activity</h3>
        <button className="flex items-center whitespace-nowrap rounded-full border border-[#383941] bg-lighgGray px-4 py-2 text-sm text-white">
          Weekly
          <span>
            <MdArrowDropDown className="size-5" />
          </span>
        </button>
      </header>
      <div className="relative mt-5 h-[232px]">
        <BarGraph />
      </div>
    </Card>
  );
};

export default Activity;
