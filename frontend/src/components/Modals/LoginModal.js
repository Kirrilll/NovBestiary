import React, {useRef, useState} from "react"
import axios from "axios"
import Cancel from "@material-ui/icons/Cancel"

import './Modal.css'
import logo from "../../assets/header/Logotype.svg"


export const Login = ({handleClose, myStorage, setCurrentUser}) => {
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const passRef = useRef()

    const handleSubmit = async e => {
        e.preventDefault()

        const user = {
            username: nameRef.current.value,
            password: passRef.current.value
        }

        try {
            const res = await axios.post('/users/login', user)
            myStorage.setItem('user', res.data.username)
            setCurrentUser(res.data.username)
            handleClose()
            setError(false)
        } catch (err) {
            setError(true)
            console.log(err)
        }
    }

    return (
        <div className='modal__container'>
            <div className='modal__logo'>
                <img className='modal__logo-img' src={logo} alt="logo"/>
            </div>
            <form className='modal__form' onSubmit={handleSubmit}>
                <input className='modal__input' placeholder='username' type="text" ref={nameRef}/>
                <input className='modal__input' placeholder='password' type="password" ref={passRef}/>
                <button className='modal__btn'>Login</button>
                {error && <span className='error'>Some error</span>}
            </form>
            <Cancel onClick={handleClose} className='register__cancel' />
        </div>
    )
}