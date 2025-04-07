import React from "react";
import { IconButton } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useAlert } from "../Alert/useAlert";

interface IconButtonWithBillProps {
  file?: {
    fileName: string;
    filePath: string;
  };
}

export const IconButtonWithBill = ({ file }: IconButtonWithBillProps) => {
  const { showAlert } = useAlert();

  const downloadFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (file) {
        const { fileName, filePath } = file;

        const response = await fetch(filePath);
        const blob = await response.blob();

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        URL.revokeObjectURL(link.href);
        document.body.removeChild(link);

        showAlert(
          "Download :)",
          "A conta de energia está sendo baixada...",
          "info",
          3000
        );
      }
    } catch (error) {
      console.error("Failed to download file:", error);
      showAlert(
        "Download :(",
        "Erro ao baixar a conta de energia!",
        "info",
        4000
      );
    }
  };

  return (
    <IconButton
      onClick={downloadFile}
      color="inherit"
      size="small"
      disabled={!file}
      aria-label="botão para download da fatura de energia"
    >
      <ReceiptIcon />
    </IconButton>
  );
};
