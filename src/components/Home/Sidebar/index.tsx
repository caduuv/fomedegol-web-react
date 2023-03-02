import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaHome, FaBars, FaArrowLeft} from 'react-icons/fa'
import './index.css';
import { useAuth } from '../../../contexts/auth';

const Sidebar = ({ children }: any) => {
    const {pathname} = useLocation();
    const [show, setShow] = React.useState(false);
    const { signOut } = useAuth();
    return (
        <div className={show ? 'space-toggle' : undefined}>
            <header className={`header ${show ? 'space-toggle' : undefined}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    {show ? <FaArrowLeft /> : <FaBars />}
                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : undefined}`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <FaHome className={`nav-logo-icon`}></FaHome>
                            <span className='nav-logo-name'>Início</span>
                        </Link>

                        <div className='nav-list'>
                            <Link to='/dashboard' className={`nav-link ${pathname === '/dashboard' ? `active` : undefined}`}>
                                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Dashboard</span>
                            </Link>
                        </div>
                    </div>

                    <div className='nav-link logout' onClick={() => {signOut()}}>
                        <i className='fas fa-sign-out nav-link-icon '></i>
                        <span className='nav-link-name'>Sair</span>
                    </div>
                </nav>
            </aside>
            {children}

        </div>
    )
}

export default Sidebar