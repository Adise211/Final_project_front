import {useState, useContext } from 'react';
import {StatesFromAppCompon} from '../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";








const SignUp = (props) =>  {
  const {users, setUsers} = useContext(StatesFromAppCompon);
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [user_name, setUser_name] = useState('');
  const [psw, setPsw] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm_psw, setConfirm_psw] = useState('');
  const [message, setMessage] =useState('');
  const navigate = useNavigate();







  const addNewUser = (e) => {
    e.preventDefault();

    if (psw !== confirm_psw) {
      setMessage('Please make sure to insert the same password !')
    } else {
      fetch('http://localhost:5000/savings',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({full_name,email,user_name,psw,phone,confirm_psw})
      })
      .then(res=> res.json())
      .then(data => {
        // console.log('data',data);
        if (data.user) {
          alert(data.user)
        } else {
          // console.log('users', users);
          users.push(data[0])
          setUsers([...users])
        }

      })
      .catch(err => {
        console.log(err);
      })
    }

    alert('Signedup successfully, welcome!');
    navigate('/login');


}







    return (
      <>
          <h1 style={{position:'relative',left:'650px'}}>Signup</h1>
          <div className='container'>
            <Box component='form' sx={{ml:70,my:7, display:'flex', flexDirection: 'column', width: 300 }} onSubmit={addNewUser} noVaildate autoComplete='off'>
                <TextField sx={{m:1}} type='text' label='Full name' color='secondary' variant='outlined' onChange={(e) => setFull_name(e.target.value)}/>
                <TextField sx={{m:1}} type='email' label='Email' color='secondary' variant='outlined' onChange={(e) => setEmail(e.target.value)}/>
                <TextField sx={{m:1}} type='number' label='Phone' color='secondary' variant='outlined' onChange={(e) => setPhone(e.target.value)}/>
                <TextField sx={{m:1}} type='text' label='User name' color='secondary' variant='outlined' onChange={(e) => setUser_name(e.target.value)}/>
                <TextField sx={{m:1}} type='password' label='Password' color='secondary' variant='outlined' onChange={(e) => setPsw(e.target.value)}/>
                <TextField sx={{m:1}} type='password' label='Confirm pass' color='secondary' variant='outlined' onChange={(e) => setConfirm_psw(e.target.value)}/>
                <Button type='submit' color='secondary' variant='contained' className='signup'>Signup</Button>
              </Box>
            </div>
            <p style={{color:'red'}}>{message}</p>
        </>
    )


}





export default SignUp;
