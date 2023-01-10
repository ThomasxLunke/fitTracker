import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

import UserCard from './UserCard';

function BurgerMenu() {

    const [menuOpen, setMenuOpen] = useState()

    function handleStateChange(state) {
        setMenuOpen(state.isOpen)
    }
    console.log("eeee")

    return (
        <div className='nav-bar'>

            <Menu isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)} >
                <Link id="utilisateur" onClick={() => { setMenuOpen(false) }} to="/"><UserCard /></Link>
                <Link onClick={() => { setMenuOpen(false) }} to="/programmes">Programmes</Link>
                <Link onClick={() => { setMenuOpen(false) }} to="/seances">Séances</Link>
                <Link onClick={() => { setMenuOpen(false) }} to="/exercices">Exercices</Link>
            </Menu>
        </div>
    );
}

export default BurgerMenu;