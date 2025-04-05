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

  const fileUrl = `${API_URL}upload/${filePath}`;

  const downloadFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (filePath) {
      showAlert(
        "Download :)",
        "A conta de energia está sendo baixada...",
        "info",
        3000
      );
    }
  };

  return (
    <IconButton
      onClick={downloadFile}
      color="primary"
      size="small"
      disabled={!filePath}
      sx={{ padding: 0 }}
      aria-label="ícone da conta de energia"
    >
      <ReceiptIcon />
    </IconButton>
  );
};
