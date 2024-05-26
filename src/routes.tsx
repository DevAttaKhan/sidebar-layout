import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import { icons } from "lucide-react";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <h1>Login Here</h1>,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <div>Hello world!</div>,
      },
      {
        path: "events",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

export interface ISidenavRoutes {
  name: string;
  path: string;
  icon?: keyof typeof icons;
  children?: ISidenavRoutes[];
}

export const sidnavRoutes: ISidenavRoutes[] = [
  {
    name: "route one",
    path: "/",
    icon: "AirVent",
  },
  {
    name: "route 2",
    path: "/",
    icon: "AlarmClock",
    children: [
      {
        name: "route 3",
        path: "/nested/",
      },
      {
        name: "route 4",
        path: "/nested/",
      },
      {
        name: "route 4",
        path: "/nested/",
      },
    ],
  },
];
