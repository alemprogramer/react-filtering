import React from 'react'
import "./skeleton.css"

const SkeletonMain = ({effects}) => {
    const baseClass = `effect ${effects}`;
    return (
        <div className={baseClass}></div>
    )
}

const Shimmer = () => {

    return (
        <div className="shine"></div>
    )
}

export default SkeletonMain
export {Shimmer}
