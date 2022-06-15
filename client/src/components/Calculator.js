import {useState} from 'react';
// import '../Calculator.css';




const Calculator = () => {

  const arr = [1,2,3,4,5,6,7,8,9]
  const [cal,setCal] = useState('');
  const [result, setResult] = useState('');
  const operator = ['/','*','+','-','.'];

  // Display numbers and operators
  const updateCal = (value) => {
    if (
      (operator.includes(value) && cal === '' )||
      ( operator.includes(value) && operator.includes(cal.slice(-1))) ) {
      return;
    }

    setCal(cal + value)

    if (!operator.includes(value)) {
      setResult(eval(cal + value).toString());
    }
  }

  // Equel button
  const calculateAll = () => {
    setCal(eval(cal).toString());
  }

  // AC button (delete)
  const deleteButton = () => {
    if (cal === '') {
      return;
    }

    const newValue = cal.slice(0, -1)
    setCal(newValue)
    setResult(newValue)

  }






  return (
    <div className='calculator'>
      <div className='display'>
        {result ? <span>({result})</span> : ''}
        { cal || 0 }
        </div>
        <div className='operators'>
          <button onClick={deleteButton} className='top ac'>AC</button>

          <button onClick={() => updateCal('+')} className='top'>+</button>
          <button onClick={() => updateCal('-')} className='top'>-</button>
          <button onClick={() => updateCal('*')} className='top'>*</button>
          <button onClick={() => updateCal('/')} className='top'>/</button>
        </div>

        <div className='digits'>
          {
            arr.map((item,i) => {
              return (
                  <button key={i} onClick={() => updateCal(item.toString())}>{item}</button>
              )
            })
          }
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>

          <button onClick={calculateAll}>=</button>

        </div>


    </div>
  )
}




export default Calculator;
