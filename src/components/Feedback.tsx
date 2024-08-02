import Rating from "./Rating";

export const Feedback = ({
  username,
  userImg,
  desc,
}: {
  username: string;
  userImg: string;
  desc: string;
  rateCount: number;
}) => {
  return (
    <div className="flex flex-col space-y-2 py-3">
      <div className="flex items-center space-x-2">
        <img
          src={userImg}
          alt={username}
          className="size-10 cursor-pointer rounded-full object-cover"
        />
        <p>{username}</p>
      </div>
      <Rating />
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
};
