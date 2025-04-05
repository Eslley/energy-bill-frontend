import React from "react";
import { IconButton } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useAlert } from "../Alert/useAlert";

interface IconButtonWithBillProps {
  filePath?: string;
}

const API_URL = process.env.REACT_APP_API_URL;

export const IconButtonWithBill = ({ filePath }: IconButtonWithBillProps) => {
  const { showAlert } = useAlert();

  const downloadFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (filePath) {
        const fileUrl = `${API_URL}/upload/${filePath}`;

        const response = await fetch(fileUrl);
        const blob = await response.blob();

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filePath;
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
      disabled={!filePath}
      aria-label="ícone da conta de energia"
    >
      <ReceiptIcon />
    </IconButton>
  );
};
