
import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import StaffDashBoard from './Pages/StaffDashboard'
import EventsPage from './Pages/EventsPage'
import NoPage from './Pages/NoPage';
import ProfilePage from './Pages/ProfilePage';
import CalendarPage from './Pages/CalendarPage';
import DonationsPage from './Pages/DonationsPage';
import Dashboard from './Pages/Dashboard';
import Home from'./Home/Home'
import Register from './Home/Register'
import Login from './Home/Login'
import { MobileMoneyPaymentPage } from './Pages/MobileMoneyPaymentPage';







function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/staff' element={<StaffDashBoard/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/calendar' element={<CalendarPage/>}/>
        <Route path='/donations' element={<DonationsPage/>}/>
        <Route index element= {<Home/>}/>
        <Route path='/mobilepayment' element={<MobileMoneyPaymentPage/>}/>
        <Route index element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Log in' element={<Login/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
