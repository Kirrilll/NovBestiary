import React, {useEffect, useState} from "react"
import axios from "axios"

import {Map} from "../../components/Map/Map"
import {MapFilters} from "../../components/MapFilters/MapFilters"
import {useParams} from "react-router-dom";


export const MapPage = () => {
    const [checkedFilter, setCheckedFilter] = useState(null)
    const [currentFilterCollection, setCurrentFilterCollection] = useState(null)

    useEffect(() => {
        if (checkedFilter) {
            const getCollection = async () => {
                try {
                    const res = await axios.get(`/${checkedFilter}s`)
                    setCurrentFilterCollection(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getCollection()
        }

        return () => {
            setCurrentFilterCollection(null)
        }
    }, [checkedFilter])

    return (
        <div className='map__page'>
            <Map collection={currentFilterCollection} mapWrapper='map__wrapper' />
            <MapFilters checkedFilter={checkedFilter} setCheckedFilter={setCheckedFilter}/>
        </div>
    )
}