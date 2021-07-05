import React, {Component, Suspense, lazy} from 'react'

import {Link} from "react-router-dom";
const MegaMenu = lazy(() => import ("./MegaMenu"));

export class LargeNavbar extends Component {
    render() {
        const imgs = process.env.PUBLIC_URL + '/vendor/images/serv_icon.png';
        const dataList = {
            dataA: {
                mainTitle: 'Virtual Staging',
                datas: {
                    a: {
                        title: 'Virtual home staging01',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet adipiscing elit. Sed a.'
                    },
                    b: {
                        title: 'Virtual home staging02',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu elit. Sed a.'
                    },
                    c: {
                        title: 'Virtual home staging03',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing . Sed a.'
                    }
                }
            },
            dataB: {
                mainTitle: '3d Modelling',
                datas: {
                    a: {
                        title: 'Virtual home staging04',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit.  a.'
                    },
                    b: {
                        title: 'Virtual home staging05',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed .'
                    },
                    c: {
                        title: 'Virtual home staging06',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed .'
                    }
                }
            },
            dataC: {
                mainTitle: 'Interior Design',
                datas: {
                    a: {
                        title: 'Virtual home staging07',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.'
                    },
                    b: {
                        title: 'Virtual home staging08',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.'
                    },
                    c: {
                        title: 'Virtual home staging09',
                        url: '/service',
                        img: imgs,
                        details: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.'
                    }
                }
            }
        };
        return (
            <section
                className="page-head d-none d-sm-block d-xl-block d-lg-block d-md-block">
                <div className="rd-navbar-wrap">
                    <div
                        className="header-bar-area rd-navbar rd-navbar-corporate-light rd-navbar-original rd-navbar-static rd-navbar--is-stuck">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-xl-2 col-sm-2 col-md-2 d-flex align-items-center">
                                    <div className="logo-area">
                                        <Link to='/'>Virtual Decor</Link>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xl-10 text-right">
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link to='/service' className="nav-link">Services</Link>
                                                <div className="mega-menu">
                                                    <Suspense fallback={< p > Please wait ...</p>}>
                                                        {Object
                                                            .keys(dataList)
                                                            .map(t =>< MegaMenu key = {
                                                                dataList[t].mainTitle
                                                            }
                                                            title = {
                                                                dataList[t].mainTitle
                                                            }
                                                            data = {
                                                                dataList[t].datas
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
}

export default LargeNavbar
