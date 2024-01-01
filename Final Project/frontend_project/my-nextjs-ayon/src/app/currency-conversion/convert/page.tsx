"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const CurrencyConversionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConversion = handleSubmit(async (data) => {
    const { amount } = data;
    const total= parseInt(amount)

    try {
      const response = await fetch('http://localhost:3000/currency-conversion/currency-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Conversion successful');
      } else {
        console.error('Conversion failed');
      }
    } catch (error) {
      console.error('Error during conversion:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xs p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Currency Conversion</h1>
        <form action="" onSubmit={handleConversion}>
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
          <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
            Convert
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConversionPage;
