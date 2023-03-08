import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Main/Sidebar';

const Home = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet />
        </div>
    );
}

export default Home;