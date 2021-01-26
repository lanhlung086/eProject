import React from 'react';
import './css/Checkout.css';
import {useEffect} from 'react';
import Subtotal from "./Subtotal";
import {Link, useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketPriceTotal, getBasketItemTotal} from "./reducer";
import ProductCheckout from "./ProductCheckout";

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    const history = useHistory();
    useEffect(() => {
        let signButtons = document.querySelectorAll(".checkout__emptyProductInfo > button");
        let checkoutButton = document.querySelector(".checkout__checkoutButton");
        let removeButtons = document.querySelectorAll(".checkout__remove");
        let signInButton = document.querySelector(".checkout__signIn");
        let signUpButton = document.querySelector(".checkout__signUp");

        signButtons.forEach((e) => {
            e.addEventListener("mousedown", (event) => {
                event.currentTarget.classList.add("button--active");
            })
            window.addEventListener("mouseup", () => {
                e.classList.remove("button--active");
            })
        })

        checkoutButton.addEventListener("mousedown", (event) => {
            event.currentTarget.classList.add("button--active");
        })
        checkoutButton.addEventListener("mouseup", (event) => {
            event.currentTarget.classList.remove("button--active");
        })
        checkoutButton.addEventListener("mouseleave", (event) => {
            event.currentTarget.classList.remove("button--active");
        })

        removeButtons.forEach((e) => {
            e.addEventListener("click", (event) => {
                event.preventDefault();
            })
        })

        signInButton?.addEventListener("click", () => {
            history.push("/signin")
        })
        signUpButton?.addEventListener("click", () => {
            history.push("/signup")
        })
    },)
    return (
        <>
            <div className="checkout">
                <div className="checkout__left">
                    <div className="checkout__ad">
                        <img src="imgs/cardBG.jpg" alt=""/>
                    </div>
                    <div className="checkout__productsContainer">
                        <h3>Shopping Cart</h3>
                        {(cart.length === 0)
                            ? <>
                                <div className="checkout__emptyProduct">
                                    <img src="imgs/emptyCart.svg" alt=""/>
                                    <div className="checkout__emptyProductInfo">
                                        <p>Your Cart is empty</p>
                                        <button className="checkout__signIn">Sign in to your account</button>
                                        <button className="checkout__signUp">Sign up now</button>
                                    </div>
                                </div>
                            </>
                            : <>
                                <div className="checkout__products">
                                    {
                                        cart.map((e) => {
                                            return (
                                                <ProductCheckout
                                                    id={e.id}
                                                    imageBig={e.imageBig}
                                                    title={e.title}
                                                    rating={e.rating}
                                                    review={e.review}
                                                    price={e.price}
                                                    listPrice={e.listPrice}
                                                    itemCount={e.itemCount}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p className="checkout__priceTotal">Subtotal ({(cart.length === 0) ? "0 item" : `${getBasketItemTotal(cart)} items`}): <span>{value}</span></p>
                                        </>
                                    )}
                                    thousandSeparator={true}
                                    value={getBasketPriceTotal(cart)}
                                    displayType={"text"}
                                    decimalScale={2}
                                    prefix={"$"}
                                />
                            </>
                        }
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            </div>
        </>
    )
}

export default Checkout;