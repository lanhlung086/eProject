import React from 'react';
import "./css/Product.css" ;
import {useEffect,useState} from 'react';
import {store} from "../Duy/Store";
import ProductList from "./ProductList";

export default function Product({name}) {
    const [products,setProducts] = useState([]);
    let minkaAireProducts = store.filter((e) => e.brand === "MINKA-AIRE");
    let craftmadeProducts = store.filter((e) => e.brand === "Craftmade");
    let kichlerProducts = store.filter((e) => e.brand === "Kichler");
    let monteCarloProducts = store.filter((e) => e.brand === "Monte Carlo");
    let casablancaProducts = store.filter((e) => e.brand === "Casablanca");
    let quorumProducts = store.filter((e) => e.brand === "Quorum");
    let laskoProducts = store.filter((e) => e.brand === "Lasko" && e.type === "Tower Fan");
    let honeywellProducts = store.filter((e) => e.brand === "Honeywell");
    let vornadoProducts = store.filter((e) => e.brand === "Vornado");
    let ceilingProducts = store.filter((e) => e.type === "Ceiling Fan");
    let towerProducts = store.filter((e) => e.type === "Tower Fan");
    let mistingProducts = store.filter((e) => e.type === "Misting Fan");
    let exhaustProducts = store.filter((e) => e.type === "Exhaust Fan");
    let productValue;
    let notOrderProductValue;

    useEffect(() => {
        let sortByPrice = document.querySelector("#sortby");

        if(name === "All Products") {
            setProducts(store);
            setProducts((prevState) => {
                    productValue = [...prevState];
                    return productValue;
            });
            sortByPrice.value = "featured";
        }
        else {
            const typeCheck = store.some((e) => e.type === name);
            if(typeCheck) {
                const typeList = store.filter((e) => e.type === name);
                setProducts(typeList);
                setProducts((prevState) => {
                    productValue = [...prevState];
                    return productValue;
                })
                sortByPrice.value = "featured";
            }
            else {
                const brandList = store.filter((e) => e.brand === name);
                setProducts(brandList);
                setProducts((prevState) => {
                    productValue = [...prevState];
                    return productValue;
                })
                sortByPrice.value = "featured";
            }
        }
    },[name])
    useEffect(()=>{
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
        let allInputs = document.querySelectorAll(".menu-category input[type='checkbox']");
        let allStars = document.querySelectorAll(".star-booking .star");
        let starClear = document.querySelector(".starClear");
        let checker50 = document.querySelector("#checker50");
        let checker50to100 = document.querySelector("#checker50to100");
        let checker100to150 = document.querySelector("#checker100to150");
        let checker150to200 = document.querySelector("#checker150to200");
        let checker200 = document.querySelector("#checker200");
        let star1 = document.querySelector(".menu-category > .star-booking#star4 > .star");
        let star2 = document.querySelector(".menu-category > .star-booking#star3 > .star");
        let star3 = document.querySelector(".menu-category > .star-booking#star2 > .star");
        let star4 = document.querySelector(".menu-category > .star-booking#star1 > .star");
        let inputsNot1 = document.querySelectorAll(".menu-category input:not([id='checker50'])");
        let inputsNot2 = document.querySelectorAll(".menu-category input:not([id='checker50to100'])");
        let inputsNot3 = document.querySelectorAll(".menu-category input:not([id='checker100to150'])");
        let inputsNot4 = document.querySelectorAll(".menu-category input:not([id='checker150to200'])");
        let inputsNot5 = document.querySelectorAll(".menu-category input:not([id='checker200'])");
        let sortByPrice = document.querySelector("#sortby");

        if(name === "All Products") {
            setProducts(store);
            setProducts((prevState) => {
                productValue = [...prevState];
                return productValue;
            })
        }
        else {
            const typeCheck = store.some((e) => e.type === name);
            if(typeCheck) {
                const typeList = store.filter((e) => e.type === name);
                setProducts(typeList);
                setProducts((prevState) => {
                    productValue = [...prevState];
                    return productValue;
                })
            }
            else {
                const brandList = store.filter((e) => e.brand === name);
                setProducts(brandList);
                setProducts((prevState) => {
                    productValue = [...prevState];
                    return productValue;
                })
            }
        }

        minkaAireLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(minkaAireProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        craftmadeLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(craftmadeProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        kichlerLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(kichlerProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        monteCarloLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(monteCarloProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        casablancaLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(casablancaProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        quorumLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(quorumProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        laskoLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(laskoProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        honeywellLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(honeywellProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        vornadoLink.addEventListener("click", (event) => {
            event.preventDefault();
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(vornadoProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        ceilingFanLink.addEventListener("click", (event) => {
            event.preventDefault();
            towerFanLink.classList.remove("tungmenu--modifier")
            event.currentTarget.classList.toggle("tungmenu--modifier")
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(ceilingProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        towerFanLink.addEventListener("click", (event) => {
            event.preventDefault();
            ceilingFanLink.classList.remove("tungmenu--modifier")
            event.currentTarget.classList.toggle("tungmenu--modifier")
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(towerProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        mistingFanLink.addEventListener("click", (event) => {
            event.preventDefault();
            towerFanLink.classList.remove("tungmenu--modifier")
            ceilingFanLink.classList.remove("tungmenu--modifier")
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(mistingProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })
        exhaustFanLink.addEventListener("click", (event) => {
            event.preventDefault();
            towerFanLink.classList.remove("tungmenu--modifier")
            ceilingFanLink.classList.remove("tungmenu--modifier")
            allInputs.forEach((e) => {
                e.checked = false;
            })
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            })
            starClear.style.display = "none";
            setProducts(exhaustProducts);
            setProducts((prevState) => {
                productValue = [...prevState];
                if(sortByPrice.value === "featured") {
                    return productValue;
                }
                else if(sortByPrice.value === "lowToHigh") {
                    return [...productValue].sort((a, b) => a.price - b.price)
                }
                else {
                    return [...productValue].sort((a, b) => b.price - a.price)
                }
            })
        })

        const priceCondition = [
            function(a) {
                return a.price < 50
            },
            function(a) {
                return a.price >= 50 && a.price < 100
            },
            function(a) {
                return a.price >= 100 && a.price < 150
            },
            function(a) {
                return a.price >= 150 && a.price < 200
            },
            function(a) {
                return a.price >= 200
            },
        ]
        const starsCondition = [
            function(a) {
                return a.rating() >= 4
            },
            function(a) {
                return a.rating() >= 3
            },
            function(a) {
                return a.rating() >= 2
            },
            function(a) {
                return a.rating() >= 1
            },
        ]

        sortByPrice.addEventListener("change", (event) => {
            const checkBox = [...allInputs].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(event.currentTarget.value === "featured") {
                    setProducts(notOrderProductValue);
                }
                else if(event.currentTarget.value === "lowToHigh") {
                    setProducts((prevState) => [...prevState].sort((a, b) => a.price - b.price));
                }
                else {
                    setProducts((prevState) => [...prevState].sort((a, b) => b.price - a.price));
                }
            }
            else {
                if(event.currentTarget.value === "featured") {
                    setProducts(productValue);
                }
                else if(event.currentTarget.value === "lowToHigh") {
                    setProducts([...productValue].sort((a, b) => a.price - b.price));
                }
                else {
                    setProducts([...productValue].sort((a, b) => b.price - a.price));
                }
            }
        })

        starClear.addEventListener("click", () => {
            const checkBox = [...allInputs].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            allStars.forEach((e) => {
                e.classList.remove("star--active")
            });
            starClear.style.display = "none";
            if(checkBox) {
                const index = [...allInputs].reduce((total, e, i) => {
                    if(e.checked) {
                        total.push(i)
                    }
                    return total;
                }, []);
                if(index.length === 1) {
                    const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else if(index.length === 2) {
                    const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else if(index.length === 3) {
                    const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else if (index.length === 4) {
                    const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else if(index.length === 5) {
                    const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
            else {
                setProducts(() => {
                    if(sortByPrice.value === "featured") {
                        return productValue;
                    }
                    else if(sortByPrice.value === "lowToHigh") {
                        return [...productValue].sort((a, b) => a.price - b.price)
                    }
                    else {
                        return [...productValue].sort((a, b) => b.price - a.price)
                    }
                });
            }
        })

        checker50.addEventListener("click", (event) => {
            const checkBox = [...inputsNot1].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    const index = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(event.currentTarget.checked) {
                        const renderedProduct = productValue.filter((e) => e.price < 50 && starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else {
                        const renderedProduct = productValue.filter((e) => starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    const indexStar = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)) || (priceCondition[index[4]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                if(event.currentTarget.checked) {
                    const under50Products = productValue.filter((e) => e.price < 50);
                    notOrderProductValue = [...under50Products];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return under50Products;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...under50Products].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...under50Products].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productValue;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productValue].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productValue].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
        })
        checker50to100.addEventListener("click", (event) => {
            const checkBox = [...inputsNot2].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length == 2) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    const index = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(event.currentTarget.checked) {
                        const renderedProduct = productValue.filter((e) => e.price >= 50 && e.price < 100 && starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else {
                        const renderedProduct = productValue.filter((e) => starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    const indexStar = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)) || (priceCondition[index[4]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                if(event.currentTarget.checked) {
                    const products50To100 = productValue.filter((e) => e.price >= 50 && e.price < 100);
                    notOrderProductValue = [...products50To100];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return products50To100;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...products50To100].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...products50To100].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productValue;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productValue].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productValue].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
        })
        checker100to150.addEventListener("click", (event) => {
            const checkBox = [...inputsNot3].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    const index = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(event.currentTarget.checked) {
                        const renderedProduct = productValue.filter((e) => e.price >= 100 && e.price < 150 && starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else {
                        const renderedProduct = productValue.filter((e) => starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    const indexStar = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)) || (priceCondition[index[4]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                if(event.currentTarget.checked) {
                    const products100To150 = productValue.filter((e) => e.price >= 100 && e.price < 150);
                    notOrderProductValue = [...products100To150];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return products100To150;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...products100To150].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...products100To150].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productValue;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productValue].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productValue].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
        })
        checker150to200.addEventListener("click", (event) => {
            const checkBox = [...inputsNot4].some((e) => e.checked);
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    const index = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(event.currentTarget.checked) {
                        const renderedProduct = productValue.filter((e) => e.price >= 150 && e.price < 200 && starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else {
                        const renderedProduct = productValue.filter((e) => starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    const indexStar = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)) || (priceCondition[index[4]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                if(event.currentTarget.checked) {
                    const products150To200 = productValue.filter((e) => e.price >= 150 && e.price < 200);
                    notOrderProductValue = [...products150To200];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return products150To200;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...products150To200].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...products150To200].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productValue;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productValue].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productValue].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
        })
        checker200.addEventListener("click", (event) => {
            const checkBox = [...inputsNot5].some((e) => e.checked)
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) || priceCondition[index[1]](e) || priceCondition[index[2]](e) || priceCondition[index[3]](e) || priceCondition[index[4]](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    const index = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(event.currentTarget.checked) {
                        const renderedProduct = productValue.filter((e) => e.price >= 200 && starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else {
                        const renderedProduct = productValue.filter((e) => starsCondition[index](e));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else {
                    const index = [...allInputs].reduce((total, e, i) => {
                        if(e.checked) {
                            total.push(i)
                        }
                        return total;
                    }, []);
                    const indexStar = [...allStars].findIndex((e) => e.classList.contains("star--active"));
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if (index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && starsCondition[indexStar](e)) || (priceCondition[index[1]](e) && starsCondition[indexStar](e)) || (priceCondition[index[2]](e) && starsCondition[indexStar](e)) || (priceCondition[index[3]](e) && starsCondition[indexStar](e)) || (priceCondition[index[4]](e) && starsCondition[indexStar](e)));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                if(event.currentTarget.checked) {
                    const productsAbove200 = productValue.filter((e) => e.price >= 200);
                    notOrderProductValue = [...productsAbove200];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productsAbove200;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productsAbove200].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productsAbove200].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return productValue;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...productValue].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...productValue].sort((a, b) => b.price - a.price)
                        }
                    });
                }
            }
        })

        star1.addEventListener("click", (e) => {
            const checkBox = [...allInputs].some((e) => e.checked)
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            starClear.style.display = "block";
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 4);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4) || (priceCondition[index[3]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4) || (priceCondition[index[3]](e) && e.rating() >= 4) || (priceCondition[index[4]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const renderedProduct = productValue.filter((e) => e.rating() >= 4);
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 4);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4) || (priceCondition[index[3]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 4) || (priceCondition[index[1]](e) && e.rating() >= 4) || (priceCondition[index[2]](e) && e.rating() >= 4) || (priceCondition[index[3]](e) && e.rating() >= 4) || (priceCondition[index[4]](e) && e.rating() >= 4));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                e.currentTarget.classList.add("star--active");
                const starProducts = productValue.filter((e) => e.rating() >= 4);
                notOrderProductValue = [...starProducts];
                setProducts(() => {
                    if(sortByPrice.value === "featured") {
                        return starProducts;
                    }
                    else if(sortByPrice.value === "lowToHigh") {
                        return [...starProducts].sort((a, b) => a.price - b.price)
                    }
                    else {
                        return [...starProducts].sort((a, b) => b.price - a.price)
                    }
                });
            }
        })
        star2.addEventListener("click", (e) => {
            const checkBox = [...allInputs].some((e) => e.checked)
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            starClear.style.display = "block";
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 3);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3) || (priceCondition[index[3]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3) || (priceCondition[index[3]](e) && e.rating() >= 3) || (priceCondition[index[4]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const renderedProduct = productValue.filter((e) => e.rating() >= 3);
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 3);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3) || (priceCondition[index[3]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 3) || (priceCondition[index[1]](e) && e.rating() >= 3) || (priceCondition[index[2]](e) && e.rating() >= 3) || (priceCondition[index[3]](e) && e.rating() >= 3) || (priceCondition[index[4]](e) && e.rating() >= 3));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                e.currentTarget.classList.add("star--active");
                const starProducts = productValue.filter((e) => e.rating() >= 3);
                notOrderProductValue = [...starProducts];
                setProducts(() => {
                    if(sortByPrice.value === "featured") {
                        return starProducts;
                    }
                    else if(sortByPrice.value === "lowToHigh") {
                        return [...starProducts].sort((a, b) => a.price - b.price)
                    }
                    else {
                        return [...starProducts].sort((a, b) => b.price - a.price)
                    }
                });
            }
        })
        star3.addEventListener("click", (e) => {
            const checkBox = [...allInputs].some((e) => e.checked)
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            starClear.style.display = "block";
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 2);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2) || (priceCondition[index[3]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2) || (priceCondition[index[3]](e) && e.rating() >= 2) || (priceCondition[index[4]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const renderedProduct = productValue.filter((e) => e.rating() >= 2);
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 2);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2) || (priceCondition[index[3]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 2) || (priceCondition[index[1]](e) && e.rating() >= 2) || (priceCondition[index[2]](e) && e.rating() >= 2) || (priceCondition[index[3]](e) && e.rating() >= 2) || (priceCondition[index[4]](e) && e.rating() >= 2));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                e.currentTarget.classList.add("star--active");
                const starProducts = productValue.filter((e) => e.rating() >= 2);
                notOrderProductValue = [...starProducts];
                setProducts(() => {
                    if(sortByPrice.value === "featured") {
                        return starProducts;
                    }
                    else if(sortByPrice.value === "lowToHigh") {
                        return [...starProducts].sort((a, b) => a.price - b.price)
                    }
                    else {
                        return [...starProducts].sort((a, b) => b.price - a.price)
                    }
                });
            }
        })
        star4.addEventListener("click", (e) => {
            const checkBox = [...allInputs].some((e) => e.checked)
            const checkStar = [...allStars].some((e) => e.classList.contains("star--active"));
            starClear.style.display = "block";
            if(checkBox || checkStar) {
                if(checkBox && !checkStar) {
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 1);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1) || (priceCondition[index[3]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1) || (priceCondition[index[3]](e) && e.rating() >= 1) || (priceCondition[index[4]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
                else if(!checkBox && checkStar) {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const renderedProduct = productValue.filter((e) => e.rating() >= 1);
                    notOrderProductValue = [...renderedProduct];
                    setProducts(() => {
                        if(sortByPrice.value === "featured") {
                            return renderedProduct;
                        }
                        else if(sortByPrice.value === "lowToHigh") {
                            return [...renderedProduct].sort((a, b) => a.price - b.price)
                        }
                        else {
                            return [...renderedProduct].sort((a, b) => b.price - a.price)
                        }
                    });
                }
                else {
                    allStars.forEach((e) => {
                        e.classList.remove("star--active")
                    })
                    e.currentTarget.classList.add("star--active");
                    const index = [...allInputs].reduce((total, e, i) => {
                        if (e.checked) {
                            total.push(i);
                        }
                        return total;
                    }, [])
                    if(index.length === 1) {
                        const renderedProduct = productValue.filter((e) => priceCondition[index[0]](e) && e.rating() >= 1);
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 2) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 3) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 4) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1) || (priceCondition[index[3]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                    else if(index.length === 5) {
                        const renderedProduct = productValue.filter((e) => (priceCondition[index[0]](e) && e.rating() >= 1) || (priceCondition[index[1]](e) && e.rating() >= 1) || (priceCondition[index[2]](e) && e.rating() >= 1) || (priceCondition[index[3]](e) && e.rating() >= 1) || (priceCondition[index[4]](e) && e.rating() >= 1));
                        notOrderProductValue = [...renderedProduct];
                        setProducts(() => {
                            if(sortByPrice.value === "featured") {
                                return renderedProduct;
                            }
                            else if(sortByPrice.value === "lowToHigh") {
                                return [...renderedProduct].sort((a, b) => a.price - b.price)
                            }
                            else {
                                return [...renderedProduct].sort((a, b) => b.price - a.price)
                            }
                        });
                    }
                }
            }
            else {
                e.currentTarget.classList.add("star--active");
                const starProducts = productValue.filter((e) => e.rating() >= 1);
                notOrderProductValue = [...starProducts];
                setProducts(() => {
                    if(sortByPrice.value === "featured") {
                        return starProducts;
                    }
                    else if(sortByPrice.value === "lowToHigh") {
                        return [...starProducts].sort((a, b) => a.price - b.price)
                    }
                    else {
                        return [...starProducts].sort((a, b) => b.price - a.price)
                    }
                });
            }
        })

        const activateButton =()=>{
            let mainProductLinks = document.querySelectorAll(".category")
            let subProductLinks = document.querySelectorAll(".link-category")

            mainProductLinks.forEach((e)=>{
                e.addEventListener("click",(event)=>{
                    mainProductLinks.forEach((e)=>{
                        e.classList.remove("category--active")
                    })
                    subProductLinks.forEach((e)=>{
                        e.classList.remove("link-category--active")
                    })
                    event.currentTarget.classList.add("category--active")
                })
            })
            subProductLinks.forEach((e)=>{
                e.addEventListener("click",(event)=>{
                    subProductLinks.forEach((e)=>{
                        e.classList.remove("link-category--active")
                    })
                    mainProductLinks.forEach((e)=>{
                        e.classList.remove("category--active")
                    })
                    event.currentTarget.classList.add("link-category--active")
                })
            })
        }
        activateButton();
    },[])
    // useEffect(() => {
    //     setProducts(products);
    // },[products])
    return (
        <section className="section main">
            <div className="product-image-ad">

            </div>
            <div className="product-main">
                <div className="productlist sidebar">
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
                        <h2 className="title1">PRICE</h2>

                        <div className="checkboxContainer">
                            <input id="checker50" type="checkbox"/>
                            <label className="booking under50" htmlFor="checker50">Under $50</label>
                        </div>
                        <div className="checkboxContainer">
                            <input id="checker50to100" type="checkbox"/>
                            <label className="booking fiftyTo100" htmlFor="checker50to100">$50 - $100</label>
                        </div>
                        <div className="checkboxContainer">
                            <input id="checker100to150" type="checkbox"/>
                            <label className="booking hundredTo150" htmlFor="checker100to150">$100 - $150</label>
                        </div>
                        <div className="checkboxContainer">
                            <input id="checker150to200" type="checkbox"/>
                            <label className="booking fifteenHundredTo200" htmlFor="checker150to200">$150 - $200</label>
                        </div>
                        <div className="checkboxContainer">
                            <input id="checker200" type="checkbox"/>
                            <label className="booking above200" htmlFor="checker200">$200 & Above</label>
                        </div>

                        <h2 className="title1_1">RATING</h2>
                        <p className="starClear">Clear</p>
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
                    <div className="sort_by">
                        <strong>...Sort By...</strong>
                        <select name="sortByPrice" id="sortby">
                            <option value="featured" selected>Featured</option>
                            <option value="highToLow">Price (high to low)</option>
                            <option value="lowToHigh">Price (low to high)</option>
                        </select>
                    </div>
                    <div className="colum-list">
                        <div className="colum " id="products">
                            {
                                products?.map((e,i)=> {
                                    return (
                                        <ProductList
                                            key={e.id}
                                            id={e.id}
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