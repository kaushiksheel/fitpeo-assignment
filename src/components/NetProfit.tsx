import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "./Card";
import { MdArrowDropUp } from "react-icons/md";

const NetProfit = () => {
  const percentage = 70;
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex h-full flex-col gap-y-[22px]">
          <h2>Net Profit</h2>
          <h3 className="text-3xl font-semibold">$6759.25</h3>
          <div className="flex items-center space-x-2 text-[#70E059]">
            <MdArrowDropUp className="size-5" />
            3%
          </div>
        </div>
        <div className="h-28 w-28">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={13}
          />
        </div>
      </div>
    </Card>
  );
};

export default NetProfit;