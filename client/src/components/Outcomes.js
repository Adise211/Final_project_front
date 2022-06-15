import {useState, useContext} from 'react';
import {StatesFromAppCompon} from '../App';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutcomesTable from './OutcomesTable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';







const Outcomes = (props) => {





  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [amount, setAmount] = useState('');
  const [warnText, setWarnText] = useState('');
  const {userNameNow, setUserNameNow,showOutcomes,setShowOutcomes} = useContext(StatesFromAppCompon);
  const [newOutcome, setNewOutcome] = useState('');
  console.log('from outcomes',showOutcomes);

  const handleClick = (name) => {
    console.log(name);
    setType(name)
  }

  const sendOutcome = (e) => {
    e.preventDefault();
    if (type !== '' && subType !== '' && amount !== '') {
      setWarnText('')

      fetch('http://localhost:5000/savings/outcomes',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({outcome_type:type,outcome_subtype:subType,outcome_amount:amount,user_id:userNameNow.user_id})
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data);
        setNewOutcome(data[0])
        alert('You added new outcome!')
      })
      .catch(err => {
        console.log(err);
      })

    } else {
      setWarnText('Please do not leave empty values')
    }

  }




  return (
    < >
    <div>
      <h1 style={{display:'flex',justifyContent: 'center',marginBottom:80}}>Expenses</h1>
      <Stack spacing={2} direction="coloumn">
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#ffeb3b',color:'black'}} name='rent'>Rent</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#ffa733',color:'black'}} name='food'>Food</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#ff7474',color:'black'}} name='leisure'>Leisure</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#e666fb',color:'black'}} name='restaurants'>Restaurants</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#9670ff',color:'black'}} name='school'>School</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#69a1ff',color:'black'}} name='bills'>Bills</Button>
        <Button  variant="contained" onClick={(e) => handleClick(e.target.name)} sx={{backgroundColor:'#758afe',color:'black'}} name='other'>Others</Button>
      </Stack>
      </div>

      <div style={{display:'flex',justifyContent: 'flex-start',marginTop:50}}>
      <h3 style={{color:'red'}}>{warnText}</h3>
      <Box
        component="form" onSubmit={sendOutcome}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type='text' label="Name" variant="filled" onChange={(e) => setSubType(e.target.value)}/>
        <TextField type='numbers' label="Spend" variant="filled" onChange={(e) => setAmount(e.target.value)}/>
        <Button type='submit' color='secondary' variant='contained' style={{marginLeft:50,marginTop:15}} >Send</Button>

      </Box>
    </div>

    <div style={{display:'flex',justifyContent: 'center',marginTop:120 }}>
      <OutcomesTable />
    </div>

    <div style={{display:'flex',justifyContent: 'center',marginTop:40, border:'1px #d7e360 solid', backgroundColor:'#d7e360',minWidth:'30vw',maxWidth:'50vw', position:'relative',left:'25%',
                justifyContent: 'space-evenly'}}>
      <h4>New outcome:</h4>
      <p>Name: {newOutcome.outcome_subtype}</p>
      <p>Amount: {newOutcome.outcome_amount}</p>
    </div>

    <Button component={Link} to='/main' color='secondary' variant='outlined' sx={{position:'relative',left:'85%',bottom:'132vh'}}>Back To Board</Button>
    </>
  )
}



export default Outcomes;
