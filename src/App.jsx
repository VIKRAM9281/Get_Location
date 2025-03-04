// import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import MainPage from './GetLocationApp/Mainpage';
// import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import Contact from './pages/Contact'
// import Login from './Forms/Login';
// import SignUp from './Forms/SignUp';
// import { useEffect, useState } from 'react';

function App() {
  // const [IsLoggedIn,setIsLoggedIn]=useState(false);

  // useEffect(()=>{
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     setIsLoggedIn(true);
  //     }
  // },[IsLoggedIn])
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes> */}
    <MainPage/>
    </>
  )
}

export default App
