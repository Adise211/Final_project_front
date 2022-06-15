import {useState} from 'react';
import '../Home.css';
// import {connect} from 'react-redux';
// import {setBudget} from '../redux/actions';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutcomesTable from './OutcomesTable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';






const StartSaving = (props) => {
  const [goal_name, setGoal_name] = useState('');
  const [goal_amount, setGoal_amount] = useState('');
  const [due_date, setDue_date] = useState('');
  const [rent, setRent] = useState('');
  const [food, setFood] = useState('');
  const [leisure, setLeisure] = useState('');
  const [restaurants, setRestaurants] = useState('');
  const [school, setSchool] = useState('');
  const [bills, setBills] = useState('');
  const [other, setOther] = useState('');
  const [missingTxt, setMissingTxt] = useState('');





  const startToSave = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/savings/starttosave',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({goal_name, goal_amount, due_date,rent,food,leisure,restaurants,school,bills,other})
    })
    .then(res=> res.json())
    .then(data => {
      if (data.missing || data.msg) {
        setMissingTxt('Please fill the form')
      } else {
        console.log(data);
        alert('You set your budget')
      }

    })
    .catch(err => {
      console.log(err);
    })



  }



  return (
    < >
      <div className='instra'>
        <h3> Instructions: </h3>
        <h4>
          1. You need to fill the amount of money for your budget in every field, this budget will help you to follow your expenses every month.
          If you don't want to set budget in one of them, please insert 0.
        </h4>
        <h4>
          2. The next inputs cannot be empty : Reason for saving, Saving goal and Due date.
          Plese make sure to fill out those feilds.
        </h4>
      </div>

      <Box
        component="form" onSubmit={startToSave}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          marginTop:20,
          display:'flex',
          flexDirection:'row',
          flexWrap: 'wrap',
          justifyContent: 'center',

        }}
        noValidate
        autoComplete="off"
      >
        <TextField type='text' label="Reason" variant="filled" onChange={(e) => setGoal_name(e.target.value)}/>
        <TextField type='number' label="Goal Amount" variant="filled" onChange={(e) => setGoal_amount(e.target.value)}/>
        <TextField type='date'  variant="filled" onChange={(e) => setDue_date(e.target.value)}/>

        <TextField type='number' label="Rent" variant="filled" onChange={(e) => setRent(e.target.value)}/>
        <TextField type='number' label="Food" variant="filled" onChange={(e) => setFood(e.target.value)}/>
        <TextField type='number' label="Leisure" variant="filled" onChange={(e) => setLeisure(e.target.value)}/>
        <TextField type='number' label="Restaurants" variant="filled" onChange={(e) => setRestaurants(e.target.value)}/>
        <TextField type='number' label="School" variant="filled" onChange={(e) => setSchool(e.target.value)}/>
        <TextField type='number' label="Bills" variant="filled" onChange={(e) => setBills(e.target.value)}/>
        <TextField type='number' label="Other" variant="filled" onChange={(e) => setOther(e.target.value)}/>

        <Button type='submit' color='secondary' variant='contained' style={{margin:50,position:'relative'}} >Start</Button>

      </Box>
      <p style={{color:'red',textAlign:'center',fontSize:20,marginBottom:'20%'}}>{missingTxt}</p>

    </>
  )


}







export default StartSaving;
