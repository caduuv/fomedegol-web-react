import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e: any) => {
        e.preventDefault()
        await signIn("ceduardovidalf@gmail.com", "123456");
        navigate('/home');
    }

    return (
        <div>
        <h1>SignIn</h1>
        <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;