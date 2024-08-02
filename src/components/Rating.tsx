import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaStar className="size-4 text-yellow-500" />
      <FaStar className="size-4 text-yellow-500" />
      <FaStar className="size-4 text-yellow-500" />
      <FaStar className="size-4 text-yellow-500" />
      <FaStar className="size-4 text-yellow-500" />
    </div>
  );
};

export default Rating;
