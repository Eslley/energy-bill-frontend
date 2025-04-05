import React, { useEffect } from "react";
import { EnergyBillTable } from "./EnergyBillTable";
import { EnergyBillFilters } from "./Filters/EnergyBillFilters";

import { useEnergBillPage } from "./hooks/useEnergyBillPage";

export const EnergyBillLibraryPage: React.FC = () => {
  const { energyBills, filters, setFilters } = useEnergBillPage();

  return (
    <>
      <EnergyBillFilters filters={filters} setFilters={setFilters} />
      <EnergyBillTable bills={energyBills} />
    </>
  );
};
