import React from "react";
import './Payment.css';
import CardValidationForm from "./CardValidationForm";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import visa from "./294654_visa_icon.png";
import mastercard from "./Mastercard_logo.jpg";
import Box from '@mui/material/Box';

const Payment= () => {
  return (
    <div className="row">
        <div className="col-4 sidebar">
            ppp
        </div>
    <div className="col-7 main_content">
    <p className="font">Payment Method</p>    
        <div className="main-container">
  <div className="section1">
    <p className="head">Connected Payment Methods </p>
    <div class="flex-container">
  <div class="flex-item-left"><div className="left">
  <p><b>**** **** **** 4629</b><br/>
    12/25<br/>Jane Robertson</p>
  </div>
  <div className="right"><MoreVertIcon/>
  <img src={visa} className="visa-img"/></div>
   </div>
  <div class="flex-item-right"><div className="left">
  <p><b>**** **** **** 9372</b><br/>
    10/23<br/>Jane Robertson</p>
  </div><div className="right">
    <MoreVertIcon/><img src={mastercard} className="master-img"/></div>
  </div></div> 
        </div>
        <CardValidationForm/>
      </div>
</div>  
  </div>
 
      
   );
};


export default Payment;