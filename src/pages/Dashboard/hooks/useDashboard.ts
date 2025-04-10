import { useEffect, useState } from "react";
import { useLoading } from "../../../components/Loading/useLoading";
import { useAlert } from "../../../components/Alert/useAlert";
import { getReport } from "../../../api";
import { EnergyBillReport } from "../../../api/types/report";

export const useDashboard = () => {
  const { startLoading, stopLoading } = useLoading();
  const { showAlert } = useAlert();

  const [report, setReport] = useState<EnergyBillReport>();

  useEffect(() => {
    fetchReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReport = async () => {
    try {
      startLoading("Aguarde enquanto a aplicação está carregando...");

      const { report } = await getReport();

      setReport(report);

      showAlert("Relatório", "Relatório carregado com sucesso!", "info");
    } catch (error) {
      showAlert("Erro :(", "Erro ao carregar os dados do relatório", "error");
    } finally {
    }
  };

  return {
    report,
  };
};
