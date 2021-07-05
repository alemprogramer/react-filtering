import { useEffect} from "react";
import {useLocation} from "react-router-dom";
import * as Scroll from 'react-scroll';

const RouteTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const ScrollToTop = () => {
    
    const scroll = () => {
        Scroll
            .animateScroll
            .scrollToTop();
    }
    const btnStyle = {
        bottom: '10px',
        right: `10%`,
        zIndex: '999',
        position: 'fixed',
        display: 'block'
    }

    return <button type="button" className="backtotop btn" style={btnStyle} id="button" onClick={scroll}>
  Back to top
</button>

}

export default RouteTop
export {ScrollToTop}