import React from "react";
import EventBlock from "../EventBlock/EventBlock"
import sadko from '../../assets/dataBlocks/Sadko.jpg'

const EventsGrid = () => {
    const dataBlocks = {
        sadko: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko1: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko2: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko3: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko4: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko5: {
            title: 'Садко',
            link: '#',
            image: sadko
        },
        sadko6: {
            title: 'Садко',
            link: '#',
            image: sadko
        }
    };

    const eventBlocks = Object.values(dataBlocks).map((dataBlock) => {
        const {title, link, image} = dataBlock;
        return (
            <EventBlock title={title} image={image} link={link}/>
        )
    })

    return (
        <div className='events-grid'>
            {eventBlocks}
        </div>
    )
}

export default EventsGrid