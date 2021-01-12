import React from 'react';
import "./css/Home.css";
import {useEffect} from "react";
import {store} from "./Store";

function Home() {
    useEffect(() => {
        let carouselSlide = document.querySelector(".header__carouselSlide");
        let images = document.querySelectorAll(".header__carouselSlide > img");
        let labels = document.querySelectorAll(".header__labelForRadio > label")
        let leftButton = document.querySelector(".arrowLeft");
        let rightButton = document.querySelector(".arrowRight");
        let arrows = document.querySelectorAll(".main__carousel > i");
        let buttons = document.querySelectorAll(".main__itemAddToCart");
        let leftButtons = document.querySelectorAll(".main__carouselArrowLeft");
        let rightButtons = document.querySelectorAll(".main__carouselArrowRight");
        let mainCarouselSlide = document.querySelectorAll(".main__carouselSlide");
        let counter = 1;
        let width = carouselSlide.clientWidth;

        arrows.forEach((a) => {
            a.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("button--active")
            })
            a.addEventListener("mouseup", (e) => {
                e.currentTarget.classList.remove("button--active")
            })
            a.addEventListener("mouseleave", (e) => {
                e.currentTarget.classList.remove("button--active")
            })
        })
        buttons.forEach((a) => {
            a.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("button--active")
            })
            a.addEventListener("mouseup", (e) => {
                e.currentTarget.classList.remove("button--active")
            })
            a.addEventListener("mouseleave", (e) => {
                e.currentTarget.classList.remove("button--active")
            })
        })
        mainCarouselSlide.forEach((a, i) => {
            let count = 1;
            let carouselWidth = a.clientWidth;
            leftButtons[i].addEventListener("click", () => {
                if (count == 1) {
                    return;
                }
                count--;
                mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
                mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
            rightButtons[i].addEventListener("click", () => {
                if (count == 3) {
                    return;
                }
                console.log(count);
                count++;
                mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
                mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
        })
    }, [])
    return (
        <>
            <header className="header">
                <div className="header__carouselContainer">
                    <div className="header__carouselSlide">
                        <img id="lastClone" src="imgs/header-fan02.jpg"></img>
                        <img src="imgs/header-fan05.jpg"></img>
                        <img src="imgs/header-fan03.jpg"></img>
                        <img src="imgs/header-fan06.jpg"></img>
                        <img src="imgs/header-fan01.jpg"></img>
                        <img src="imgs/header-fan04.jpg"></img>
                        <img src="imgs/header-fan02.jpg"></img>
                        <img id="firstClone" src="imgs/header-fan05.jpg"></img>
                    </div>
                    <input id="radio1" type="radio" name="images"/>
                    <input id="radio2" type="radio" name="images"/>
                    <input id="radio3" type="radio" name="images"/>
                    <input id="radio4" type="radio" name="images"/>
                    <input id="radio5" type="radio" name="images"/>
                    <input id="radio6" type="radio" name="images"/>
                    <div className="header__labelForRadio">
                        <label htmlFor="radio1"></label>
                        <label htmlFor="radio2"></label>
                        <label htmlFor="radio3"></label>
                        <label htmlFor="radio4"></label>
                        <label htmlFor="radio5"></label>
                        <label htmlFor="radio6"></label>
                    </div>
                    <i className="fas fa-chevron-left arrowLeft"></i>
                    <i className="fas fa-chevron-right arrowRight"></i>
                </div>
                <div className="header__decorate">

                </div>
            </header>
            <section className="main">
                <div className="main__guarantee">
                    <p>
                        <i className="fas fa-cogs"></i>
                        ENGINE WARRANTY FOR 10 YEARS
                    </p>
                    <p>
                        <i className="fas fa-tools"></i>
                        FREE INSTALLATION
                    </p>
                    <p>
                        <i className="fas fa-sync-alt"></i>
                        FREE EXCHANGE WITHIN 10 DAYS
                    </p>
                    <p>
                        <i className="far fa-thumbs-up"></i>
                        100% SATISFACTION GUARANTEE
                    </p>
                </div>
                <div className="main__container">
                    <div className="main__carousel">
                        <h3>Top Sellers</h3>
                        <div className="main__carouselContainer">
                            <div className="main__carouselSlide">
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="" title="adsad">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/31-kv0eANEL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Minka-Aire F736L-BS/SDBK Gear 54" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41-IfG804QL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">Arctic-Pro Digital Screen Oscillating Tower Fan with Remote Control, Dark Gray, 42-Inch</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                                <div className="main__item">
                                    <a href=""><img src="https://m.media-amazon.com/images/I/41n3P79MPFL._AC_SR160,160_.jpg" alt=""/></a>
                                    <a className="main__itemTitle" href="">TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display, 9 Modes, Easy Clean, Up to12H Timer Bladeless Standing Fan Portable for the Whole Room Home Office</a>
                                    <div className="main__itemRating">
                                        <p className="main__itemWhiteStar">
                                            <p className="main__itemYellowStar"></p>
                                        </p>
                                        <a className="main__itemReview" href="">210</a>
                                    </div>
                                    <p className="main__itemPrice">$64.53</p>
                                    <button className="main__itemAddToCart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-chevron-left main__carouselArrowLeft"></i>
                        <i className="fas fa-chevron-right main__carouselArrowRight"></i>
                    </div>
                    {/*<div className="main__carousel">*/}
                    {/*    <div className="main__carouselSlide">*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="main__carousel">*/}
                    {/*    <div className="main__carouselSlide">*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    )
}

export default Home;