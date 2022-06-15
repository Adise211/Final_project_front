import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext} from 'react';
import {StatesFromAppCompon} from '../App';




export default function IncomesTable() {
  const {showIncomes,setShowIncomes} = useContext(StatesFromAppCompon);
  console.log(showIncomes);

  function createData(name, amount,date) {
    return { name, amount,date };
  }

  const rows = [
    showIncomes.map(item => {
        return createData(item.income_name,item.income_amount, item.income_date)
    })
  ];
  console.log(rows[0]);

  return (
    <TableContainer component={Paper} sx={{maxWidth:700,minHeight:400,maxHeight:700,display:'flex',justifyContent: 'center',overFlow: 'scroll'}}>
      <Table sx={{ minWidth: 100, maxWidth: 700}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
            <TableCell align="right" sx={{fontWeight: 'bold'}}>Amount</TableCell>
            <TableCell align="right" sx={{fontWeight: 'bold'}}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[0].map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ color: 'success.main' }}>+ {row.amount}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
