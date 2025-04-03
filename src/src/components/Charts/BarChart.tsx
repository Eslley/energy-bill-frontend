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
} from "recharts";

interface BarChartProps {
  title: string;
  data: Array<Record<string, any>>;
  dataKey: string;
  barColors: string[];
  width: string;
  height: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  dataKey,
  barColors,
  width,
  height,
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

      <ResponsiveContainer width="100%" height="80%">
        <RawBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {barColors.map((color, index) => (
            <Bar key={index} dataKey={`value${index + 1}`} fill={color} />
          ))}
        </RawBarChart>
      </ResponsiveContainer>
    </Paper>
  );
};
