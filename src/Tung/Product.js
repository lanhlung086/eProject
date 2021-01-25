import React from 'react';
import "./css/Product.css" ;
import {useEffect,useState} from 'react';
import {store} from "../Duy/Store";
import {Link} from "react-router-dom";
import ProductList from "./ProductList";

export default function Product() {
    const [products,setProducts] = useState([]);
    var pricetag= store.filter(function (products) {
        return products.price <= 50;
    })
    useEffect(()=>{
        setProducts(store)
        var tung=document.getElementsByClassName("category");
        for(let i=0;i<tung.length;i++){
            tung[i].onclick=function () {
                var d=i;
                tung[d].classList.toggle('tungmenu--modifier')
            }
        }

    },)


    // useEffect(() => {
    //     var list_html1 ="";
    //     var list_html2="";
    //
    //
    //     var pricetag= store.filter(function (products) {
    //         return products.price <= 50;
    //     })
    //     setProducts(pricetag);
    //     var products_html = document.getElementById("products");
    //     var price2 =document.getElementById("checkerduy");
    //     function f() {
    //         price2.onclick =function (e) {
    //             // var price1 = "";
    //            if(e.target.checked) {
    //                for(var i=0;i<pricetag.length;i++){
    //                    list_html1 += "<div class=\"itemlist\">\n" +
    //                        "                     <a href='/product/"+2+"' class=\"item1\">\n" +
    //                        "                       <img class=\"product-image\" src=\""+pricetag[i].imageBig+"\" height=\"230\" width=\"300\"/>\n" +
    //                        "                         <h2 class=\"product-name\">"+pricetag[i].brand+"</h2>\n" +
    //                        "                    <div class=\"title3\">"+pricetag[i].title+"</div>\n" +
    //                        "                <div class=\"douprice\">\n" +
    //                        "                    <div class=\"price\">$"+pricetag[i].price+"</div>\n" +
    //                        "                    <div class=\"oldprice\">"+pricetag[i].listPrice+"</div>\n" +
    //                        "                </div>\n" +
    //                        "                <div class=\"ratting\">\n" +
    //                        "                    <div class=\"star\">\n" +
    //                        "                             <div class=\"star-box\">\n" +
    //                        "                                 <div class=\"star-rate\" style=\"width:"+(pricetag[i].rating/5*100)+"%\"></div>\n" +
    //                        "                             </div>\n" +
    //                        "                    </div>\n" +
    //                        "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag[i].reviews+
    //                        "                    </a>\n" +
    //                        "                </div>\n" +
    //                        // "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
    //                        "            </a>\n" +
    //                        "        </div>";
    //                }
    //
    //                products_html.innerHTML = products_html.innerHTML +list_html1;
    //            }else {
    //
    //                products_html.innerHTML = products_html.innerHTML.replace(list_html1, "");
    //            }
    //
    //         }
    //     }
    //
    //     f();
    //
    //     var pricetag1= store.filter(function (products) {
    //         return products.price > 50&& products.price<=100 ;
    //     })
    //
    //     var price3 =document.getElementById("checkertung");
    //     function f2() {
    //         price3.onclick =function (e) {
    //             // var list_html2 = "";
    //           if(e.target.checked){
    //               for(var i=0;i<pricetag1.length;i++){
    //                   list_html2 += "<div class=\"itemlist\">\n" +
    //                       "                     <a href='#' class=\"item1\">\n" +
    //                       "                       <img class=\"product-image\" src=\""+pricetag1[i].imageBig+"\" height=\"230\" width=\"300\"/>\n" +
    //                       "                         <h2 class=\"product-name\">"+pricetag1[i].brand+"</h2>\n" +
    //                       "                    <div class=\"title3\">"+pricetag1[i].title+"</div>\n" +
    //                       "                <div class=\"douprice\">\n" +
    //                       "                    <div class=\"price\">$"+pricetag1[i].price+"</div>\n" +
    //                       "                    <div class=\"oldprice\">"+pricetag1[i].listPrice+"</div>\n" +
    //                       "                </div>\n" +
    //                       "                <div class=\"ratting\">\n" +
    //                       "                    <div class=\"star\">\n" +
    //                       "                             <div class=\"star-box\">\n" +
    //                       "                                 <div class=\"star-rate\" style=\"width:"+(pricetag1[i].rating/5*50)+"%\"></div>\n" +
    //                       "                             </div>\n" +
    //                       "                    </div>\n" +
    //                       "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag1[i].reviews+
    //                       "                    reviews</a>\n" +
    //                       "                </div>\n" +
    //                       // "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
    //                       "            </a>\n" +
    //                       "        </div>";
    //               }
    //
    //               products_html.innerHTML = products_html.innerHTML+list_html2;
    //           }else {
    //               products_html.innerHTML=products_html.innerHTML.replace(list_html2,"");
    //           }
    //
    //         }
    //     }
    //
    //     f2();
    //
    //     var pricetag2= store.filter(function (products) {
    //         return products.price > 100&& products.price<=200 ;
    //     })
    //
    //     var price4 =document.getElementById("checkerquy");
    //     function f3() {
    //         price4.onclick =function () {
    //             var list_html = "";
    //             for(var i=0;i<pricetag2.length;i++){
    //                 list_html += "<div class=\"itemlist\">\n" +
    //                     "                     <a href='#' class=\"item1\">\n" +
    //                     "                       <img class=\"product-image\" src=\""+pricetag2[i].imageBig+"\" height=\"230\" width=\"300\"/>\n" +
    //                     "                         <h2 class=\"product-name\">"+pricetag2[i].brand+"</h2>\n" +
    //                     "                    <div class=\"title3\">"+pricetag2[i].title+"</div>\n" +
    //                     "                <div class=\"douprice\">\n" +
    //                     "                    <div class=\"price\">$"+pricetag2[i].price+"</div>\n" +
    //                     "                    <div class=\"oldprice\">"+pricetag2[i].listPrice+"</div>\n" +
    //                     "                </div>\n" +
    //                     "                <div class=\"ratting\">\n" +
    //                     "                    <div class=\"star\">\n" +
    //                     "                             <div class=\"star-box\">\n" +
    //                     "                                 <div class=\"star-rate\" style=\"width:"+(pricetag2[i].rating/5*100)+"%\"></div>\n" +
    //                     "                             </div>\n" +
    //                     "                    </div>\n" +
    //                     "                    <a class=\"hmratting\" href=\"#\">\n" +pricetag2[i].reviews+
    //                     "                    reviews</a>\n" +
    //                     "                </div>\n" +
    //                     // "                <a href=\"#\" class=\"moredetail text-center\">MORE DETAIL</a>\n" +
    //                     "            </a>\n" +
    //                     "        </div>";
    //             }
    //
    //             products_html.innerHTML = list_html;
    //
    //         }
    //     }
    //
    //     f3();
    //
    //     store.sort(function (a,b) {
    //         return parseFloat(a.price)- parseFloat(b.price);
    //     })
    //
    //     var sort=document.getElementById("highlow");
    //     function s1() {
    //         sort.onclick=function () {
    //             var list_html = "";
    //             for(var i=0;i<pricetag2.length;i++){
    //                 list_html += "<div class=\"itemlist\">\n" +
    //                     "                     <a href='#' class=\"item1\">\n" +
    //                     "                       <img class=\"product-image\" src=\""+star1[i].imageBig+"\" height=\"230\" width=\"300\"/>\n" +
    //                     "                         <h2 class=\"product-name\">"+star1[i].brand+"</h2>\n" +
    //                     "                    <div class=\"title3\">"+star1[i].title+"</div>\n" +
    //                     "                <div class=\"douprice\">\n" +
    //                     "                    <div class=\"price\">$"+star1[i].price+"</div>\n" +
    //                     "                    <div class=\"oldprice\">"+star1[i].listPrice+"</div>\n" +
    //                     "                </div>\n" +
    //                     // "                    <p class=\"title4\">Ratings and Reviews</p>\n" +
    //                     "                <div class=\"ratting\">\n" +
    //                     "                    <div class=\"star\">\n" +
    //                     "                             <div class=\"star-box\">\n" +
    //                     "                                 <div class=\"star-rate\" style=\"width:"+(star1[i].rating/5*100)+"%\"></div>\n" +
    //                     "                             </div>\n" +
    //                     "                    </div>\n" +
    //                     "                    <a class=\"hmratting\" href=\"#\">\n" +star1[i].reviews+
    //                     "                    reviews</a>\n" +
    //                     "                </div>\n" +
    //                     // "                <a href=\"#\" class=\"moredetail\">MORE DETAIL</a>\n" +
    //                     "            </a>\n" +
    //                     "        </div>";
    //             }
    //             }
    //         }
    //     s1();
    //

    //
    //     // XEP THEO GIA
    //     var star1= store.filter(function (products) {
    //         return products.rating >= 4;
    //     })
    //
    //     var star =document.getElementById("star4");
    //     function F1() {
    //         star.onclick =function () {
    //             var list_html = "";
    //             for(var i=0;i<star1.length;i++){
    //                 list_html += "<div class=\"itemlist\">\n" +
    //                     "                     <a href='#' class=\"item1\">\n" +
    //                     "                       <img class=\"product-image\" src=\""+star1[i].imageBig+"\" height=\"230\" width=\"300\"/>\n" +
    //                     "                         <h2 class=\"product-name\">"+star1[i].brand+"</h2>\n" +
    //                     "                    <div class=\"title3\">"+star1[i].title+"</div>\n" +
    //                     "                <div class=\"douprice\">\n" +
    //                     "                    <div class=\"price\">$"+star1[i].price+"</div>\n" +
    //                     "                    <div class=\"oldprice\">"+star1[i].listPrice+"</div>\n" +
    //                     "                </div>\n" +
    //                     // "                    <p class=\"title4\">Ratings and Reviews</p>\n" +
    //                     "                <div class=\"ratting\">\n" +
    //                     "                    <div class=\"star\">\n" +
    //                     "                             <div class=\"star-box\">\n" +
    //                     "                                 <div class=\"star-rate\" style=\"width:"+(star1[i].rating/5*100)+"%\"></div>\n" +
    //                     "                             </div>\n" +
    //                     "                    </div>\n" +
    //                     "                    <a class=\"hmratting\" href=\"#\">\n" +star1[i].reviews+
    //                     "                    reviews</a>\n" +
    //                     "                </div>\n" +
    //                     // "                <a href=\"#\" class=\"moredetail\">MORE DETAIL</a>\n" +
    //                     "            </a>\n" +
    //                     "        </div>";
    //             }
    //
    //             products_html.innerHTML = list_html;
    //
    //         }
    //     }
    //
    //     F1();
    //
    // },[])
    return (
        <section className="section main">
            <div className="product-image-ad">

            </div>
            <div className="product-main">
                <div className="productlist sidebar">
                    {/*<h2 className="title1">Category</h2>*/}
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
                    {/*<h2 className="title1">Productlist</h2>*/}
                    <select id="sortby">
                        <option value="?sort=">Top rated</option>
                        <option id="highlow" selected value="?sort=price-high">Price (high to low)</option>
                        <option value="?sort=price-low">Price (low to high)</option>
                    </select>
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