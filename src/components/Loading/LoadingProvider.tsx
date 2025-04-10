import React, { createContext, useState, ReactNode } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

export interface LoadingContextType {
  startLoading: (message?: string) => void;
  stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const startLoading = (message?: string) => {
    setMessage(message);
    setLoading(true);
  };
  const stopLoading = () => setLoading(false);

  const value = { startLoading, stopLoading };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {loading && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          open={loading}
          aria-label="tela de carregamento"
        >
          <CircularProgress color="inherit" />
          {message && (
            <Typography
              variant="h6"
              color="inherit"
              align="center"
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
        </Backdrop>
      )}
    </LoadingContext.Provider>
  );
}
