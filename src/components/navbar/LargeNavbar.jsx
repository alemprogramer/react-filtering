import React, {Suspense, lazy, useState, useEffect} from 'react'

import {Link} from "react-router-dom";
import { Logo, NavItem } from './skeleton';
import dataList from "./data";
const MegaMenu = lazy(() => import ("./MegaMenu"));

const LargeNavbar = () => {
    
    const [services,
        setServices] = useState([]);
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setTimeout(() => {
                setServices(dataList);
                setLoading(false);
            }, 2000);
            // eslint-disable-next-line
        }, [services])

        
    return (
         <section
                className="page-head">
                <div className="rd-navbar-wrap">
                    <div
                        className="header-bar-area rd-navbar rd-navbar-corporate-light rd-navbar-original rd-navbar-static rd-navbar--is-stuck">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-xl-2 col-sm-2 col-md-2 d-flex align-items-center">
                                <div className="logo-area overflow-hidden">
                                    {loading === true ? <Logo/> :<Link to='/'>Virtual Decor</Link>}
                                        
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xl-10 text-right">
                                    <div className="main-menu">
                                        <ul>
                                        {loading === true ? [1, 2, 3, 4, 5, 6].map(d => <li className="overflow-hidden" key={d}>
                                            <NavItem/>
                                        </li>):<>
                                            <li>
                                                <Link to='/service' className="nav-link">Services</Link>
                                                <div className="mega-menu">
                                                    <Suspense fallback={< p > Please wait ...</p>}>
                                                        {services
                                                            .map(t =>< MegaMenu key = {
                                                                t.mainTitle
                                                            }
                                                            title = {
                                                                t.mainTitle
                                                            }
                                                            data = {
                                                                t.datas
                                                            } />)}
                                                    </Suspense>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to='/portfolio' className="nav-link">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link to='/blog' className="nav-link">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to='/faq' className="nav-link">Help</Link>
                                            </li>
                                            <li>
                                                <Link to='/contact' className="nav-link">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to=''>Sign in</Link>
                                            </li>
                                            <li>
                                                <Link to='' className="btn">Place Order</Link>
                                            </li>
                                            </>
                                       }
                                         </ul>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
            </section>
    )
}

export default LargeNavbar
