import React from 'react';
import "./css/Product.css" ;
import {useEffect,useState} from 'react';
import {store} from "../Duy/Store";
import {Link} from "react-router-dom";
import ProductList from "./ProductList";

export default function Product() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts(store);
        var tung=document.getElementsByClassName("category");
        for(let i=0;i<tung.length;i++){
            tung[i].onclick=function (e) {
                e.preventDefault();
                let d = i ;
                tung[d].classList.toggle('tungmenu--modifier')
            }
        }

        const selectBrand = () => {
            let minkaAireLink = document.querySelector(".minkaAireLink");
            let craftmadeLink = document.querySelector(".craftmadeLink");
            let kichlerLink = document.querySelector(".kichlerLink");
            let monteCarloLink = document.querySelector(".monteCarloLink");
            let casablancaLink = document.querySelector(".casablancaLink");
            let quorumLink = document.querySelector(".quorumLink");
            let laskoLink = document.querySelector(".laskoLink");
            let honeywellLink = document.querySelector(".honeywellLink");
            let vornadoLink = document.querySelector(".vornadoLink");
            let ceilingFanLink = document.querySelector(".ceilingLink");
            let towerFanLink = document.querySelector(".towerLink");
            let mistingFanLink = document.querySelector(".mistingLink");
            let exhaustFanLink = document.querySelector(".exhaustLink");

            minkaAireLink.addEventListener("click", (event) => {
                event.preventDefault();
                let minkaAireProducts = store.filter((e) => {
                    return e.brand === "MINKA-AIRE";
                })
                setProducts(minkaAireProducts);
            })
            craftmadeLink.addEventListener("click", (event) => {
                event.preventDefault();
                let craftmadeProducts = store.filter((e) => {
                    return e.brand === "Craftmade";
                })
                setProducts(craftmadeProducts);
            })
            kichlerLink.addEventListener("click", (event) => {
                event.preventDefault();
                let kichlerProducts = store.filter((e) => {
                    return e.brand === "Kichler";
                })
                setProducts(kichlerProducts);
            })
            monteCarloLink.addEventListener("click", (event) => {
                event.preventDefault();
                let monteCarloProducts = store.filter((e) => {
                    return e.brand === "Monte Carlo";
                })
                setProducts(monteCarloProducts);
            })
            casablancaLink.addEventListener("click", (event) => {
                event.preventDefault();
                let casablancaProducts = store.filter((e) => {
                    return e.brand === "Casablanca";
                })
                setProducts(casablancaProducts);
            })
            quorumLink.addEventListener("click", (event) => {
                event.preventDefault();
                let quorumProducts = store.filter((e) => {
                    return e.brand === "Quorum";
                })
                setProducts(quorumProducts);
            })
            laskoLink.addEventListener("click", (event) => {
                event.preventDefault();
                let laskoProducts = store.filter((e) => {
                    return e.brand === "Lasko" && e.type === "Tower Fan";
                })
                setProducts(laskoProducts);
            })
            honeywellLink.addEventListener("click", (event) => {
                event.preventDefault();
                let honeywellProducts = store.filter((e) => {
                    return e.brand === "Honeywell";
                })
                setProducts(honeywellProducts);
            })
            vornadoLink.addEventListener("click", (event) => {
                event.preventDefault();
                let vornadoProducts = store.filter((e) => {
                    return e.brand === "Vornado";
                })
                setProducts(vornadoProducts);
            })
            ceilingFanLink.addEventListener("click", (event) => {
                event.preventDefault();
                let ceilingProducts = store.filter((e) => {
                    return e.type === "Ceiling Fan";
                })
                setProducts(ceilingProducts);
            })
            towerFanLink.addEventListener("click", (event) => {
                event.preventDefault();
                let towerProducts = store.filter((e) => {
                    return e.type === "Tower Fan";
                })
                setProducts(towerProducts);
            })
            mistingFanLink.addEventListener("click", (event) => {
                event.preventDefault();
                let mistingProducts = store.filter((e) => {
                    return e.type === "Misting Fan";
                })
                setProducts(mistingProducts);
            })
            exhaustFanLink.addEventListener("click", (event) => {
                event.preventDefault();
                let exhaustProducts = store.filter((e) => {
                    return e.type === "Exhaust Fan";
                })
                setProducts(exhaustProducts);
            })
        }
        selectBrand();

        const sortByPrice = () => {
            let under50 = document.querySelector(".under50");
            let checker50 = document.querySelector("#checker50");
            let fiftyTo100 = document.querySelector(".fiftyTo100");
            let checker50to100 = document.querySelector("#checker50to100");
            let hundredTo150 = document.querySelector(".hundredTo150");
            let checker100to150 = document.querySelector("#checker100to150");
            let fifteenHundredTo200 = document.querySelector(".fifteenHundredTo200");
            let checker150to200 = document.querySelector("#checker150to200");
            let above200 = document.querySelector(".above200");
            let checker200 = document.querySelector("#checker200");

            under50.addEventListener("click", () => {
                let holdValue = [...products];
                if(checker50.checked) {
                    console.log(products);
                    let productsUnder50 = products.filter((e) => {
                        return e.price < 50;
                    })
                    setProducts(productsUnder50);
                }
                else {
                    setProducts(holdValue);
                }
            })
        }
        sortByPrice()
    },[])
    return (
        <section className="section main">
            <div className="product-image-ad">

            </div>
            <div className="product-main">
                <div className="productlist sidebar">
                    {/*<h2 className="title1">Category</h2>*/}
                    <div className="menu-category">
                        <a className="category ceilingLink" href="#">Ceiling Fan</a>
                        <div className="submenu-category">
                            <a className="link-category minkaAireLink" href="#">MinkaAire Fan</a>
                            <a className="link-category craftmadeLink" href="#">Craftmade Fan</a>
                            <a className="link-category kichlerLink" href="#">Kichler Fan</a>
                            <a className="link-category monteCarloLink" href="#">Monte Carlo Fan</a>
                            <a className="link-category casablancaLink" href="#">Casablanca Fan</a>
                            <a className="link-category quorumLink" href="#">Quorum Fan</a>
                        </div>
                        <a className="category towerLink" href="#">Tower Fan</a>
                        <div className="submenu-category">
                            <a className="link-category laskoLink" href="#">Lasko Fan</a>
                            <a className="link-category honeywellLink" href="#">Honeywell Fan</a>
                            <a className="link-category vornadoLink" href="#">Vornado Fan</a>
                        </div>
                        <a className="category mistingLink" href="#">Misting Fan</a>
                        <a className="category exhaustLink" href="#">Exhaust Fan</a>
                        <h2 className="title1">Select Products By Price</h2>

                        <label className="booking under50" htmlFor="checker50">
                            <input id="checker50" type="checkbox"/> Under
                            $50</label><br/>
                        <label className="booking fiftyTo100" htmlFor="checker50to100">
                            <input id="checker50to100" type="checkbox"/> $50 -
                            $100</label><br/>
                        <label className="booking hundredTo150" htmlFor="checker100to150">
                            <input id="checker100to150" type="checkbox"/> $100 -
                            $150</label><br/>
                        <label className="booking fifteenHundredTo200" htmlFor="checker150to200">
                            <input id="checker150to200" type="checkbox"/> $150
                            - $200</label><br/>
                        <label className="booking above200" htmlFor="checker200">
                            <input id="checker200" type="checkbox"/> $200
                            & Above</label>

                        <h2 className="title1">Select Products By Rating</h2>
                        <div className="star-booking" id="star4">
                            <div className="star">
                                <div className="star-box">
                                    <div className="star-rate" style={{width: '80%'}}>
                                    </div>
                                </div>
                                & Up
                            </div>
                        </div>
                        <div className="star-booking" id="star3">
                            <div className="star">
                                <div className="star-box">
                                    <div className="star-rate" style={{width: "60%"}}>
                                    </div>
                                </div>
                                & Up
                            </div>
                        </div>
                        <div className="star-booking" id="star2">
                            <div className="star">
                                <div className="star-box">
                                    <div className="star-rate" style={{width: "40%"}}>
                                    </div>
                                </div>
                                & Up
                            </div>
                        </div>
                        <div className="star-booking" id="star1">
                            <div className="star">
                                <div className="star-box">
                                    <div className="star-rate" style={{width: "20%"}}>
                                    </div>
                                </div>
                                & Up
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productlist detail">
                    {/*<h2 className="title1">Productlist</h2>*/}
                    <div className="sort_by">
                        <strong>Sort By </strong>
                        <select id="sortby">
                            <option value="featured" selected>Featured</option>
                            <option  id="highlow" value="?sort=price-high">Price
                                (high to low)
                            </option>
                            <option  value="?sort=price-low">Price (low to high)
                            </option>
                        </select>
                    </div>
                    <div className="colum-list">
                        <div className="colum " id="products">
                            {
                                products.map((e,i)=> {
                                    return (
                                        <ProductList
                                            key={e.id}
                                            image={e.imageBig01}
                                            title={e.title}
                                            brand={e.brand}
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
                </div>
                <div className="productlist quang-cao">
                    <img src="imgs/add.png"/>
                </div>

            </div>
        </section>
    )
}