import { Box } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { years } from "../../../utils/date";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";
import { useCallback } from "react";

interface EnergyBillYearButtonsProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
}

export const EnergyBillYearButtons = ({
  filters,
  setFilters,
}: EnergyBillYearButtonsProps) => {
  const currentYearFiltered = filters.year;

  const handleChangeYear = useCallback(
    (year: number) => {
      if (year !== filters.year) {
        setFilters((prev) => ({
          ...prev,
          year,
        }));
      }
    },
    [filters.year, setFilters]
  );

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {years.map((year) => (
        <Button
          key={year}
          label={year.toString()}
          onClick={() => handleChangeYear(year)}
          isBlocked={currentYearFiltered !== year}
          variant="contained"
          color="secondary"
          sx={{ width: "70px", height: "35px" }}
        />
      ))}
    </Box>
  );
};
