import Activity from "./Activity";
import CustomerFeedback from "./CustomerFeedback";
import FeaturedList from "./FeaturedList";
import NetProfit from "./NetProfit";
import OrderRecords from "./OrderRecords";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-3 h-full w-full gap-7 lg:grid lg:grid-cols-6">
        <div className="flex w-full flex-col space-y-7 lg:col-span-4">
          <OrderRecords />

          <Activity />

          <RecentOrders />
        </div>
        <div className="flex w-full flex-col gap-7 lg:col-span-2">
          <NetProfit />
          <FeaturedList />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
