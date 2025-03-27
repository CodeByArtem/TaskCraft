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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log('Login data submitted:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register('email')} placeholder="Email" autoComplete="email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Пароль"
          autoComplete="current-password"
        />
        <button
          type="button"
          className="absolute right-3 top-1"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <button type="submit" className="bg-green-600 text-white py-2 rounded-xl">
        Войти
      </button>

      <GoogleAuthButton isRegister={false} />
    </form>
  );
};

export default LoginForm;
