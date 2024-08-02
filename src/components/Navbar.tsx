import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";

const actions = [
  {
    icon: MdOutlineEmail,
    color: "bg-lightGray",
  },
  {
    icon: IoSettingsOutline,
    color: "bg-lightGray",
  },
  {
    icon: FaRegBell,
    color: "bg-lightGray",
  },
];

const Navbar = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <header className="sticky top-0 z-10 h-fit w-full bg-darkGray">
      <nav className="flex w-full items-center justify-between overflow-y-auto bg-darkGray p-2 px-5 py-4">
        <SearchBox />

        <span
          onClick={() => setIsOpen(true)}
          className="border-lightGray grid h-9 w-9 place-content-center rounded-md border lg:hidden"
        >
          <GiHamburgerMenu className="block size-5 cursor-pointer text-white" />
        </span>
        <div className="flex items-center space-x-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <span
                key={index}
                className={`hover:bg-lightGray/45 relative grid size-10 place-content-center rounded-full transition-all ${action.color}`}
              >
                <Icon className="block size-5 cursor-pointer text-white" />
                {index === 2 && (
                  <span className="absolute right-2.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#7094fd]" />
                )}
              </span>
            );
          })}

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtaWxpbmclMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="a smiling model"
            className="size-10 cursor-pointer rounded-full object-cover ring-[#7094fd] transition-all hover:ring-2"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
