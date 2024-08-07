import { createFileRoute, Outlet } from "@tanstack/react-router";
import { unAuthorizedBeforeLoad } from "../configs/beforeLoad";
import AuthLayout from "../Layouts/AuthLayout";

export const Route = createFileRoute("/_unAuth")({
  ...unAuthorizedBeforeLoad,
  component: () => (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ),
});
