import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class MegaMenu extends Component {    
    
    render() {
        let k = 0; //key value, please make it random and unique
        const {title, data} = this.props;
        return (
            <div className="menu-item border-left-0 text-left">
                <h5>{title}</h5>

                <ul>
                    {
                        data
                        .map(l => <li key={k++/*key value, please make it random and unique*/}>
                            <Link
                                to={l.url}
                                className="menu-list-item d-flex align-items-center">
                                <div className="menu-icon">
                                    <img src={l.img} className="img-fluid" alt=""/>
                                </div>
                                <div className="menu-desc">
                                    <h4>{l.title}</h4>
                                    <p>{l.details}</p>
                                </div>
                            </Link>
                        </li>)}
                </ul>
            </div>

        )
    }
}

export default MegaMenu
