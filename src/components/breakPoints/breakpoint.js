const mediaPoints={
    mobile: '(max-width:600px)',

    landScape: '(min-width:576px) and (max-width:767.98px) ',

    tablets:'(min-width:768px) and (max-width:991.98px)',

    desktops:'(min-width:992px) and (max-width:1199.98px)',

    largeDesktops:'(min-width: 1200px)',
}

const matchObserver = (observerPoint) =>{
    for (const d of Object.keys(mediaPoints)) {
        if (window.matchMedia(`${mediaPoints[d]}`).matches) {
            observerPoint(d);
        }
    }
}

const mediaObserver= (setMedia) => {
    matchObserver(setMedia);
    window.addEventListener('resize',()=>{
        matchObserver(setMedia);
    })
}
export default mediaObserver;


