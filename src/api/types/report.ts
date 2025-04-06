export type GetReportOutput = {
  report: EnergyBillReport;
};

export interface EnergyBillReport {
  numberOfClients: number;
  numberOfInstallations: number;
  numberOfBills: number;
  totalBillsPrice: number;
  totalEletricalEnergyConsume: number;
  totalEletricalEnergyPrice: number;
  totalGDIEnergyConsume: number;
  totalGDIEnergyPrice: number;
  totalEletricalEnergyPriceWithoutGD: number;
  totalPublicLightingContributionPrice: number;
  totalDamageCompensationPrice: number;
  monthlyBillsAggregation: MonthlyBillsAggregation[];
}
export interface MonthlyBillsAggregation {
  monthYear: string;
  numberOfBills: number;
  totalBillsPrice: number;
  totalEletricalEnergyConsume: number;
  totalEletricalEnergyPrice: number;
  totalGDIEnergyConsume: number;
  totalGDIEnergyPrice: number;
  totalEletricalEnergyPriceWithoutGD: number;
  totalPublicLightingContributionPrice: number;
  totalDamageCompensationPrice: number;
}
