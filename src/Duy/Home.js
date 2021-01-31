import React from 'react';
import "./css/Home.css";
import {useEffect} from "react"
import {store} from "./Store";
import {Link} from "react-router-dom";
import ProductHome from "./ProductHome";

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
        let reviewCarouselContainer = document.querySelector(".main__reviewCarouselContainer");
        let reviewCarouselSlide = document.querySelector(".main__reviewCarouselSlide");
        let reviewLeftButton = document.querySelector(".main__reviewArrowLeft");
        let reviewRightButton = document.querySelector(".main__reviewArrowRight");
        let reviewBlocks = document.querySelectorAll(".main__reviewBlock");
        let reviewPage1 = document.querySelector(".main__reviewPage1");
        let reviewPage2 = document.querySelector(".main__reviewPage2");
        let counter = 1;
        let reviewCount = 1;
        let width = carouselSlide.clientWidth;
        let reviewWidth = parseInt(window.getComputedStyle(reviewBlocks[0], null).getPropertyValue("margin-right")) + reviewBlocks[0].clientWidth;

        reviewPage1.style.borderColor = "white";
        labels[counter - 1].style.backgroundColor = "#ffcc00";
        carouselSlide.style.transform = `translateX(${-width * counter}px)`;
        labels.forEach((a, i) => {
            a.addEventListener("click", (e) => {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                carouselSlide.style.transition = "transform 0.5s ease-in-out";
                counter = i + 1;
                carouselSlide.style.transform = `translateX(${-width * counter}px)`;
                e.currentTarget.style.backgroundColor = "#ffcc00";
            })
        })

        leftButton.addEventListener("click", () => {
            if (counter === 0){
                return;
            }
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter--;
            carouselSlide.style.transform = `translateX(${-width * counter}px)`;
            if (labels[counter - 1]) {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[counter - 1].style.backgroundColor = "#ffcc00";
            }
        })

        rightButton.addEventListener("click", () => {
            if (counter === images.length - 1) {
                return;
            }
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter++;
            carouselSlide.style.transform = `translateX(${-width * counter}px)`;
            if (labels[counter - 1]) {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[counter - 1].style.backgroundColor = "#ffcc00";
            }
        })

        carouselSlide.addEventListener("webkitTransitionEnd", () => {
            if (images[counter].id === "firstClone") {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[0].style.backgroundColor = "#ffcc00";
                carouselSlide.style.transition = "none";
                counter = images.length - counter;
                carouselSlide.style.transform = `translateX(${-width * counter}px)`;
            }
            if (images[counter].id === "lastClone") {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[5].style.backgroundColor = "#ffcc00";
                carouselSlide.style.transition = "none";
                counter = images.length - 2;
                carouselSlide.style.transform = `translateX(${-width * counter}px)`;
            }
        })

        setInterval(() => {
            if (images[counter].id === "firstClone") {
                counter = images.length - counter;
                carouselSlide.style.transition = "none";
                carouselSlide.style.transform = `translateX(${-width * counter}px)`;
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[0].style.backgroundColor = "#ffcc00";
            }
            counter++;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            carouselSlide.style.transform = `translateX(${-width * counter}px)`;
            if (labels[counter - 1]) {
                labels.forEach((a) => {
                    a.style.backgroundColor = "transparent";
                })
                labels[counter - 1].style.backgroundColor = "#ffcc00";
            }
        }, 4000)

        arrows.forEach((a) => {
            a.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("button--active")
            })
            window.addEventListener("mouseup", () => {
                a.classList.remove("button--active")
            })
        })

        buttons.forEach((a) => {
            a.addEventListener("mousedown", (e) => {
                e.currentTarget.classList.add("button--active")
            })
            window.addEventListener("mouseup", () => {
                a.classList.remove("button--active")
            })
        })

        mainCarouselSlide.forEach((a, i) => {
            let count = 1;
            let carouselWidth = a.clientWidth;
            let items = mainCarouselSlide[i].children;
            let pages = document.querySelectorAll(".main__carousel > p:first-of-type");
            pages[i].innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
            leftButtons[i].addEventListener("click", () => {
                if (count === 1) {
                    return;
                }
                count--;
                pages[i].innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
                mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
                mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
            rightButtons[i].addEventListener("click", () => {
                if (count === Math.ceil(items.length / 6)) {
                    return;
                }
                count++;
                pages[i].innerHTML = `Page ${count} of ${Math.ceil(items.length / 6)}`;
                mainCarouselSlide[i].style.transition = "transform 0.5s ease-in-out";
                mainCarouselSlide[i].style.transform = `translateX(${-carouselWidth * (count - 1)}px)`;
            })
        })

        reviewLeftButton.addEventListener("click", () => {
            if(reviewCount == 1) {
                return;
            }
            reviewCount--;
            reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
            if(reviewCount == 1) {
                document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                    e.style.borderColor = "#131313";
                })
                reviewPage1.style.borderColor = "white"
            }
        })

        reviewRightButton.addEventListener("click", () => {
            if(reviewCount == reviewBlocks.length - 2) {
                return;
            }
            reviewCount++;
            reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
            if(reviewCount == reviewBlocks.length - 2) {
                document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                    e.style.borderColor = "#131313";
                })
                reviewPage2.style.borderColor = "white";
            }
        })

        reviewPage1.addEventListener("click", () => {
            reviewCount = 1;
            reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
            document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                e.style.borderColor = "#131313";
            })
            reviewPage1.style.borderColor = "white";
        })

        reviewPage2.addEventListener("click", () => {
            reviewCount = 4;
            reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
            document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                e.style.borderColor = "#131313";
            })
            reviewPage2.style.borderColor = "white";
        })

        function runReviewCarousel() {
            let review = setInterval(() => {
                if(reviewCount == 4) {
                    reviewCount = 1;
                    reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
                    document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                        e.style.borderColor = "#131313";
                    })
                    reviewPage1.style.borderColor = "white";
                }
                else {
                    reviewCount++;
                    reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
                    if(reviewCount == 1) {
                        document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                            e.style.borderColor = "#131313";
                        })
                        reviewPage1.style.borderColor = "white";
                    }
                    if(reviewCount == 4) {
                        document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                            e.style.borderColor = "#131313";
                        })
                        reviewPage2.style.borderColor = "white";
                    }
                }
            }, 4000)
            reviewCarouselContainer.addEventListener("mouseenter", () => {
                clearInterval(review);
            });
            reviewCarouselContainer.addEventListener("mouseleave", () => {
                review = setInterval(() => {
                    if(reviewCount == 4) {
                        reviewCount = 1;
                        reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
                        document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                            e.style.borderColor = "#131313";
                        })
                        reviewPage1.style.borderColor = "white";
                    }
                    else {
                        reviewCount++;
                        reviewCarouselSlide.style.transform = `translateX(${-reviewWidth * (reviewCount - 1)}px)`;
                        if(reviewCount == 1) {
                            document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                                e.style.borderColor = "#131313";
                            })
                            reviewPage1.style.borderColor = "white";
                        }
                        if(reviewCount == 4) {
                            document.querySelectorAll(".main__reviewPage > div").forEach((e) => {
                                e.style.borderColor = "#131313";
                            })
                            reviewPage2.style.borderColor = "white";
                        }
                    }
                }, 4000)
            })
        }
        runReviewCarousel();
    })
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
                        <img id="firstClone" src="imgs/header-fan05.jpg"></img>.
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
                        <p></p>
                        <div className="main__carouselContainer">
                            <div className="main__carouselSlide">
                                {
                                    store.filter((e) => {
                                        return e.bestSeller;
                                    }).map((e) => {
                                        return (
                                            <ProductHome
                                                key={e.id}
                                                id={e.id}
                                                imageSmall={e.imageSmall}
                                                imageBig={e.imageBig01}
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
                        <i className="fas fa-chevron-left main__carouselArrowLeft"></i>
                        <i className="fas fa-chevron-right main__carouselArrowRight"></i>
                    </div>
                    <div className="main__carousel">
                        <h3>On Sale</h3>
                        <p></p>
                        <div className="main__carouselContainer">
                            <div className="main__carouselSlide">
                                {
                                    store.filter((e) => {
                                        return e.sale;
                                    }).map((e) => {
                                        return (
                                            <ProductHome
                                                key={e.id}
                                                id={e.id}
                                                imageSmall={e.imageSmall}
                                                imageBig={e.imageBig01}
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
                        <i className="fas fa-chevron-left main__carouselArrowLeft"></i>
                        <i className="fas fa-chevron-right main__carouselArrowRight"></i>
                    </div>
                    <div className="main__carousel">
                        <h3>New</h3>
                        <p></p>
                        <div className="main__carouselContainer">
                            <div className="main__carouselSlide">
                                {
                                    store.filter((e) => {
                                        return e.new;
                                    }).map((e) => {
                                        return (
                                            <ProductHome
                                                key={e.id}
                                                id={e.id}
                                                imageSmall={e.imageSmall}
                                                imageBig={e.imageBig01}
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
                        <i className="fas fa-chevron-left main__carouselArrowLeft"></i>
                        <i className="fas fa-chevron-right main__carouselArrowRight"></i>
                    </div>
                    <div className="main__project">
                        <h1>Our Project</h1>
                        <div className="main__projectLogo">
                            <img src="imgs/fan-logo.png" alt=""/>
                        </div>
                        <div className="main__projectPlanContainer">
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan01.jpg" alt=""/></Link>
                                <Link to="">SOL PROJECT BY MELIA PHU QUOC</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan02.jpg" alt=""/></Link>
                                <Link to="">SUNSET SANATO RESORT & VILLAS PHU QUOC</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan03.jpg" alt=""/></Link>
                                <Link to="">MIA SAIGON LUXURY BOUTIQUE HOTEL HO CHI MINH</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan04.jpg" alt=""/></Link>
                                <Link to="">VINPEARL RESORT & SPA PHU QUOC</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan05.jpg" alt=""/></Link>
                                <Link to="">RESORT VILLA X2 HOI AN</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan06.jpg" alt=""/></Link>
                                <Link to="">ANIO BOUTIQUE HOTEL HOI AN</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan07.jpg" alt=""/></Link>
                                <Link to="">THE PEARL HOI AN</Link>
                            </div>
                            <div className="main__projectPlan">
                                <Link to=""><img src="imgs/fanPlan08.jpg" alt=""/></Link>
                                <Link to="">REGENT PHU QUOC VILLA</Link>
                            </div>
                        </div>
                    </div>
                    <div className="main__review">
                        <h1>What People Say About Us</h1>
                        <div className="main__projectLogo">
                            <img src="imgs/fan-logo.png" alt=""/>
                        </div>
                        <div className="main__reviewCarouselContainer">
                            <div className="main__reviewCarouselSlide">
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="main__reviewBlock">
                                    <div className="main__reviewContent">
                                        <i className="fas fa-quote-left"></i>
                                        <p>Tôi năm nay hơn 70 tuổi mà chưa mua một cái quạt trần nào nó chất lượng như thế này cả!</p>
                                    </div>
                                    <div className="main__reviewImageContainer" data-name="Nguyễn Hữu Đa" data-job="Security Guard">
                                        <img src="imgs/NguyenHuuDa.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-chevron-left main__reviewArrowLeft"></i>
                        <i className="fas fa-chevron-right main__reviewArrowRight"></i>
                        <div className="main__reviewPage">
                            <div className="main__reviewPage1">

                            </div>
                            <div className="main__reviewPage2">

                            </div>
                        </div>
                    </div>
                    <div className="main__brandContainer">
                        <div className="main__brandAboutUs">
                            <h3>Fan<img src="imgs/fan-logo.png" alt="FANoFAN Logo"/>Fan</h3>
                            <p>AUTHORIZED AGENT OF FAN  BRANDS IN VIETNAM</p>
                            <p>Produced from the cradle of a ceiling-closing company, the American brand fan not just be used worldwide, chosen by quality but also by many other factors such as style, features ...</p>
                        </div>
                        <div className="main__brands">
                            <img src="imgs/casablancaFanLogo.png" alt=""/>
                            <img src="imgs/craftmadeFanLogo.jpg" alt=""/>
                            <img src="imgs/honeywellFanLogo.png" alt=""/>
                            <img src="imgs/minkaAireFanLogo.png" alt=""/>
                            <img src="imgs/monteCarloFanLogo.png" alt=""/>
                            <img src="imgs/vornadoFanLogo.png" alt=""/>
                            <img src="imgs/quorumFanLogo.png" alt=""/>
                            <img src="imgs/laskoFanLogo.png" alt=""/>
                            <img src="imgs/kichlerFanLogo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;