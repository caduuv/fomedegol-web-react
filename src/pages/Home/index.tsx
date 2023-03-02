import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Home/Sidebar';

const Home = () => {
    return (
        <div>
            <Sidebar>
                <Outlet />
            </Sidebar>
        </div>
    );
}

export default Home;