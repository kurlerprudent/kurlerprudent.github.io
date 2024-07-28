import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DonationsContainer from '../components/DonationsContainer';
import { Box } from '@mui/material';
import PaymentType from '../components/PaymentType';

const DonationsPage = () => {

  const paymentTypeRef = useRef(null);


  const scrollToPaymentType = () => {
    if (paymentTypeRef.current) {
      paymentTypeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Navbar />
        <Sidebar />
        
        <div onClick={scrollToPaymentType}>
          <DonationsContainer />
        </div>
        
        <div style={{display:'flex', justifyContent:'center',alignItems:'center'}} ref={paymentTypeRef}>
          <PaymentType />
        </div>
      </Box>
    </>
  );
}

export default DonationsPage;
