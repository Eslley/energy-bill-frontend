import { Box } from "@mui/material";

import { EnergyBillSearchInput } from "./EnergyBillSearchInput";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";
import { EnergyBillYearButtons } from "./EnergyBillYearButtons";
import { useEffect } from "react";

interface EnergyBillFiltersProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
  filterEnergyBills: (filters?: GetEnergyBillsInput) => Promise<void>;
}

export const EnergyBillFilters = ({
  filters,
  setFilters,
  filterEnergyBills,
}: EnergyBillFiltersProps) => {
  useEffect(() => {
    filterEnergyBills(filters);
  }, [filters]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <EnergyBillYearButtons filters={filters} setFilters={setFilters} />

      <EnergyBillSearchInput filters={filters} setFilters={setFilters} />
    </Box>
  );
};
