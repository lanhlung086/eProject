export const store = [
    {
        id: "MA01",
        imageBig01: "./imgs/minkaAireFan01.jpg",
        imageBig02: "./imgs/minkaAireFan01style2.jpg",
        imageSmall: "./imgs/minkaAireFanS01.jpg",
        title: "Minka-Aire F736L-BS/SDBK Gear 54\" Inch Ceiling Fan with Integrated 18W LED Light and DC Motor in Brushed Steel/Sand Black Finish",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 499.95,
        listPrice: null,
        color: "Brushed Steel/Sand Black",
        brand: "MINKA-AIRE",
        dimension: "56 x 54 x 16 inches",
        material: "Material: Other",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "DESIGN: Bold and art deco in design, the Minka-Aire Gear ceiling fan is designed in a Brushed Steel/Sand Black finish and Three Matte Black Blades",
            "BULB: The Gear ceiling fan includes an integrated 18 Watt Dimmable LED Light Module",
            "INCLUDED: RCS400 - Six-speed hand-held remote with On/Off full-range light dimming, Forward and Reverse function, and 6\" Downrod",
            "MOTOR: Conveniently quiet, 6 speed - reversible DC motor. Run Summer and Winter to aid in rotating air and cutting down on energy costs.",
            "DIMENSIONS: Measures 16.5'' from the ceiling to the lowest point of the fan with the included 6\" downrod. This Contemporary Ceiling Fan has a blade sweep diameter of 54'' with 14° Blade Pitch",
            "ADDITIONAL: Requires Bond hub BD-1000 (sold separately) to work with Amazon Alexa or Google Home. Optional WC400 wall control can be purchased separately."
        ],
        customers: [
            {
                name: "Faith",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MA02",
        imageBig01: "./imgs/minkaAireFan02.jpg",
        imageBig02: "./imgs/minkaAireFan02style2.jpg",
        imageSmall: "./imgs/minkaAireFanS02.jpg",
        title: "Minka Aire F868L-BN Sleek 60\" Ceiling Fan with LED Light and Remote Control, Brushed Nickel",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 299.95,
        listPrice: null,
        color: "Black",
        brand: "MINKA-AIRE",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "Minka-Aire Sleek Fan pairs with the Smart Home Tech you utilize everyday, including Google Home, Amazon Alexa, Nest and Ecobee",
            "Free App Download allows you to sync your fan with our Minka-Aire Bond Home iOS & Android App to control lights and fan speeds, multiple fans in your home, use smart features and reduce energy costs all while at home or away.",
            "Included: 16W LED Integrated light kit, RC600 Remote Control and 6\" downrod. Optional WC600 Wall Control can be purchased separately.",
            "Minka-Aire Sleek ceiling fans are energy efficient with powerful, quiet DC motors. Each fan is factory balanced and tested to ensure fans do not wobble, click or rattle after installed.",
            "This indoor ceiling fan allows for you to enjoy your fan in any indoor setting.",
            "Product Dimensions and Design: Brushed Nickel finish with Seasoned Wood Blades, 54\" 3 Blade sweep, 13\" Ceiling to Lowest Fan Point with 6\" Downrod (included)"
        ],
        customers: [
            {
                name: "TK Gospodinov",
                rating: 5,
                generalReview: "Great Looking Ceiling Fan",
                detailedReview: [
                    "Installation was relatively easy, the instructions and the labeling on the wires and the connections were easy to follow and the whole installation took under 2 hours, including the time to disassamble and remove the old ceiling fan. The new fan looks great, the light is fairly bright and has a reasonable light temperature - not too cold, but not too soft either. The remote is already programmed and you won't need to reprogram it unless you have another Minka ceiling fan in your home that you want to control separately. Compared to my previous ceiling fan, this one needs to spin faster to deliver the same airflow, since it has 3 blades, compared to 5, and the blade angle is smaller. This is not an issue as this fan spins very fast when you use the highest setting (6), but it is a bit noisier, though it doesn't bother me much. All in all, this is a great looking fan and the materials and build are high quality. The blades are made of what seems like plastic, but it immitates wood pretty good, and reduces the weight and is more efficient, plus the blades will be much less prone to warping over time. The housing around the light is metal and the base is sturdy and leaves enough room to hide the wiring.",
                ]
            },
            {
                name: "Dano",
                rating: 2,
                generalReview: "Looks great, but missing some critical things",
                detailedReview: [
                    "It has a great look, missing critical functionality.",
                    "First the lamp in the fan is extremely dim, it provides minimal light. My husband and I already looking into adding recess lights to have the proper amount of light in our room.",
                    "Second, it isn't possible to control the fan/ light using your wall switch. We have a smart house with hue lights and a google device in every room- so I get it. However, it should be possible to turn on your bedroom light without having to open the app on your phone or look for the remote.",
                    "Third, the remote doesn't dim the lights. As someone who routinely rocks her baby to sleep, this was an important part.",
                    "Last, this fan was extremely hard to install. This is partially because our house is older, however I don't understand why the equipment couldn't be more adaptable.",
                ]
            },
            {
                name: "jesse",
                rating: 4,
                generalReview: "Nice Fan",
                detailedReview: [
                    "The fan is super quiet, pretty, and has the Bond Home tech built in so you can control it with an app or your voice assistant. The low setting is very low, which is something I personally like very much, and the high setting moves quite a bit of air. Finally, the remote leaves something to be desired as it is too easy to accidentally change the fan's direction and you cannot dim the light with it (must be done in the app). I think it is fair to knock a star off for this because I think a product like this is at its best when it is full featured out of the box. While wifi setup is pretty simple, not everyone has the patience for it or is comfortable with having connected devices. Overall very happy with this purchase despite the remote.",
                ]
            }
        ]
    },
    {
        id: "MA03",
        imageBig01: "./imgs/minkaAireFan03.jpg",
        imageBig02: "./imgs/minkaAireFan03style2.jpg",
        imageSmall: "./imgs/minkaAireFanS03.jpg",
        title: "Minka-Aire F467L-BNW Concept III 54\" Hugger with LED Lights, Brushed Nickel",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 359.95,
        listPrice: null,
        color: "Black",
        brand: "MINKA-AIRE",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MA04",
        imageBig01: "./imgs/minkaAireFan04.jpg",
        imageBig02: "./imgs/minkaAireFan04style2.jpg",
        imageSmall: "./imgs/minkaAireFanS04.jpg",
        title: "Minka-Aire F864L-BNK Barn 65 Ceiling Fan with LED Light and DC Motor in Burnished Nickel Finish",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 449.95,
        listPrice: null,
        color: "Black",
        brand: "MINKA-AIRE",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "CM01",
        imageBig01: "./imgs/craftmadeFan01.jpg",
        imageBig02: "./imgs/craftmadeFan01style2.jpg",
        imageSmall: "./imgs/craftmadeFanS01.jpg",
        title: "Craftmade Kids Ceiling Fan Boys WB348TS Tiger Shark Warplane With Light, 48-Inch 3 Blade Hugger Ceiling Fan",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 302.00,
        listPrice: null,
        color: "Black",
        brand: "Craftmade",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "CM02",
        imageBig01: "./imgs/craftmadeFan02.jpg",
        imageBig02: "./imgs/craftmadeFan02style2.jpg",
        imageSmall: "./imgs/craftmadeFanS02.jpg",
        title: "Craftmade Ceiling Fan with Light and Remote VG54FB2 Vogue Flat Black 54 Inch\n",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 162,
        listPrice: null,
        color: "Black",
        brand: "Craftmade",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "CM03",
        imageBig01: "./imgs/craftmadeFan03.jpg",
        imageBig02: "./imgs/craftmadeFan03style2.jpg",
        imageSmall: "./imgs/craftmadeFanS03.jpg",
        title: "Craftmade K11291 Mobi 60\" Outdoor Ceiling Fan with 17 Watts LED Light Kit and Remote, 3 ABS Blades, Oiled Light Bronze",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 311.95,
        listPrice: null,
        color: "Black",
        brand: "Craftmade",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "CM04",
        imageBig01: "./imgs/craftmadeFan04.jpg",
        imageBig02: "./imgs/craftmadeFan04style2.jpg",
        imageSmall: "./imgs/craftmadeFanS04.jpg",
        title: "Craftmade Outdoor Ceiling Fan with CFL Light PAR52AGV4 Port Arbor 4 Blade 52 Inch Wet for Patio, Galvanized",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 253.30,
        listPrice: 298.00,
        color: "Black",
        brand: "Craftmade",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "KL01",
        imageBig01: "./imgs/kichlerFan01.jpg",
        imageBig02: "./imgs/kichlerFan01style2.jpg",
        imageSmall: "./imgs/kichlerFanS01.jpg",
        title: "Kichler 300230NI, Ceiling Fan Brushed Nickel 15\" Ceiling Fan with Light & Remote Control",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 399.00,
        listPrice: null,
        color: "Black",
        brand: "Kichler",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "KL02",
        imageBig01: "./imgs/kichlerFan02.jpg",
        imageSmall: "./imgs/kichlerFanS02.jpg",
        title: "Kichler 300265DBK Gentry 65\" Ceiling Fan with LED Lights and Wall Control, Distressed Black",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 850.00,
        listPrice: null,
        color: "Black",
        brand: "Kichler",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "KL03",
        imageBig01: "./imgs/kichlerFan03.jpg",
        imageSmall: "./imgs/kichlerFanS03.jpg",
        title: "Kichler 300209SBK, Ceiling Fan Satin Black 52\" Ceiling Fan with Light & Remote Control",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 599.95,
        listPrice: null,
        color: "Black",
        brand: "Kichler",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "KL04",
        imageBig01: "./imgs/kichlerFan04.jpg",
        imageBig02: "./imgs/kichlerFan04style2.jpg",
        imageSmall: "./imgs/kichlerFanS04.jpg",
        title: "Kichler 300103NI, Canfield Brushed Nickel 30\" Outdoor Ceiling Fan",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 165.75,
        listPrice: 174.95,
        color: "Black",
        brand: "Kichler",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MC01",
        imageBig01: "./imgs/monteCarloFan01.jpg",
        imageBig02: "./imgs/monteCarloFan01style2.jpg",
        imageSmall: "./imgs/monteCarloFanS01.jpg",
        title: "Monte Carlo 3MAVR60BSKOAD Maverick Modern Energy Star 60\" Ceiling Fan with LED Light and Hand Remote Control, 3 Balsa Wood Blades, Brushed Steel",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 855.96,
        listPrice: null,
        color: "Black",
        brand: "Monte Carlo",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MC02",
        imageBig01: "./imgs/monteCarloFan02.jpg",
        imageBig02: "./imgs/monteCarloFan02style2.jpg",
        imageSmall: "./imgs/monteCarloFanS02.jpg",
        title: "Monte Carlo Fans 14PRR72AGPD Prairie Grand Windmill Energy Star 72\" Outdoor Ceiling Fan with LED Light and Hand Remote Control, 14 Wood Blades, Aged Pewter-Light Grey Weathered Oak Blades",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 1199.96,
        listPrice: null,
        color: "Black",
        brand: "Monte Carlo",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MC03",
        imageBig01: "./imgs/monteCarloFan03.jpg",
        imageBig02: "./imgs/monteCarloFan03style2.jpg",
        imageSmall: "./imgs/monteCarloFanS03.jpg",
        title: "Monte Carlo 5CY60BK Cyclone Energy Star 60\" Outdoor Ceiling Fan, 5 Blades, Matte Black",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 399.96,
        listPrice: null,
        color: "Black",
        brand: "Monte Carlo",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "MC04",
        imageBig01: "./imgs/monteCarloFan04.jpg",
        imageBig02: "./imgs/monteCarloFan04style2.jpg",
        imageSmall: "./imgs/monteCarloFanS04.jpg",
        title: "Monte Carlo 3AMR60AGPD Armstrong Unique Energy Star 60\" Ceiling Fan with LED Light and Remote, 3 ABS Blades, Aged Pewter",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 669.96,
        listPrice: null,
        color: "Black",
        brand: "Monte Carlo",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "C01",
        imageBig01: "./imgs/casablancaFan01.jpg",
        imageBig02: "./imgs/casablancaFan01style2.jpg",
        imageSmall: "./imgs/casablancaFanS01.jpg",
        title: "Casablanca Indoor Ceiling Fan, with wall control - Panama 54 inch, Brushed Nickel, 55067",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 399.99,
        listPrice: null,
        color: "Black",
        brand: "Casablanca",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "C02",
        imageBig01: "./imgs/casablancaFan02.jpg",
        imageBig02: "./imgs/casablancaFan02style2.jpg",
        imageSmall: "./imgs/casablancaFanS02.jpg",
        title: "Casablanca Indoor Ceiling Fan with LED Light and remote control - Wisp 44 inch, Nobel Bronze, 59287",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 279.99,
        listPrice: null,
        color: "Black",
        brand: "Casablanca",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "C03",
        imageBig01: "./imgs/casablancaFan03.jpg",
        imageBig02: "./imgs/casablancaFan03style2.jpg",
        imageSmall: "./imgs/casablancaFanS03.jpg",
        title: "Casablanca Fan Company 59167 Casablanca Perseus Indoor/Outdoor Ceiling Fan with LED Light and Wall Control, Large, Brushed Nickel",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 599.99,
        listPrice: null,
        color: "Black",
        brand: "Casablanca",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "C04",
        imageBig01: "./imgs/casablancaFan04.jpg",
        imageBig02: "./imgs/casablancaFan04style2.jpg",
        imageSmall: "./imgs/casablancaFanS04.jpg",
        title: "Casablanca Heathridge Indoor / Outdoor Ceiling Fan with Pull Chain Control",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 549.99,
        listPrice: null,
        color: "Black",
        brand: "Casablanca",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "QR01",
        imageBig01: "./imgs/quorumFan01.jpg",
        imageSmall: "./imgs/quorumFanS01.jpg",
        title: "Quorum 196015-69 60\" Windmill Ceiling Fan in Noir with Weathered Oak Finished Blades, Damp Rated",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 1138.00,
        listPrice: null,
        color: "Black",
        brand: "Quorum",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "QR02",
        imageBig01: "./imgs/quorumFan02.jpg",
        imageSmall: "./imgs/quorumFanS02.jpg",
        title: "Quorum 3525-86 Protruding Mount, 5 Weathered Oak Blades Ceiling fan with 14 watts light, Oiled Bronze",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 382.00,
        listPrice: null,
        color: "Black",
        brand: "Quorum",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "QR03",
        imageBig01: "./imgs/quorumFan03.jpg",
        imageBig02: "./imgs/quorumFan03style2.jpg",
        imageSmall: "./imgs/quorumFanS03.jpg",
        title: "Quorum 96015-69 60\" Indoor Windmill Ceiling Fan in Noir with Weathered Oak Blades",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 1050.00,
        listPrice: null,
        color: "Black",
        brand: "Quorum",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "QR04",
        imageBig01: "./imgs/quorumFan04.jpg",
        imageSmall: "./imgs/quorumFanS04.jpg",
        title: "Quorum 78605-30 Protruding Mount, 5 Medium Oak Blades Ceiling fan, Vintage Gold Leaf",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 350.00,
        listPrice: null,
        color: "Black",
        brand: "Quorum",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "LK01",
        imageBig01: "./imgs/laskoFan01.jpg",
        imageBig02: "./imgs/laskoFan01style2.jpg",
        imageSmall: "./imgs/laskoFanS01.jpg",
        title: "Lasko Portable Electric 42\" Oscillating Tower Fan with Fresh Air Ionizer, Timer and Remote Control for Indoor, Bedroom and Home Office Use, Silver 2551",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 102.00,
        listPrice: null,
        color: "Black",
        brand: "Lasko",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "LK02",
        imageBig01: "./imgs/laskoFan02.jpg",
        imageBig02: "./imgs/laskoFan02style2.jpg",
        imageSmall: "./imgs/laskoFanS02.jpg",
        title: "Lasko 2535 52″ Space-Saving Pedestal Tower Fan with Remote Control - Features Built-in Timer and Wide Spread Oscillation",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 59.99,
        listPrice: null,
        color: "Black",
        brand: "Lasko",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "LK03",
        imageBig01: "./imgs/laskoFan03.jpg",
        imageBig02: "./imgs/laskoFan03style2.jpg",
        imageSmall: "./imgs/laskoFanS03.jpg",
        title: "Lasko U35115 Electric Oscillating High Velocity Stand-Up Tower Fan with Timer and Remote Control for Indoor, Bedroom and Home Office Use, 35 Inch, Silver Black",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 84.99,
        listPrice: null,
        color: "Black",
        brand: "Lasko",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "LK04",
        imageBig01: "./imgs/laskoFan04.jpg",
        imageBig02: "./imgs/laskoFan04style2.jpg",
        imageSmall: "./imgs/laskoFanS04.jpg",
        title: "Lasko Wind Curve Electric Oscillating Tower Fan with Bluetooth Technology for Indoor, Bedroom and Home Office Use, 42\", Blackwood T42905",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 274.00,
        listPrice: null,
        color: "Black",
        brand: "Lasko",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "HW01",
        imageBig01: "./imgs/honeywellFan01.jpg",
        imageBig02: "./imgs/honeywellFan01style2.jpg",
        imageSmall: "./imgs/honeywellFanS01.jpg",
        title: "Honeywell Fresh Breeze Tower Fan with Remote Control HYF048 Black With Programmable Thermostat, Timer Shut-Off Function & Dust Filter",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 69.99,
        listPrice: null,
        color: "Black",
        brand: "Honeywell",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "HW02",
        imageBig01: "./imgs/honeywellFan02.jpg",
        imageBig02: "./imgs/honeywellFan02style2.jpg",
        imageSmall: "./imgs/honeywellFanS02.jpg",
        title: "Honeywell Quiet Set Whole Room Tower Fan",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 64.99,
        listPrice: null,
        color: "Black",
        brand: "Honeywell",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "HW03",
        imageBig01: "./imgs/honeywellFan03.jpg",
        imageBig02: "./imgs/honeywellFan03style2.jpg",
        imageSmall: "./imgs/honeywellFanS03.jpg",
        title: "Honeywell TurboForce Tower Fan, Black",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 79.99,
        listPrice: null,
        color: "Black",
        brand: "Honeywell",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "HW04",
        imageBig01: "./imgs/honeywellFan04.jpg",
        imageBig02: "./imgs/honeywellFan04style2.jpg",
        imageSmall: "./imgs/honeywellFanS04.jpg",
        title: "Honeywell QuietSet Whole Room Tower Fan-Black, HYF290B",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 61.45,
        listPrice: null,
        color: "Black",
        brand: "Honeywell",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "V01",
        imageBig01: "./imgs/vornadoFan01.jpg",
        imageBig02: "./imgs/vornadoFan01style2.jpg",
        imageSmall: "./imgs/vornadoFanS01.jpg",
        title: "Vornado OSCR37 Tower Fan and Air Circulator with Remote, Smooth Oscillation, Timer and Touch Controls, 37\"",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 109.99,
        listPrice: null,
        color: "Black",
        brand: "Vornado",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "V02",
        imageBig01: "./imgs/vornadoFan02.jpg",
        imageBig02: "./imgs/vornadoFan02style2.jpg",
        imageSmall: "./imgs/vornadoFanS02.jpg",
        title: "Vornado NGT335 Air Circulator Tower Fan with Remote Control and Versa-Flow, 33\", NGT335-33, Black",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 99.99,
        listPrice: null,
        color: "Black",
        brand: "Vornado",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "V03",
        imageBig01: "./imgs/vornadoFan03.jpg",
        imageBig02: "./imgs/vornadoFan03style2.jpg",
        imageSmall: "./imgs/vornadoFanS03.jpg",
        title: "Vornado 173 Whole Room Tower Air Circulator Fan, 37\"",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 79.99,
        listPrice: 109.99,
        color: "Black",
        brand: "Vornado",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "V04",
        imageBig01: "./imgs/vornadoFan04.jpg",
        imageBig02: "./imgs/vornadoFan04style2.jpg",
        imageSmall: "./imgs/vornadoFanS04.jpg",
        title: "Vornado Duo Small Room Tower Air Circulator Fan",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 39.99,
        listPrice: null,
        color: "Black",
        brand: "Vornado",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Tower Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "M01",
        imageBig01: "./imgs/mistingFan01.jpg",
        imageBig02: "./imgs/mistingFan01style2.jpg",
        imageSmall: "./imgs/mistingFanS01.jpg",
        title: "O2COOL Deluxe Misting Fan, 1, Grey",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 9.99,
        listPrice: null,
        color: "Black",
        brand: "O2COOL",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Misting Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "M02",
        imageBig01: "./imgs/mistingFan02.jpg",
        imageBig02: "./imgs/mistingFan02style2.jpg",
        imageSmall: "./imgs/mistingFanS02.jpg",
        title: "Lasko 7050 Misto Outdoor Misting Fan - Features Cooling Misters, Ideal for Camping, Patios, Picnics, & more",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 230.00,
        listPrice: null,
        color: "Black",
        brand: "Lasko",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Misting Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "M03",
        imageBig01: "./imgs/mistingFan03.jpg",
        imageBig02: "./imgs/mistingFan03style2.jpg",
        imageSmall: "./imgs/mistingFanS03.jpg",
        title: "O2COOL 2 Pack Deluxe Misting Handheld Portable Misting Fan, Raspberry",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 18.26,
        listPrice: 21.49,
        color: "Black",
        brand: "O2COOL",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Misting Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "M04",
        imageBig01: "./imgs/mistingFan04.jpg",
        imageBig02: "./imgs/mistingFan04style2.jpg",
        imageSmall: "./imgs/mistingFanS04.jpg",
        title: "HandFan Portable Handheld Misting Fan with 55ml Water Tank Rechargeable Personal Cooling Fan Mister Humidifier USB/Battery Operated Water Spray Mist Fan 180° Foldable 3 Speeds Strong Wind for Make-up Travel Outdoors Car Disney Land",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 19.99,
        listPrice: 25.99,
        color: "Black",
        brand: "HandFan",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Misting Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "E01",
        imageBig01: "./imgs/exhaustFan01.jpg",
        imageBig02: "./imgs/exhaustFan01style2.jpg",
        imageSmall: "./imgs/exhaustFanS01.jpg",
        title: "Broan-NuTone 505 Exhaust Fan, White Vertical Discharge Ceiling Ventilation Fan, 8.5 Sones, 200 CFM, 8\"",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 59.99,
        listPrice: 111.35,
        color: "Black",
        brand: "Broan-NuTone",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Exhaust Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "E02",
        imageBig01: "./imgs/exhaustFan02.jpg",
        imageBig02: "./imgs/exhaustFan02style2.jpg",
        imageSmall: "./imgs/exhaustFanS02.jpg",
        title: "Broan-NuTone AE110LK Flex Bathroom Exhaust Ventilation Fan with LED Light, Energy Star Certified, 110 CFM, 1.0 Sones, White",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 129.00,
        listPrice: null,
        color: "Black",
        brand: "Broan-NuTone",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Exhaust Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "E03",
        imageBig01: "./imgs/exhaustFan03.jpg",
        imageBig02: "./imgs/exhaustFan03style2.jpg",
        imageSmall: "./imgs/exhaustFanS03.jpg",
        title: "iLIVING ILG8SF20V Wall Mounted Exhaust Fan, 20\" - Variable, Silver",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 200.00,
        listPrice: 249.99,
        color: "Black",
        brand: "Iliving",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Exhaust Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
    {
        id: "E04",
        imageBig01: "./imgs/exhaustFan04.jpg",
        imageBig02: "./imgs/exhaustFan04style2.jpg",
        imageSmall: "./imgs/exhaustFanS04.jpg",
        title: "HG POWER Through-the-Wall Ventilation Fan High CFM 6 Inch Exhaust Fan Extractor Blower Exhaust Attic Garage Kitchen Bathroom Ventilation Fan Ceiling and Wall Mount Exhaust Fan (308 CFM)",
        rating: function() {
            return ((this.customers.filter((e) => e.rating === 5).length * 5 +
                this.customers.filter((e) => e.rating === 4).length * 4 +
                this.customers.filter((e) => e.rating === 3).length * 3 +
                this.customers.filter((e) => e.rating === 2).length * 2 +
                this.customers.filter((e) => e.rating === 1).length) / this.customers.length).toFixed(1);
        },
        reviews: function() {
            return this.customers.length;
        },
        price: 52.99,
        listPrice: null,
        color: "Black",
        brand: "HG Power",
        dimension: null,
        material: "Wood",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Exhaust Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [

        ],
        customers: [
            {
                name: "jesse",
                rating: 5,
                generalReview: "Lots of air on low speeds. Looks good in home",
                detailedReview: [
                    "Easy to mount even easier to use. The 3 slim blades take a minute to get use to but this is a great fan. Provides a lot of air on the lower speeds. Looks great in our home. Have 4 of these so far will definitely buy more.",
                ]
            }
        ]
    },
]