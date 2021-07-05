import React, {Component} from 'react'

export class Banner extends Component {
    render() {
        const { blog, title, miniTitle, text, price, link, image, linkText, buttonText}=this.props;
        return (
            <section className="banner d-none d-sm-block d-xl-block d-lg-block d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_content">
                                {miniTitle ? <h6>{miniTitle}</h6>: ''}
                               { title ? <h1>{title} </h1>: ''}

                                {blog ? <div className="blogger">
                                    <div className="imgs float-left">
                                        <img src={blog.avatar} alt="blogger.png" className="img-fluid"/>
                                </div>
                                        <h6>{blog.name}</h6>
                                    </div> : ''}

                                <p className="text_area">{text}</p>
                                {price? <div className="price_tag">
                                    <h3>$ {price}</h3>
                                    <p>per photo</p>
                                </div>:''}
                                {linkText ? <a href={link} className='mini_btn d-inline-block text-capitalize text-center'> <h5>{linkText}</h5><i className="fas fa-long-arrow-alt-right"></i> </a> : buttonText ? <a href={link} className="place_btn ">{buttonText}</a> : '' }
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_bg">
                                <img
                                    className="img-fluid"
                                    src={image}
                                    alt="banner.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner
