import React from "react"

import Cancel from "@material-ui/icons/Cancel"
import logo from '../../assets/header/Logotype.svg'
import './Modal.css'


export const StartModal = ({handleClose, setShowModal, currentUser, handleLogout}) => {
    return (
        <div className='modal__container'>
            <div className='modal__logo'>
                <img className='modal__logo-img' src={logo} alt="logo"/>
            </div>
            <div>
                {currentUser ? (<button onClick={handleLogout} className='modal__btn'>Выйти</button>) : (
                    <div>
                        <button onClick={() => setShowModal('login')} className='modal__btn'>Войти</button>
                        <button onClick={() => setShowModal('register')} className='modal__btn'>Зарегистрироваться</button>
                    </div>
                )}
            </div>
            <Cancel onClick={handleClose} className='register__cancel'/>
        </div>
    )
}