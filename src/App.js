import React from 'react';
import '../src/vendor/css/dummy.css';
import Skeleton from './components/skeleton/skeletonMain';

function App() {
    
    return (
        <section className= "skeleton-wrapper">
            <div className="container">
                <div className="row">
                    <Skeleton varient="text"/>
                </div>
            </div>
        </section>
    )
}

export default App;
