import React, { useState, useReducer } from 'react';
import { Link } from "react-router-dom";

function Summery({ servicePrice, totalPic, photoRate, url,addOns }) {
    const [summeryLoading, isSummeryLoading] = useState(false);
    const [total, setTotal]=useState(0);
    useReducer(() => {
        isSummeryLoading(true);
        setTotal(Math.abs(servicePrice + (photoRate * totalPic)));
        isSummeryLoading(false);
    }, [total]);
    const push=()=>{
        console.log('Push data to parents');
    }
    return (
        
        <div className="col-md-4 offset-sm-2 offset-md-0 offset-lg-0 offset-0 offset-xl-0 col-sm-8 p00 col-12">
        { summeryLoading === false ? <>
            <div className="summery_box">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="summery_title bottom_line">
                            <h5>Order summary</h5>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="summery_set">
                            <div className="name">
                                <h5>Service Cost</h5>
                            </div>
                            <div className="price">
                                <h5>{servicePrice}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="summery_set">
                            <div className="name">
                                <h5>Photos</h5>
                            </div>
                            <div className="price">
                                <h5>{totalPic}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="summery_set bottom_line">
                            <div className="name">
                                <h5>Amount</h5>
                            </div>
                            <div className="price">
                                <h5> {photoRate} x {totalPic}</h5>
                            </div>
                        </div>
                    </div>
                    {addOns ? <div className="col-md-12 col-sm-12 col-12">
                        <div className="summery_set bottom_line">
                            <div className="name">
                                <h5>Add on amount</h5>
                            </div>
                            <div className="price">
                                <h5>₹ {addOns}</h5>
                            </div>
                        </div>
                    </div>
: ''}
                    
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="total_set">
                            <div className="name">
                                <h5>Total Amount</h5>
                            </div>
                            <div className="price">
                                <h5>₹ {total === isNaN() ? '0' : total}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="confirm_button">
                    <h5>Do you have a promocode? <button> Click here </button></h5>
                </div>
                <div className="confirm_button">
                    <form action="#">
                        <input className="promo" type="text" name="promocode" />
                        <button className="apply" type="submit" name="apply">Apply</button>
                    </form>
                </div>
                <div className="confirm_button">
                    <h6>Promocode applied.</h6> <button> Click here </button>
                </div> */}
            </div>

            <div className="confirm_button">
                <button className="btn cancel float-left">
                    Cancel
                </button>
                {/* {photos===0 ? <button className="btn cross next float-left">
                                        Next
                                        </button> :  */}<Link to={url} className="btn cancel float-left" onClick={push}>
                    Next
                </Link>{/* } */}

            </div>
  </>  : '...loading' }
        </div>
    )
}

export default Summery
