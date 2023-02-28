import { Fragment, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Private = ({ children } : {children : ReactNode} ) : any => {
    const { user } = useAuth();
    return user ? children : <SignIn />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private><Home /></Private>} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<h1>404 - Not Found</h1>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;