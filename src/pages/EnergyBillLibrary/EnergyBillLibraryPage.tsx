import React from "react";
import { EnergyBillTable } from "./EnergyBillTable";
import { EnergyBillFilters } from "./Filters/EnergyBillFilters";

import { useEnergyBill } from "./hooks/useEnergyBill";

export const EnergyBillLibraryPage: React.FC = () => {
  const { energyBills, filters, setFilters } = useEnergyBill();

  return (
    <>
      <EnergyBillFilters filters={filters} setFilters={setFilters} />
      <EnergyBillTable bills={energyBills} />
    </>
  );
};
