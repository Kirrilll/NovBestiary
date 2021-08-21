import React from "react"
import {Filter} from "./Filter/Filter"
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined'
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined'
import './MapFilters.css'
import {Link} from "react-router-dom"


export const MapFilters = ({setCheckedFilter, checkedFilter}) => {
    return (
        <div className='map__filters'>
            <Link to='/home' className='map__filter'>
                <ChevronLeftOutlinedIcon />
            </Link>
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