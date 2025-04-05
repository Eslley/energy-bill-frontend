import { useEffect, useState } from "react";
import { useLoading } from "../../../components/Loading/useLoading";
import {
  EnergyBillWithMonthlyDocument,
  GetEnergyBillsInput,
} from "../../../api/types/energyBill";
import { filterEnergyBills } from "../../../api";
import { useAlert } from "../../../components/Alert/useAlert";

export const useEnergBillPage = () => {
  const { startLoading, stopLoading } = useLoading();
  const { showAlert } = useAlert();

  const [energyBills, setEnergyBills] = useState(
    [] as EnergyBillWithMonthlyDocument[]
  );
  const [filters, setFilters] = useState({
    year: new Date().getFullYear(),
  } as GetEnergyBillsInput);

  useEffect(() => {
    getEnergyBills();
  }, []);

  const getEnergyBills = async (clientNumber?: string, year?: number) => {
    try {
      startLoading();

      const { filteredEnergyBills } = await filterEnergyBills({
        clientNumber,
        year,
      });

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
    getEnergyBills,
  };
};
