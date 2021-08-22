import React, {useRef, useState} from "react"
import axios from "axios"
import Cancel from "@material-ui/icons/Cancel"

import './Modal.css'
import logo from "../../assets/header/Logotype.svg"


export const Register = ({handleClose, setShowModal}) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    const handleSetShowModal = () => {
        handleClose()
        setShowModal('login')
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value
        }

        try {
            await axios.post('/users/register', newUser)
            setSuccess(true)
            setError(false)
            handleSetShowModal()
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
                <input className='modal__input' placeholder='email' type="email" ref={emailRef}/>
                <input className='modal__input' placeholder='password' type="password" ref={passRef}/>
                <button className='modal__btn'>Register</button>
                {success && <span className='success'>Success, u can login now</span>}
                {error && <span className='error'>Some error</span>}
            </form>
            <Cancel onClick={handleClose} className='register__cancel' />
        </div>
    )
}