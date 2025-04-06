import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { createContext, useMemo, useState, ReactNode } from "react";

interface AlertData {
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration: number;
}

export interface AlertContextType {
  showAlert: (
    title: string,
    message: string,
    type: "success" | "error" | "info" | "warning",
    duration?: number
  ) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [dataAlert, setDataAlert] = useState<AlertData | null>(null);
  const [open, setOpen] = useState(false);

  const showAlert = (
    title: string,
    message: string,
    type: "success" | "error" | "info" | "warning",
    duration = 5000
  ) => {
    setDataAlert({
      title,
      message,
      type,
      duration,
    });
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setDataAlert(null);
    setOpen(false);
  };

  const value = useMemo(() => ({ showAlert }), [showAlert]);

  return (
    <AlertContext.Provider value={value}>
      {!!dataAlert?.message && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={dataAlert.duration}
          onClose={handleClose}
        >
          <Alert
            sx={{ width: "100%" }}
            variant="filled"
            severity={dataAlert.type}
            onClose={handleClose}
          >
            <AlertTitle>{dataAlert.title}</AlertTitle>
            {dataAlert.message}
          </Alert>
        </Snackbar>
      )}
      {children}
    </AlertContext.Provider>
  );
};
