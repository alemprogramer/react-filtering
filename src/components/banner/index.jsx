import { useState,useEffect } from "react";
import Desk from "./desk";
import Mobile from "./mobile";
import mediaObserver from "../breakPoints/breakpoint";


function Banner(props) {
    const { blogger,title, miniTitle, text, price, img, url, urlIcon, urlText, buttonText}=props;
    //  { title, miniTitle, text, price, link, image, linkText, buttonText } 
    const [media, setMedia] = useState();
   useEffect(() => {
       mediaObserver(setMedia);
   }, [media]);
    return (
        <>
            {media === 'mobile' ? <Mobile title={title} miniTitle={miniTitle} text={text} price={price} link={url} image={img} linkText={urlText} buttonText={buttonText}/> : <Desk title={title} miniTitle={miniTitle} blog={blogger} text={text} price={price} image={img} link={url} linkIcon={urlIcon} linkText={urlText} buttonText={buttonText} />}
        </>
    )
}

export default Banner
