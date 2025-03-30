import React, { useState } from 'react';
import LoginForm from './login/LoginForm';
import RegisterForm from './register/RegisterForm';

const AuthSwitcher: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
      <p className="text-2xl font-extrabold mb-4 uppercase text-green-700">
        Task Craft
      </p>
      <div className="flex justify-between mb-4">
        <button
          className={`text-lg font-bold ${
            isRegister ? 'text-green-700' : 'text-gray-500'
          }`}
          onClick={() => setIsRegister(true)}
        >
          Регистрация
        </button>
        <button
          className={`text-lg font-bold ${
            !isRegister ? 'text-green-700' : 'text-gray-500'
          }`}
          onClick={() => setIsRegister(false)}
        >
          Вход
        </button>
      </div>

      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};

export default AuthSwitcher;
