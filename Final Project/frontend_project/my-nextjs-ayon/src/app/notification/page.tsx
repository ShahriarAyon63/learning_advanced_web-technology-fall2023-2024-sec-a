"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const NotificationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNotification = handleSubmit(async (data) => {
    const { userId, message, notificationType } = data;

    try {
      const response = await fetch('http://localhost:3000/notification/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, message, notificationType }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Notification sent successfully');
      } else {
        console.error('Notification sending failed');
      }
    } catch (error) {
      console.error('Error during notification sending:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-md p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Notifications</h1>
        <form action="" onSubmit={handleNotification}>
          <div className='mb-4'>
            <label htmlFor='userId' className='block text-sm font-medium text-gray-600'>
              User ID
            </label>
            <input
              type='number'
              placeholder='Enter user ID'
              className='input input-bordered input-md w-full'
              {...register('userId')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-600'>
              Message
            </label>
            <textarea
              rows={4}
              placeholder='Enter notification message'
              className='textarea textarea-bordered textarea-md w-full'
              {...register('message')}
            ></textarea>
          </div>
          <div className='mb-4'>
            <label htmlFor='notificationType' className='block text-sm font-medium text-gray-600'>
              Notification Type
            </label>
            <select
              className='select select-bordered select-md w-full'
              {...register('notificationType')}
            >
              <option value='billPayment'>Bill Payment</option>
              <option value='authenticationUpdate'>Authentication Update</option>
              <option value='subscriptionManagement'>Subscription Management</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationPage;
