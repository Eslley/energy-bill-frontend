import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Input } from "../../../components/Input/Input";
import { GetEnergyBillsInput } from "../../../api/types/energyBill";
import { useDebounce } from "../../../hooks/useDebounce";

interface EnergyBillSearchInputProps {
  filters: GetEnergyBillsInput;
  setFilters: React.Dispatch<React.SetStateAction<GetEnergyBillsInput>>;
}

export const EnergyBillSearchInput = ({
  filters,
  setFilters,
}: EnergyBillSearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      clientNumber: debouncedSearchTerm.trim() || undefined,
    }));
  }, [debouncedSearchTerm, setFilters]);

  return (
    <Input
      icon={<SearchIcon />}
      width="auto"
      height="40px"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Buscar cliente"
    />
  );
};
