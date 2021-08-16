import React, {Component} from 'react'
import CommonHead from "../../../components/headings/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class DeskService extends Component {
    constructor(props) {
        super(props);
        this.next = this
            .next
            .bind(this);
        this.previous = this
            .previous
            .bind(this);
    }
    next() {
        this
            .slider
            .slickNext();
    }
    previous() {
        this
            .slider
            .slickPrev();
    }
    render() {
        

        var settings = {
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            infinite: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section
                className="services position-relative">
                <div className="slide_icon icon_right position-absolute">
                    <span className="right swiper-button-next" onClick={this.next}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </div>
                <div className="slide_icon icon_left position-absolute">
                    <span className="left swiper-button-prev" onClick={this.previous}>
                        <i className="fas fa-chevron-left"></i>
                    </span>
                </div>
                <div className="container">
                    <CommonHead title='Our Services'/>
                    <div className="row">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {this.props.services
                                .map((m,k) => <div key={k++} className='col-xl-12'>
                                    <div className="content">
                                        <div className="image">
                                            <img src={m.image} alt="service.png" className="img-fluid"/>
                                        </div>
                                        <div className="texts">

                                            <div className="title text-center text-capitalize">
                                                <h4>{m.title}</h4>
                                            </div>

                                            <div className="text_part">
                                                <h6>{m.text}</h6>
                                            </div>
                                            <a
                                                href={m.link}
                                                className="mini_btn d-inline-block text-capitalize text-center">
                                                <h5>Learn more</h5>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>)}
                        </Slider>
                    </div>

                </div>
            </section>
        )
    }
}

export default DeskService
