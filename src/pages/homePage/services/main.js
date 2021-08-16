import React, { useEffect, useState } from 'react';
import mediaObserver from "../../../components/breakPoints/breakpoint";
import DeskService from "./dekstop";
import Mobile from "./mobile";

function Services({data}) {
    const [media, setMedia] = useState();
    useEffect(() => {
        mediaObserver(setMedia);
    }, [media]);
    return (
        <>
            {media === 'mobile' ? <Mobile services={data} /> : <DeskService services={data} />}
        </>
    )
}

export default Services
