"use client"
import { useState } from 'react';
import UserProfile from "@/components/profil/Profil";
import RegisterForm from "@/components/registration/Registration";


export default function AuthPage() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    return (
        <div className="flex flex-col items-center">
            {user ? (
                <UserProfile user={user} />
            ) : (
                <RegisterForm onSuccessAction={() => setUser({ name: 'John Doe', email: 'john@example.com' })} />
            )}
        </div>
    );
}
