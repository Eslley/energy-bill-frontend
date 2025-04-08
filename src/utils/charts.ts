import { ThemeColors } from "../styles/theme";
import { formatCurrency } from "./format";

export const toolTipFormatter = (
  tooltips: { name: string; format?: "currency" | "kWh" }[]
) => {
  return (value: number, name: string) => {
    const tooltip = tooltips.find((tooltip) => tooltip.name === name);
    if (!tooltip) return [value.toString(), name];

    let formattedValue = value.toString();

    if (!tooltip.format) {
      formattedValue = value.toString();
    } else if (tooltip.format === "currency") {
      formattedValue = formatCurrency(value);
    } else if (tooltip.format === "kWh") {
      formattedValue = `${value.toLocaleString("pt-BR")} kWh`;
    }

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
