import { Box } from "@mui/material";

import { EnergyBillSearchInput } from "./EnergyBillSearchInput";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";
import { EnergyBillYearButtons } from "./EnergyBillYearButtons";

interface EnergyBillFiltersProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
}

export const EnergyBillFilters = ({
  filters,
  setFilters,
}: EnergyBillFiltersProps) => {
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
