import React from 'react'
import "./main.css"

const Skeleton = ({varient}) => {
    const baseClass=`effect ${varient}`;
    return (
        <div className={baseClass}></div>
    )
}

export default Skeleton


