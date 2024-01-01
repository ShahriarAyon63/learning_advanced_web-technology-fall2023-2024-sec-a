"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResetPassword = handleSubmit(async (data) => {
    const { email, newPassword, rePassword } = data;

    try {
      const response = await fetch('http://localhost:3000/auth/forget-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword, rePassword }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Password reset successful');
      } else {
        console.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xs p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Forget Password</h1>
        <form action="" onSubmit={handleResetPassword}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('email')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='newPassword' className='block text-sm font-medium text-gray-600'>
              New Password
            </label>
            <input
              type='password'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('newPassword')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='rePassword' className='block text-sm font-medium text-gray-600'>
              Confirm New Password
            </label>
            <input
              type='password'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('rePassword')}
            />
          </div>
          <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
