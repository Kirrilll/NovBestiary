import React, {useRef, useState} from "react"
import RoomIcon from "@material-ui/icons/Room"
import {Cancel} from "@material-ui/icons"


export const RegisterModal = ({handleClose}) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = async e => {
        e.preventDefault()

        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value
        }

        try {
            setSuccess(true)
            setError(false)
            handleClose()
        } catch (err) {
            setError(true)
            console.log(err)
        }
    }

    return (
        <div className='modal__container'>
            <div className='logo__container'>
                <RoomIcon className='logo'/>
                <span>Nov-Bestiary</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input className='register__input' placeholder='username' type="text" ref={nameRef}/>
                <input className='register__input' placeholder='email' type="email" ref={emailRef}/>
                <input className='register__input' placeholder='password' type="password" ref={passRef}/>
                <button className='register__button'>Register</button>
                {success && <span className='success'>Success, u can login now</span>}
                {error && <span className='error'>Some error</span>}
            </form>
            <Cancel onClick={handleClose} className='register__cancel'/>
        </div>
    )
}