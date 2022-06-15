import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import StartSaving from './components/StartSaving';
import Main from './components/Main';
import Incomes from './components/Incomes';
import Outcomes from './components/Outcomes';
import Calculator from './components/Calculator';
import Budgets from './components/Budgets';
import Guide from './components/Guide';
import {useState, createContext, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';




export const StatesFromAppCompon = createContext(null);


function App() {
  const [users, setUsers] = useState([]);
  const [userNameNow, setUserNameNow] = useState(null);
  const [showIncomes,setShowIncomes] = useState([]);
  const [showOutcomes,setShowOutcomes] = useState([]);
  const [show_Budget,setShow_Budget] = useState([]);



  useEffect(() => {

    const displayUsersInfoForTest = async() => {
        try {
          const res = await fetch('/user');
          const data = await res.json();
          console.log(data);
          setUsers(data)

        } catch (err) {
          console.log(err);
        }
    }

  displayUsersInfoForTest();


  },[])

// incomes
  useEffect(() => {

    const displayIncomes = async() => {
        try {
          console.log(userNameNow.user_id);
          const res = await fetch(`/getincomes/${userNameNow.user_id}`);
          const data = await res.json();
          console.log(data);
          setShowIncomes(data)

        } catch (err) {
          console.log(err);
        }
    }

  displayIncomes();
},[userNameNow])

// outcomes
  useEffect(() => {
    const displayOutcomes = async() => {
        try {
          const res = await fetch(`/getoutcomes/${userNameNow.user_id}`);
          const data = await res.json();
          console.log(data);
          setShowOutcomes(data)

        } catch (err) {
          console.log(err);
        }
    }

  displayOutcomes();
  },[userNameNow])









  return (
    <BrowserRouter>
      <ErrorBoundary>
      <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<StatesFromAppCompon.Provider value={{users, setUsers,userNameNow, setUserNameNow }}><SignUp/></StatesFromAppCompon.Provider>} />
        <Route path='/login' element={<StatesFromAppCompon.Provider value={{users, setUsers, userNameNow, setUserNameNow}}><LogIn/></StatesFromAppCompon.Provider>} />
        <Route path='/guide' element={<Guide/>} />
        <Route path='/main/startSaving' element={<StartSaving/>} />
        <Route path='/main' element={<StatesFromAppCompon.Provider value={{users, setUsers,userNameNow, setUserNameNow, showIncomes,setShowIncomes,showOutcomes,setShowOutcomes }}><Main/></StatesFromAppCompon.Provider>} />
        <Route path='/main/incomes' element={<StatesFromAppCompon.Provider value={{userNameNow, setUserNameNow, showIncomes,setShowIncomes }}><Incomes/></StatesFromAppCompon.Provider>} />
        <Route path='/main/outcomes' element={<StatesFromAppCompon.Provider value={{userNameNow, setUserNameNow ,showOutcomes,setShowOutcomes}}><Outcomes/></StatesFromAppCompon.Provider>} />
        <Route path='/main/calculator' element={<Calculator/>} />
        <Route path='/main/userbudget' element={<StatesFromAppCompon.Provider value={{userNameNow, setUserNameNow, showOutcomes,setShowOutcomes }}><Budgets/></StatesFromAppCompon.Provider>} />
      </Routes>
      </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;


// If user logged in or not :
// <Route exact path="/">
//   {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>
