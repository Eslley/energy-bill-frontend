import { useEffect, useState } from "react";
import { useLoading } from "../../../components/Loading/useLoading";
import {
  EnergyBillWithMonthlyDocument,
  GetEnergyBillsInput,
} from "../../../api/types/energyBill";
import { getEnergyBills } from "../../../api";
import { useAlert } from "../../../components/Alert/useAlert";

export const useEnergyBill = () => {
  const { startLoading, stopLoading } = useLoading();
  const { showAlert } = useAlert();

  const [energyBills, setEnergyBills] = useState(
    [] as EnergyBillWithMonthlyDocument[]
  );
  const [filters, setFilters] = useState({
    year: 2024,
  } as GetEnergyBillsInput);

  useEffect(() => {
    filterEnergyBills(filters);
  }, [filters]);

  const filterEnergyBills = async (filters?: GetEnergyBillsInput) => {
    try {
      startLoading();

      const { filteredEnergyBills } = await getEnergyBills(filters);

      setEnergyBills(filteredEnergyBills);
    } catch (error) {
      showAlert(
        "Erro :(",
        "Erro ao buscar os dados das contas de energia",
        "error"
      );
    } finally {
      stopLoading();
    }
  };

  return {
    energyBills,
    filters,
    setFilters,
    filterEnergyBills,
  };
};
