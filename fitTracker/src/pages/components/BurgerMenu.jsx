import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

import UserCard from './UserCard';

function BurgerMenu() {

    // eslint-disable-next-line no-unused-vars
    const [menuOpen, setMenuOpen] = useState(true)
    const [activeMenu, setActiveMenu] = useState(window.location.pathname.replace("/",""))
    /*
    function handleStateChange(state) {
        setMenuOpen(state.isOpen)
    }*/

    const handleClick = (section) => {
        setActiveMenu(section)
    }

    return (
        <div className='nav-bar'>
            <Menu width={'224px'} noTransition isOpen={menuOpen} disableCloseOnEsc noOverlay>

                <Link 
                    id="utilisateur" 
                    className={activeMenu === "utilisateur" ? "bg-blue-600 hover:bg-hoverMenu hover:underline" : "" } 
                    to="/"
                    onClick={() => handleClick("utilisateur")}
                >
                    <UserCard />
                </Link>

                <Link 
                    className={activeMenu === "programmes" ? "bg-blue-600 hover:bg-hoverMenu hover:underline" : "" }
                    to="/programmes" 
                    onClick={() => handleClick("programmes")} 
                >
                    Programmes
                </Link>

                <Link 
                    className={activeMenu === "seances" ? "bg-blue-600 hover:bg-hoverMenu hover:underline" : "" } 
                    to="/seances" 
                    onClick={() => handleClick("seances")} 
                >
                    Séances
                </Link>

                <Link 
                    className={activeMenu === "exercices" ? "bg-blue-600 hover:bg-hoverMenu hover:underline" : "" } 
                    to="/exercices" 
                    onClick={() => handleClick("exercices")}
                >
                    Exercices
                </Link>

            </Menu>
        </div>
    );
}

export default BurgerMenu;