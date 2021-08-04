import React from 'react'
import SkeletonMain from '../skeleton/skeletonMain'

const Logo = () => {
    return (
        <div className="logo-wraapper">
            <SkeletonMain effects='image'/>
        </div>
    )
}

const NavItem=()=>{
return(
    <div className="NavItem">
        <SkeletonMain effects='image' />
    </div>
)
}
export { Logo, NavItem}
