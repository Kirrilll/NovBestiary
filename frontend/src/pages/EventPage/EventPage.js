import React from 'react'
import Header from '../../components/Header/Header'

//Удалить потом
import Sobor from '../../assets/eventPage/sobor.png'


const EventPage = ({id}) =>{
    const {img, info, teaser, interactive} = id;
    return (
        <>
            <Header></Header>
            <div className = "place">
                <img src = {Sobor}/>
                <div className = "place__info info">
                    <h1 className = "info__title">{info.title}</h1>
                    <div className = "info__descrebtion">{info.descrebtion}</div>
                </div>
            </div>
            )
        </>
}