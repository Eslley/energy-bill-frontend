import { InsertChartOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const DashboardEmpty = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      sx={{ color: "text.secondary", padding: 4 }}
    >
      <InsertChartOutlined sx={{ fontSize: 64, mb: 2 }} />
      <Typography variant="h6">Relatório vazio</Typography>
      <Typography variant="body2">
        Nenhum dado disponível no momento. Crie um relatório ou aguarde dados.
      </Typography>
    </Box>
  );
};
