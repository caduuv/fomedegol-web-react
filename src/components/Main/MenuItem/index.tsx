import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CustomNavLink } from './styles';


const MenuItem = ({children, path, icon} : any) => {
    const { pathname } = useLocation();
    return (
        <CustomNavLink to={path} className={pathname === path ? `active` : ``}  >
            
            <i>{icon}</i>
            <span>{children}</span>

        </CustomNavLink>
    )
}

export default MenuItem