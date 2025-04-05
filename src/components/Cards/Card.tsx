// Card.tsx
import React from "react";
import { Paper, Typography, Box } from "@mui/material";

interface CardProps {
  color: string; // Custom background color for the card
  title: string; // Title of the card
  text1: string; // First text content
  text2?: string; // Second text content
}

export const Card: React.FC<CardProps> = ({ color, title, text1, text2 }) => {
  return (
    <Paper
      style={{
        backgroundColor: color,
        width: "170px",
        height: "100px",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Box textAlign="center">
        {" "}
        {/* Box to center content */}
        <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          {text1}
        </Typography>
        {text2 ? (
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "5px" }}
          >
            {text2}
          </Typography>
        ) : null}
      </Box>
    </Paper>
  );
};
