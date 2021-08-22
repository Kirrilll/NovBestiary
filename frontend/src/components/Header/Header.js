import React, {useState} from "react"
import {Link} from "react-router-dom"

import logo from '../../assets/header/Logotype.svg'
import './Header.css'
import {Login} from "../Modals/LoginModal"
import {Register} from "../Modals/RegisterModal"
import {StartModal} from "../Modals/StartModal"


const Header = () => {
    const myStorage = window.localStorage
    const [currentUser, setCurrentUser] = useState(myStorage.getItem('user'))
    const [showModal, setShowModal] = useState(null)

    const handleLogout = () => {
        myStorage.removeItem('user')
        setCurrentUser(null)
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/home'>
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className='header__links'>
                    <a className='header__link' href="#">О Новгороде</a>
                    <a className='header__link' href='#'>Карта</a>
                    <a className='header__link' href="#">Легенды</a>
                    <a className='header__link' href="#">Информация</a>
                </nav>
                <Link to='/map' className='header__button'>Интерактивная карта</Link>
            </div>
            <button onClick={() => setShowModal('start')} className="header__profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" fill="#B1E3FF"/>
                    <path d="M55.284 50.712C53.892 49.612 52.196 48.82 50.356 48.436L41.584 46.676C40.664 46.5 40 45.676 40 44.716V42.704C40.564 41.912 41.096 40.86 41.652 39.76C42.084 38.908 42.736 37.624 43.06 37.292C44.836 35.508 46.552 33.504 47.084 30.92C47.58 28.496 47.092 27.224 46.52 26.2C46.52 23.644 46.44 20.444 45.836 18.116C45.764 14.964 45.192 13.192 43.752 11.64C42.736 10.54 41.24 10.284 40.036 10.08C39.564 10 38.912 9.888 38.672 9.76C36.54 8.608 34.432 8.044 31.916 8C26.648 8.216 20.172 11.568 18.004 17.544C17.332 19.364 17.4 22.352 17.456 24.752L17.404 26.196C16.888 27.204 16.38 28.484 16.88 30.916C17.408 33.504 19.124 35.512 20.932 37.32C21.228 37.624 21.896 38.92 22.336 39.776C22.9 40.872 23.436 41.92 24 42.708V44.72C24 45.676 23.332 46.5 22.408 46.68L13.628 48.44C11.8 48.828 10.104 49.612 8.71601 50.712C8.28401 51.06 8.01201 51.568 7.96801 52.12C7.92401 52.672 8.10801 53.212 8.48001 53.624C14.456 60.216 23.028 64 32 64C40.972 64 49.548 60.22 55.52 53.624C55.892 53.212 56.08 52.668 56.032 52.116C55.988 51.564 55.716 51.056 55.284 50.712Z" fill="#5D5D5D"/>
                </svg>
            </button>
            {showModal === 'start' && <StartModal currentUser={currentUser}
                                                  setShowModal={setShowModal}
                                                  handleLogout={handleLogout}
                                                  handleClose={() => setShowModal(null)} />}
            {showModal === 'login' && <Login myStorage={myStorage}
                                             setCurrentUser={setCurrentUser}
                                             handleClose={() => setShowModal(null)} />}
            {showModal === 'register' && <Register setShowModal={setShowModal}
                                                   handleClose={() => setShowModal(null)} />}
        </header>
    )
}

export default Header