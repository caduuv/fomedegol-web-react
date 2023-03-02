import React, { useContext } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  AuthError, User } from '@firebase/auth';
import { auth } from '../services/firebase';

// Defina o tipo UserContextType para o contexto AuthContext
type UserContextType = {
  user: User | undefined;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  error: AuthError | undefined;
};

// Crie o contexto AuthContext
export const AuthContext = React.createContext<UserContextType>({
  user: undefined,
  signIn: async () => {},
  signOut: async () => {},
  loading: false,
  error: undefined,
});

// Crie o componente AuthProvider para envolver seus componentes filhos com o contexto AuthContext
export const AuthProvider = ({ children }: any) => {

  const [signInWithEmailAndPassword, credentials, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(email, password);
    };
  
    const signOut = async () => {
        await auth.signOut();
    };

  // Retorne o contexto AuthContext com os valores atuais do usuário e as funções signIn e signOut
  return (
    <AuthContext.Provider value={{ user: credentials?.user, signIn, signOut, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

