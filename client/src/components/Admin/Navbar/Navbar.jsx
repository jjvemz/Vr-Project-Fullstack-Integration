import {
    SearchOutlined,
    DarkModeOutlined,
    PersonOutline,
    Store,
    PersonAddAlt,
    FullscreenExitOutlined,
    NotificationsOutlined} from '@mui/icons-material'
;

import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import "./Navbar.scss"

const Navbar = () =>{
    const { dispatch } = useContext(DarkModeContext);
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input 
                    type="text" 
                    placeholder="Buscar.."/>
                    <SearchOutlined />
                </div>
                <div className='items'>
                    <div className='item'>
                        <DarkModeOutlined/>
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlined/>
                    </div>
                    <div className='item'>
                        <NotificationsOutlined/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;