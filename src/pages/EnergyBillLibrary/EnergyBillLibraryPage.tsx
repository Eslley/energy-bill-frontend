import React from "react";
import { EnergyBillTable } from "./EnergyBillTable";
import { EnergyBillFilters } from "./Filters/EnergyBillFilters";

import { useEnergyBillPage } from "./hooks/useEnergyBillPage";

export const EnergyBillLibraryPage: React.FC = () => {
  const { energyBills, filters, setFilters, filterEnergyBills } =
    useEnergyBillPage();

  return (
    <>
      <EnergyBillFilters
        filters={filters}
        setFilters={setFilters}
        filterEnergyBills={filterEnergyBills}
      />
      <EnergyBillTable bills={energyBills} />
    </>
  );
};
