import '../Main.css';
import { Link } from "react-router-dom";
import '../Home.css';

const Guide = (props) => {
  return (
    <div className='guidetext'>
      <div className='guidetitle'>
        <h1>Hello and welcome </h1>
        <h3> Here you can learn how to use our website in a few steps</h3>
        <h3>Let’s start ! </h3>
      </div>
      <ol>
        <li>First, you need to signup <Link to ='/signup'>here</Link>.</li>
        <li>After you finished signing up, you can login <Link to ='/login'>here</Link>.</li>
        <li>On the right side of the screen click on the option <spam style={{fontWeight:'bold'}}>Start to save</spam>.</li>
        <li>Fill out the form in order to generate your budget for every month and click send.</li>
        <li>You finished to create your budget!</li>
        <li>Now you can see your total amount on the main screen.</li>
        <li>Inside the incomes and expenses options, you can add your incomes and expenses every day of the month.</li>
        <li>Last, by adding your incomes and expenses the <spam style={{fontWeight:'bold'}}>Total amount </spam> will be update.</li>
      </ol>
    </div>
  )
}

export default Guide;
