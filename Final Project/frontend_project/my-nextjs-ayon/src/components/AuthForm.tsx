// components/AuthForm.tsx
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type AuthFormProps = {
  onSubmit: (data: any) => void;
};

const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="text" {...register('email', { required: true })} />
      </label>
      <label>
        Password:
        <input type="password" {...register('password', { required: true })} />
      </label>
      {/* Additional fields for signup and forget-password */}
      {/* <label>
        Confirm Password:
        <input type="password" {...register('rePassword', { required: true })} />
      </label> */}
      {/* Other fields for signup and forget-password */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
