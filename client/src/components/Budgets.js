import {useContext, useState, useEffect} from 'react';
import {StatesFromAppCompon} from '../App';
import {BudgetAlertError,BudgetAlertWarning} from './BudgetAlert';
import BudgetTable from './BudgetTable';




const Budgets = (props) => {

  const {userNameNow, setUserNameNow, showOutcomes,setShowOutcomes} = useContext(StatesFromAppCompon);
  const [food, setFood] = useState(0);
  const [rent,setRent] = useState(0);
  const [leisure,setLeisure] = useState(0);
  const [restaurants,setRestaurants] = useState(0);
  const [school,setSchool] = useState(0);
  const [bills,setBills] = useState(0);
  const [other,setOther] = useState(0);
  const [show_Budget,setShow_Budget] = useState([]);
  const [budget_alarm, setBudget_alarm] = useState('');

  console.log('logged user', userNameNow);

  useEffect(() => {
    const getUserBudget = async() => {
        try {
          const res = await fetch(`http://localhost:5000/savings/getbudget/${userNameNow.user_id}`);
          const data = await res.json();
          console.log(data);
          setShow_Budget(data)

        } catch (err) {
          console.log(err);
        }
    }


    getUserBudget();
  },[userNameNow])

console.log(show_Budget);


useEffect(() => {

      const usersBudget = async() => {
        console.log(show_Budget);
        try {
          // Get the orginal budget ----
          const rentBudget =  show_Budget[0]['rent'];
          const foodBudget =  show_Budget[0]['food'];
          const leisureBudget = show_Budget[0]['leisure'];
          const restBudget =  show_Budget[0]['restaurants'];
          const schoolBudget =  show_Budget[0]['school'];
          const billsBudget =  show_Budget[0]['bills'];
          const otherBudget = show_Budget[0]['other'];

          // Filter from outcomes -----
          const rentFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'rent'
          });
          const foodFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'food'
          });
          const leisureFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'leisure'
          });
          const restFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'restaurants'
          });
          const schoolFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'school'
          });
          const billsFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'bills'
          });
          const otherFilter = await showOutcomes.filter(item => {
            return item.outcome_type === 'other'
          });


          // Decrease outcome from orginal budget -----
            //1.Rent
          const rentSpends = rentFilter.reduce((total,currentItem) => {
              return total + Number(currentItem.outcome_amount)
          },0);
          console.log('All spends on rent',rentSpends);
          setRent(rentBudget - rentSpends)
           //2.Food
          const foodSpends = foodFilter.reduce((total,currentItem) => {
              return total + Number(currentItem.outcome_amount)
          },0);
          console.log('All spends on food',foodSpends);
          setFood(foodBudget - foodSpends)
            // 3. Leisure
          const leisureSpends = leisureFilter.reduce((total,currentItem) => {
              return total + Number(currentItem.outcome_amount)
          },0);
          console.log('All spends on leisure',leisureSpends);
          setLeisure(leisureBudget - leisureSpends)
            //4. Restaurants
            const restSpends = restFilter.reduce((total,currentItem) => {
                return total + Number(currentItem.outcome_amount)
            },0);
            console.log('All spends on restaurants',restSpends);
            setRestaurants(restBudget - restSpends)
              //5. school
              const schoolSpends = schoolFilter.reduce((total,currentItem) => {
                  return total + Number(currentItem.outcome_amount)
              },0);
              console.log('All spends on restaurants',schoolSpends);
              setSchool(schoolBudget - schoolSpends)
              //6. Bills
              const billsSpends = billsFilter.reduce((total,currentItem) => {
                  return total + Number(currentItem.outcome_amount)
              },0);
              console.log('All spends on bills',billsSpends);
              setBills(billsBudget - billsSpends)

              //7. Otheres
              const otherSpends = otherFilter.reduce((total,currentItem) => {
                  return total + Number(currentItem.outcome_amount)
              },0);
              console.log('All spends on others',otherSpends);
              setOther(otherBudget - otherSpends)
            } catch(err) {
              console.log(err);
            }

      }// End of function

      usersBudget();

},[showOutcomes,show_Budget])








  return(
    <>
      <div>
      {
        show_Budget !== []
        ?    <BudgetTable rent={rent} food={food} leisure={leisure}
                          restaurants={restaurants} school={school}
                          bills={bills} other={other} showBudget={show_Budget}/>
        : null
      }
      </div>

      <div>
      {
        food === 200  || rent === 200 || leisure === 200 || restaurants === 200 || school === 200 || bills === 200 || other === 200
        ? <BudgetAlertWarning />
        : null
      }
      </div>
      <div>
      {
        food <= 50  || rent <= 50 || leisure <= 50 || restaurants <= 50 || school <= 50 || bills <= 50 || other <= 50
        ? <BudgetAlertError />
        : null
      }
      </div>
    </>
  )
}


export default Budgets;




// <div style={{ backgroundColor:'coral',width:'40%',textAlign:'center',padding:'20px',position:'relative', left:'30vw'}}>
// <h3>Your budgets</h3>
// {
//   food  || rent || leisure || restaurants || school || bills || other
//   ?  <>
//     <p className='left'>left budget from food: {food}/{show_Budget[0]['food']}</p>
//     <p className='left'>{budget_alarm}</p>
//     <p className='left'>left budget from rent: {rent}/{show_Budget[0]['rent']}</p>
//     <p className='left'>left budget from leisure: {leisure}/{show_Budget[0]['leisure']}</p>
//     <p className='left'>left budget from restaurants: {restaurants}/{show_Budget[0]['restaurants']}</p>
//     <p className='left'>left budget from school: {school}/{show_Budget[0]['school']}</p>
//     <p className='left'>left budget from bills: {bills}/{show_Budget[0]['bills']}</p>
//     <p className='left'>left budget from other: {other}/{show_Budget[0]['other']}</p>
//
//     </>
//   : null
// }
// </div>
