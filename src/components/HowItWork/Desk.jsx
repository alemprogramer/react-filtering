import React, {Component} from 'react';
import CommonHead, { MiniHead } from "../../components/headings/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export class Desk extends Component {
    state = {
        nav1: null,
        nav2: null
    }
    componentDidMount() {
        this.setState({ nav1: this.slider1, nav2: this.slider2 });
    }

    render() {
        let k = 0;
        const { title, work, frequents } = this.props;
        let obj = {
            ...work,
            ...frequents
        };
        let count = Object
            .keys(obj)
            .length;
        const NavSettings = {
            arrows: false,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: count,
            focusOnSelect: true,
            verticalSwiping: true,
            asNavFor: this.state.nav2,
            ref: slider => (this.slider1 = slider)
        }

        const MainSettings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            slidesToShow: 1,
            asNavFor: this.state.nav1,
            ref: slider => (this.slider2 = slider)
        }

        return (
            <section className='hiw desk'>
                <div className="container">
                    <CommonHead title={title} />
                    <div className="row">
                        <div className={frequents
                                ? "col-md-6"
                                : "col-md-4"}>
                            <ul className="nav_list">
                                <Slider {...NavSettings}>
                                    {Object
                                        .keys(obj)
                                        .map(s => <li className="nav_items" key={
                                            k++
                                        } > <div className="content">

                                                {work
                                                    ? <MiniHead title={obj[s].head} />
                                                    : ''}

                                                <div className="texts">
                                                    <p>{work
                                                        ? obj[s].text
                                                        : obj[s].head}</p>
                                                </div>
                                                {frequents
                                                    ? <span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </span>
                                                    : ''}
                                            </div> </li>)}
                                </Slider>
                            </ul>
                        </div>

                        <div
                            className={frequents
                                ? "col-md-6"
                                : "col-md-8"}>

                            {frequents
                                ? <div className="image_list">
                                    <Slider {...MainSettings}>
                                    {Object
                                        .keys(obj)
                                        .map(s => <div key={k++} className="detail_slide">
                                            <div className="head">
                                                <h5>
                                                    {obj[s].head}
                                                </h5>
                                            </div>
                                            <div className="text">
                                                <h6>
                                                    {obj[s].text}
                                                </h6>
                                            </div>
                                        </div>)}
                                        </Slider>
                                </div>
                                : <div className="image_slide">
                                    <Slider {...MainSettings}>
                                        {Object
                                            .keys(obj)
                                            .map(s =>
                                    <div key={k++} className="slide_parts">
                                        <img
                                            src={obj[s].image}
                                            alt="how.jpg"
                                            className="img-fluid" />
                                    </div>
                                    )}
                                    </Slider>
                                </div>}
                        </div>
                    </div>
                </div>
            </section>
            )
    }
}

export default Desk
