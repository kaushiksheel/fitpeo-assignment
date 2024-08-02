import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import SearchBox from "./SearchBox";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <button className="bg-lightGray grid size-10 place-content-center rounded-full">
            <MdOutlineEmail className="size-5 text-white" />
          </button>
          <button className="bg-lightGray grid size-10 place-content-center rounded-full">
            <IoSettingsOutline className="size-5 text-white" />
          </button>
          <button className="bg-lightGray grid size-10 place-content-center rounded-full">
            <FaRegBell className="size-5 text-white" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtaWxpbmclMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="a smiling model"
            className="size-10 cursor-pointer rounded-full object-cover"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
