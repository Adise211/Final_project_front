import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import '../Home.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import LinearWithValueLabel from './Test';
import ProgressBar from 'react-bootstrap/ProgressBar';









const Home = (props) => {
  const navigate = useNavigate();

  const handleGuide = () => {
    navigate('/guide')
  }








  return(
    <div className='homebody'>
      <p className='logo'>EndlessBudgets</p>
      <div className='hometext'>
        <h1>Start to save every month</h1>
        <h3>Easy,Convenient and Quick</h3>
        <Button variant="contained" color='secondary' style={{marginTop:'100px'}} onClick={handleGuide}>Learn how to use us</Button>
      </div>

      <div className='icons'>
        <p>Copyrights: @EndlessBudgets, 2022 </p>
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaWhatsapp />
      </div>
    </div>
  )
}


export default Home;
