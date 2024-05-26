import React from "react";

import { sidnavRoutes } from "@/routes";
import { Sidenav } from "../common/sidenav";

type Props = { children: React.ReactElement };

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidenav routes={sidnavRoutes} />

      <div className="flex-1 bg-slate-500">{children}</div>
    </div>
  );
};
