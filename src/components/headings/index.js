import React from 'react'

function CommonHead({ title, slogan, icon}) {
    return (
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="cmn_heading text-capitalize text-center">
                    <h3>
                        {title}
                    </h3>
                    {slogan ? <h6>{slogan} {icon ? <span>
                        <i className={`fas ${icon}`}></i>
                    </span> : ''} </h6> : ""}
                </div>
            </div>
        </div>
    )
}

const MiniHead= ({title})=>{
    return (
        <div className="title text-left text-capitalize">
            <h4>{title}</h4>
        </div>
    )
}

export default CommonHead
export {MiniHead};
