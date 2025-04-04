import { useContext } from "react";
import { AlertContext, AlertContextType } from "./AlertProvider";

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
