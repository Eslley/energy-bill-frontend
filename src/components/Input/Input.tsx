import React from "react";
import { TextField, InputAdornment, SxProps } from "@mui/material";

interface InputProps {
  label?: string;
  value: string;
  width: string;
  height: string;
  icon: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  sx?: SxProps;
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
  sx,
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
        ...sx,
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
