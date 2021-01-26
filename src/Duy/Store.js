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
            },
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
        color: "Brushed Nickel Wet",
        brand: "MINKA-AIRE",
        dimension: "54 x 54 x 12 inches",
        material: null,
        controllerType: "Remote Control",
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Minka Aire Concept III Fan pairs with the Smart Home Tech you utilize everyday, including Google Home, Amazon Alexa, Nest and Ecobee",
            "Free App Download allows you to sync your fan with our Minka-Aire Bond Home iOS & Android App to control lights and fan speeds, multiple fans in your home, use smart features and reduce energy costs all while at home or away.",
            "Included: 40W LED Integrated light kit, RC1000 Remote Control. Optional WC1000 Wall Control can be purchased separately.",
            "Minka-Aire Concept III fans are energy efficient with powerful, quiet DC motors. Each fan is factory balanced and tested to ensure fans do not wobble, click or rattle after installed",
            "Damp Rated allows for you to enjoy this fan indoors or outdoors under a covered outdoor seating area.",
            "Product Dimensions and Design: 54\" 3 Blade sweep, 12.25\" Ceiling to Lowest Fan Point",
        ],
        customers: [
            {
                name: "jane",
                rating: 1,
                generalReview: " Nice fan... but my 5 went to 1",
                detailedReview: [
                    "Nice looking fan. Keep in mind you can’t change the light bulb, so there is one color of light. It is a warm color luckily. Looks great in my room. If you need a lot of light you will need to install canned light with it. We put one in our bedroom, and it’s perfect. In our second bedroom we added lighting so that would be helpful if we had an office in there, or say a child needed to do homework in there. UPDATE: Don’t buy the wall control. It has a horrible bright blue light that you CAN NOT turn off. When I say bright, I mean you won’t be able to sleep bright! Who could come up with such a bad idea. I’m changing my rating on the whole fan from a 5, if you are ok with a hand held remote control to a 1 if you want a wall control!",
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
        color: "Burnshed Nickel",
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
            "Minka Aire Barn Fan pairs with the Smart Home Tech you utilize everyday, including Google Home, Amazon Alexa, Nest and Ecobee",
            "Free App Download allows you to sync your fan with our Minka-Aire Bond Home iOS & Android App to control lights and fan speeds, multiple fans in your home, use smart features and reduce energy costs all while at home or away.",
            "Included: 40W LED Integrated light kit, RC400 Remote Control. Optional WC400 Wall Control can be purchased separately.",
            "Minka-Aire Barn Ceiling fans are energy efficient with powerful, quiet DC motors. Each fan is factory balanced and tested to ensure fans do not wobble, click or rattle after installed.",
            "This indoor ceiling fan allows for you to enjoy your fan in any indoor setting.",
            "Product Dimensions and Design: Burnished Nickel Finish with Savannah Grey Blades, 65\" 10 Blade sweep, 21.5\" Ceiling to Lowest Fan Point with 10\" downrod (included)",
        ],
        customers: [
            {
                name: "Monae",
                rating: 1,
                generalReview: "Light will flicker on and off",
                detailedReview: [
                    "I love the way this fan looks. It is beautiful. The only cons are that the light will randomly turn off and on while turned on. The fan will continue to go and the light will turn on and off. We have had it for abo 6 months and it just started doing this. It is very frustrating and a huge put off for this fan. I would give it more stars if not for this major flaw. Another con is that the rod was slightly too low hanging from the ceiling. Great looking fan but disappointed that it is flickering on and off for the price we paid for the fan. Buyer beware if you purchase this. For being so much money it should at least have a working light.....",
                ]
            },
            {
                name: "Bunky",
                rating: 5,
                generalReview: " I'm a big fan of this big fan!",
                detailedReview: [
                    "This fan is beautiful! Unique, huge, silent and so lovely.",
                ]
            },
            {
                name: "gail greeley",
                rating: 4,
                generalReview: " I like it! And so does the wife! Alexa, turn on fan",
                detailedReview: [
                    "We redid a family room in our very old house. I’m in the middle of adding smart lighting and some other smart devices. We wanted a nice big fan and the big box stores just didn’t have what we wanted so we went to a lighting store. This exact fan was selling for $800+ so I took a flyer on buying it from Amazon.",
                    "Got the package very quickly even ahead of the initial scheduled delivery date which was awesome. Box and fan were in excellent shape so thank you so much!",
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
        price: 265.20,
        listPrice: 302.00,
        color: "Tiger Shark",
        brand: "Craftmade",
        dimension: "48 x 48 x 17 inches",
        material: "Metal, Glass",
        controllerType: "Button Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "LIGHTING: This 48\" ceiling fan is built with a custom made cased white glass integrated light kit that includes one B10 60 watt candelabra frosted bulb that exudes 615 lumens.",
            "MATERIAL: Engineered with a silicon steel body this kids ceiling fan was built with it's unique airplane design including three plywood propeller blades followed by the custom integrated matte white glass light kit.",
            "CONTROL: This flush mount warplane ceiling fan is controlled by a pull chain that provides three speed variations and includes an additional pull chain for on and off lighting.",
            "DIMENSIONS: This hugger ceiling fan hangs 17.0\" from the ceiling to the bottom of the fan and 10.5\" from the ceiling to the blades. The blade sweep diameter measures 48\" with a blade pitch of 15 degrees. The base diameter measures 8.5\".",
            "SPECIFICATIONS: Weighing 13.87 pounds this ceiling fan is built with a quiet AC motor that measures 153x12 mm. This fan produces a steady airflow of 4,138 CFM. This collection is not recommended for angled or vaulted ceilings. UL Certified.",
        ],
        customers: [
            {
                name: "SixFactor",
                rating: 3,
                generalReview: "Awesome... Until.",
                detailedReview: [
                    "I really want to give this all 5 stars. But there are a couple of items that are areas for improvement.",
                    "1. Installation instructions: Be aware of two not-so-visible black pegs or lugs on the motor housing that will help align the motor housing. These are not well-cited in the instructions, but if your orient the ceiling mounting plate one way, there's a possibility that you'll be mounting the motor housing 90 degrees from your intended direction. So, know where the lugs are in relation to your mounting plate.",
                    "2. Installation action: It is really helpful if you have assistance, given the bulk and weight of the motor housing.",
                    "3. Motor: This fan ran very well for a few weeks. Friends and our daughter said, \"Dad, it's you!\" The problem is that after about three weeks, the motor would no longer turn, but would instead just hum. My son pulled it off and investigated. Wiring and voltage were good, and we reinstalled to test again. No joy.",
                    "The good news is that Amazon's return policy is excellent, and a replacement order has been made. We just need to repack the defective fan and ship (for free) it back. So, more to come, and I'll update this review depending on outcome. Hoping for the best.",
                ]
            },
            {
                name: "Merit",
                rating: 2,
                generalReview: "GREAT looks, terrible as a fan or light",
                detailedReview: [
                    "This fan looks awesome but unfortunately totally fails at moving air or providing light. We knew what we were getting in to with the light based on other reviews here (it’s completely useless except as a nightlight) but were disappointed to find that it also doesn’t function well as a fan. At least the two-bladed version just doesn’t move much air so you have to put it on high just to get any kind of reasonable airflow and then it’s sort of loud (the motor makes a humming sound on high, it’s totally silent on low or medium). I bet the four-blade version is a lot better as a fan, especially since the blades are longer. We’re returning ours (at least installation and deinstallation were easy), we may try the four blade version if we decide we can live with weak light.",
                    "It’s really too bad because this thing looks GREAT and there doesn’t seem to be anything else like it on the market.",
                ]
            },
            {
                name: "Kalae Paddler",
                rating: 4,
                generalReview: " LOOKS REALLY COOL",
                detailedReview: [
                    " Not much of a problem to install. I did it myself, but I would recommend an assistant. Use commonsense with safety to make a secure and strong mount and don’t skip the safety hanging cable to the ceiling joist. I had to knock off a star because of the dismal lighting; nearly useless. Otherwise, it works fine so far and looks fantastic. My grandson absolutely loves it. One reviewer mentioned a remote control, but that must be a different ceiling fan because there is no sign of one with this product. With past reviews making note of the fan failing to work, we’ll wait and see how long this one will work and I’ll post an update if necessary.",
                ]
            },
            {
                name: "Dr. Krappenschitz",
                rating: 5,
                generalReview: "Looks great installed",
                detailedReview: [
                    " I purchased this fan for looks over functionality and it did not disappoint. It looks awesome in my son’s room. I was pleasantly surprised that it had a built in light. The light is not very bright, but does the trick. The fan itself has multiple speeds and a reverse function for winter. My only gripe about this fan is the lack of a remote control which is normally found on cheaper Home Depot models. However, I had this fan professionally installed and the electrician was able to setup two wall switches; one switch controls the light (on and off) and another switch controls the fan (on and off).",
                ]
            }
        ]
    },
    {
        id: "CM02",
        imageBig01: "./imgs/craftmadeFan02.jpg",
        imageBig02: "./imgs/craftmadeFan02style2.jpg",
        imageSmall: "./imgs/craftmadeFanS02.jpg",
        title: "Craftmade Ceiling Fan with Light and Remote VG54FB2 Vogue Flat Black 54 Inch",
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
        color: "Flat Black",
        brand: "Craftmade",
        dimension: "23.75 x 11.89 x 9.21 inches",
        material: "ABS/Glass/Die Cast/Steel/Silicon Ste",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "LIGHT: Includes 50 Watt JD Halogen Light Bulb and Integrated Matte White Glass - Cap for Non-Light Use",
            "DIMENSIONS: Weight 17.7lbs, Ceiling Mount Canopy 5.91\" Diameter, 23.5\" Ceiling to Bottom of Light, 22\" Ceiling to Top of Fan Blades with 16\" DownrodBullet",
            "INCLUDES: Two Custom Flat Black Blades (54\" Span / Progressive 18 Degree Blade Pitch) 5904 CFMBullet",
            "CONTROL INCLUDED: UCI-2000-2 - Universal Three-Speed Remote & Wall Control System with Reverse Functionality",
            "UL and ULC Approved for Indoor Locations, FINISH: Flat Black, STYLE: Modern Ceiling Fan",
        ],
        customers: [
            {
                name: "Another Customer",
                rating: 5,
                generalReview: "The look",
                detailedReview: [
                    "It moves a lot of air"
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
        color: "Oiled Bronze-mahogany",
        brand: "Craftmade",
        dimension: "60 x 60 x 16 inches",
        material: "Metal, Glass, Plastic",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "MOBI OUTDOOR CEILING FAN WITH LIGHT: Includes 17 Watt LED Light, Dimmable",
            "DIMENSIONS: Diameter: 60\"; Height: 15.59\" (From Ceiling to Bottom of Fan Light, Includes 6\" Downrod); Weight 16.12lbs.",
            "FAN BLADES: 3 Outdoor Approved Mahogany ABS Blades (60\" Span / 0?? Blade Pitch); CFM: 4063",
            "FAN CONTROL: Includes 3 Fan Speed Hand-Held Remote Control with Reversing Function and Light Dimming",
            "DETAILS: Oiled Bronze Finish; ETL Approved for Wet Locations",
        ],
        customers: [
            {
                name: "noPRNDLhere",
                rating: 2,
                generalReview: "Cannot use a normal light switch for fan nor light!",
                detailedReview: [
                    "I am rating this thing pretty negatively in spite of much to like about it.",
                    "The major negative I have is the fact their is no way to install and connect this fan to use standard light switches to control the fan and light. I really wanted this and there is no indication on the product of this fact until you read the installation instructions.",
                    "Otherwise, I likely would have given 4 stars.",
                ]
            },
            {
                name: "Debra Davis",
                rating: 4,
                generalReview: "Nice looking fan",
                detailedReview: [
                    "I purchased the fan for my sons room. He loves it."
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
        color: "Aged Galvanized",
        brand: "Craftmade",
        dimension: "6 x 10 x 10 inches",
        material: "Metal, Glass, Plastic",
        controllerType: "Pull Chain",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "LIGHTING: This outdoor nautical ceiling fan with an non-dimmable integrated light kit includes one fluorescent 13 watt bulb that exudes a warm white down light.",
            "MATERIAL: This galvanized ceiling fan was designed with premium materials starting from the metal body to the halophane glass light cover at the bottom of the fan. The ABS all weather blades are made to withstand the challenges of outdoor weather. For additional style the housing and light shade were finished with a hammered texture surface.",
            "CONTROL: This galvanized ceiling fan for outdoors is controlled by a heavy duty 3 speed reversible AC motor providing exceptional air. The all weather blades are controlled by the 3 speed pull chain with an additional pull chain for lighting.",
            "DIMENSIONS: Hanging 21.24\" from the ceiling to be bottom of the fan and 14.06\" from the ceiling to the blades with the included 6\" downrod this metal ceiling fan carries a weight of 21.89 pounds and has a canopy base diameter of 5.15\". This fan has a blade sweep diameter of 52\" and a blade pitch of 12\".",
            "SPECIFICATIONS: Providing the options of being installed on a flat or vaulted ceiling this dual mount ceiling fan can be installed on an angle no greater than 21 degrees. This wet rated ceiling fan is built with a heavy duty 3 speed reversible motor measuring at 172x17 mm and produces 5,409 CFM. UL certified.",
        ],
        customers: [
            {
                name: "PRBC",
                rating: 4,
                generalReview: " Nice fan. Too bad it was packed damaged, but it was fairly easy to fix.",
                detailedReview: [
                    "This is my 5th recent Craftmade purchase and this is getting 4 stars for only one reason, The globe that holds the light was bent. Since there was no damage to the very solid packaging, someone had to have put the damaged piece in the box. Fortunately, the installer was able to bend it back. I want sure what the color would be--sort a a medium dark gray some of the center parts hammered. There are lines of sorts up the blades."
                ]
            },
            {
                name: "diamond mind",
                rating: 5,
                generalReview: "Looks Even Better Than The Pic!",
                detailedReview: [
                    "This is an awesome looking fan! Nice soft light."
                ]
            },
            {
                name: "Jennifer Saeta",
                rating: 4,
                generalReview: " Beautiful fan but doesn't have a remote and I have ...",
                detailedReview: [
                    "Beautiful fan but doesn't have a remote and I have the same complaint about the packaging showing the wrong color fan. Open your box before you automatically ship back."
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
        color: "Brushed Nickel",
        brand: "Kichler",
        dimension: "1 x 11.75 x 21 inches",
        material: "Metal, Glass",
        controllerType: null,
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [

        ],
        customers: [
            {
                name: "Christopher Bomicino",
                rating: 4,
                generalReview: "Buy it for it's looks, don't expect a ceiling fan.",
                detailedReview: [
                    "This fan is all about the style. If your expecting to move large amounts of air in a large room this is NOT the fan for you.",
                    "Read several reviews about how disappointing the air movement is with this fan. Again, you are not buying this fan because you want to move air, you are buying it for its aesthetics.",
                    "Overall I like the fan, it works, the blades turn, the light comes on. It's a small fan so only would work in smaller rooms. Don't try to use this in a large room, it would look absolutely silly in a large room. Air movement is enough, for a small room, good enough. Again, don't buy this if you want to move a ton of air, not the fan for you.",
                    "Blades are plastic, wasn't expecting that but cie la vie. Otherwise installs like any other fan, not rocket science for sure.",
                ]
            },
            {
                name: "MT",
                rating: 5,
                generalReview: " Very nice fan and nice looking",
                detailedReview: [
                    "This fan looks very nice and produces a very nice breeze. The lights dim and there are 3 fan speeds. Both of which I love. I bought the patio fan for my kitchen, as the only difference between the in door and the patio fan, is that the patio fan is more sturdy and tolerates moisture. The price of the patio was more reasonable, and affordable for us, as we needed 2.",
                ]
            },
            {
                name: "Carlene Lind-Baker",
                rating: 5,
                generalReview: "Great Fan!",
                detailedReview: [
                    "This is a great fan. I did have an electrician install it as it was going over my so-called island. I did have another person put the fan together but unfortunately when the electrician tried to install it would not work and he could not take the fan light off to see what was the issue. The motor would start up ok then it would freeze. So I took the fan to an authorized dealer to see if they could get the light off but even they could not. So I returned it and bought the exact same fan again and the new replacement which was put together by the electrician worked like a charm with no issues. I like the fan because it does not move my recipe papers or recipe book pages. The light is also very good and bright. I would definitely recommend this product.",
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
        color: "Distressed Black",
        brand: "Kichler",
        dimension: "65 x 65 x 17 inches",
        material: "Steel",
        controllerType: null,
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "Finish: Distressed Black - Glass: Opal Etched",
            "Lamp Type: LED",
            "Material: Steel",
        ],
        customers: [
            {
                name: "gardenstate",
                rating: 5,
                generalReview: "Beautiful fan! NEW WALL CONTROLLER INSTRUCTIONS included !!!!!!!!",
                detailedReview: [
                    "Beautiful fan! Not easy to install due to its size and weight but the effort was worth it. So far it is quiet and the breeze in my living room feels great!",
                    "Since my fan seemed to have an odd startup sequence, I contacted the manufacturer and learned that they have revised their wall controller instructions from the installation guide-- We need to have the power button engaged ALL of the time now for safe operation/longevity of the DC motor/controller",
                ]
            },
            {
                name: "Dave",
                rating: 5,
                generalReview: "I had a problem twith Fan not running",
                detailedReview: "I had a problem with the fan not working. I did not want to disassemble and take it down to ship for replacement 14 ft up in the air and 85\" fan. So I Call Kichler tech support told them what the problem was, they verified the problem over the phone, Sent out a new DC drive control board. In the process of installing new board found out the manufacture assembly had pinch the three wire to the DC motor, which cause the drive board not to work. Installed new board every thing is works fine."
            },
            {
                name: "\tPeter R.",
                rating: 5,
                generalReview: "Beautiful fan, love ours.",
                detailedReview: [
                    "Fan is beautiful. Only wish I had gone with the bigger one. Make sure and get electrician, because wiring it is not for the inexperienced.",
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
        color: "Satin Black",
        brand: "Kichler",
        dimension: "1 x 52 x 15 inches",
        material: "Steel",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Kichler fits any lighting needs",
            "Variety of indoor lights, accessories and landscape lighting products",
            "Made In Ching Choong",
        ],
        customers: [
            {
                name: "steve Linger",
                rating: 5,
                generalReview: "Very nice fan",
                detailedReview: [
                    "Love the look, had it professionally installed, very clean and simple, great brand",
                ]
            },
            {
                name: "Dot R",
                rating: 5,
                generalReview: "Awesome addition",
                detailedReview: [
                    "What a unique fan. Modern and perfect for my loft. Priced just right",
                ]
            },
            {
                name: "Stephanie",
                rating: 2,
                generalReview: "Know what you are buying",
                detailedReview: [
                    "This is not the best quality. The bad, blades are plastic, look ok, but for $199, dollars the price should reflect a upper level fan. The install was difficult, the remote transmitter has to fit in the canopy, VERY tight fit even with placing the wires up in the wiring box. In order to test the fan operation the switch housing has to be installed. Does not say that anywhere in the instructions. Lastly, the LED light did not work. Tested the electricity down to the LED, all looked fine but the light would not work. Looked at the fan companie’s warranty, that basically says, if there is a defective part, you have to send it back to the dealer. So, I got to put the fan all together, then take it apart, re-box it, and take it back to UPS. Waste of time. I can’t in good conscience say that this is a good buy for the money. I could get a whole lot more fan for the money. That being said, I was willing to pay even more for the right fan. I liked the look of the fan, but will have to reconsider what my next purchase after having to return this one.",
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
        color: "Brushed Nickel",
        brand: "Kichler",
        dimension: "13 x 12.5 x 10.5 inches",
        material: "Crs",
        controllerType: null,
        finishType: "Nickel",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "15 in H x 30 in W; 14.8 lb",
            "Light kit and remote control compatible",
            "Brushed Nickel finish",
            "Available in Brushed Nickel, Oil Brushed Bronze, White, Adobe Cream, Brushed Stainless Steel, and Satin Natural White finishes",
            "Suitable for damp locations",
        ],
        customers: [
            {
                name: "FosterBoy",
                rating: 3,
                generalReview: "Impressive fit and finish -couldn't balance for zero wobble",
                detailedReview: [
                    "I have installed every imaginable fan design from A to Z and I really wanted to enjoy this fan. Unboxing was like \"this is a really nice fan and the manufacturing is much better than average\". Fit and finish of all the parts was impressive. It looked great installed on the new patio -used a heavy duty mounting box and the included downrod. First run had wobble on all three speeds. Used the balance kit per the instructions to no avail -the balance clip had zero positive change on the wobble and only worsened the condition no matter the position or blade placement. So here's the bottom line. Ceiling fans are no picnic to install -the next time I open a fan box and fins a balance kit, I'll return it immediately. There are manufactures that have addressed this ridiculous issue correctly. I'll be buying from them and live with the fact that they're not as attractive as Kichler.",
                ]
            },
            {
                name: "AS",
                rating: 2,
                generalReview: "Gap at Ceiling and Canopy is not adjustable.",
                detailedReview: [
                    "While I liked some aspects of the fan the flush mount alternative is a poor design. This was installed on a porch. The ceiling thickness is 3/8\" and there is a gap that is not killed out using the trim ring. This may be okay for interior apps but this fan is rated for damp conditions ... why we bought it. The canopy is fixed (support screws on each side). Hmmm, get out the caulking. You should not have to do that. Installed many fans and thought we'd try a different brand. Will switch back. Poor product and customer service. Tried accessing customer service on Kichler.com. Looks like you need to call your dealer first and they will give you the phone number if needed. A big run around and don't think Amazon would be doing that😁. Over the time limit for a return otherwise would definitely return it",
                ]
            },
            {
                name: "Timothy C.",
                rating: 5,
                generalReview: "Very Nice Small, Modern Fan & Easy To Clean",
                detailedReview: [
                    "We purchased this small fan for our kitchen. It was a bit pricey for the size and simplicity of it especially for not having a remote.",
                    "However, we needed simple and small but modern as to not take away from nor overwhelm our newly remodeled space. I love that the blades are a high gloss which matches our cabinets and will be easy to clean and not stain. The white color is not as pure, bright white as I had hoped for but it didn’t matter at all after being hung and still matches well. Btw, the hubs hung it up by himself with no issues reported. So, no stars deducted for price nor color. I think it’s a very well built fan and was the best choice for our needs."
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
        color: "Brushed Steel-koa Blades",
        brand: "Monte Carlo",
        dimension: "60 x 60 x 14 inches",
        material: "Metal",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "MAVERICK OUTDOOR CEILING FAN WITH LIGHT: 18 Watt Integrated LED Light Kit, Dimmable (3000K, 1100 Lumens, 90 CRI)",
            "DIMENSIONS: Diameter: 60\"; Height: 13.8\" (From Ceiling to Bottom of Fan Light, Includes 6\" Downrod); Weight 12.8lbs.",
            "FAN BLADES: 3 Outdoor Approved Koa Blades (60\" Span / 13° Blade Pitch); CFM: 5365",
            "FAN CONTROL: Includes 6 Fan Speed Hand-Held Remote Control with Reversing Function and Light Dimming",
            "INSTALLATION: Installable on Flat Ceiling with Included Hardware and on Sloped Ceilings up to 15° with Vaulted Canopy Included; DETAILS: Brushed Steel Finish; CUL Approved for DAMP Locations; Premium Power 85 X 28 mm DC motor for Quiet Operation",
        ],
        customers: [
            {
                name: "Brian M",
                rating: 2,
                generalReview: "I hate the light",
                detailedReview: [
                    "I have a few things I dislike about this fan. If you have a fan that uses one switch for a light and one for a fan, the control unit forces you to use just one switch to operate both, then you have to use the remote if you want one or the other on. Also the light is NOT dimmable because of this, but the description says it is. There is no dimming function on the remote.This is extremely annoying because the light is ridiculously bright as you can see from the picture. If you hard wired the light to your wall switch and installed a dimmer, that might work, but the remote would no longer work for the light. Also mine appears to have been a returned item, not new. It was not damaged but there were open packages inside and the wiring for the control unit was very frayed. Very disappointed for what's supposed to be a high end ceiling fan",
                ]
            },
            {
                name: "Jasper Johns",
                rating: 5,
                generalReview: "If you’re all about the looks then you’ll be happy.",
                detailedReview: [
                    "Love the look. So that kinda supersedes the less great aspects. The remote isn’t intuitive and it doesn’t come with a wall switch. But you can mount the remote on the wall in a little holster. Required extra time with our electrician to rig it up with a wall switch just for the light. It’s very quiet which is another reason I love it. I have 3 other ceiling fans that are better made with more features with remote and wall switch that cost half as much. But those don’t look this cool. Hope this review is helpful to you.",
                ]
            },
            {
                name: "Nate R",
                rating: 5,
                generalReview: "A great ceiling fan",
                detailedReview: [
                    "The fan was easy to install. When the fan is running, it's completely silent. The only noise is the air being pushed and that's only at high speed. The light is bright as well.",
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
        color: "Brushed Steel-silver Blades",
        brand: "Monte Carlo",
        dimension: "72 x 72 x 14 inches",
        material: "Steel",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "PRAIRIE OUTDOOR CEILING FAN WITH LIGHT: 15 LED Integrated Array, Dimmable (740 Lumens)",
            "DIMENSIONS: Diameter: 72\"; Height: 14.14\" (From Ceiling to Bottom of Fan Light, Includes 6\" Downrod); Weight 26.9lbs.",
            "Specially designed for patio and damp locations (no direct water contact).",
            "FAN BLADES: 14 Outdoor Approved Silver Blades (72\" Span / 14° Blade Pitch); CFM: 5326",
            "FAN CONTROL: Includes 6 Fan Speed Hand-Held Remote Control with Reversing Function and Light Dimming",
            "DETAILS: Brushed Steel Finish; ETL Approved for DAMP Locations; Complies with TSCA Title VI; Premium Power Energy-Efficient 125 X 20 mm DC Motor and Precision Balanced Blades for Quiet and Wobble-Free Operation",
        ],
        customers: [
            {
                name: "J. R. Murphy",
                rating: 4,
                generalReview: "Unique Industrial look.",
                detailedReview: [
                    "I love the look of this fan. I have three of them, a 52” and two 62” fans. I enjoy it’s unique industrial look. It has a remote which is nice. The fan is well made and sturdy. The only drawback is that I wish the light was brighter especially on the bigger size. In one room I have only the fan as the only source if over head light and I wish the room was a bit brighter. That being said I still would have chosen this fan over others because if it’s unique look. It really makes a statement.",
                ]
            },
            {
                name: "Amanda",
                rating: 5,
                generalReview: "Oh it’s beautiful.",
                detailedReview: [
                    "Oh it’s beautiful. Expensive, but totally worth it. I have 12’ Ceilings and a large room, this fan is perfect. No wobble, no sound, remote is all shiny and pre-programmed (no work involved). I put all the blades on except one before lifting up into ceiling bracket - had to leave one off to be able to reach the wires for attachment - helped a lot. Much easier to install than the Hunter fans I have also just put up. Only issue: my fan came shipped from 1StopLighting, the box was beaten up and obviously pre-opened and re-sealed. All the parts were there, but for such an expensive purchase I expected a pristine product.",
                ]
            },
            {
                name: "\tAmazon Customer",
                rating: 5,
                generalReview: "Love!",
                detailedReview: [
                    "We love this fan and have no complaints. I can’t speak to installation we had our electricians do it when we built.",
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
        dimension: "60 x 60 x 13.9 inches",
        material: "Wood",
        controllerType: null,
        finishType: "Bronze",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "CYCLONE OUTDOOR CEILING FAN DIMENSIONS: Diameter: 60\"; Height: 19.3\" (From Ceiling to Bottom of Fan Housing, Includes 4\" Downrod); Weight 31.31lbs",
            "FAN BLADES: 5 Outdoor Approved Matte Black Blades (60\" Span / 13° Blade Pitch); CFM: 7857",
            "FAN CONTROL: Includes 3-Speed Pull Chain; Optional NEO Remote (Part Number: MCRC1) and Wall Control (Part Number: MCRC3) Sold Separately",
            "INSTALLATION: Installable on Flat Ceiling with Included Hardware; UL & ULC Approved for WET Locations",
            "DETAILS: Matte Black Finish; Premium Power Triple Capacitor 212 x 25 mm Torque-Induction Motor for Quiet Operation",
        ],
        customers: [
            {
                name: "reggers",
                rating: 4,
                generalReview: "Great fan",
                detailedReview: [
                    "I've had this fan for the past 2 years and it's great. I wanted something with a wide radius as well as suitable for a \"wet\" location. I have it installed outside on a screened in porch and I'm sitting under the fan right now on a 95 degree day and it's providing a gentle cool breeze. I also purchased a light kit which provides a nice ambient light on summer evenings.",
                    "I don't understand the other comments regarding the lack of air flow and minimal RPMs. Also I can't comment on installation issues as my contractor installed it, but in terms of usability and design, I'm quite happy.",
                ]
            },
            {
                name: "Plano Man",
                rating: 1,
                generalReview: "Except for Atmosphere, this outdoor fan does NOTHING!!",
                detailedReview: [
                    "I bought this fan to put outside at our Boat slip at the marina. We had a Hampton Bay 48 inch outdoor fan from Home Depot up but wanted a wider radius. The 48 inch fan had great RPM's and a great wind/breeze maker but was just not wide enough to cover our deck at the lake. So we opted for this 60 inch outdoor fan. We went to install it, on a 4 foot down pole, like the Hampton Bay 48 inch and found, unlike all other standard fans, it takes a 1/2 inch rod instead of the industry standard 3/8's inch rod. Well, they don't make one so we had to custom make one out of a 48 inch galvanized steel pole for plumbing. That worked fine.",
                    "However, once we had it installed, thats when we found the most disappointing thing. Unlike ALL ceiling fans we have owned for more than 25-30 years, this fan, ON HIGH, moved like most fans on low to medium. We thought we had something hooked up wrong, so we spend 2 hours taking it back down, analizing it and putting it back up to find it still moved slower on high than any other fan we have ever seen. It did not hardly move any air/wind outdoors, being it was an outdoor fan.",
                    "Once we got home from the lake, I looked up on the companies web site montecarlofans dot com, and found the RPM's for this fan are HORRIBLE."
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
        color: "Aged Pewter-light Grey Weathered Oak Blades",
        brand: "Monte Carlo",
        dimension: "60 x 60 x 14 inches",
        material: "Metal",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "ARMSTRONG OUTDOOR CEILING FAN WITH LIGHT: 15 Watt Integrated LED Light Kit, Dimmable (3000K, 725Lumens, 90 CRI)",
            "DIMENSIONS: Diameter: 60\"; Height: 14.1\" (From Ceiling to Bottom of Fan Light, Includes 6\" Downrod); Weight 14.6lbs.",
            "FAN BLADES: 3 Outdoor Approved Light Grey Weathered Oak Blades (60\" Span / 16° Blade Pitch); CFM: 5356",
            "FAN CONTROL: Includes 6 Fan Speed Hand-Held Remote Control with Reversing Function and Light Dimming",
            "INSTALLATION: Installable on Flat Ceiling with Included Hardware and on Sloped Ceilings up to 20° with Vaulted Canopy Included; DETAILS: Aged Pewter Finish; CUL Approved for DAMP Locations; Premium Power 125 X 20 mm DC motor for Quiet Operation",
        ],
        customers: [
            {
                name: "Alia",
                rating: 5,
                generalReview: "Modern farmhouse fan!",
                detailedReview: [
                    "I like the look of it, it’s not something you would find at Lowe’s or Home Depot. It replaced a 12 yr old hunter builders grade fan. It spins more air but the light is not as bright as the 4 bulbs ceiling fan we replaced. It has an LED light something that you would need to special order",
                    "Make sure to slide the light to on if you want the brightest, otherwise you could put it on dim. The second pic was on dim and the last one was at it brightest. The light is sufficient for bedroom light but I don’t recommend it for living room unless you have another source of light",
                    "Otherwise we like it and we are thinking to changing the light switch to the wall control switch, in case we misplaced the remote then we can change the speed of the fan from the wall",
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
        color: "Brushed Nickel",
        brand: "Casablanca",
        dimension: "54 x 54 x 10.98 inches",
        material: "Material: Other",
        controllerType: null,
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "Direct Drive motor provides unparalleled power, silent performance, and reliability over decades of daily use",
            "Reversible motor allows you to change the direction of your fan from downdraft mode during the summer to updraft mode during the winter",
            "5 Eastern Walnut / River Timber Reversible Veneer Exclusive blades included",
            "13 degree blade pitch optimized to ensure ideal air movement and peak performance",
            "3\" and 2\" downrods included to ensure proper distance from the ceiling and optimize air movement at your preferred blade height",
            "For indoor use only",
            "Includes New Universal Wall Control",
            "Casablanca's Comprehensive Warranty includes a lifetime motor warranty, one-year parts and electronics warranty, and 120-day in-home service",
        ],
        customers: [
            {
                name: "John Palmer",
                rating: 1,
                generalReview: "Disappointed",
                detailedReview: [
                    "Extremely difficult to install by licensed electrician-had to return several due to defects-expensive and should be more user-friendly",
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
        color: "Noble Bronze",
        brand: "Casablanca",
        dimension: "44 x 44 x 12.08 inches",
        material: "Plastic",
        controllerType: "Remote Control",
        finishType: null,
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Direct Drive motor provides unparalleled power, silent performance, and reliability over decades of daily use",
            "Reversible motor allows you to change the direction of your fan from downdraft mode during the summer to updraft mode during the winter",
            "3 Noble Bronze Plastic Exclusive blades included",
            "16 degree blade pitch optimized to ensure ideal air movement and peak performance",
            "4 inch and 2 inch down rods included to ensure proper distance from the ceiling and optimize air movement at your preferred blade height",
            "For indoor use only",
            "Includes Fan/Light Universal Handheld Remote Control",
            "Casablanca's Comprehensive Warranty includes a lifetime motor warranty, 1 year parts and electronics warranty, and 120 day in home service",
        ],
        customers: [
            {
                name: "Kevin",
                rating: 3,
                generalReview: "Disappointing!",
                detailedReview: [
                    "This fan looks great and is quiet. Unfortunately, the four speeds are much faster than we expected, having bought Casablanca ceiling fans in the past. We have this in our bedroom and the lowest speed is almost too fast being mounted above our bed. A slower speed would have been preferred. The three faster speeds are fast beyond any practical use! The remote control is handy but you have to manually reverse fan direction at the fan, not on the remote!"
                ]
            },
            {
                name: "Andrea",
                rating: 2,
                generalReview: "Broke in three months",
                detailedReview: [
                    "This fan functioned well for three months...just long enough for us to miss out on the product support window through Amazon. The receiver suddenly stopped working. We’ve double checked the connection and confirmed it’s our new fan that broke on us already."
                ]
            },
            {
                name: "mazzifer",
                rating: 3,
                generalReview: "Nice fan that is useless without the remote",
                detailedReview: [
                    "The fan itself is fine, it does the job and looks good. However, you can only operate it through the remote and the remote is a piece of junk. It stops working for minutes, hours, days. I've tried to figure out how to replace the battery, but it's designed in a way to make it extremely difficult to open and expose the battery. It's incredibly frustrating because I have a fan and light I cannot use. Am trying to get warranty support but the company has limited hours and I haven't been able to reach anyone.",
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
        color: "Brushed Nickel",
        brand: "Casablanca",
        dimension: "64 x 64 x 22.67 inches",
        material: "Plastic",
        controllerType: null,
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "CONTEMPORARY CEILING FAN: The modern Perseus fan comes with LED light covered by painted cased white glass that will keep home interior current and inspired; Measures 64 x 64 x 22.67 Inch",
            "MULTI-SPEED REVERSIBLE FAN MOTOR: Direct Drive motor delivers ultra-powerful airflow with quiet performance; Change the direction from downdraft mode during the summer to updraft mode during the winter",
            "LED LIGHT KIT: Energy-efficient dimmable LED light bulbs let you control the lighting and ambiance of the living space; The long lasting bulbs have longer lifespan than traditional bulbs",
            "WALL CONTROL: Turn the modern brushed nickel ceiling fan on/off and adjust the speed quickly and easily right from your wall switch",

        ],
        customers: [
            {
                name: "Mark E Day",
                rating: 5,
                generalReview: "Beautiful QUIET fan",
                detailedReview: [
                    "I've come to expect from Hunter/Casablanca great quality and quiet ceiling fans - the Perseus did not disappoint! It was simple install - great instructions are included. I love the new design to the wall mounted remote that allows a simple battery replacement. I have three other Casablanca's with wall remotes that I put in 2.5 years ago that have an older style wall remote that requires removing the decorative wall plate to change out the batteries. Those remotes and fans are still working fantastically - but I really like the ease to change a battery on the new wall remote included with the Perseus fan. Thanks and keep making GREAT quality products!",
                ]
            },
            {
                name: "Sharon Sawdon",
                rating: 5,
                generalReview: "Beautiful fan",
                detailedReview: [
                    "Beautiful, big fan. Works great. Our builder installed quickly so I don't think it was hard. We did purchase a longer pole. The one that came with it wasn't quite right. It was easy to order a matching one.",
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
        color: "Aged Bronze",
        brand: "Casablanca",
        dimension: "60 x 60 x 13.2 inches",
        material: "Wood",
        controllerType: "Pull Chain",
        finishType: "Bronze",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "CLASSIC CEILING FAN: The traditional Heathridge fan comes with antique blades that will keep your home interior current and inspired; Measures 60 x 60 x 13.02 Inch",
            "MULTI-SPEED REVERSIBLE FAN MOTOR: Direct Drive motor delivers ultra-powerful airflow with quiet performance; Change the direction from downdraft mode during the summer to updraft mode during the winter",
            "PULL CHAIN CONTROL: Turn the aged bronze ceiling fan on/off and adjust the speed quickly and easily with the pull chains",
            "ROOM PLACEMENT: Indoor/outdoor fan is height adjustable, via the included 3\" & 2\" downrods, to ensure proper distance from the ceiling and optimize air movement; Damp-rated for use in covered porches, patios, sunrooms, living room, and bedroom",
            "ROOM PLACEMENT: Indoor/outdoor weather proof ceiling fan is height adjustable, via the included 3\" & 2\" downrods, to ensure proper distance from the ceiling and optimize air movement; Wet-rated for areas exposed to moisture and humidity like porches, patios, sunrooms, living room, and bedroom",
        ],
        customers: [
            {
                name: "RMS",
                rating: 5,
                generalReview: "A well-designed and well-made fan--with great follow-up service from the company",
                detailedReview: [
                    "Every Casablanca fan we have installed in our house has performed superbly. This one is no different. We look forward to many years of reliable service from it.",
                    "Unfortunately, a part broke about six months after we installed the fan. Fortunately, Hunter/Casablanca provided exceptional customer service. I emailed the company explaining the problem and providing a picture. Within a couple of hours, they responded with an offer to send me an entirely new fan, since the broken part was backordered. The fan arrived a few days later. I'm sure that the broken part was a fluke--we have other Casablanca fans that have worked flawlessly for decades. Receiving such wonderful follow up service just reinforces my high respect for this company."
                ]
            },
            {
                name: "shoppergirl",
                rating: 5,
                generalReview: "Purchased and installed this outdoor fan 1 yr ago and ...",
                detailedReview: [
                    "Purchased and installed this outdoor fan 1 yr ago and it's still working perfectly. It's on my pergola cross beams and not protected from rain or snow. The finish on the blades and metal casement show no signs of wear.",
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
        color: "Noir",
        brand: "Quorum",
        dimension: null,
        material: "Metal",
        controllerType: "Remote Control",
        finishType: "Brushed",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "60``Patio Fan from the Windmill collection",
        ],
        customers: [
            {
                name: "MarBar",
                rating: 5,
                generalReview: "Great product and great looks!",
                detailedReview: [
                    "So many compliments on this fan! Not only for the looks...but the efficiency. It’s awesome!"
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
        color: "Oiled Bronze",
        brand: "Quorum",
        dimension: null,
        material: "Metal, Glass",
        controllerType: null,
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "Family: galveston",
            "Style: contemporary modern",
            "Category: fans",
            "Height: 18.46 length: 12 Width: 6",
        ],
        customers: [
            {
                name: "Songoku",
                rating: 5,
                generalReview: "Great product and great looks!",
                detailedReview: [
                    "So many compliments on this fan! Not only for the looks...but the efficiency. It’s awesome!"
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
        dimension: "12 x 12 x 16.46 inches",
        material: "Metal",
        controllerType: null,
        finishType: "Black",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Family: galveston",
            "Style: contemporary modern",
            "Category: fans",
            "Height: 18.46 length: 12 Width: 6",
        ],
        customers: [
            {
                name: "Saitama",
                rating: 5,
                generalReview: "Great product and great looks!",
                detailedReview: [
                    "So many compliments on this fan! Not only for the looks...but the efficiency. It’s awesome!"
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