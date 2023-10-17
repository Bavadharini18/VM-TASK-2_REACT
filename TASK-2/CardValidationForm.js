import React, { useState } from 'react';
import './CardValidationForm.css';
import { useNavigate } from "react-router-dom";
function CardValidationForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);


  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'expirationDate':
        setExpirationDate(value);
        break;
      case 'cvc':
        setCvc(value);
        break;
      case 'cardholderName':
        setCardholderName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Card number validation (Luhn algorithm)
    if (!isValidCardNumber(cardNumber)) {
      setValidationResult('Invalid card number.');
      navigate("/Security");
      return;

    }

    // Expiration date validation
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    const year = parseInt(expirationDate.split('/')[1], 10);
    const month = parseInt(expirationDate.split('/')[0], 10);

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setValidationResult('Card is expired.');
      return;
    }

    // CVC validation (3 digits)
    if (!/^\d{3}$/.test(cvc)) {
      setValidationResult('Invalid CVC.');
      return;
    }

    // Display success message
    setValidationResult(`Card is valid. Thank you, ${cardholderName}!`)
    navigate("/Security");
  };

  const isValidCardNumber = (cardNumber) => {
    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);

      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
  };

  return (
    <div className='details'>
     <p className='head'>New Payment Method</p>
    <div className='card-details'>
      <div className='cardnum'><label htmlFor="cardNumber">Card Number</label><br />
        <input
          type="text"
          className='cardNumber'
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          placeholder="XXXX-XXXX-XXXX-XXXX"
          onChange={handleInputChange}
          maxLength="16"
          required
        /><br /></div>
        <div className='expdate'><label htmlFor="expirationDate">Expiration</label><br/>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          value={expirationDate}
          placeholder="MM/YYYY"
          onChange={handleInputChange}
          maxLength="7"
          required
        /><br /></div>
        <div className='cvc'> <label htmlFor="cvc">CVC</label><br />
        <input
          type="text"
          id="cvc"
          name="cvc"
          value={cvc}
          placeholder="XXX"
          onChange={handleInputChange}
          maxLength="3"
          required
        /><br /></div>
       </div><br/>

       <div className='cardholder'><label htmlFor="cardholderName">Cardholder</label><br/>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={cardholderName}
          placeholder="Enter name on card"
          onChange={handleInputChange}
          required
        />
        <br/>
        <br/>
        </div>
        <div className='Add-new'>
      <button type="button" className='toggle-disabled'onClick={handleSubmit}>Add new Payment Method</button>
     {validationResult && <div id="result">{validationResult}</div>}
      

      </div>
      </div>
  );
}


export default CardValidationForm;