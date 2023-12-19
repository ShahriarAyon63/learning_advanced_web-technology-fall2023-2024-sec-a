// pages/bill-payment.js
import { useState } from 'react';
import BillPaymentForm from '../components/BillPaymentForm';

export default function BillPayment() {
  const [paymentResult, setPaymentResult] = useState(null);

  const handlePayBill = async (paymentDetails) => {
    try {
      // Call the backend API to pay the bill
      const response = await fetch('/api/bill-payment/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (response.ok) {
        const result = await response.json();
        setPaymentResult(result);
      } else {
        // Handle error response from the backend
        console.error('Failed to pay the bill');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Crab Farming Money Transaction - Bill Payment</h1>
      <BillPaymentForm onPayBill={handlePayBill} />

      {paymentResult && (
        <div>
          <h3>Payment Result</h3>
          <p>Payment successful! Transaction ID: {paymentResult.id}</p>
        </div>
      )}
    </div>
  );
}
