import React from "react";
import EventBlock from "../EventBlock/EventBlock";
import Sadko from '../../assets/dataBlocks/Sadko.jpg'

const EventsGrid = () =>{

    const dataBlocks = {
        sadko:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko1:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko2:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko3:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko4:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko5:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        },
        sadko6:{
            title: 'Садко',
            link: '#',
            image: {Sadko}
        }
    };

    const eventBlocks = Object.values(dataBlocks).map((dataBlock) => {
        const {title, link, image} = dataBlock;
        return (
        <EventBlock
            title = {title}
            image = {image}
            link = {link}
        ></EventBlock>)
    });

    return (
        <div className = 'events-grid'>
            {eventBlocks}
        </div>
    )
}

export default EventsGrid;