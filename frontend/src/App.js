import React, {useState} from "react"

import {RegisterModal} from "./components/RegisterModal/RegisterModal"
import {LoginModal} from "./components/LoginModal/LoginModal"
import {Map} from "./components/Map"

import './App.css'


const App = () => {
    const user = ''
    const [showModal, setShowModal] = useState(null)

    const handleUserLogout = () => {
        console.log(user)
    }

    return (
        <>
            <Map/>
            {
                <div className={'buttons__container'}>
                    {user ? (<button className={'btn btn__logout'} onClick={handleUserLogout}>Log out</button>) : (
                        <>
                            <button onClick={() => setShowModal('login')} className='btn btn__login'>Log in</button>
                            <button onClick={() => setShowModal('register')} className='btn bnt__register'>Register
                            </button>
                        </>
                    )}
                </div>
            }
            <RegisterModal isShow={showModal === 'register'} handleClose={() => setShowModal(false)}/>
            <LoginModal isShow={showModal === 'login'} handleClose={() => setShowModal(false)}/>
        </>
    )
}

export default App
