import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Input } from "../../../components/Input/Input";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";

interface EnergyBillSearchInputProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
}

export const EnergyBillSearchInput = ({
  filters,
  setFilters,
}: EnergyBillSearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      icon={<SearchIcon />}
      width="300px"
      height="40px"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Buscar cliente"
    />
  );
};
