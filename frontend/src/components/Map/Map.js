import React from 'react'
import mapboxgl from 'mapbox-gl'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

import './Map.css'
import 'mapbox-gl/dist/mapbox-gl.css'


mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWF5dW5ldmEiLCJhIjoiY2tzbGp5ejJ3MDV0NTMycDczY3J0NDV6OSJ9.3Kx4E0QAcT6buykLEkaDCA'

export class Map extends React.Component {
    constructor(props) {
        super(props)
        this.directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
            language: 'ru',
            interactive: false,
            controls: {
                inputs: false,
            }
        })
        this.markers = []
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: 'mapbox://styles/katyayuneva/cksljzjtj44mo17k17zs4onyc/draft',
            center: [31.27639, 58.52152],
            zoom: 12
        })

        this.map.addControl(this.directions, 'top-right')

        this.map.on('load', () =>{
            this.SetDirection([31.27419, 58.52557], [31.27519, 58.53657])
        })
    }

    SetDirection(origin, destination){
        this.directions.setOrigin(origin);
        this.directions.setDestination(destination);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.markers) {
            this.markers.forEach(marker => {
                marker.remove()
            })
        }

        if (this.props.collection) {
            this.props.collection.forEach(filter => {
                const marker = new mapboxgl.Marker({
                    color: "red",
                    draggable: false,
                    anchor: 'top'
                }).setLngLat([filter.lat, filter.long]).addTo(this.map)
                this.markers.push(marker)
            })
        }
    }

    componentWillUnmount() {
        if (this.markers) {
            this.markers.forEach(marker => {
                marker.remove()
            })
        }
    }

    render() {
        return (
            <div ref={el => (this.mapWrapper = el)} className="mapWrapper"/>
        )
    }
}