import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth'
import Logout from '../HeaderIcon'
import { Asidebar, Nav, NavLogo, NavLogoName } from './styles'

const MenuList = ({ children, show }: any) => {
    const {signOut} = useAuth()
    return (
        <Asidebar className={`${show ? 'show' : undefined}`}>
            <Nav>
                <div>
                    <NavLogo to='/' >
                        <FaHome className={`nav-logo-icon`}></FaHome>
                        <NavLogoName>Início</NavLogoName>
                    </NavLogo>

                    <div >
                        {children}
                    </div>
                </div>

                <Logout onClick={(e: any) => { signOut()}} />
            </Nav>
        </Asidebar>
    )
}

export default MenuList