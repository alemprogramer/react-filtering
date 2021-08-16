import React, {Component} from 'react';
import Item from "./item";
import CommonHead from "../../components/headings/index";

export class Difference extends Component {
    render() {
        let k = 0; //key value, please make it random and unique
        const { title, receive, need, rare} = this.props;
        return (
            <section className={need ? "difference bto" :"difference"} >
                <div className="container">

                    <CommonHead title={title}/>

                    <div className="context">
                        <div className="row">

                            {receive
                                ? Object
                                    .keys(receive)
                                    .map(a => <div
                                        key={k++/*key value, please make it random and unique*/}
                                        className="col-md-4 col-sm-8 offset-sm-3 offset-md-0 offset-lg-0 offset-xl-0 offset-0 col-12">
                                        <Item 
                                        text={receive[a].text} 
                                        title={receive[a].title} 
                                        icon={receive[a].img}/>
                                    </div>)
                                : ''}
                            {need
                                ? Object
                                    .keys(need)
                                    .map(a => <div
                                        key={k++/*key value, please make it random and unique*/}
                                        className="col-md-4 col-sm-8 offset-sm-3 offset-md-0 offset-lg-0 offset-xl-0 offset-0 col-12">
                                        <Item
                                            text={need[a].text}
                                            requires={need[a].importance}
                                            title={need[a].title}
                                            icon={need[a].img}/>
                                    </div>)
                                : ''}

                            {rare ? Object
                                .keys(rare)
                                .map(a => <div
                                    key={k++/*key value, please make it random and unique*/}
                                    className="col-md-4 col-sm-6 col-12">
                                    <Item
                                        text={rare[a].text}
                                        title={rare[a].title}
                                        icon={rare[a].icon} />
                                </div>)
                                : ''}

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Difference
