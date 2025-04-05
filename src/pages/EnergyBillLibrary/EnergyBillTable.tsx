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

interface EnergyBillTableProps {
  bills: EnergyBillWithMonthlyDocument[];
}

export const EnergyBillTable = ({ bills }: EnergyBillTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#e5e5e5" }}>
      <Table
        sx={{ minWidth: 400 }}
        aria-label="tabela com todas as contas de energia"
      >
        <TableHead>
          <TableRow>
            <TableCell>Cód. Cliente</TableCell>
            <TableCell>Nome</TableCell>

            {months.map((month) => (
              <TableCell key={month} align="center" sx={{ padding: "12px" }}>
                {month}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.clientNumber}>
              <TableCell>{bill.clientNumber}</TableCell>

              <TableCell>{bill.clientName}</TableCell>

              {months.map((month) => (
                <TableCell key={month} align="center" sx={{ width: 0 }}>
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
