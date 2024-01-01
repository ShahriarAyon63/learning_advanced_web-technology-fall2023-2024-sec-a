"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const SubscriptionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubscription = handleSubmit(async (data) => {
    const { subscriptionName, amount } = data;
    const total= parseInt(amount)

    try {
      const response = await fetch('http://localhost:3000/subscription/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriptionName, total }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Subscription successful');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xs p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Subscription</h1>
        <form action="" onSubmit={handleSubscription}>
          <div className='mb-4'>
            <label htmlFor='subscriptionName' className='block text-sm font-medium text-gray-600'>
              Subscription Name
            </label>
            <input
              type='text'
              placeholder='Enter subscription name'
              className='input input-bordered input-md w-full'
              {...register('subscriptionName')}
            />
          </div>
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
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionPage;
