import React from "react";
import "tailwindcss/tailwind.css";
import { Card } from "./Card";
import { orders } from "../data";

export interface Order {
  customer: string;
  avatar: string;
  orderNo: number;
  amount: string;
  status: "Delivered" | "Cancelled" | "Pending";
}

const statusStyles: Record<Order["status"], string> = {
  Delivered: "bg-[#125344] text-[#31987E]",
  Cancelled: "bg-[#623338] text-[#B95A63]",
  Pending: "bg-[#623338] text-[#B95A63]",
};

const RecentOrders: React.FC = () => {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-bold">Recent Orders</h2>
      <div className="h-[200px] overflow-y-auto">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Order No.</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderNo} className="border-t border-gray-700">
                <td className="flex items-center px-4 py-2">
                  <img
                    src={order.avatar}
                    alt={order.customer}
                    className="mr-2 hidden h-10 w-10 rounded-full object-cover sm:block"
                    loading="lazy"
                  />
                  {order.customer}
                </td>
                <td className="px-4 py-2">{order.orderNo}</td>
                <td className="px-4 py-2">{order.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecentOrders;
