import React from "react"
import './Filter.css'
import classNames from 'classnames'


export const Filter = ({children, isChecked, setCheckedFilter}) => {
    return (
        <button onClick={setCheckedFilter} className={classNames({
            'map__filter': true,
            'filter-checked': isChecked
        })}>
            {children}
        </button>
    )
}