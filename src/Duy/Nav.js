import React from 'react';
import "./css/Nav.css";
import {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {getBasketItemTotal} from "./reducer";

function Nav() {
    const [{cart}, dispatch] = useStateValue();
    useEffect(() => {
        let navLinks = document.querySelectorAll(".navMain__menu > li");
        let productLink = document.querySelector(".navMain__productLink");
        let dropdownMenu = document.querySelector(".navMain__dropdownMenu");
        let backToTop = document.querySelector(".nav__backToTop");
        let logoLink = document.querySelector(".navSub__logo > a");

        logoLink.addEventListener("click", () => {
            navLinks.forEach((a) => {
                a.classList.remove("link--active");
            })
        })

        navLinks.forEach((a) => {
            a.addEventListener("click", (e) => {
                navLinks.forEach((a) => {
                    a.classList.remove("link--active");
                })
                e.currentTarget.classList.add("link--active");
            }, )
        })
        productLink.addEventListener("mouseenter", () => {
            dropdownMenu.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        })
        productLink.addEventListener("mouseleave", () => {
            dropdownMenu.style.transition = "transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease";
        })
        backToTop.addEventListener("click", () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
    }, [cart])
    return (
        <nav className="nav" id="navTop">
            <div className="nav__backToTop">
                <i className="fas fa-arrow-up"></i>
            </div>
            <div className="navSub">
                <div className="navSub__logo">
                    <Link to="/">
                        <h3>Fan<img className="navSub__logo" src="imgs/fan-logo.png" alt="FANoFAN Logo"/>Fan</h3>
                    </Link>
                </div>
                <div className="navSub__deliver">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <span>Deliver to</span>
                        <span>Vietnam</span>
                    </div>
                </div>
                <div className="navSub__searching">
                    <input type="search"/>
                    <div className="navSub__imgContainer">
                        <img src="imgs/search-icon.png" alt="Searching"/>
                    </div>
                </div>
                <div className="navSub__signIn">
                    <span>Hello</span>
                    <Link to="/signin">Sign In</Link>
                </div>
                <div className="navSub__orders">
                    <Link to="/signin">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </Link>
                </div>
                <div className="navSub__basket">
                    <Link to="/checkout">
                        <i className="fab fa-opencart fa-lg"></i>
                        <span className="navSub__counter">{getBasketItemTotal(cart)}</span>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
            <div className="navMain">
                <ul className="navMain__menu">
                    <li><Link to="/">Home</Link></li>
                    <li className="navMain__productLink">
                        <Link to="/products/All Products">Product</Link>
                        <i className="fas fa-angle-down"></i>
                        <ul className="navMain__dropdownMenu">
                            <li>
                                <Link to="/products/Ceiling Fan">Ceiling Fan</Link>
                                <ul className="navMain__nestedDropdownMenu">
                                    <li><Link to="/products/MINKA-AIRE">Minka Aire Fan</Link></li>
                                    <li><Link to="/products/Craftmade">Craftmade Fan</Link></li>
                                    <li><Link to="/products/Kichler">Kichler Fan</Link></li>
                                    <li><Link to="/products/Monte Carlo">Monte Carlo Fan</Link></li>
                                    <li><Link to="/products/Casablanca">Casablanca Fan</Link></li>
                                    <li><Link to="/products/Quorum">Quorum Fan</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/products/Tower Fan">Tower Fan</Link>
                                <ul className="navMain__nestedDropdownMenu">
                                    <li><Link to="/products/Lasko">Lasko Fan</Link></li>
                                    <li><Link to="/products/Honeywell">Honeywell Fan</Link></li>
                                    <li><Link to="/products/Vornado">Vornado Fan</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/products/Misting Fan">Misting Fan</Link>
                            </li>
                            <li>
                                <Link to="/products/Exhaust Fan">Exhaust Fan</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;