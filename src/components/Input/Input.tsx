import React from "react";
import { TextField, InputAdornment } from "@mui/material";

interface InputProps {
  label?: string;
  value: string;
  width: string;
  height: string;
  icon: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  label,
  value,
  width,
  height,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      color="secondary"
      sx={{
        width,
        height,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" color="text">
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
};
