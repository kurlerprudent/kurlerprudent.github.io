
import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import StaffDashBoard from './Pages/StaffDashboard'
import MembershipDashboard from './Pages/MembershipDashboard'
import NoPage from './Pages/NoPage';
import ProfilePage from './Pages/ProfilePage';







function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<MembershipDashboard/>}/>
        <Route path='/staff' element={<StaffDashBoard/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
