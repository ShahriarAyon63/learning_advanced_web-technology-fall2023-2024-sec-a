"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  
  const handleLogin = handleSubmit(async(data) => {
    const { email, password } = data;
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
console.log(response)
      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  
  
  
  
  )
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xs p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Login</h1>
        <form action="" onSubmit={handleLogin}>        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
            Email
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered input-md w-full'
            {...register("email")}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
            Password
          </label>
          <input
            type='password'
            placeholder='Type here'
            className='input input-bordered input-md w-full'
            {...register("password")}
          />
        </div>
        <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
          Submit
        </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
