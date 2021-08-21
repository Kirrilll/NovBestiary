import React, {useState} from "react"
import {Map} from "../../components/Map/Map"
import {MapFilters} from "../../components/MapFilters/MapFilters"


export const MapPage = () => {
    const [checkedFilter, setCheckedFilter] = useState(null)

    return (
        <div className='map__page'>
            <Map mapWrapper='map__wrapper' />
            <MapFilters checkedFilter={checkedFilter} setCheckedFilter={setCheckedFilter}/>
        </div>
    )
}