import React from "react";
import {
  Button as RawButton,
  ButtonProps as RawButtonProps,
} from "@mui/material";

interface ButtonProps extends RawButtonProps {
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  label,
  ...props
}) => {
  return (
    <RawButton variant={variant} color={color} {...props}>
      {label}
    </RawButton>
  );
};
