"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const BillPaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePayment = handleSubmit(async (data) => {
    const { amount, billerId, paymentMethod } = data;
    const money = parseInt(amount);
    console.log(money, billerId, paymentMethod);
    try {
      const response = await fetch('http://localhost:3000/bill-payment/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ money, billerId, paymentMethod }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Payment successful');
      } else {
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xs p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Bill Payment</h1>
        <form action="" onSubmit={handlePayment}>
          <div className='mb-4'>
            <label htmlFor='amount' className='block text-sm font-medium text-gray-600'>
              Amount
            </label>
            <input
              type='number'
              placeholder='Enter amount'
              className='input input-bordered input-md w-full'
              {...register('amount')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='billerId' className='block text-sm font-medium text-gray-600'>
              Biller ID
            </label>
            <input
              type='text'
              placeholder='Enter Biller ID'
              className='input input-bordered input-md w-full'
              {...register('billerId')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='paymentMethod' className='block text-sm font-medium text-gray-600'>
              Payment Method
            </label>
            <select
              className='select select-bordered select-md w-full'
              {...register('paymentMethod')}
            >
              <option value='bkash'>bKash</option>
              <option value='nogod'>Nagad</option>
              <option value='bank'>Bank Transfer</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillPaymentPage;
