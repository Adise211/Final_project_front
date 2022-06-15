import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from 'react';




function createData(categories,budget,left) {
  return { categories,budget,left };
}




const BudgetTable = (props) => {
  console.log('props from BudgetTable',props);



  const {rent,food,leisure,restaurants,school,bills,other} = props;
  const all = props.showBudget[0] || {rent,food,leisure,restaurants,school,bills,other}

      const rows = [
        createData('Rent',all.rent,props.rent),
        createData('Food',all.food,props.food),
        createData('Leisure',all.leisure,props.leisure),
        createData('Restaurants',all.restaurants,props.restaurants),
        createData('School',all.school,props.school),
        createData('Bills',all.bills,props.bills),
        createData('Other',all.other,props.other)
      ];








  return(
    <>
    <div style={{display:'flex',justifyContent: 'center',marginBottom:50}}>
      <TableContainer component={Paper} sx={{maxWidth:'50%'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>Categories</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Budget</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Left from budget</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row,i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.categories}
                  </TableCell>
                  <TableCell align="right" sx = {{color:'purple'}}>{row.budget}</TableCell>
                  <TableCell align="right" style={row.left < 0 ? {color:'red'} : {color:'green'}}>{row.left}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>


  )
}

export default BudgetTable;
