import React from 'react';
import { Switch, Route} from "react-router-dom";
import Commerce from "./pages/product";
import Step01 from "./pages/step-01/index";
import Step02 from "./pages/step-02/index";
// import Step03 from "./pages/step-03/index";
// import Step04 from "./pages/step-04/index";
// import Step05 from "./pages/step-05/index";
// import Step06 from "./pages/step-06/index";
// import Step07 from "./pages/step-07/index";
// import Order from "./pages/complete/index";


function App() {
    return (
        <Switch>
            <Route path='/' exact component={Commerce}/>
            <Route path='/:slug/step-01' exact component={Step01}/>
            <Route path='/:slug/step-02' exact component={Step02}/>
        </Switch>
    )
}

export default App;
