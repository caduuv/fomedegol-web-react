import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoasVindas from '../components/Home/BoasVindas';
import { useAuth } from '../contexts/auth';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Private = ({ children }: { children: ReactNode }): any => {
    const { user } = useAuth();
    return user ? children : <SignIn />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private><Home /></Private>} >
                    <Route path="" element={<BoasVindas />} />
                    <Route path="dashboard" element={<h1>dashboard</h1>} />
                    <Route path="page1" element={<h1>page1</h1>} />
                    <Route path="page2" element={<h1>page2</h1>} />
                    <Route path="page3" element={<h1>page3</h1>} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;