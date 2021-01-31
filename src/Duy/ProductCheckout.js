import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useStateValue} from "./StateProvider";

function ProductCheckout({id, imageSmall, imageBig, title, rating, review, price, listPrice, itemCount}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <>
            <div className="checkout__product">
                <img src={imageBig} alt=""/>
                <div className="checkout__productInfo">
                    <Link to={`/productdetail/${id}`}>{title}</Link>
                    <div className="checkout__itemRating">
                        <div className="checkout__itemWhiteStar">
                            <div className="checkout__itemYellowStar" style={{width: `${(rating / 5) * 100}%`}}></div>
                        </div>
                        <HashLink className="checkout__itemReview" to={`/productdetail/${id}#reviewHook`}>{(!review) ? "0 rating":`${review} ratings`}</HashLink>
                    </div>
                    <p className="checkout__productPrice">${price}</p>
                    <p className="checkout__shipInfo">Usually ships within 3 to 4 weeks</p>
                    <div className="checkout__containGift">
                        <input className="productGift" id="productGift" type="checkbox" name="gift"/>
                        <label htmlFor="productGift">This is a gift</label>
                    </div>
                    <div className="checkout__productQtyContainer">
                        <div className="checkout__productQty">
                            <span>Qty: {itemCount}</span>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <a href="" className="checkout__remove" onClick={removeFromBasket}>Delete</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCheckout;