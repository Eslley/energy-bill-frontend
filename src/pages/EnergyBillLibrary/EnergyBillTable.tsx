import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IconButtonWithBill } from "../../components/Button/BillIconButton";
import { EnergyBillWithMonthlyDocument } from "../../api/types/energyBill";
import { months } from "../../utils/date";
import { EnergyBillTableEmpty } from "./EnergyBillTableEmpty";

interface EnergyBillTableProps {
  bills: EnergyBillWithMonthlyDocument[];
}

export const EnergyBillTable = ({ bills }: EnergyBillTableProps) => {
  if (!bills.length) return <EnergyBillTableEmpty />;

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
