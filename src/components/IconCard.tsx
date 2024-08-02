import { IoIosArrowForward } from "react-icons/io";

interface IconCardProps {
  icon?: React.ReactNode;
  title?: string;
  bgColor?: string;
}

export const IconCard = ({ icon, title, bgColor }: IconCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div
          style={{ backgroundColor: bgColor }}
          className="grid h-16 w-16 place-content-center rounded-full"
        >
          {icon}
        </div>
        <p>{title}</p>
      </div>
      <button className="grid h-6 w-6 place-content-center rounded-full bg-lighgGray">
        <IoIosArrowForward className="size-4 text-white" />
      </button>
    </div>
  );
};
