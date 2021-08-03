import React from 'react'
import "./skeleton.css"

const SkeletonMain = ({varient}) => {
    const baseClass=`effect ${varient}`;
    return (
        <div className={baseClass}></div>
    )
}

const Shade=()=>{
    
}

export default SkeletonMain
export {Shade}

