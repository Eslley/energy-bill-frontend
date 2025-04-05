import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DonutChartProps {
  data: { name: string; value: number }[];
  title: string;
  colors?: string[];
  width: string;
  height: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  title,
  colors = [],
  width,
  height,
}) => {
  const defaultColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const chartColors = colors.length > 0 ? colors : defaultColors;

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
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};
