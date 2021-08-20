import React, {useState} from "react"
import ReactMapGL from 'react-map-gl'
import './App.css'
import {RegisterModal} from "./components/RegisterModal/RegisterModal"
import {LoginModal} from "./components/LoginModal"


function App() {
    const user = 'kirill'
    const [showModal, setShowModal] = useState(null)
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        longitude: 40,
        latitude: 12,
        zoom: 5
    })

    const handleUserLogout = () => {
        console.log(user)
    }

    return (
        <ReactMapGL {...viewport}
                    width="100vw"
                    height="100vh"
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={'pk.eyJ1IjoiYm91bmRlIiwiYSI6ImNrc2h6dHBtYjA3MTgyeW94Y293dWM2bzAifQ.74yypFwSaSiGxr1AiGBX9g'}
                    mapStyle={'mapbox://styles/bounde/cksj5mr1iaouz17pjxoiik2us'}>
            {user ? (<button className={'btn btn-logout'} onClick={handleUserLogout}>Log out</button>) : (
                <div className={'buttons'}>
                    <button onClick={() => setShowModal('login')} className='button login'>Log in</button>
                    <button onClick={() => setShowModal('register')} className='button register'>Register</button>
                </div>
            )}
            {showModal === 'register' && <RegisterModal handleClose={() => setShowModal(false)} />}
            {showModal === 'login' && <LoginModal handleClose={() => setShowModal(false)} />}
        </ReactMapGL>
    )
}

export default App
