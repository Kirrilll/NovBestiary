import React, {useRef, useState} from "react"
import RoomIcon from "@material-ui/icons/Room"
import {Cancel} from "@material-ui/icons"


export const RegisterModal = ({handleClose, isShow}) => {
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

    if (!isShow) return null

    return (
        <div className='modal__container'>
            <div className='logo__container'>
                <RoomIcon className='logo'/>
                <span>Nov-Bestiary</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input className='modal__input' placeholder='username' type="text" ref={nameRef}/>
                <input className='modal__input' placeholder='email' type="email" ref={emailRef}/>
                <input className='modal__input' placeholder='password' type="password" ref={passRef}/>
                <button className='modal__button'>Register</button>
                {success && <span className='modal-success'>Success, you can login now</span>}
                {error && <span className='modal-error'>Some error</span>}
            </form>
            <Cancel onClick={handleClose} className='modal__cancel'/>
        </div>
    )
}