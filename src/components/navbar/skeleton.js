import React from 'react'
import SkeletonMain from '../skeleton/skeletonMain'

function dummy() {
    return (
        <div></div>
    )
}

const Logo = () => {
    return (
        <div className="logo-wraapper">
            <SkeletonMain varient='image'/>
        </div>
    )
}

const NavItem=()=>{
return(
    <div className="NavItem">
        <SkeletonMain varient='image' />
    </div>
)
}

export default dummy
export { Logo, NavItem}
