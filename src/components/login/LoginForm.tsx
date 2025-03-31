import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/validationSchema';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import GoogleAuthButton from '../GoogleAuthButton';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log('Login data submitted:', data);
    reset();
  };

  // const handleForgotPassword = async (email: string) => {
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     setMessage('Password reset email sent!');
  //   } catch (error) {
  //     setMessage('Error resetting password!');
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register('email')}
        placeholder="Email"
        autoComplete="off"
        onBlur={() => trigger('email')}
        className="relative w-full p-3 text-sm leading-5 tracking-tight text-black bg-transparent border border-gray-400 rounded-xl outline-none focus:border-gray-600"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Пароль"
          autoComplete="off"
          onBlur={() => trigger('email')}
          className="relative w-full p-3 text-sm leading-5 tracking-tight text-black bg-transparent border border-gray-400 rounded-xl outline-none focus:border-gray-600"
        />
        <button
          type="button"
          className="absolute right-3 top-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
      >
        Войти
      </button>

      <GoogleAuthButton isRegister={false} />
      <button
        type="button"
        // onClick={() => handleForgotPassword()}
        className="text-blue-500 hover:text-blue-600"
      >
        Забыли пароль?
      </button>
    </form>
  );
};

export default LoginForm;
