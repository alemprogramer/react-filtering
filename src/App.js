import React, { Suspense, lazy, useState} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/homePage";
import RouteTop, {ScrollToTop} from './components/scrollToTop';
import NavBar from './components/navbar/main';
import Loaders from "./components/contexts/index";

const Footer = lazy(() => import ('./components/footer/Footer'));

function App() {

    const [loader, setLoader] = useState(true);

    const updateLoader = (e) =>{
        setLoader(e);
    }

    return (  
        
    <Router>
        <RouteTop/>
        <ScrollToTop/>
            <Loaders.Provider value={{loader, updateLoader}} >
        <NavBar/>
        <Switch>
            <Route path='/' exact>
            <Home/>
            </Route>
        </Switch>
        {loader===false && 
        <Suspense fallback={''}>
            <Footer/>
        </Suspense>}
        </Loaders.Provider>
    </Router> 
    
    )
}

export default App;