import React from 'react'
import SkeletonMain, {Shimmer} from '../skeleton/skeletonMain'

const Logo = () => {
    return (
        <div className="logo-wrapper position-relative">
            <SkeletonMain effects='image'/>
            <Shimmer/>
        </div>
    )
}

const NavItem = () => {
    return (
        <div className="NavItem position-relative">
            <SkeletonMain effects='image'/>
            <Shimmer/>
        </div>
    )
}
export {Logo, NavItem}
