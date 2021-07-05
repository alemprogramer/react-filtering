import React from 'react';
import { Switch, Route} from "react-router-dom";
import Blog from "./pages/blog/index";
import BlogOpen from "./pages/blogOpen/index";

function App() {
    return (
        <Switch>
            <Route path='/' exact component={Blog}/>
            <Route path='/blog-open' component={BlogOpen}/>
        </Switch>
    )
}

export default App;
