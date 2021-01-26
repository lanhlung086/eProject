import React from 'react';

function CustomerComment({name, rating, generalReview, detailReview}) {
    return (
        <>
            <div className="customer_comment">
                <div className="acc_customer">
                    <i className="fas fa-user-circle" style={{fontSize: 28}}/>
                    <span className="customer_name">{name}</span>
                </div>
                <div className="customer_rating">
                    <div className="starWhite_customer">
                        <div className="starYellow_customer" style={{width: `${(rating/5)*100}%`}}/>
                    </div>
                    <div className="most_review">
                        <span><strong>{generalReview}</strong></span>
                    </div>
                </div>
                <div className="content_review">
                    {detailReview.map((e) => {
                        return <p>{e}</p>
                    })}
                </div>
                <div className="button_for_customer">
                    <div className="button_helpful">
                                        <span className="item_button"><a href="#" className="real_button"
                                                                         style={{color: 'black'}}>Helpful</a></span>
                        <span className="item_button">|</span>
                        <span className="item_button">Report abuse</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerComment;