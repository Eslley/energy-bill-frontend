import { Box } from "@mui/material";
import { Card } from "../../components/Cards/Card";
import { formatCurrency, formatkWh } from "../../utils/format";
import { EnergyBillReport } from "../../api/types/report";

interface DashboardCardsBoxProps {
  report: EnergyBillReport;
}

export const DashboardCardsBox = ({ report }: DashboardCardsBoxProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2}
      mb={2}
    >
      <Card
        title="N° de Clientes"
        subtitle={report.numberOfClients.toString()}
      />
      <Card title="N° de Faturas" subtitle={report.numberOfBills.toString()} />
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
  );
};
