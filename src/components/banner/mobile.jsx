import React, {Component} from 'react'

export class Mobile extends Component {
    render() {
        const { title, miniTitle, text, price, link, image, linkText, buttonText } = this.props;
        return (
            <section className="mobile_design">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_bg">
                                <img
                                    className="img-fluid"
                                    src={image}
                                    alt="banner_banner_bg.jpg"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="banner_content">
                                {miniTitle ? <h6>{miniTitle}</h6> : ''}
                                {title ? <h1>{title} </h1> : ''}
                                <p className="text_area">{text}</p>
                                {price ? <div className="price_tag">
                                    <h3>$ {price}</h3>
                                    <p>per photo</p>
                                </div> : ''}
                                {linkText ? <a href={link} className='mini_btn d-inline-block text-capitalize text-center'> <h5>{linkText}</h5><i className="fas fa-long-arrow-alt-right"></i> </a> : buttonText ? <a href={link} className="place_btn ">{buttonText}</a> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Mobile
