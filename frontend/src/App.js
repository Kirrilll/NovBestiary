import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import './App.css'
import {HomePage} from "./pages/HomePage/HomePage"
import {MapPage} from "./pages/MapPage/MapPage"


const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route path='/home' render={() => <HomePage />} />
                <Route path='/map' render={() => <MapPage />} />
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    )
}

export default App
