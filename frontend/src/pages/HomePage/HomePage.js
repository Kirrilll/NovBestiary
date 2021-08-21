import React from "react"
import Header from "../../components/Header/Header"
import EventsGrid from "../../components/EventsGrid/EventsGrid"


export const HomePage = () => {
    return (
        <div>
            <Header />
            <EventsGrid />
        </div>
    )
}