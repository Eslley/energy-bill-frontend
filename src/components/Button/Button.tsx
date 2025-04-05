import React from "react";
import {
  Button as RawButton,
  ButtonProps as RawButtonProps,
} from "@mui/material";

interface ButtonProps extends RawButtonProps {
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  label: string;
  isBlocked: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  label,
  isBlocked,
  ...props
}) => {
  return (
    <RawButton
      variant={variant}
      color={color}
      {...props}
      sx={isBlocked ? { opacity: 0.5, pointerEvents: "auto" } : {}}
    >
      {label}
    </RawButton>
  );
};
