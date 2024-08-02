import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit w-full rounded-md bg-darkGray p-4 shadow-lg shadow-neutral-900">
      {children}
    </div>
  );
};
