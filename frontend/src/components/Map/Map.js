import React from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = 'pk.eyJ1IjoiYm91bmRlIiwiYSI6ImNrc2h6dHBtYjA3MTgyeW94Y293dWM2bzAifQ.74yypFwSaSiGxr1AiGBX9g'

export class Map extends React.Component {
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [58.52557, 31.27419],
            zoom: 12
        })

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
        })

        map.addControl(directions, 'top-right')
    }

    render() {
        return (
            <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
        )
    }
}