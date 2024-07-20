import { createFileRoute } from "@tanstack/react-router";
import DashboardPayments from "../../pages/dashboard/payments";

export const Route = createFileRoute("/dashboard/_auth/payments")({
  component: () => <DashboardPayments />,
});
