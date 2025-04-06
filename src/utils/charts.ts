import { ThemeColors } from "../styles/theme";
import { formatCurrency } from "./format";

export const toolTipFormatter = (format: "currency" | "kWh") => {
  return (value: number) => {
    let formattedValue = value.toString();

    if (format === "currency") formattedValue = formatCurrency(value);
    else if (format === "kWh")
      formattedValue = `${value.toLocaleString("pt-BR")} kWh`;

    return [formattedValue];
  };
};

export const mapYAxisIndexToColor = (index: number) => {
  const indexColorsMap = [
    ThemeColors.chartPrimary,
    ThemeColors.chartSecondary,
    ThemeColors.chartTertiary,
  ];

  return indexColorsMap[index];
};
