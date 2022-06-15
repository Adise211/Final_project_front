import { Link } from "react-router-dom";
import {useContext, useState, useEffect} from 'react';
import {StatesFromAppCompon} from '../App';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import '../Main.css';
import Budgets from './Budgets';
import Menu from './Menu';











const Main = (props) => {
  const {userNameNow, setUserNameNow,
    showIncomes, setShowIncomes,
    showOutcomes,setShowOutcomes
  } = useContext(StatesFromAppCompon);

  // const [totalSaved, setTotalSaved] = useState(0);
  const [current_money, setCurrent_money] = useState(0);
  const navigate = useNavigate();



  const handleLogout = () => {
    navigate('/')
  }



  useEffect(() => {

      const sumIncomes = showIncomes.reduce((total,currentItem) => {
          return total + Number(currentItem.income_amount)
      },0);

      console.log(sumIncomes);



      const sumOutcomes = showOutcomes.reduce((total,currentItem) => {
          return total + Number(currentItem.outcome_amount)
      },0);
      console.log(sumOutcomes);
      setCurrent_money(sumIncomes - sumOutcomes)

  },[])




  // let date = new Date();
  // date.setMonth(date.getMonth())
  // let lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  // let lastDayOfLastMonth = lastDay.toISOString().substr(0, 10);
  // if (date == lastDay) {
  //   setTotalSaved(totalSaved + current_money)
  //   console.log('Is the last day of the month');
  // } else {
  //   console.log('Is not the last day!');
  // }






  return (
    < >
      <div style={{marginTop:'10%'}}>
        <Menu />
      </div>

      <h3 style={{position:'absolute',bottom:'92%',left:'35%'}}>Hello, {userNameNow.user_name}!</h3>

      <div className='total'>
        {
          current_money < 0
          ? <p>Your Total : <spam style={{color:'red'}}>{current_money}$</spam></p>
          : <p>Your Total : <spam style={{color:'green'}}>+ {current_money}$</spam> </p>
        }
      </div>

      <div>
      <Budgets />
      </div>
    </>
  )
}

export default Main;



// <div className='budget'>
//   {
//     show_Budget
//     ? show_Budget.map(item => {
//       return(
//         <div key={item.budget_id}>
//           <div className='cards'>
//             <h4>Rent</h4>
//             <p>{item.rent}$</p>
//           </div>
//           <div className='cards'>
//             <h4>Food</h4>
//             <p>{item.food}$</p>
//           </div>
//           <div className='cards'>
//             <h4>Leisure</h4>
//             <p>{item.leisure}$</p>
//           </div>
//           <div className='cards'>
//             <h4>Restaurants</h4>
//             <p>{item.restaurants}$</p>
//           </div>
//           <div className='cards'>
//             <h4>School</h4>
//             <p>{item.school}$</p>
//           </div>
//           <div className='cards'>
//             <h4>Bills</h4>
//             <p>{item.bills}$</p>
//           </div>
//           <div className='cards'>
//             <h4>Others</h4>
//             <p>{item.other}$</p>
//           </div>
//         </div>
//       )
//     })
//     : null
//   }
