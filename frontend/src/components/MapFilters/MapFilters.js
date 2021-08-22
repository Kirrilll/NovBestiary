import React from "react"
import {Filter} from "./Filter/Filter"
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined'
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined'
import './MapFilters.css'
import {BackButton} from "../BackButton/BackButton"


export const MapFilters = ({setCheckedFilter, checkedFilter}) => {
    return (
        <div className='map__filters'>
            <BackButton />
            <Filter isChecked={checkedFilter === 'food'} setCheckedFilter={() => setCheckedFilter('food')}>
                <FastfoodOutlinedIcon />
            </Filter>
            <Filter isChecked={checkedFilter === 'home'} setCheckedFilter={() => setCheckedFilter('home')}>
                <HomeWorkOutlinedIcon />
            </Filter>
            <Filter isChecked={checkedFilter === 'hospital'} setCheckedFilter={() => setCheckedFilter('hospital')}>
                <LocalHospitalOutlinedIcon />
            </Filter>
        </div>
    )
}