import React from 'react';
import "./css/Product.css" ;
import {useEffect,useState} from 'react';
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

export default function ProductList({id, image, title, price, listPrice, rating, review}) {
    useEffect(()=>{
        function buttonActive() {
            let duynude=document.querySelectorAll(".button_detail");

            duynude.forEach((a) => {
                a.addEventListener("mousedown", (e) => {
                    e.currentTarget.classList.add("button--active")
                })
                window.addEventListener("mouseup", () => {
                    a.classList.remove("button--active")
                })
            })
        }
        buttonActive();
    })
    return(
        <div className="itemlist">
            <div className="item1">
                <Link to={`/productdetail/${id}`}>
                    <img className="product-image" src={image} height="230"
                         width="300"/>
                </Link>
                <Link to={`/productdetail/${id}`} className="title3">
                    {title}
                </Link>
                <div className="douprice">
                    <div className="price">${price}</div>
                    <div className="oldprice">{listPrice}</div>
                </div>
                <div className="ratting">
                    <div className="star">
                        <div className="star-box">
                            <div className="star-rate" style={{width: rating / 5 * 100 + "%"}}> </div>
                        </div>
                    </div>
                    <HashLink className="hmratting" to={`/productdetail/${id}#reviewHook`}>{review} {(review === 0 || review === 1) ? "review" : "reviews"}</HashLink>
                </div>
                <Link to={`/productdetail/${id}`}  className="button_detail">
                    More Detail
                </Link>
            </div>
        </div>
    )
}