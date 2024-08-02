import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "./Card";
import { MdArrowDropUp } from "react-icons/md";
import NumberTicker from "./NumberTicker";

const NetProfit = () => {
  const percentage = 70;
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex h-full flex-col gap-y-[22px]">
          <h2 className="font-medium">Net Profit</h2>
          <h3 className="text-3xl font-bold">
            $
            <NumberTicker value={6759.25} direction="up" />
          </h3>
          <div className="flex items-center space-x-2 text-[#70E059]">
            <MdArrowDropUp className="size-5" />
            3%
          </div>
        </div>
        <div className="relative h-32 w-32">
          <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            strokeWidth={13}
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center rounded-full">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <span className="text-2xl font-bold">70%</span>
              <span className="text-center text-[10px]">
                Goal <br />
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NetProfit;
