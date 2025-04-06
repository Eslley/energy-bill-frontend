import { Box } from "@mui/material";
import { EnergyBillReport } from "../../api/types/report";
import { LineChart } from "../../components/Charts/LineChart";
import { toolTipFormatter } from "../../utils/charts";
import { BarLineChart } from "../../components/Charts/BarLineChart";

interface DashboardChartsBoxProps {
  report: EnergyBillReport;
}

export const DashboardChartsBox = ({ report }: DashboardChartsBoxProps) => {
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
      <BarLineChart
        title="Número de Faturas vs Preço Total das Faturas"
        data={report.monthlyBillsAggregation}
        dataKeyXAxis={"monthYear"}
        barData={{ key: "numberOfBills", name: "Número de Faturas" }}
        lineData={{ key: "totalBillsPrice", name: "Preço Total" }}
        yAxisLeftLabel="N° de Faturas"
        yAxisRightLabel="Preço Total (R$)"
        width="100%"
        height="300px"
      />

      <LineChart
        title="Consumo de Energia Elétrica vs Energia Compensada"
        data={report.monthlyBillsAggregation}
        dataKeyXAxis={"monthYear"}
        dataKeyYAxis={[
          {
            dataKey: "totalEletricalEnergyConsume",
            name: "Consumo Total E.Elétrica",
          },
          {
            dataKey: "totalGDIEnergyConsume",
            name: "Consumo Total E.Compensada",
          },
        ]}
        toolTipFormatter={toolTipFormatter("kWh")}
        yAxisLabel="Consumo Total (kWh)"
        width="100%"
        height="300px"
      />

      <LineChart
        title="Preço Total Energia Elétrica vs Energia Compensada"
        data={report.monthlyBillsAggregation}
        dataKeyXAxis={"monthYear"}
        dataKeyYAxis={[
          {
            dataKey: "totalEletricalEnergyPrice",
            name: "Preço Total E.Elétrica",
          },
          {
            dataKey: "totalGDIEnergyPrice",
            name: "Preço Total E.Compensada",
          },
          { dataKey: "totalBillsPrice", name: "Preço Total Faturas" },
        ]}
        toolTipFormatter={toolTipFormatter("currency")}
        yAxisLabel="Preço Total (R$)"
        width="100%"
        height="300px"
      />

      <LineChart
        title="Preço Total Energia Elétrica sem GD vs Energia Compensada"
        data={report.monthlyBillsAggregation}
        dataKeyXAxis={"monthYear"}
        dataKeyYAxis={[
          {
            dataKey: "totalEletricalEnergyPriceWithoutGD",
            name: "Preço Total E.Elétrica sem GD",
          },
          {
            dataKey: "totalGDIEnergyPrice",
            name: "Preço Total E.Compensada",
          },
          { dataKey: "totalBillsPrice", name: "Preço Total Faturas" },
        ]}
        toolTipFormatter={toolTipFormatter("currency")}
        yAxisLabel="Preço Total (R$)"
        width="100%"
        height="300px"
      />
    </Box>
  );
};
