import { useState } from 'react';

interface MyComponentProps {
  onSuccessAction: () => void;
}

export default function RegisterForm({ onSuccessAction }: MyComponentProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={onSuccessAction}>Register</button>
    </form>
  );
}
