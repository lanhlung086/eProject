import React from 'react';
import {Link} from "react-router-dom";

function ProductRecommend({id, imageSmall, imageBig, title, rating, review, price, listPrice}) {
    return (
        <div className="detailRecommend__item">
            <Link to={`/productdetail/${id}`}><img src={imageSmall} alt=""/></Link>
            <Link to={`/productdetail/${id}`} className="detailRecommend__itemTitle" href="" title={title}>{title}</Link>
            <div className="detailRecommend__itemRating">
                <div className="detailRecommend__itemWhiteStar">
                    <div className="detailRecommend__itemYellowStar" style={{width: `${(rating / 5) * 100}%`}}></div>
                </div>
                <Link className="detailRecommend__itemReview" to="">{review}</Link>
            </div>
            <div className="detailRecommend__itemPriceContainer">
                <div className="detailRecommend__itemPrice">${price}</div>
                <div className="detailRecommend__itemListPrice">{(listPrice) ? `$${listPrice}`:""}</div>
            </div>
        </div>
    )
}

export default ProductRecommend;