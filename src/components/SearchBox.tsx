import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className="hidden h-10 items-center space-x-2 overflow-hidden rounded-md border-2 border-[#383941] bg-[#292B2F] px-2 lg:flex">
      <CiSearch className="size-5 text-white" />
      <input
        type="text"
        placeholder="Search"
        className="h-full w-[350px] flex-1 bg-transparent text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
