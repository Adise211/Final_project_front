// import INSERT_BUDGET from './actions';
// import INSERT_INCOMES from './actions.js';

const initState =  {
  incomes:''


}




export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'INSERT_INCOMES':
      return {...state,incomes:action.payload}
    default:
      return {...state}

  }
}
