// pages/signup.tsx

import axios from 'axios';
import AuthForm from '../components/AuthForm';

const SignUp= () => {
  const signUp = async (data: any) => {
    try {
      // Replace 'http://localhost:3000' with your backend server URL
      const response = await axios.post('http://localhost:3000/auth/sign-up', data);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <AuthForm onSubmit={signUp} />
    </div>
  );
};

export default SignUp;
