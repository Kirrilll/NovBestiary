import React, {useState} from "react"
import ReactMapGL from "react-map-gl"


export const Map = () => {
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        longitude: 40,
        latitude: 12,
        zoom: 5
    })

    return (
        <ReactMapGL {...viewport}
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={'pk.eyJ1IjoiYm91bmRlIiwiYSI6ImNrc2h6dHBtYjA3MTgyeW94Y293dWM2bzAifQ.74yypFwSaSiGxr1AiGBX9g'}
                    mapStyle={'mapbox://styles/bounde/cksj5mr1iaouz17pjxoiik2us'}>
        </ReactMapGL>
    )
}