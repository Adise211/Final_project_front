import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SavingsIcon from '@mui/icons-material/Savings';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CalculateIcon from '@mui/icons-material/Calculate';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/main/startSaving'>
            <ListItemText primary="Start saving" />
              <ListItemIcon>
               <SavingsIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/main/incomes'>
            <ListItemText primary="Incomes" />
              <ListItemIcon>
                <MoneyIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/main/Outcomes'>
            <ListItemText primary="Expenses" />
              <ListItemIcon>
                <ArrowCircleDownIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/main/calculator'>
            <ListItemText primary="Calculator" />
              <ListItemIcon>
                <CalculateIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>

      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/'>
            <ListItemText primary="Logout" />
              <ListItemIcon>
                <SentimentVeryDissatisfiedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['Click Here For Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" color="secondary">{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
