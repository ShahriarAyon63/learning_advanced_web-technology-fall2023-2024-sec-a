"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = handleSubmit(async (data) => {
    const { name, email, password, rePassword, dob, gender } = data;
console.log(data)
    try {
      const response = await fetch('http://localhost:3000/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, rePassword, dob, gender }),
      });

      console.log(response);

      if (response.ok) {
        console.log('Sign Up successful');
      } else {
        console.error('Sign Up failed');
      }
    } catch (error) {
      console.error('Error during Sign Up:', error);
    }
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-md p-4 bg-white rounded-md shadow-md'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Sign Up</h1>
        <form action="" onSubmit={handleSignUp}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-600'>
              Name
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('name')}
            />
          </div>
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
            <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('password')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='rePassword' className='block text-sm font-medium text-gray-600'>
              Confirm Password
            </label>
            <input
              type='password'
              placeholder='Type here'
              className='input input-bordered input-md w-full'
              {...register('rePassword')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='dob' className='block text-sm font-medium text-gray-600'>
              Date of Birth
            </label>
            <input type='date' className='input input-bordered input-md w-full' {...register('dob')} />
          </div>
          <div className='mb-4'>
            <label htmlFor='gender' className='block text-sm font-medium text-gray-600'>
              Gender
            </label>
            <select className='select select-bordered select-md w-full' {...register('gender')}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <button type='submit' className='btn btn-sm btn-primary w-full text-white font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
