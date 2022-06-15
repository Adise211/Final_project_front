



export const incomeName = (value) => {
  console.log(value);
  return {
    type: 'INSERT_INCOMES',
    payload: value
  }
}


export const incomeAmount = (number) => {
  console.log(number);
  return {
    type: 'INSERT_INCOMES',
    payload: number
  }
}
