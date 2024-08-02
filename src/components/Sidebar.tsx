import { IoMdLogOut } from "react-icons/io";
import Logo from "./Logo";
import { AiFillHome } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

const SidebarItems = [
  {
    icon: <AiFillHome className="size-6 text-lightBlue hover:text-lightBlue" />,
    title: "Home",
  },
  {
    icon: (
      <RiBarChartBoxLine className="size-6 text-white hover:text-lightBlue" />
    ),
    title: "Analytics",
  },
  {
    icon: (
      <LuClipboardCheck className="size-6 text-white hover:text-lightBlue" />
    ),
    title: "Tasks",
  },
  {
    icon: <CiWallet className="size-6 text-white hover:text-lightBlue" />,
    title: "Wallet",
  },
  {
    icon: (
      <IoBagCheckOutline className="size-6 text-white hover:text-lightBlue" />
    ),
    title: "Orders",
  },
];

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`fixed z-20 h-screen w-20 flex-col justify-between bg-darkGray py-5 transition-all lg:flex lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
    >
      <div className="flex h-[93.5vh] flex-col space-y-7">
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-6 w-6 place-content-center rounded-md border transition-all hover:border-none hover:bg-red-500 lg:hidden"
          >
            <LiaTimesSolid className="size-4" />
          </button>
          <span className="hidden lg:block">
            <Logo />
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          {SidebarItems.map(({ icon, title }) => (
            <div
              key={title}
              className="grid h-10 w-full cursor-pointer place-content-center border-lightBlue transition-all first:border-l-4 hover:border-l-4 hover:!text-lightBlue"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
      <button className="w-full self-center text-center">
        <IoMdLogOut className="mx-auto grid size-5" />
      </button>
    </div>
  );
};

export default Sidebar;
