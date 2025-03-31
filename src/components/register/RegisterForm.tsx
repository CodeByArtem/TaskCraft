import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/validation/validationSchema';
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
    trigger,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register data:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register('name')}
        placeholder="Имя"
        autoComplete="off"
        onBlur={() => trigger('name')}
        className="relative w-full p-3 text-sm leading-5 tracking-tight text-black bg-transparent border border-gray-400 rounded-xl outline-none focus:border-gray-600"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
          onBlur={() => trigger('password')}
          className="relative w-full p-3 text-sm leading-5 tracking-tight text-black  border border-gray-400 rounded-xl outline-none focus:border-gray-600"
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

      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'confirmPassword'}
          {...register('confirmPassword')}
          placeholder="Подтвердите пароль"
          autoComplete="off"
          onBlur={() => trigger('confirmPassword')}
          className="relative w-full p-3 text-sm leading-5 tracking-tight text-black bg-transparent border border-gray-400 rounded-xl outline-none focus:border-gray-600"
        />
        <button
          type="button"
          className="absolute right-3 top-4"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
      >
        Регистрация
      </button>

      <GoogleAuthButton isRegister={true} />
    </form>
  );
};

export default RegisterForm;
