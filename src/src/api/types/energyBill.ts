export interface GetEnergyBillsInput {
  clientNumber?: string;
  year?: number;
}

export type GetEnergyBillsOutput = {
  filteredEnergyBills: EnergyBillWithMonthlyDocument[];
};

interface EnergyBillWithMonthlyDocument {
  clientNumber: string;
  clientName: string;
  monthlyBills: {
    [month: string]: { filePath: string };
  };
}
