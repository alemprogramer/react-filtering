import React, { useState,useEffect } from 'react'
import mediaObserver from '../breakPoints/breakpoint';
import HowDesk from "./Desk";
import HowMobile from "./Mobile";

const HowItWork = ({ title, frequents, work })=> {
    
    const [queries, setQueries] = useState();
    useEffect(() => {
        mediaObserver(setQueries);
    }, [queries])
    return (
        <>
            {queries=== 'mobile' ? <HowMobile title={title} frequents={frequents} work={work} /> : <HowDesk title={title} frequents={frequents} work={work} />  }
        
        
        </>
    )
}

export default HowItWork
