import React from "react"
import './Header.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/header/Logotype.png'
import Login from '../../assets/header/login.png'
import IconMap from '../../assets/header/iconMap.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo__group">
                <img src={Logo} className="header__logo" alt='logo'/>
                <span className="header__title">ovBestiary</span>
            </div>
            <div className='header__buttons-container'>
                <Link to='/map' className='header__button'>
                    <img className="map__img" src={IconMap} alt='map logo'/>
                </Link>
                <button className="header__button">
                    <img className='profile__img' src={Login} alt='profile logo' />
                </button>
            </div>
        </header>
    )
}

export default Header