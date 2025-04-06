import React from "react";
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

interface BarLineChartProps {
  title: string;
  data: Array<Record<string, any>>;
  dataKeyXAxis: string;
  barData: { key: string; name: string };
  lineData: { key: string; name: string };
  width: string;
  height: string;
  toolTipFormatter?: (value: number) => string[];
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
  toolTipFormatter,
  yAxisLeftLabel,
  yAxisRightLabel,
}) => {
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
          <Tooltip formatter={toolTipFormatter} />
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
