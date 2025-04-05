import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { InsertDriveFileOutlined } from "@mui/icons-material";
import { IconButtonWithBill } from "../../components/Button/BillIconButton";
import { EnergyBillWithMonthlyDocument } from "../../api/types/energyBill";
import { months } from "../../utils/date";

interface EnergyBillTableProps {
  bills: EnergyBillWithMonthlyDocument[];
}

export const EnergyBillTable = ({ bills }: EnergyBillTableProps) => {
  if (!bills.length) {
    return (
      <TableContainer component={Paper} sx={{ py: 6 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="200px"
        >
          <InsertDriveFileOutlined
            sx={{ fontSize: 48, color: "text.secondary", mb: 1 }}
          />
          <Typography variant="h6" color="text.secondary">
            Nenhuma conta de energia encontrada!
          </Typography>
        </Box>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 400 }}
        aria-label="tabela com todas as contas de energia"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "0.95rem", maxWidth: 70 }}
            >
              Cód. Cliente
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "0.95rem", minWidth: 260 }}
            >
              Nome
            </TableCell>

            {months.map((month) => (
              <TableCell
                key={month}
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  maxWidth: 18,
                }}
              >
                {month}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.clientNumber}>
              <TableCell sx={{ maxWidth: 70 }}>{bill.clientNumber}</TableCell>

              <TableCell sx={{ minWidth: 260 }}>{bill.clientName}</TableCell>

              {months.map((month) => (
                <TableCell key={month} align="center" sx={{ maxWidth: 18 }}>
                  <IconButtonWithBill
                    filePath={bill.monthlyBills?.[month]?.filePath}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
