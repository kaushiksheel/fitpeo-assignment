import React from "react";
import { Card } from "./Card";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import NumberTicker from "./NumberTicker";

interface ITotalOrderCardProps {
  title: string;
  count: number;
  type: "profit" | "loss";
  typeCount: number;
  icon: React.ReactNode;
  iconBgColor: string;
  isRevenue?: boolean;
}
const TotalOrderCard = ({
  title,
  count,
  type,
  icon,
  typeCount,
  iconBgColor,
  isRevenue = false,
}: ITotalOrderCardProps) => {
  return (
    <Card>
      <div className="h-fit w-full">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col space-y-2">
            <div
              style={{ backgroundColor: iconBgColor }}
              className="grid h-11 w-11 place-content-center rounded-lg"
            >
              {icon}
            </div>

            <p className="text-sm">{title}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold text-white">
              {isRevenue ? (
                <>${<NumberTicker value={typeCount} direction="up" />}k</>
              ) : (
                <NumberTicker value={typeCount} direction="up" />
              )}
            </p>
            <div className="flex items-center space-x-0.5">
              {type == "profit" ? (
                <MdArrowDropUp className="size-5 text-emerald-500" />
              ) : (
                <MdArrowDropDown className="size-5 text-red-600" />
              )}

              <p
                className={`text-base ${
                  type == "profit" ? "text-emerald-500" : "text-red-600"
                }`}
              >
                {count}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalOrderCard;
