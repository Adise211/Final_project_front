import {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {StatesFromAppCompon} from '../App';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




const LogIn = (props) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPsw, setUserPsw] = useState('');
  const [notExistTxt, setNotExistTxt] = useState('');
  const {userNameNow, setUserNameNow} = useContext(StatesFromAppCompon);



  const login = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/savings/loginuser',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:userEmail,password:userPsw})
    })
    .then(res=> res.json())
    .then(data => {
      setUserNameNow(data[0])

        if (data.msg) {
          setNotExistTxt(data.msg)
        } else {
          console.log(data[0]);
          navigate('/main');
        }

    })
    .catch(err => {
      console.log(err);
    })

}







  return (
    < >
      <div className='container'>
        <h1 style={{position:'relative',left:'650px'}}>Login</h1>
        <Box component='form' sx={{ml:70,my:10, display:'flex', flexDirection: 'column', width: 300 }} onSubmit={login} noVaildate autoComplete='off'>
            <TextField sx={{m:1}} type='email' label='Email' color='secondary' variant='outlined' onChange={(e) => setUserEmail(e.target.value)}/>
            <TextField sx={{m:1}} type='password' label='Password' color='secondary' variant='outlined' onChange={(e) => setUserPsw(e.target.value)}/>
            <Button type='submit' color='secondary' variant='contained' sx={{ml:0}}>Login</Button>
          </Box>
        <p style={{color:'red'}}>{notExistTxt}</p>
      </div>
    </>

  )
}

// To transfet the table is_user_login to here .
// To change the state is_user_login to true if the user click on Login button
// ** Don't forget : check if user insert value in every input , if not send alert !
// navigate('/main')
export default LogIn;

// <Box sx={{ml:70,my:7, display:'flex', flexDirection: 'column', width: 300}} noVaildate autoComplete='off'>
//   <TextField sx={{m:1}} type='email' label='Email' color='secondary' variant='outlined' onChange={(e) => setUserEmail(e.target.value)}/>
//   <TextField sx={{m:1}} type='password' label='Password' color='secondary' variant='outlined' onChange={(e) => setUserPsw(e.target.value)}/>
// </Box>
// </form>
// <Button type='submit' color='secondary' variant='contained' sx={{ml:82}}>Login</Button>
