import React, { ReactNode } from "react";

const Statelayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex min-h-screen">{children}</div>;
};

export default Statelayout;
