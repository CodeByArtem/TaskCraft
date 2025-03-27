import React from 'react';
import { FcGoogle } from 'react-icons/fc';

interface GoogleAuthButtonProps {
  isRegister: boolean;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ isRegister }) => {
  const handleGoogleAuth = () => {
    console.log('Google Authentication triggered');
  };

  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="flex items-center justify-center gap-2 border py-2 rounded-xl text-sm hover:bg-gray-100"
    >
      <FcGoogle />
      {isRegister ? 'Регистрация с Google' : 'Войти с Google'}
    </button>
  );
};

export default GoogleAuthButton;
