import { IoIosArrowForward } from "react-icons/io";

interface IconCardProps {
  icon?: React.ReactNode;
  title?: string;
  bgColor?: string;
}

export const IconCard = ({ icon, title, bgColor }: IconCardProps) => {
  return (
    <div className="group flex cursor-pointer items-center justify-between">
      <div className="flex items-center space-x-4">
        <div
          style={{ backgroundColor: bgColor }}
          className="grid h-16 w-16 place-content-center rounded-full"
        >
          {icon}
        </div>
        <p>{title}</p>
      </div>
      <button className="group-transform grid h-6 w-6 place-content-center rounded-full bg-lighgGray transition-transform duration-300 ease-in-out group-hover:translate-x-1">
        <IoIosArrowForward className="size-4 text-white" />
      </button>
    </div>
  );
};
