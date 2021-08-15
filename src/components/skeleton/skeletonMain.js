import React from 'react'
import "./skeleton.css"

const SkeletonMain = ({effects}) => {
    const baseClass = `effect ${effects}`;
    return (
    
        <div className={baseClass}></div>
       
    )
}
const SkeletonBlog = ({effects}) => {
    const baseClass = `effect position-relative overflow-hidden ${effects}`;
    return (
    
        <div className={baseClass}>
            <Shimmer/>
        </div>
       
    )
}

const Shimmer = () => {

    return (
        <div className="shimmer-wrapper">
            <div className="shine"></div>
        </div>
    )
}

export default SkeletonMain
export { Shimmer, SkeletonBlog}
