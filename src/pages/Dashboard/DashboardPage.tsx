import React from "react";
import { useDashboard } from "./hooks/useDashboard";
import { DashboardEmpty } from "./DashboardEmpty";
import { DashboardCardsBox } from "./DashboardCardsBox";
import { DashboardChartsBox } from "./DashboardChartsBox";

export const DashboardPage: React.FC = () => {
  const { report } = useDashboard();

  if (!report) return <DashboardEmpty />;

  return (
    <>
      <DashboardCardsBox report={report} />
      <DashboardChartsBox report={report} />
    </>
  );
};
