import React, { createContext, useState, ReactNode } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export interface LoadingContextType {
  startLoading: () => void;
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

  // Functions to control the loading state
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  // The value passed to the context
  const value = { startLoading, stopLoading };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {loading && (
        <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </LoadingContext.Provider>
  );
}
