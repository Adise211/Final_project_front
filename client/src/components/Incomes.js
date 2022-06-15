import {useState, useContext} from 'react';
import {StatesFromAppCompon} from '../App';
import { Link } from "react-router-dom";
import IncomesTable from './IncomesTable';
import Button from '@mui/material/Button';
import '../incomesOutcomes.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IncomeForm from './Test';






const Incomes = (prosp) => {
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDate, setIncomeDate] = useState('');
  const [userId, setUserId] = useState([]);
  const [newIncome, setNewIncome] = useState([]);
  const {userNameNow, setUserNameNow,showIncomes,setShowIncomes} = useContext(StatesFromAppCompon);
  console.log('from incomes',showIncomes);







  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/savings/incomes',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({income_name:incomeName,income_amount:incomeAmount,income_date:incomeDate,user_id:userNameNow.user_id})
    })
    .then(res=> res.json())
    .then(data => {
      setNewIncome(data[0])
      alert('You added new income!')
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })

  }


  console.log(newIncome[0]);


    return (
      <>
        <h2 style={{display:'flex',justifyContent: 'center',marginBottom:80}}>Incomes</h2>
        <div style={{display:'flex',justifyContent: 'center',marginBottom:80}}>
            <Box
              component="form" onSubmit={handleSubmit}
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField type='text' label="Income From" variant="filled" onChange={(e) => setIncomeName(e.target.value)}/>
              <TextField type='text' label="Amount" variant="filled" onChange={(e) => setIncomeAmount(e.target.value)}/>
              <TextField type='date'  variant="filled" onChange={(e) => setIncomeDate(e.target.value)}/>
              <Button type='submit' color='secondary' variant='contained' style={{marginLeft:50,marginTop:15}} >Send</Button>

            </Box>
          </div>

          <div style={{display:'flex',justifyContent: 'center',margin:60 }}>
          <IncomesTable />
          </div>

          <div style={{display:'flex',justifyContent: 'center',marginTop:40, border:'1px #d7e360 solid', backgroundColor:'#d7e360',minWidth:'30vw',maxWidth:'50vw', position:'relative',left:'25%',
                      justifyContent: 'space-evenly'}}>
        
          </div>

          <Button component={Link} to='/main' color='secondary' variant='outlined' sx={{position:'relative',left:'85%',bottom:'108vh'}}>Back To Board</Button>

        </>
    )


}



// {
//   newIncome !== []
//   ?  <>
//         <h4>New income:</h4>
//         <p>Name: {newIncome[0].income_name}</p>
//         <p>Amount: {newIncome[0].income_amount}</p>
//     </>
//   : null
//
// }





export default Incomes;
