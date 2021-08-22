import React from "react"
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined"
import {useHistory} from "react-router-dom"


export const BackButton = () => {
    const history = useHistory()

    const handleClickButton = () => {
        history.goBack()
    }

    return (
        <button onClick={handleClickButton} className='map__filter'>
            <ChevronLeftOutlinedIcon />
        </button>
    )
}