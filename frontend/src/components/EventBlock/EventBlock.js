import React from"react";
import { Link } from "react-router-dom";
import '../EventBlock/EventBlock.css'

const EventBlock = ({link, image, title}) =>{
    <Link className = "event-block" to = {link}>
        <img className = "event-block__image" src = {image} alt = "Кртанка"/>
        <div className = "event-block__title">{title}</div>
    </Link>
}

export default EventBlock;