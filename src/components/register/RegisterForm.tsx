import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validation/validationSchema';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import GoogleAuthButton from '../GoogleAuthButton';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register data:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register('name')} placeholder="Имя" autoComplete="name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" autoComplete="email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Пароль"
          autoComplete="new-password"
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

      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          placeholder="Подтвердите пароль"
          autoComplete="new-password"
        />
        <button
          type="button"
          className="absolute right-3 top-1"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button type="submit" className="bg-green-600 text-white py-2 rounded-xl">
        Регистрация
      </button>

      <GoogleAuthButton isRegister={true} />
    </form>
  );
};

export default RegisterForm;
