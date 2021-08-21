import React from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = 'pk.eyJ1IjoiYm91bmRlIiwiYSI6ImNrc2h6dHBtYjA3MTgyeW94Y293dWM2bzAifQ.74yypFwSaSiGxr1AiGBX9g'

export class Map extends React.Component {

    constructor(props){
      super(props);
      this.directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving-traffic',
        language: 'ru',
        interactive: false,
        controls:{
          inputs: false,
        }
      });
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [31.27419, 58.52557],
            zoom: 12
        })

        map.addControl(this.directions, 'top-right');

        map.on('load', () =>{
          this.SetDirection([31.27419, 58.52557], [32, 58.9]);
        });
    }

    SetDirection(origin, destination){
      this.directions.setOrigin(origin);
      this.directions.setDestination(destination);
    }

    render() {
      
        return (
              <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
        )
    }
}