import React, {useState, useEffect} from 'react'
import mediaObserver from "../../../components/breakPoints/breakpoint";
import BannerMobile from "./bannerMobile";
import BannerDesk from "./bannerDesk";

function Banner() {
    const [media, setMedia] = useState();
    useEffect(() => {
        mediaObserver(setMedia);
    }, [media]);
    return ( 
    <>
       {media==='mobile' ? <BannerMobile /> : <BannerDesk/>}
    </>
    )
}

export default Banner