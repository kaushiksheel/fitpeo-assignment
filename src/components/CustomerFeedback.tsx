import { feedbacks } from "../data";
import { Card } from "./Card";

import { Feedback } from "./Feedback";

const CustomerFeedback = () => {
  return (
    <Card>
      <div>
        <h3 className="text-xl font-semibold text-white">
          Customer's Feedback
        </h3>
        <div className="my-3.5 flex h-[180px] flex-col gap-2 divide-y-[1px] divide-lighgGray overflow-y-auto">
          {feedbacks.map(({ desc, rateCount, userImg, username }) => (
            <Feedback
              key={username}
              userImg={userImg}
              username={username}
              desc={desc}
              rateCount={rateCount}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CustomerFeedback;
