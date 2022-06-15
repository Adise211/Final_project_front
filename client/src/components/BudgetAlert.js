import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export function BudgetAlertError() {
  return (
    <Stack sx={{ width: '50%',position:'relative',bottom:'70vh',left:'25vw',border:'1px black solid'}} spacing={2}>
      <Alert severity="error">Budget Alert - You ran out from one of the budgets!</Alert>
    </Stack>
  );
}


export function BudgetAlertWarning() {
  return (
    <Stack sx={{ width: '50%',position:'relative',bottom:'70vh',left:'25vw',border:'1px black solid'}} spacing={2}>
      <Alert severity="warning">Budget Alert - please pay attention to your budgets!</Alert>
    </Stack>
  );
}
