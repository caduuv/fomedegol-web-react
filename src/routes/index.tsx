import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '../components/Common/Container';
import BoasVindas from '../pages/BoasVindas';
import InitialLoading from '../components/Inicial/InitialLoading';
import { useAuth } from '../contexts/auth';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Private = ({ children }: { children: ReactNode }): any => {
    const { user, loading } = useAuth();
    return user ? children : user === undefined ? <InitialLoading /> : <SignIn />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private><Home /></Private>} >
                    <Route path="" element={<BoasVindas />} />
                    <Route path="dashboard" element={<Container>dashboard</Container>} />
                    <Route path="usuarios" element={<Container>usuarios</Container>} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;