// src/pages/forget-password.tsx
import { FC } from 'react';
import axios from 'axios';
import AuthForm from '../components/AuthForm';

const ForgetPassword: FC = () => {
  const forgetPassword = async (data: any) => {
    try {
      // Replace 'http://localhost:3000' with your backend server URL
      const response = await axios.post('http://localhost:3000/auth/forget-password', data);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Forget Password</h1>
      <AuthForm onSubmit={forgetPassword} />
    </div>
  );
};

export default ForgetPassword;
