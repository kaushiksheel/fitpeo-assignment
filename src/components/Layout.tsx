import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden lg:ml-20">
        <Navbar setIsOpen={setIsOpen} />
        <main className="w-full overflow-y-auto px-5 lg:px-5 lg:py-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
