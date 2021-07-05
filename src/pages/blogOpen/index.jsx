import React from 'react'

function BlogOpen() {
    const link = process.env.PUBLIC_URL;
    return (
        <section className="blog_open">
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-light">
                            <a className="navbar-brand" href={link}>
                                <i className="fas fa-long-arrow-alt-left"></i>
                                Back to Blogs</a>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="banner_content">
                                <h2>Meet our People - Marketing Team Leader Paul Wazouski</h2>
                                <div className="blogger">
                                    <div className="imgs float-left">
                                        <img
                                            src={`${link}/vendor/images/blogger.png`}
                                            alt="blogger.png"
                                            className="img-fluid"/>
                                    </div>
                                    <h6>Paul Wazouski</h6>
                                    <p>24 September 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="blog_parts d-none d-sm-none d-md-block d-lg-block d-xl-block">
                <div className="blog_partitions">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <div className="blog_opened">
                                    <div className="blog_img">
                                        <img
                                            src={`${link}/vendor/images/blog-2.jpg`}
                                            className="img-fluid"
                                            alt="blog-2.jpg"/>
                                    </div>
                                    <div className="blogging_text">
                                        <h4>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed est
                                            congue, rhoncus ligula condimentum, efficitur ligula. Nulla auctor egestas
                                            ipsum, a bibendum purus. Proin at ullamcorper velit. Integer tempor euismod
                                            sagittis. Sed sodales quis massa vel ornare. Fusce feugiat porttitor nisi eu
                                            eleifend. Aliquam rhoncus, lectus sit amet dictum euismod, nisi tortor fringilla
                                            eros, nec interdum eros tortor at enim.
                                        </h4>
                                        <h4>Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec tincidunt dolor aliquet bibendum ultrices. Morbi ultrices,
                                            mi vel fermentum gravida, tortor est lacinia purus, quis convallis quam velit a
                                            nisi. Duis commodo pulvinar tortor, id viverra sem porta in. Orci varius natoque
                                            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
                                            maximus nibh sed mi tempus, nec gravida lacus fringilla. Nam ac feugiat erat.
                                            Phasellus molestie, orci quis finibus fringilla, magna velit lobortis nibh, et
                                            efficitur ex orci at neque. Duis eu nisl erat. Vivamus semper, ligula eu
                                            facilisis bibendum, libero felis mollis tellus, a euismod felis purus at augue.
                                            Pellentesque nec quam placerat, tempor magna nec, aliquam nulla. Vivamus
                                            tincidunt interdum sapien, quis mattis magna vehicula eu.</h4>
                                        <h4>Quisque sed purus eget erat pharetra porta. Integer ultricies mollis auctor.
                                            Fusce non ullamcorper felis. Nullam semper mauris ut orci eleifend, non sodales
                                            massa auctor. Curabitur efficitur nunc ut quam venenatis consequat. Donec in
                                            semper velit, at finibus nisl. Sed placerat, odio non condimentum ornare, ex
                                            tortor tincidunt neque, ac finibus metus tellus et eros. Quisque interdum
                                            tincidunt lectus, vel luctus odio scelerisque et. Sed id lectus placerat,
                                            hendrerit lorem id, mollis ligula. Etiam egestas urna in felis congue, eget
                                            sodales felis blandit. Curabitur non varius ante. Duis vel lobortis turpis.</h4>
                                        <h4>Aliquam sit amet erat sed lorem iaculis rutrum non placerat metus. Donec
                                            interdum, tortor eget blandit faucibus, sem lectus pretium neque, id efficitur
                                            leo massa a libero. Suspendisse fermentum ipsum vitae mattis semper. Etiam sed
                                            leo quam. Donec ut mattis massa. Duis quam purus, vehicula sed ligula vitae,
                                            eleifend fringilla ligula. Quisque sed varius magna, at ultrices felis. Nam
                                            aliquam metus ac ligula laoreet mollis. Fusce in ante sit amet ipsum tincidunt
                                            eleifend. Sed sodales placerat augue vel semper. Donec malesuada varius lectus,
                                            ut tristique massa. Fusce commodo erat sapien, vitae auctor lacus efficitur nec.</h4>
                                        <h4>Nullam vitae ipsum eu sapien gravida varius sit amet quis metus. Donec nec
                                            nunc volutpat, sodales enim id, elementum nunc. Nunc risus massa, eleifend vitae
                                            orci iaculis, maximus ullamcorper erat. Donec at est cursus metus volutpat
                                            vehicula. Aliquam at felis eget lorem fringilla consequat ut et felis.
                                            Pellentesque vitae auctor elit. Donec maximus risus velit, at congue leo
                                            lobortis sed. Duis sed orci a urna facilisis volutpat et sit amet sapien.
                                        </h4>
                                    </div>
                                    <div className="comment_box">
                                        <div className="heading">
                                            <div className="cmnt_number float-left">
                                                <h6>Comments (147)</h6>
                                            </div>
                                            {/*  Collapse
                                        <div className="shares float-right">
                                            <a className="share_btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fas fa-share"></i> Share this article
                                            </a>
                                            <div className="collapse collaps_box" id="collapseExample">
                                                <div className="card card-body">
                                                    <a href={link}>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href={link}>
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a href={link}>
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                    <a href={link}>
                                                        <i className="fas fa-copy"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                     */}
                                        </div>
                                        {/*  <div className="all_comments">
                                        <div className="new_cmnt">
                                            <div className="cmnt_img">
                                            </div>
                                            <div className="cmnt_form">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="Comments" placeholder="Add a public comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="other_cmnt">
                                            <div className="media">
                                                <div className="cmnt_img"></div>
                                                <div className="media-body">
                                                    <h6>Paul Wazouski <span> | 2 months ago</span></h6>
                                                    <div className="mbody">
                                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed est congue, rhoncus ligula condimentum, efficitur ligula. Nulla auctor egestas ipsum, a bibendum purus. Proin at ullamcorper velit. Integer tempor euismod sagittis. Sed sodales quis massa vel ornare. </p>
                                                        <a href={link} className="show-btn">Show More</a>
                                                    </div>
                                                    <div className="drop-btn">
                                                        <a href={link} className="reply btn">Reply</a>
                                                        <a href={link} className="cmtn cancel btn">View 9 replies <i className="fas fa-caret-down"></i>
                                                            <!-- On click this button, inner html will be "Hide 9 replies <i className="fas fa-caret-up"></i>" -->
                                                        </a>
                                                    </div>
                                                    <div className="media hide see">
                                                        <span className="cmnt_img"></span>
                                                        <div className="media-body">
                                                            <h6>Paul Wazouski <span> | 2 months ago</span></h6>
                                                            <div className="mbody">
                                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed est congue, rhoncus ligula condimentum, efficitur ligula. Nulla auctor egestas ipsum, a bibendum purus. Proin at ullamcorper velit. Integer tempor euismod sagittis. Sed sodales quis massa vel ornare. </p>
                                                            </div>
                                                            <div className="drop-btn">
                                                                <a href={link} className="reply btn">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media hide see reply-form">
                                                        <div className="cmnt_img">
                                                        </div>
                                                        <div className="cmnt_form">
                                                            <form>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" id="Comments" placeholder="Add a public comment"/>
                                                                </div>
                                                                <div className="butn_part float-right">
                                                                    <button type="submit" className="btn cancel">Cancel</button>
                                                                    <button type="" className="btn submit">Sign in to post</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 */}
                                    </div>
                                </div>
                                <div className="blog_button">
                                    <a href={link} className="btn text-capitalize">Load More</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="col-md-12 col-sm-12">
                                    <div className="more_blog_title d-block">
                                        <h6>Related Articles</h6>
                                        <a href={link} className="mini_btn d-inline-block text-capitalize float-right">
                                            <h5>View more
                                            </h5>
                                            <i className="fas fa-long-arrow-alt-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="partner_slide mt24">
                                        <div className="partner_img">
                                            <img
                                                src={`${link}/vendor/images/partner.jpg`}
                                                alt="partner.jpg"
                                                className="img-fluid"/>
                                        </div>
                                        <div className="partner_text">

                                            <div className="title text-center text-capitalize">
                                                <h5>Meet our People - Marketing Team Leader Paul Wazouski</h5>
                                            </div>

                                            <div className="blogger">
                                                <div className="imgs float-left">
                                                    <img
                                                        src={`${link}/vendor/images/blogger.png`}
                                                        alt="blogger.png"
                                                        className="img-fluid"/>
                                                </div>
                                                <h6>Jhon Doe</h6>
                                                <p>24 September 2019</p>
                                            </div>
                                            <div className="text_part">
                                                <h6>
                                                    PadStyler is the only Photorealistic 3D Visual Marketing Platform backed by
                                                    research to help you sell or rent properties faster
                                                </h6>
                                            </div>
                                            <a href={link} className="mini_btn d-inline-block text-capitalize text-center">
                                                <h5>Read more
                                                </h5>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="partner_slide">
                                        <div className="partner_img">
                                            <img
                                                src={`${link}/vendor/images/partner.jpg`}
                                                alt="partner.jpg"
                                                className="img-fluid"/>
                                        </div>
                                        <div className="partner_text">

                                            <div className="title text-center text-capitalize">
                                                <h5>Meet our People - Marketing Team Leader Paul Wazouski</h5>
                                            </div>

                                            <div className="blogger">
                                                <div className="imgs float-left">
                                                    <img
                                                        src={`${link}/vendor/images/blogger.png`}
                                                        alt="blogger.png"
                                                        className="img-fluid"/>
                                                </div>
                                                <h6>Jhon Doe</h6>
                                                <p>24 September 2019</p>
                                            </div>
                                            <div className="text_part">
                                                <h6>
                                                    PadStyler is the only Photorealistic 3D Visual Marketing Platform backed by
                                                    research to help you sell or rent properties faster
                                                </h6>
                                            </div>
                                            <a href={link} className="mini_btn d-inline-block text-capitalize text-center">
                                                <h5>Read more
                                                </h5>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default BlogOpen
