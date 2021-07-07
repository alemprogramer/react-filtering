import React from 'react';
import { Switch, Route} from "react-router-dom";
import Product  from "./pages/product";

function App() {
    return (
        <Switch>
            <Route path='/' exact component={Product}/>
        </Switch>
    )
}

export default App;
