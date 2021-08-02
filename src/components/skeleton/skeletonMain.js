import React from 'react'
import "./main.css"

const SkeletonMain = ({varient}) => {
    const baseClass=`effect ${varient}`;
    return (
        <div className={baseClass}></div>
    )
}

export default SkeletonMain


