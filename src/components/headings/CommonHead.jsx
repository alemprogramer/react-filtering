import React, {Component} from 'react'

export class CommonHead extends Component {
    render() {
        const { title, slogan, icon}=this.props;
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="cmn_heading text-capitalize text-center">
                        <h3>
                            {title}
                        </h3>
                        {slogan ? <h6>{slogan} {icon ? <span>
                            <i className={`fas ${icon}`}></i>
                        </span>:''} </h6>:""}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonHead
