import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import {HomePage} from "./pages/HomePage/HomePage"
import {MapPage} from "./pages/MapPage/MapPage"
import {LegendPage} from "./pages/LegendPage/LegendPage"
import './App.css'


const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/home' render={() => <HomePage />} />
                <Route path='/map' render={() => <MapPage />} />
                <Route path='/home/legend' render={() => <LegendPage />} />
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    )
}

export default App
