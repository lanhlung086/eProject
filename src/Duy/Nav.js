import React from 'react';
import "./css/Nav.css";
import {useEffect} from 'react';
import {Link} from "react-router-dom";

function Nav() {
    useEffect(() => {
        let navLinks = document.querySelectorAll(".navMain__menu > li");
        let productLink = document.querySelector(".navMain__productLink");
        let dropdownMenu = document.querySelector(".navMain__dropdownMenu");

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
    }, [])
    return (
        <nav className="nav">
            <div className="navSub">
                <div className="navSub__logo">
                    <Link to="/">
                        <h3>FAN<img className="navSub__logo" src="imgs/fan-logo.png" alt="FANoFAN Logo"/>FAN</h3>
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
                    <span>Sign In</span>
                </div>
                <div className="navSub__orders">
                    <span>Returns</span>
                    <span>& Orders</span>
                </div>
                <div className="navSub__basket">
                    <i className="fab fa-opencart fa-lg"></i>
                    <span className="navSub__counter">0</span>
                    <span>Cart</span>
                </div>
            </div>
            <div className="navMain">
                <ul className="navMain__menu">
                    <li><Link to="/">Home</Link></li>
                    <li className="navMain__productLink">
                        <Link to="/product">Product</Link>
                        <i className="fas fa-angle-down"></i>
                        <ul className="navMain__dropdownMenu">
                            <li>
                                <Link to="">Ceiling Fan</Link>
                                <ul className="navMain__nestedDropdownMenu">
                                    <li><Link to="">Minka Aire Fan</Link></li>
                                    <li><Link to="">Craftmade Fan</Link></li>
                                    <li><Link to="">Kichler Fan</Link></li>
                                    <li><Link to="">Monte Carlo Fan</Link></li>
                                    <li><Link to="">Casablanca Fan</Link></li>
                                    <li><Link to="">Quorum Fan</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">Tower Fan</Link>
                                <ul className="navMain__nestedDropdownMenu">
                                    <li><Link to="">Lasko Fan</Link></li>
                                    <li><Link to="">Honeywell Fan</Link></li>
                                    <li><Link to="">Vornado Fan</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">Misting Fan</Link>
                            </li>
                            <li>
                                <Link to="">Exhaust Fan</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;