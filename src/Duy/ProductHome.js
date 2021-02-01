import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {useStateValue} from "./StateProvider";

function ProductHome({id, imageSmall, imageBig, title, rating, review, price, listPrice}) {
    const [{cart}, dispatch] = useStateValue();
    const addToBasket = () => {
        const isStoreItem = cart.some(item => item.id === id)
        if(isStoreItem) {
            let item = cart.find((e) => {
                return e.id === id;
            })
            let itemCount = item.itemCount + 1;
            dispatch({
                type: 'ADD_TO_CART',
                item: {
                    id: id,
                    imageSmall: imageSmall,
                    imageBig: imageBig,
                    title: title,
                    rating: rating,
                    review: review,
                    price: price,
                    listPrice: listPrice,
                    itemCount: itemCount,
                }
            })
        }
        else {
            dispatch({
                type: 'ADD_TO_CART',
                item: {
                    id: id,
                    imageSmall: imageSmall,
                    imageBig: imageBig,
                    title: title,
                    rating: rating,
                    review: review,
                    price: price,
                    listPrice: listPrice,
                    itemCount: 1,
                }
            })
        }
    }
    return (
        <div className="main__item">
            <Link to={`/productdetail/${id}`}><img src={imageSmall} alt=""/></Link>
            <Link to={`/productdetail/${id}`} className="main__itemTitle" href="" title={title}>{title}</Link>
            <div className="main__itemRating">
                <div className="main__itemWhiteStar">
                    <div className="main__itemYellowStar" style={{width: `${(rating / 5) * 100}%`}}> </div>
                </div>
                <HashLink className="main__itemReview" to={`/productdetail/${id}#reviewHook`}>{review}</HashLink>
            </div>
            <div className="main__itemPriceContainer">
                <div className="main__itemPrice">${price}</div>
                <div className="main__itemListPrice">{(listPrice) ? `$${listPrice}`:""}</div>
            </div>
            <button onClick={addToBasket} className="main__itemAddToCart">Add to Cart</button>
        </div>
    )
}

export default ProductHome;