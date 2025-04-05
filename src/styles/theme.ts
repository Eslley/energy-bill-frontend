import { createTheme } from "@mui/material/styles";

export enum ThemeColors {
  primary = "#1d272a",
  secondary = "#984B43",
  success = "#388e3c",
  error = "#d32f2f",
  warning = "#eac67a",
  info = "#0288d1",
  background = "#18121E",
  textPrimary = "#333",
  textSecondary = "#666",
}

export const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.primary,
    },
    secondary: {
      main: ThemeColors.secondary,
    },
    success: {
      main: ThemeColors.success,
    },
    error: {
      main: ThemeColors.error,
    },
    warning: {
      main: ThemeColors.warning,
    },
    info: {
      main: ThemeColors.info,
    },
    background: {
      default: ThemeColors.background,
    },
    text: {
      primary: ThemeColors.textPrimary,
      secondary: ThemeColors.textSecondary,
    },
  },
  typography: {
    // Optional: Customize typography if needed
    fontFamily: "Roboto, Arial, sans-serif", // Customize font
  },
});
