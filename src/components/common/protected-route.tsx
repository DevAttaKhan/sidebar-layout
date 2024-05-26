import { Outlet, Navigate } from "react-router";
import { MainLayout } from "@/components/layouts/index";

export const ProtectedRoute = () => {
  const token = true;
  return token ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};
