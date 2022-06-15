// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import { FaMoneyBillAlt } from "react-icons/fa";
// import DraftsIcon from '@mui/icons-material/Drafts';
// import { Link } from "react-router-dom";
//
// export default function BasicList() {
//
//
//
//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <nav aria-label="main mailbox folders">
//         <h3>Hello user !</h3>
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component={Link} to='/main/startSaving'>
//               <ListItemIcon>
//                 <FaMoneyBillAlt />
//               </ListItemIcon>
//               <ListItemText primary="Start to save" />
//             </ListItemButton>
//           </ListItem>
//
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <DraftsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Drafts" />
//             </ListItemButton>
//           </ListItem>
//
//         </List>
//       </nav>
//       <Divider />
//       <nav aria-label="secondary mailbox folders">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemText primary="Trash" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemText primary="Spam" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//     </Box>
//   );
// }



import {useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {StatesFromAppCompon} from '../App';





export const Test = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const {show_Budget,setShowIncomes} = useContext(StatesFromAppCompon);
  const budgetList = show_Budget[0];
  const data = {
    labels: ['Rent', 'Food', 'Leisure', 'Restaurants', 'School', 'Bills','Others'],
    datasets: [
      {
        label: '# of Budget',
        data: [budgetList.rent, budgetList.food, budgetList.leisure, budgetList.restaurants, budgetList.school, budgetList.bills,budgetList.other],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}








//
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
//
// export default function IncomeForm() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField type='text' label="Income From" variant="filled" />
//       <TextField type='text' label="Amount" variant="filled" />
//       <TextField type='date'  variant="filled" />
//     </Box>
//   );
// }


// import ProgressBar from 'react-bootstrap/ProgressBar';
//
// function WithLabelExample() {
//   const now = 60;
//   return <ProgressBar now={now} label={`${now}%`} />;
// }
// export default WithLabelExample;
