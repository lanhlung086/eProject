import React from 'react';
import "./css/Product.css" ;
import {useEffect} from 'react';
import {store} from "../Duy/Store";

export default function Product() {
    useEffect(() => {
        var pricetag= store.filter(function (products) {
            return products.price <= 50;
        })

        var products_html = document.getElementById("products");
        var price2 =document.getElementById("checkerduy");
        function f() {
            price2.onclick =function () {
                var list_html = "";
                for(var i=0;i<pricetag.length;i++){
                    list_html += "<div class=\"itemlist\">\n" +
                        "                     <div class=\"item1\">\n" +
                        "                       <img class=\"product-image\" src=\""+pricetag[i].imageSmall+"\" height=\"150\" width=\"100%\"/>\n" +
                        "                         <h2 class=\"product-name\">"+pricetag[i].title+"</h2>\n" +
                        "                <div class=\"ratting\">\n" +
                        "                    <div class=\"star\">\n" +
                        "                             <div class=\"star-box\">\n" +
                        "                                 <div class=\"star-rate\" style=\"width:"+(pricetag[i].rating/5*100)+"%\"></div>\n" +
                        "                             </div>\n" +
                        "                    </div>\n" +
                        "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag[i].reviews+
                        "                    reviews</a>\n" +
                        "                </div>\n" +
                        "                <div class=\"douprice\">\n" +
                        "                    <div class=\"price\">$"+pricetag[i].price+"</div>\n" +
                        "                    <div class=\"oldprice\">"+pricetag[i].listPrice+"</div>\n" +
                        "                </div>\n" +
                        "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
                        "            </div>\n" +
                        "        </div>";
                }

                products_html.innerHTML = list_html;

            }
        }

        f();

        var pricetag1= store.filter(function (products) {
            return products.price > 50&& products.price<=100 ;
        })

        var price3 =document.getElementById("checkertung");
        function f2() {
            price3.onclick =function () {
                var list_html = "";
                for(var i=0;i<pricetag1.length;i++){
                    list_html += "<div class=\"itemlist\">\n" +
                        "                     <div class=\"item1\">\n" +
                        "                       <img class=\"product-image\" src=\""+pricetag1[i].imageSmall+"\" height=\"150\" width=\"100%\"/>\n" +
                        "                         <h2 class=\"product-name\">"+pricetag1[i].title+"</h2>\n" +
                        "                <div class=\"ratting\">\n" +
                        "                    <div class=\"star\">\n" +
                        "                             <div class=\"star-box\">\n" +
                        "                                 <div class=\"star-rate\" style=\"width:"+(pricetag1[i].rating/5*100)+"%\"></div>\n" +
                        "                             </div>\n" +
                        "                    </div>\n" +
                        "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag1[i].reviews+
                        "                    reviews</a>\n" +
                        "                </div>\n" +
                        "                <div class=\"douprice\">\n" +
                        "                    <div class=\"price\">$"+pricetag1[i].price+"</div>\n" +
                        "                    <div class=\"oldprice\">"+pricetag1[i].listPrice+"</div>\n" +
                        "                </div>\n" +
                        "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
                        "            </div>\n" +
                        "        </div>";
                }

                products_html.innerHTML = list_html;

            }
        }

        f2();

        var pricetag2= store.filter(function (products) {
            return products.price > 100&& products.price<=200 ;
        })

        var price4 =document.getElementById("checkerquy");
        function f3() {
            price4.onclick =function () {
                var list_html = "";
                for(var i=0;i<pricetag2.length;i++){
                    list_html += "<div class=\"itemlist\">\n" +
                        "                     <div class=\"item1\">\n" +
                        "                       <img class=\"product-image\" src=\""+pricetag2[i].imageSmall+"\" height=\"150\" width=\"100%\"/>\n" +
                        "                         <h2 class=\"product-name\">"+pricetag2[i].title+"</h2>\n" +
                        "                <div class=\"ratting\">\n" +
                        "                    <div class=\"star\">\n" +
                        "                             <div class=\"star-box\">\n" +
                        "                                 <div class=\"star-rate\" style=\"width:"+(pricetag2[i].rating/5*100)+"%\"></div>\n" +
                        "                             </div>\n" +
                        "                    </div>\n" +
                        "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag2[i].reviews+
                        "                    reviews</a>\n" +
                        "                </div>\n" +
                        "                <div class=\"douprice\">\n" +
                        "                    <div class=\"price\">$"+pricetag2[i].price+"</div>\n" +
                        "                    <div class=\"oldprice\">"+pricetag2[i].listPrice+"</div>\n" +
                        "                </div>\n" +
                        "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
                        "            </div>\n" +
                        "        </div>";
                }

                products_html.innerHTML = list_html;

            }
        }

        f3();

        var tung=document.getElementsByClassName("category");
        for(let i=0;i<tung.length;i++){
            tung[i].onclick=function () {
                var d = i ;
                tung[d].classList.toggle('tungmenu--modifier')
            }
        }

        // XEP THEO GIA
        var star1= store.filter(function (products) {
            return products.rating >= 4;
        })
        console.log(star1);

        var star =document.getElementById("star4");
        function F1() {
            star.onclick =function () {
                var list_html = "";
                for(var i=0;i<star1.length;i++){
                    list_html += "<div class=\"itemlist\">\n" +
                        "                     <div class=\"item1\">\n" +
                        "                       <img class=\"product-image\" src=\""+star1[i].imageSmall+"\" height=\"150\" width=\"100%\"/>\n" +
                        "                         <h2 class=\"product-name\">"+star1[i].title+"</h2>\n" +
                        "                <div class=\"ratting\">\n" +
                        "                    <div class=\"star\">\n" +
                        "                             <div class=\"star-box\">\n" +
                        "                                 <div class=\"star-rate\" style=\"width:"+(star1[i].rating/5*100)+"%\"></div>\n" +
                        "                             </div>\n" +
                        "                    </div>\n" +
                        "                    <a class=\"hmratting\" href=\"#\">\n" +star1[i].reviews+
                        "                    reviews</a>\n" +
                        "                </div>\n" +
                        "                <div class=\"douprice\">\n" +
                        "                    <div class=\"price\">$"+star1[i].price+"</div>\n" +
                        "                    <div class=\"oldprice\">"+star1[i].listPrice+"</div>\n" +
                        "                </div>\n" +
                        "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
                        "            </div>\n" +
                        "        </div>";
                }

                products_html.innerHTML = list_html;

            }
        }

        F1();

    })
    return (
        <section className="section main">
            <div className="product-main">
                <div className="productlist sidebar">
                    <h2 className="title">Category</h2>
                    <div className="menu-category">
                        <a className="category" href="#">Ceiling Fan</a>
                        <div className="submenu-category">
                            <a className="link-category" href="#">MinkaAire Fan</a>
                            <a className="link-category" href="#">Craftmade Fan</a>
                            <a className="link-category" href="#">Kichler Fan</a>
                            <a className="link-category" href="#">Monte Carlo Fan</a>
                            <a className="link-category" href="#">Casablanca Fan</a>
                            <a className="link-category" href="#">Quorum Fan</a>
                        </div>
                        <a className="category" href="#">Tower Fan</a>
                        <div className="submenu-category">
                            <a className="link-category" href="#">Lasko Fan</a>
                            <a className="link-category" href="#">Honeywell Fan</a>
                            <a className="link-category" href="#">Vornado Fan</a>
                        </div>
                        <a className="category" href="#">Misting Fan</a>
                        <div className="submenu-category">

                        </div>
                        <a className="category" href="#">Exhaust Fan</a>
                        <div className="submenu-category">

                        </div>
                        <h2 className="title1">Select Products By Price</h2>

                        <label className="booking" htmlFor="checkerduy">
                            <input id="checkerduy" type="checkbox"/> Under
                            $50</label><br/>
                        <label className="booking" htmlFor="checkertung">
                            <input id="checkertung" type="checkbox"/> $50 -
                            $100</label><br/>
                        <label className="booking" htmlFor="checkerquy">
                            <input id="checkerquy" type="checkbox"/> $100 -
                            $150</label><br/>
                        <label className="booking" htmlFor="checkerkhai">
                            <input id="checkerkhai" type="checkbox"/> $150
                            - $200</label><br/>
                        <label className="booking" htmlFor="checkerngoc">
                            <input id="checkerngoc" type="checkbox"/> $200
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
                    <h2 className="title">Productlist</h2>
                    <div className="colum-list">
                        <div className="colum " id="products">

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