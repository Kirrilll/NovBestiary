import React from "react";
import '../Header/Header.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/header/Logotype.png'
import Login from '../../assets/header/login.png'
import IconMap from '../../assets/header/iconMap.png'

const Header = () =>{
    return (
        <header className = "header">
            <div className = "title-group">
                <span className = "title-group__wrapper">
                    <img src = {Logo} className = "logo" />
                </span>
                <h3 className = "title-group__title">ovBestiary</h3>
            </div>
            <div className = 'auth-group'>
                <Link to='/map' className='header__link'>
                    <img className = "map__img" src = {IconMap}/>
                </Link>
                <button className = "signup-btn">
                    <img className = 'sigup-btn__img' src = {Login}/>
                </button>
            </div>      
        </header>
    )
}

export default Header