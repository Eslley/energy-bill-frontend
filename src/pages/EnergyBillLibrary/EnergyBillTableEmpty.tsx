import { Receipt } from "@mui/icons-material";
import { Box, Paper, TableContainer, Typography } from "@mui/material";

export const EnergyBillTableEmpty = () => {
  return (
    <TableContainer component={Paper} sx={{ py: 6 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <Receipt sx={{ fontSize: 48, color: "text.secondary", mb: 1 }} />
        <Typography variant="h6" color="text.secondary" align="center">
          Nenhuma conta de energia encontrada!
        </Typography>
      </Box>
    </TableContainer>
  );
};
