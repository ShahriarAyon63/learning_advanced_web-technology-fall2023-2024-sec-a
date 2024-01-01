// src/pages/login.tsx
import { FC } from 'react';
import axios from 'axios';
import AuthForm from '../components/AuthForm';

const Login: FC = () => {
  const login = async (data: any) => {
    try {
      // Replace 'http://localhost:3000' with your backend server URL
      const response = await axios.post('http://localhost:3000/auth/login', data);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={login} />
    </div>
  );
};

export default Login;
