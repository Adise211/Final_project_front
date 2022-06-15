import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Home.css';





const NavBar = (props) => {
  return (
      <nav className='navbar'>
        <Stack spacing={5} direction='row'>
            <Button component={Link} color='secondary' to='/' sx={{fontSize: 18,fontWeight: 'bold' }}>Home</Button>
            <Button component={Link} color='secondary' to='/signup' sx={{fontSize: 18,fontWeight: 'bold' }}>Signup</Button>
            <Button component={Link} color='secondary' to='/login' sx={{fontSize: 18,fontWeight: 'bold' }}>Login</Button>
            <Button component={Link} color='secondary' to='/guide' sx={{fontSize: 18,fontWeight: 'bold' }}>Guide</Button>
        </Stack>
      </nav>
  )
}


export default NavBar;
