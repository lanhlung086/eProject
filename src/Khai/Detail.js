import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './css/Detail.css';
import {store} from "../Duy/Store";
import ProductRecommend from "./ProductRecommend";
import ProductDetail from "./ProductDetail";
import CustomerReview from "./CustomerReview";
import CustomerComment from "./CustomerComment";

function Detail({id}) {
    const product = store.find((e) => {
        return e.id === id;
    })
    useEffect(() => {
        const slideButtonActivate = () => {
            const detailLeftButton = document.querySelector(".detailRecommend__carouselArrowLeft");
            const detailRightButton = document.querySelector(".detailRecommend__carouselArrowRight");

            detailLeftButton.addEventListener("mousedown", (event) => {
                event.currentTarget.classList.add("button--active");
            })
            detailRightButton.addEventListener("mousedown", (event) => {
                event.currentTarget.classList.add("button--active")
            })
            window.addEventListener("mouseup", () => {
                detailLeftButton.classList.remove("button--active");
                detailRightButton.classList.remove("button--active");
            })
        }
        slideButtonActivate();

        const detailCarouselSlide = () => {
            const detailCarousel = document.querySelector(".detailRecommend__carouselSlide")
            const detailLeftButton = document.querySelector(".detailRecommend__carouselArrowLeft");
            const detailRightButton = document.querySelector(".detailRecommend__carouselArrowRight");

            let count = 1;
            let carouselWidth = detailCarousel.clientWidth;
            let items = detailCarousel.children;
            let page = document.querySelector(".detailRecommend__carousel > p:first-of-type");
            page.innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
            detailLeftButton.addEventListener("click", () => {
                if (count === 1) {
                    return;
                }
                count--;
                page.innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
                detailCarousel.style.transition = "transform 0.5s ease-in-out";
                detailCarousel.style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
            detailRightButton.addEventListener("click", () => {
                if (count === Math.ceil(items.length / 6)) {
                    return;
                }
                count++;
                page.innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
                detailCarousel.style.transition = "transform 0.5s ease-in-out";
                detailCarousel.style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
        }
        detailCarouselSlide();
    }, [])
    return (
        <section className="section-body">
            <div style={{padding: 20, backgroundColor: "white"}}>
                <div className="main-body">
                    <div className="main-body-content">
                        <ProductDetail
                            imageBig01={product?.imageBig01}
                            imageBig02={product?.imageBig02}
                            title={product?.title}
                            rating={product?.rating()}
                            reviews={product?.reviews()}
                            price={product?.price}
                            listPrice={product?.listPrice}
                            color={product?.color}
                            brand={product?.brand}
                            dimension={product?.dimension}
                            material={product?.material}
                            controllerType={product?.controllerType}
                            finishType={product?.finishType}
                            aboutItem={product?.aboutItem}
                        />
                    </div>
                    <div className="main-body-ads">
                        <img className="imgProduct_ads" src="imgs/ads_img.jpeg" style={{width: '100%'}}/>
                    </div>
                </div>
                <div className="line"/>
                <div className="more-product">
                    <h2 style={{fontSize: 24}}>Get instant recommendations</h2>
                    <div className="get-instant">
                        <div className="detailRecommend__carousel">
                            <h3>Inspired by your recent shopping trends</h3>
                            <p></p>
                            <div className="detailRecommend__carouselContainer">
                                <div className="detailRecommend__carouselSlide">
                                    {
                                        store.filter((e) => {
                                            return e.type === product.type;
                                        }).map((e) => {
                                            return (
                                                <ProductRecommend
                                                    key={e.id}
                                                    id={e.id}
                                                    imageSmall={e.imageSmall}
                                                    title={e.title}
                                                    rating={e.rating()}
                                                    review={e.reviews()}
                                                    price={e.price}
                                                    listPrice={e.listPrice}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <i className="fas fa-chevron-left detailRecommend__carouselArrowLeft"></i>
                            <i className="fas fa-chevron-right detailRecommend__carouselArrowRight"></i>
                        </div>
                    </div>
                </div>
                <div className="line"/>
                <div className="product_review">
                    <CustomerReview
                        customers={product.customers}
                        rating={product.rating()}
                    />
                    <div className="top_review">
                        {(product.customers.length === 0)
                            ? <h2 style={{fontSize: 24, fontWeight: 700}}>No Customer Reviews</h2>
                            : <>
                                <h2 style={{fontSize: 24, fontWeight: 700}}>Top reviews from the Further</h2>
                                <div className="top_comment">
                                    {product.customers.map((e) => {
                                        return <CustomerComment
                                            name={e.name}
                                            rating={e.rating}
                                            generalReview={e.generalReview}
                                            detailReview={e.detailedReview}
                                        />
                                    })}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Detail;