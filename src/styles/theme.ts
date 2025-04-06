import { createTheme } from "@mui/material";

export enum ThemeColors {
  primaryLight = "#3a4b4f",
  primary = "#1d272a",
  primaryDark = "#0f1517",

  secondaryLight = "#c06a63",
  secondary = "#984B43",
  secondaryDark = "#6c312d",

  successLight = "#66bb6a",
  success = "#388e3c",
  successDark = "#1b5e20",

  errorLight = "#ef5350",
  error = "#d32f2f",
  errorDark = "#b71c1c",

  warningLight = "#ffdd99",
  warning = "#eac67a",
  warningDark = "#c9a44e",

  infoLight = "#4fc3f7",
  info = "#0288d1",
  infoDark = "#01579b",

  backgroundDefault = "#18121E",
  backgroundPaper = "#1f1a27",

  textPrimary = "#e0e0e0",
  textSecondary = "#bdbdbd",
  textDisabled = "#757575",

  divider = "#2c2c2c",

  chartPrimary = "#8884d8",
  chartSecondary = "#82ca9d",
  chartTertiary = "#ffc658",
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: ThemeColors.primaryLight,
      main: ThemeColors.primary,
      dark: ThemeColors.primaryDark,
    },
    secondary: {
      light: ThemeColors.secondaryLight,
      main: ThemeColors.secondary,
      dark: ThemeColors.secondaryDark,
    },
    success: {
      light: ThemeColors.successLight,
      main: ThemeColors.success,
      dark: ThemeColors.successDark,
    },
    error: {
      light: ThemeColors.errorLight,
      main: ThemeColors.error,
      dark: ThemeColors.errorDark,
    },
    warning: {
      light: ThemeColors.warningLight,
      main: ThemeColors.warning,
      dark: ThemeColors.warningDark,
    },
    info: {
      light: ThemeColors.infoLight,
      main: ThemeColors.info,
      dark: ThemeColors.infoDark,
    },
    background: {
      default: ThemeColors.backgroundDefault,
      paper: ThemeColors.backgroundPaper,
    },
    text: {
      primary: ThemeColors.textPrimary,
      secondary: ThemeColors.textSecondary,
      disabled: ThemeColors.textDisabled,
    },
    divider: ThemeColors.divider,
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});
