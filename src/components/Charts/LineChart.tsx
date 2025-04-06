import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  BarChart as RawBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart as RawLineChart,
} from "recharts";
import { mapYAxisIndexToColor } from "../../utils/charts";
import { formatCurrency } from "../../utils/format";

interface LineChartProps {
  title: string;
  data: Array<Record<string, any>>;
  dataKeyXAxis: string;
  dataKeyYAxis: { dataKey: string; name?: string }[];
  width: string;
  height: string;
  yAxisLabel?: string;
  toolTipFormatter?: (value: number) => string[];
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  dataKeyXAxis,
  dataKeyYAxis,
  width,
  height,
  yAxisLabel,
  toolTipFormatter,
}) => {
  return (
    <Paper
      elevation={3}
      style={{
        width: width,
        height: height,
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
        <RawLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyXAxis} />
          <YAxis
            label={{
              value: yAxisLabel,
              position: "middle",
              angle: -90,
              dx: -25,
            }}
          />
          <Tooltip formatter={toolTipFormatter} />
          <Legend />

          {dataKeyYAxis.map((line, index) => (
            <Line
              key={line.dataKey}
              type="natural"
              dataKey={line.dataKey}
              name={line.name}
              stroke={mapYAxisIndexToColor(index)}
            />
          ))}
        </RawLineChart>
      </ResponsiveContainer>
    </Paper>
  );
};
