import React, { useState, useEffect} from 'react'
import mediaObserver from '../breakPoints/breakpoint'
import SmallNavbar from './SmallNavbar';
import LargeNavbar from './LargeNavbar';
import dataList from "./data";

function NavBar() {
    const [breakPoint,
        setBreakPoint] = useState();

    useEffect(() => {
        mediaObserver(setBreakPoint)
    }, [breakPoint])

    return ( <> {
        breakPoint === 'mobile'
            ? <SmallNavbar data={dataList}/>
            : <LargeNavbar data={dataList}/>
    } </>  )
        
}

export default NavBar