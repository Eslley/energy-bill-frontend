import { Box } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { years } from "../../../utils/date";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";

interface EnergyBillYearButtonsProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
}

export const EnergyBillYearButtons = ({
  filters,
  setFilters,
}: EnergyBillYearButtonsProps) => {
  const handleChangeYear = (year: number) => {
    setFilters((prev) => ({
      ...prev,
      year,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {years.map((year) => (
        <Button
          key={year}
          label={year.toString()}
          onClick={() => handleChangeYear(year)}
          variant="contained"
          color="secondary"
          sx={{ width: "70px", height: "35px" }}
        />
      ))}
    </Box>
  );
};
