const SmallNavbar = () => {
    return (
        <section className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <a href="index.html" className="logo">Virtual Decor</a>
                        <input className="menu-btn" type="checkbox" id="menu-btn"/>
                        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>
                        <ul className="menu">
                            <li className="f_one">
                                <a
                                    data-toggle="collapse"
                                    className="main_collapse collapsed"
                                    href="#Service_drop"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="Service_drop">
                                    Services
                                </a>
                                <div className="collapse" id="Service_drop">
                                    <div className="card main-card card-body">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <button
                                                    className="collapsed card-header"
                                                    id="FirstCard"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="collapseOne">
                                                    <span className="content">
                                                        <span className="texts">
                                                            <p>
                                                                Virtual Staging
                                                            </p>
                                                        </span>
                                                    </span>
                                                </button>
                                                <div
                                                    id="collapseOne"
                                                    className="collapse"
                                                    aria-labelledby="FirstCard"
                                                    data-parent="#accordionExample">
                                                    <div className="card-body mini-body">
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv-icon'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <button
                                                    className="collapsed card-header"
                                                    id="SecondCard"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    <span className="content">
                                                        <span className="texts">
                                                            <p>
                                                                3d Modelling
                                                            </p>
                                                        </span>
                                                    </span>
                                                </button>
                                                <div
                                                    id="collapseTwo"
                                                    className="collapse"
                                                    aria-labelledby="SecondCard"
                                                    data-parent="#accordionExample">
                                                    <div className="card-body mini-body">
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <button
                                                    className="collapsed card-header"
                                                    id="ThirdCard"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    <span className="content">
                                                        <span className="texts">
                                                            <p>
                                                                3d Modelling
                                                            </p>
                                                        </span>
                                                    </span>
                                                </button>
                                                <div
                                                    id="collapseThree"
                                                    className="collapse"
                                                    aria-labelledby="ThirdCard"
                                                    data-parent="#accordionExample">
                                                    <div className="card-body mini-body">
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                        <a href="index.html" className="menu-list-item d-flex align-items-center">
                                                            <div className="menu-icon">
                                                                <img src="images/serv_icon.png" className="img-fluid" alt='serv_icon.png'/>
                                                            </div>
                                                            <div className="menu-desc">
                                                                <h4>Virtual home staging</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Sed a.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="main-list">
                                <a href="index.html">Portfolio</a>
                            </li>
                            <li className="main-list">
                                <a href="index.html">Blog</a>
                            </li>
                            <li className="main-list">
                                <a href="index.html">Help</a>
                            </li>
                            <li className="main-list">
                                <a href="index.html">Contact</a>
                            </li>
                            <li className="main-list">
                                <a href="index.html">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallNavbar
