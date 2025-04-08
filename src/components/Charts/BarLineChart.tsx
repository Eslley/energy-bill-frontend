import { useCallback } from "react";
import { Paper, Typography } from "@mui/material";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import { ThemeColors } from "../../styles/theme";
import { toolTipFormatter } from "../../utils/charts";

interface BarLineChartProps {
  title: string;
  data: Array<Record<string, any>>;
  dataKeyXAxis: string;
  barData: { key: string; name: string; format?: "currency" | "kWh" };
  lineData: { key: string; name: string; format?: "currency" | "kWh" };
  width: string;
  height: string;
  yAxisRightLabel: string;
  yAxisLeftLabel: string;
}

export const BarLineChart: React.FC<BarLineChartProps> = ({
  title,
  data,
  dataKeyXAxis,
  barData,
  lineData,
  width,
  height,
  yAxisLeftLabel,
  yAxisRightLabel,
}) => {
  const formatter = useCallback(() => {
    const formatters = [
      { name: barData.name, format: barData.format },
      { name: lineData.name, format: lineData.format },
    ];

    return toolTipFormatter(formatters);
  }, [barData, lineData]);

  return (
    <Paper
      elevation={3}
      style={{
        width: width,
        minHeight: height,
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        {title}
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyXAxis} />
          <YAxis
            yAxisId="left"
            orientation="left"
            allowDecimals={false}
            label={{
              value: yAxisLeftLabel,
              position: "middle",
              angle: -90,
              dx: -15,
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: yAxisRightLabel,
              position: "middle",
              angle: 90,
              dx: 25,
            }}
          />
          <Tooltip formatter={formatter()} />
          <Legend />

          <Bar
            yAxisId="left"
            dataKey={barData.key}
            name={barData.name}
            barSize={30}
            fill={ThemeColors.chartPrimary}
          />
          <Line
            yAxisId="right"
            type="natural"
            dataKey={lineData.key}
            name={lineData.name}
            stroke={ThemeColors.chartSecondary}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
};
