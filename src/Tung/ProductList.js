import React from 'react';
import "./css/Product.css" ;
import {useEffect,useState} from 'react';
import {store} from "../Duy/Store";
import {Link} from "react-router-dom";

export default function ProductList({id, image, brand, title, price, listPrice, rating, review}) {
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
                <img className="product-image" src={image} height="230"
                     width="300"/>
                <h2 className="product-name">{brand}</h2>
                <Link to="#" className="title3">
                    {title}
                </Link>
                <div className="douprice">
                    <div className="price">${price}"</div>
                    <div className="oldprice">{listPrice}</div>
                </div>
                <div className="ratting">
                    <div className="star">
                        <div className="star-box">
                            <div className="star-rate" style={{width: rating / 5 * 100 + "%"}}> </div>
                        </div>
                    </div>
                    <a className="hmratting" href="#">{review} reviews</a>
                </div>
                <Link to="#"  className="button_detail">
                    More Detail
                </Link>
            </div>
        </div>
    )
}