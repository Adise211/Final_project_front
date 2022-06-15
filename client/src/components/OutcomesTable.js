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




export default function OutcomesTable() {

  const {showOutcomes,setShowOutcomes} = useContext(StatesFromAppCompon);

  console.log(showOutcomes);

  function createData(type,name, amount,date) {
    return { type ,name, amount,date };
  }

  const rows = [
    showOutcomes.map(item => {
        return createData(item.outcome_type,item.outcome_subtype, item.outcome_amount, item.outcome_date)
    })
  ];
  console.log(rows[0]);

  return (
    <TableContainer component={Paper} sx={{maxWidth:700,minHeight:400,maxHeight:700,display:'flex',justifyContent: 'center',overFlow: 'scroll'}}>
      <Table sx={{ minWidth: 100, maxWidth: 700}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Type</TableCell>
            <TableCell align="right" sx={{fontWeight: 'bold'}}>Name</TableCell>
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
                {row.type}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right" sx={{ color: '#f44336' }}>- {row.amount}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
