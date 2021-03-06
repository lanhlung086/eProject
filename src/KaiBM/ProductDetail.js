import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useStateValue} from "../Duy/StateProvider";

function ProductDetail({id, imageSmall, imageBig01, imageBig02, title, rating, reviews, price, listPrice, color, brand, dimension, material, controllerType, finishType, aboutItem}) {
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
                    imageBig: imageBig01,
                    title: title,
                    rating: rating,
                    review: reviews,
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
                    imageBig: imageBig01,
                    title: title,
                    rating: rating,
                    review: reviews,
                    price: price,
                    listPrice: listPrice,
                    itemCount: 1,
                }
            })
        }
    }
    useEffect(() => {
        var slideIndex;
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("img-detail");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += " active";
            slideIndex++;
        }

        showSlides(slideIndex = 0);

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        const currentImg1 = document.querySelector(".currentImg1");
        const currentImg2 = document.querySelector(".currentImg2");
        currentImg1.addEventListener("click", () => {
            currentSlide(0)
        })
        currentImg2.addEventListener("click", () => {
            currentSlide(1)
        })

        const buttonActivate = () => {
            const buttons = document.querySelectorAll(".main__itemAddToCart1");

            buttons.forEach((a) => {
                a.addEventListener("mousedown", (e) => {
                    e.currentTarget.classList.add("button--active")
                })
                window.addEventListener("mouseup", () => {
                    a.classList.remove("button--active")
                })
            })
        }
        buttonActivate();
    }, [])
    return (
        <>
            <div className="main-body-left">
                <div style={{height: "350px", position: "sticky", top: "0"}}>
                    <div className="img-detail fade detailImg">
                        <img src={imageBig01} style={{width: '100%', height: "100%", objectFit: "contain"}}/>
                    </div>
                    <div className="img-detail fade detailImg">
                        <img src={imageBig02} style={{width: '100%', height: "100%", objectFit: "contain"}}/>
                    </div>
                    <div className="dotContainer">
                        <span className="dot currentImg1"/>
                        <span className="dot currentImg2"/>
                    </div>
                </div>
            </div>
            <div className="main-body-right">
                <div className="content-detail" id="productDetail">
                    <p><strong style={{fontSize: 24, textAlign: 'justify'}}>{title}</strong></p>
                    <div className="star-rating" style={{width: '100%'}}>
                        <p style={{margin: 0}}><Link to="#" style={{textDecoration: 'none'}}><strong
                            style={{fontSize: 14}}>Visit the Prominence Home Store</strong></Link></p>
                        <div className="stars">
                            <div className="star_outside">
                                <div className="star_inside" style={{width: `${(rating / 5) * 100}%`}}/>
                            </div>
                        </div>
                    </div>
                    <button onClick={addToBasket} className="main__itemAddToCart1">Add to Cart</button>
                    <p><Link to="#" style={{textDecoration: 'none'}}><strong></strong></Link></p>
                    <div className="line"/>
                    <table style={{maxWidth: '100%', lineHeight: 2.0}} id="table_information">
                        <tbody>
                        <tr>
                            <td><strong>Price:</strong></td>
                            <td style={{color: "darkred", fontWeight: "700"}}> ${price}</td>
                            {(listPrice)
                                ? <td style={{color: "#000", textDecoration: "line-through"}}>(${listPrice})</td>
                                : null
                            }
                        </tr>
                        {(listPrice)
                            ? <tr>
                                <td><strong>You save:</strong></td>
                                <td style={{color: "darkred"}}>${(listPrice - price).toFixed(2)}</td>
                                <td>({Math.round(((listPrice - price)/listPrice)*100)}%)</td>
                            </tr>
                            : null
                        }
                        <tr>
                            <td><strong>Color</strong></td>
                            <td>{color}</td>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <td>{brand}</td>
                        </tr>
                        {(dimension)
                            ? <tr>
                                <th>Item Dimensions LxWxH</th>
                                <td>{dimension}</td>
                            </tr>
                            : null
                        }
                        {(material)
                            ? <tr>
                                <th><strong>Material</strong></th>
                                <td>{material}</td>
                            </tr>
                            : null
                        }
                        <tr>
                            <th><strong>Controller Type</strong></th>
                            <td>{controllerType}</td>
                        </tr>
                        {(finishType)
                            ? <tr>
                                <th><strong>Finish Type</strong></th>
                                <td>{finishType}</td>
                            </tr>
                            : null
                        }
                        </tbody>
                    </table>
                    <div className="line"/>
                    <div className="infor-product">
                        <span><strong>About this item</strong></span>
                        <ul style={{textAlign: 'justify', fontWeight: "400"}}>
                            {aboutItem?.map((e) => {
                                return <li>{e}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;