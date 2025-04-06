import React from "react";
import { Box, Grid } from "@mui/material";
import { BarChart } from "../../components/Charts/BarChart";
import { DonutChart } from "../../components/Charts/DonutChart";
import { Card } from "../../components/Cards/Card";
import { useDashboard } from "./hooks/useDashboard";
import { DashboardEmpty } from "./DashboardEmpty";
import { formatCurrency, formatkWh } from "../../utils/format";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const generateMockData = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 100),
  }));
};

const generateMockData2 = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    name: `Day ${i + 1}`,
    value1: Math.floor(Math.random() * 100), // First value set
    value2: Math.floor(Math.random() * 100), // Second value set for comparison
    value3: Math.floor(Math.random() * 100),
  }));
};

export const DashboardPage: React.FC = () => {
  const { report } = useDashboard();

  if (!report) return <DashboardEmpty />;

  return (
    <>
      <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
        <Card
          title="N° de Clientes"
          subtitle={report.numberOfClients.toString()}
        />
        <Card
          title="N° de Faturas"
          subtitle={report.numberOfBills.toString()}
        />
        <Card
          title="N° de Instalações"
          subtitle={report.numberOfInstallations.toString()}
        />
        <Card
          title="Total das Faturas"
          subtitle={formatCurrency(report.totalBillsPrice)}
        />
        <Card
          title="E. Elétrica"
          subtitle={formatkWh(report.totalEletricalEnergyConsume)}
          info={formatCurrency(report.totalEletricalEnergyPrice)}
        />
        <Card
          title="E. Compensada"
          subtitle={formatkWh(report.totalGDIEnergyConsume)}
          info={formatCurrency(report.totalGDIEnergyPrice)}
        />
        <Card
          title="E. Compensada"
          subtitle={formatCurrency(report.totalEletricalEnergyPriceWithoutGD)}
          info="(Sem GD)"
        />
        <Card
          title="Cont. Iluminação Pública"
          subtitle=""
          info={formatCurrency(report.totalPublicLightingContributionPrice)}
        />
        <Card
          title="Comp. por Danos"
          subtitle=""
          info={formatCurrency(report.totalDamageCompensationPrice)}
        />
      </Box>

      <Grid container spacing={2}>
        {/* Chart 1 */}
        <Grid size={6}>
          <BarChart
            title="Gráfico 1"
            data={generateMockData2()}
            dataKey={"name"}
            width="70%"
            height="270px"
          />
        </Grid>

        <Grid size={6}>
          <DonutChart
            data={generateMockData()}
            title="Donut Chart"
            width="70%"
            height="270px"
          />
        </Grid>
      </Grid>
    </>
  );
};
