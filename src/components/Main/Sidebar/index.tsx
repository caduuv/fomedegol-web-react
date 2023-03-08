import React from 'react'
import { FaBars, FaArrowLeft, FaTachometerAlt, FaUserAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useAuth } from '../../../contexts/auth';
import {SidebarWrapper, Header, HeaderToggle, ActionsWrapper} from './styles'
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';
import HeaderIcon from '../HeaderIcon';



const Sidebar = () => {
    const [show, setShow] = React.useState(false);
    const { signOut } = useAuth()
    return (
        
        <SidebarWrapper show={show}>
            <Header show={show}>
                <HeaderToggle onClick={() => setShow(!show)}>
                    {show ? <FaArrowLeft /> : <FaBars />}
                </HeaderToggle>
                <ActionsWrapper>
                    <HeaderIcon onClick={(e: any) => { }} ><FaUser/></HeaderIcon>
                    <HeaderIcon onClick={(e: any) => { signOut()}} ><FaSignOutAlt /></HeaderIcon>
                </ActionsWrapper>
                
            </Header>

            <MenuList show={show}>
                <MenuItem path='/dashboard' icon={<FaTachometerAlt/>} >Dashboard</MenuItem>
                <MenuItem path='/usuarios' icon={<FaUserAlt/>} >Usuários</MenuItem>
            </MenuList>

        </SidebarWrapper>
    )
}

export default Sidebar