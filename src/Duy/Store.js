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
            "Kichler fits any lighting needs",
            "Variety of indoor lights, accessories and landscape lighting products",
            "Made In China",
            "Package Dimension : 22.86 centimeters L x 30.48 centimeters W x 57.15 centimeters H"
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
                detailedReview: [
                    "I had a problem with the fan not working. I did not want to disassemble and take it down to ship for replacement 14 ft up in the air and 85\" fan. So I Call Kichler tech support told them what the problem was, they verified the problem over the phone, Sent out a new DC drive control board. In the process of installing new board found out the manufacture assembly had pinch the three wire to the DC motor, which cause the drive board not to work. Installed new board every thing is works fine."
                ]
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
        color: "Vintage Gold Leaf",
        brand: "Quorum",
        dimension: "12 x 6 x 13.5 inches",
        material: "Wood",
        controllerType: null,
        finishType: "Finished",
        type: "Ceiling Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Family: chateaux",
            "Style: traditional",
            "Category: accessories",
            "Height: 13.5 length: 12 Width: 6",
        ],
        customers: [
            {
                name: "Irma",
                rating: 5,
                generalReview: " Elegant!",
                detailedReview: [
                    "Installed in our outdoor patio and it looks amazing. Definitely makes a statement vs installing other fans. Love it!",
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
        color: "Silver 2551",
        brand: "Lasko",
        dimension: "13 x 13 x 42.5 inches",
        material: "Plastic",
        controllerType: "Electronic controls",
        finishType: "Matte",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "BEAT THE HEAT –If you live in the heat with no central air, or your window AC units do a poor job of moving air around your whole house or apartment, this stand up fan creates excellent air flow making you feel cooler. Comes with built-in carry handle, optional oscillation and a handy remote for when you don’t feel like getting up to change the settings.",
            "VERY QUIET – Powered by 3 speed settings H/M/L, fan creates a powerful breeze, but even on H, you can still hear the TV. If you need white noise to sleep, this fan is perfectly sized to aim over a high bed and creates a soothing purr that drowns out bedroom noises making it easy to fall asleep. Energy efficient timer can be set from 0. 5 to 7. 5 hours.",
            "FRESHER AIR – The built-in Ionizer disperses millions of negative ions into the air that bond with positively charged ions which includes things like dust, bacteria, pollen, smoke and other allergens. Once the bond is formed, the particles become heavier and fall to the ground. As the negative ion levels grow in the room, the air feels naturally fresher.",
            "A REAL SPACE SAVER – Standing 42. 5” tall with a small 13” x 13” footprint, the sleek, vertical design optimizes floor space letting you to put the tower fan in places where pedestal & box fans won’t fit, without sacrificing air circulation, comfort or style. Ideal for the dorm, kitchen, living room, RV and home office.",
            "TRUSTED FOR GENERATIONS – Lasko has been making quality household products for over 100 years. Lasko Wind Curve tower fans are ETL Listed and come with our patented Blue Plug safety fuse technology making them a safe choice for a cooling fresh air breeze when it’s hot and humid outdoors.",
        ],
        customers: [
            {
                name: "Jacob",
                rating: 5,
                generalReview: "Decked in the face by that sweet sweet breeze",
                detailedReview: [
                    "Let ME tell you about this fan. It's easy, it's breezy and it ain't sleezy. Have you SEEN that woodgrain? Hold me back, I'm gonna get emotional. You're paying $55 here to voucher slip out of a damn heat stroke. The world's on fire, the globe is warming, but you're gonna be smart, right? With this (surprisingly tall) modern work of art you can fight Trump's dismissal of the EPA by setting one of these bad boys up in every city hall in your state. Not a humanitarian? Do what I do, and place it right by your head at night and get absolutely drilled in the face by that cool, angelic wind current. And don't even think about touching it with your hands, you got a REMOTE for that. I don't care if it's an elbows length away, you're gonna feel cooler than ever controlling it with infrared, baby. I gave this a 4 out of 5 in versatility to encourage Alexa integration.",
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
        color: "Space Grey",
        brand: "Lasko",
        dimension: "14 x 14 x 52.7 inches",
        material: "Plastic",
        controllerType: "Remote Control",
        finishType: null,
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "3 Quiet, Energy-Efficient Speeds - makes this fan ideal for the bedroom, living room, kitchen, or home office. The quiet yet powerful fan provides a cooling breeze throughout the room. Small and compact this fan is ideal for tight places where space is minimal",
            "Widespread Oscillation and Directional Louvers - allows you to direct airflow where you need. Turn on oscillation and the fan will gentle go side to side distributing air. Direct air up or down by using the directional louvers or adjusting the fans height.",
            "Wireless Remote Control and LED Display - are two great features that make this fan easy to control. The remote allows you adjust the fan speed, timer, oscillation, or sleep mode from a distance. While the fan's LED display lets you know which settings are selected.",
            "Built-in Timer - automatically shuts the fan off after the selected time. Choose from 1/2 hour to 7.5 hours in 1/2 hour increments. Use the one touch Sleep Mode and the timer is automatically set to run for 6 hours.",
            "Easy to Follow Instructions - allows you to take the fan out of the box and assemble it in minutes. Simply assemble the base, pedestal, and attach the fan and you're ready to enjoy a cooling breeze.",
        ],
        customers: [
            {
                name: "Luis Figueroa",
                rating: 5,
                generalReview: "Keep it clean!....with the can of air for electronics.",
                detailedReview: [
                    "Love! This fan six or seven years ago I bought the early model tower fan and Boy did we get use out of it, we would leave it on when we left in the morning for the dog on hot days and use it at nights to help the A/C move the air around, very good fan and it's adjustable to your desired height, second one in seven tough years of use."
                ]
            },
            {
                name: "TheDeLay",
                rating: 5,
                generalReview: "Quiet, Timer functions, Sturdy.",
                detailedReview: [
                    "I am very sensitive to heat and need this fan to help me sleep. It has a very low/quiet setting that works well. I do not like it pointed directly at my face, but at a distance of about 3,' it is perfect. It is much quieter than my white noise generator, which I still need even though this is running. Obviously, the higher the settings, the louder it is.",
                    "I love the sleep timer. It is nice that it will shut off on its own. I do not use the circulate function. It does have lights on the top that are easy to see, but they do not seem too bright at night to me. They might bother others that are sensitive to light in a dark room.",
                    "It's the right height to cool the top of my bed. It can go some higher, but I don't need it. It does beep when you push any button, which can annoy anyone nearby trying to sleep. I'm happy with it.",
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
        price: 77.01,
        listPrice: 84.99,
        color: "Silver Black",
        brand: "Lasko",
        dimension: "8.8 x 11.9 x 35.03 inches",
        material: "Plastic",
        controllerType: "Electronic controls",
        finishType: "Painted",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "25% MORE AIR VELOCITY – This maximum performance high velocity fan combines the sleek streamlined body of a tower fan with the high-powered motor of an air blower resulting in 25% more air velocity than traditional tower fans. If you live where it’s hot, this fan creates excellent air flow to help you beat the heat.",
            "WHITE NOISE FOR SLEEPING – This fan, powered by 3 powerful speeds, gets louder as the speed setting increases (it is high velocity, after all). But you might find the lowest setting creates just the right amount of white noise for you to get some rest. The lowest setting is also quiet enough to watch TV, yet plenty powerful enough to keep the air moving.",
            "EASY TO USE – Comes fully assembled. Electronic control features are a breeze to operate. The handy remote control lets you operate the speed, optional oscillation and energy-efficient 7-hr timer without ever having to get up. Easy-grip handle makes it easy to move the fan to wherever relief is needed.",
            "SPACE SAVING DESIGN – Standing 35” tall with a small 9” x 12” footprint, the sleek, vertical design optimizes floor space letting you to put this stand-up fan in places where large pedestal & box fans won’t fit, without sacrificing air circulation, comfort or style. Ideal for the dorm, bedroom, kitchen, living room, RV and home office.",
            "TRUSTED FOR GENERATIONS – Lasko has been making quality household products for over 100 years. Lasko fans are ETL Listed and come with our patented Blue Plug safety fuse technology, making them a safe choice for a cooling breeze when it’s hot and humid outdoors.",
        ],
        customers: [
            {
                name: "Chris Tamez",
                rating: 5,
                generalReview: "Are You Sick Of Being Made Fun Of?",
                detailedReview: [
                    "If you're looking for a butt-kicking, tornado starting wind monster, you've found it. This beast can roar like a white machine lion, and will clear everything in it's path. One of the best fans, period.",
                ]
            },
            {
                name: "HSartmama3",
                rating: 5,
                generalReview: "So far, so good",
                detailedReview: [
                    "I bought two of these, one for a basement and one for a bathroom. These are POWERFUL fans, especially for their size. One potential issue with the design is that they, unlike a typical fan, would be difficult or impossible to clean internally. (To eliminate that issue, I purchased some 3M Filtrete HEPA cloth and cut round \"filters\" to cover each of the intake suctions. When it's time to clean, I'll simply cut new filters to fit. Since each fan is in a location not frequented by guests, the white filters stuck on each side of the base are irrelevant to me. The \"filters\" can be easily removed.) I'll update ratings if necessary.",
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
        color: "Blackwood T42905",
        brand: "Lasko",
        dimension: "13 x 13 x 42 inches",
        material: "Plastic",
        controllerType: "App Contro",
        finishType: "Painted",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "BLUETOOTH ENABLED – Control your tower fan using your smartphone and never worry about losing the fan remote again. Setting up and using the Bluetooth function on your fan is quick and easy. Simply download the Lasko Connect app from the App Store or Google Play to your mobile device and follow the step-by-step instructions.",
            "BEAT THE HEAT – If you live in the heat with no central air or window AC units do that a poor job of moving air around your whole house or apartment, this high-reaching stand fan with 3 speeds and optional oscillation provides maximum air delivery and full-room coverage to help you beat the heat.",
            "VERY QUIET – Fan produces a powerful breeze, but even on H, you can still hear the TV. Creates just the right amount of white noise for sleeping so you can get some rest. Easy to assemble and operate. Built-in carry handle makes it easy to move from bedroom to living room. Electric timer option automatically turns the fan off after a period of up to 7 hours of use.",
            "A REAL SPACE SAVER – Standing 42” tall with a small 13” x 13” footprint, the vertical design optimizes floor space letting you put the fan in places where large pedestal & box fans won’t fit. Sophisticated profile blends seamlessly into your home décor without sacrificing air circulation, comfort or style. Ideal for the dorm, kitchen, home office and RV.",
            "TRUSTED FOR GENERATIONS – Lasko has been making quality household products for over 100 years. Lasko fans are ETL Listed and come with our patented Blue Plug safety fuse technology, making them a prime choice for a cooling breeze when it’s hot and humid outdoors.",
            "Included Components: Fan Body, Fan Base",
        ],
        customers: [
            {
                name: "Donald Trump",
                rating: 5,
                generalReview: "Happy customer",
                detailedReview: [
                    "This is a nice upgrade from the really cheap stand fans. Looks nice in the living. Old fan was the cheap stand up fan with the cross or x feet and flimsy metal that bends way too easy. This new fan is mostly plastic but thick enough. I like it doesn't take up as much floor space. It stands tall enough but you won't be able to raise it higher if you have a need for that. I don't. I got the bluetooth version. The app works great. All buttons work from the app. Has a sleep mode. The app also allows you to add multiple fans. Nice feature. It it on the quiet side as others have said. This is also convenient for the living room while watching tv. Not the cheapest but definitely not the most expensive. I think the value for the money is spot on."
                ]
            },
            {
                name: "Anthony",
                rating: 4,
                generalReview: "Blows lots of air / Wished it Oscillated a bit more",
                detailedReview: [
                    "Wow! Looks nice and it blows a lot of air compared to my previous fan and the taotronics fan. Bluetooth is pretty neat. Only con I had with this is that mine has a rattle. It seems like its a BUILD issue where the frame of the fan, its not properly screwed tightly or glued. If I apply pressure to the top of the fan slightly, the rattle stops. If I let go, it rattles. Funny, I thought about tapping the back of the fan. And to my surprise, it stopped rattling. Once I turn it off for a few hours it'll rattle agin or if I move it. Either I got a defective one or it's like that for all of them. Requested amazon for an advance replacement. Will update review to 4 if the replacement fixes it.",
                    "Now, I only gave it a 3, a 4 if the rattling stops. For a 5, the last con is that the angle that it oscillates is limited. Imagine your fingers and hand was slammed on and then you tried to make a V with your index and middle finger. Yeah, its like a 30-45 degree angle lol.",
                    "EDIT: After receiving a relacement, the rattle from the frame is gone! Tested both together and it looks like it's going up to a 4. To add, I wish the oscillating angle was a little more, but other than that, solid fan. Check your fan for a frame rattle on the lowest speed. You can also put a little pressure on the top of the fan to see if the sound changes.",
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
        color: null,
        brand: "Honeywell",
        dimension: "8.4 x 10.9 x 33.1 inches",
        material: null,
        controllerType: "Remote Control",
        finishType: "Painted",
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "DIGITAL TOWER FAN: The Honeywell 3 speed digital tower fan with ionizer exudes the feel of a spring breeze throughout your home; It features a programmable thermostat, 3 speeds, timer shut off function, an electronic LCD display & easy to use controls",
            "QUIET COOLING: This tower fan's oscillating action allows for greater air distribution, and a remote control with built in flashlight allows convenient control from your favorite spot; A washable air filter helps remove dust",
            "INCREASE YOUR COMFORT: Using fans for air circulation in your home can help increase your comfort, and help reduce energy costs as well; Honeywell carries a range of tower fans, floor fans, and oscillating fans find one for every room in the house",
            "HONEYWELL FANS: The right fan helps cool you off & improves airflow in your room or home; Give your air conditioner & wallet a break by using fans to help reduce your energy consumption & costs; Honeywell carries a variety of fans to meet your home needs",
            "HONEYWELL QUALITY: Help improve air circulation & energy savings in your home, bedroom or office with Honeywell fans."
        ],
        customers: [
            {
                name: "kkgrandmarais",
                rating: 5,
                generalReview: "Reliable fan, no ionizer",
                detailedReview: [
                    "This is my second Fresh Breeze Tower Fan from Honeywell. I purchased the first one nearly 10 years ago, and wanted a second one for another room. I thought that I might as well get this one, which was advertised as the newest model. They are identical in appearance and sound. However, unlike the previous model, this one does not have an ionizer.",
                    "I still love this fan, plus the new model has a couple improvements over the old: 1) Easier assembly, especially regarding threading the power cord through a particular part of the base to ensure that the fan sits flat. 2) The flashlight on the remote isn't so blinding. 3) There aren't lights on the front of the fan while it is on, which helps keep a dark environment dark.",
                ]
            },
            {
                name: "Mel's PC Repair And More",
                rating: 5,
                generalReview: "Awesome fan!!!",
                detailedReview: [
                    "This one fan cooled off our second floor apartment, about 950 sq ft on medium setting when the temp was set to it's lowest setting(60 degrees). One side of the apartment faces the sun for the majority of the day (the hottest part) and this fan kept us at about 70 in 80-85 degree weather."
                ]
            },
            {
                name: ". Thrane",
                rating: 5,
                generalReview: "This is a great fan",
                detailedReview: [
                    "Let me start by saying this is the 4th fan of this model that i've purchased over the years. It's reasonably quiet and it oscillates quite far (close to 180 degrees) so it can cover a room. I like the cleanable filter. Fans that I have purchased without a filter get noisy and/or stop working after one summer season. This fan keeps working for several years if you clean the filter when it gets dirty. I've stopped buying other fans... this one is the best!",
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
        color: "White",
        brand: "Honeywell",
        dimension: "10 x 10 x 32.83 inches",
        material: null,
        controllerType: "Remote Control",
        finishType: null,
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "Oscillating remote control tower fan: The Honeywell Quietset tower fan provides powerful whole room cooling with quiet operation, oscillation and automatic shut off timer; 5 levels of sound and power settings let you choose what’s best for your environment",
            "Quiet cooling: Honeywell's QuietSet line of fans are quiet and powerful, so you'll feel the fan's cooling power with less sound",
            "Increase your comfort; Using fans for air circulation in your home can help Increase your comfort, and help reduce energy costs as well; Honeywell carries a range of tower fans, floor fans, and oscillating fans find one for every room in the house",
            "Honeywell fans: The right fan helps cool you off and improves airflow in your room or home; Give your air conditioner and wallet a break by using fans to help reduce your energy consumption and costs; Honeywell carries a variety of fans to meet your home needs",
            "Honeywell quality: Help improve air circulation and energy savings in your home, bedroom or office with Honeywell fans; 8 speed settings to adjust to your personal sound and cooling power preferences",
        ],
        customers: [
            {
                name: "Jenos",
                rating: 5,
                generalReview: "Great fan",
                detailedReview: [
                    "One of the best investments I made this year. The fan is very quite so almost forget it’s on. It comes with a remote and can set a timer per hour to turn off. Highly recommended.",
                ]
            },
            {
                name: "Bang",
                rating: 5,
                generalReview: "Super quiet & powerful",
                detailedReview: [
                    "I can't believe how quiet this fan is. I keep it on the \"calm\" setting but it's surprisingly powerful. I live in Texas and i get very hot at night. My bedroom is always uncomfortably warm. I placed it facing the foot of my bed last night and I actually had to get a second blanket! I'm really happy with this purchase."
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
        material: null,
        controllerType: "Button Control",
        finishType: "Painted",
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "2-in-1 turbo power: Feel the big cooling blast of the turbo force tower fan from 40 feet away. This high-powered fan features 2 independently controlled fans with 6 speeds & 15 different comfort settings.",
            "Cross flow design: This tower fan combines the high-velocity air output of a tower fan, the versatility of a 90° pivoting top fan & the flexibility of wide area oscillation, into a unique cross-flow design that lets you control your comfort.",
            "Quiet operation: The aerodynamic fan blades with front air intake provide quiet, powerful whole-room cooling while fitting stylishly into your home’s tight spaces with maximum space saving efficiency",
            "Improve airflow & save money: The right fan cools you off & improves airflow in your room or home. Give your air conditioner & wallet a break by using fans to reduce your energy consumption & costs.",
            "Honeywell quality: Help improve air circulation & energy savings in your living room, bedroom or home office with Honeywell's extensive line of table fans, tower fans, oscillating fans, desk fans, window fans & much more.",
        ],
        customers: [
            {
                name: "Peter",
                rating: 2,
                generalReview: "Not what I expected for the price",
                detailedReview: [
                    "The fan works decently but is MUCH smaller than expected. There is no base like other tower fans so the bottom fan blows at almost ground level (photo is of the fan next to my old Lasko fan). This is mainly an issue if you plan on using it at night and have a bed that is more than 2.5 feet off the ground (about the size of the lower fan). The biggest problem I have with this item is that Amazon changes the price constantly. I bought the item at $50, it immediately dropped $5 and continued to drop to $35 over a weeks time. They refused to refund me. I went to buy another and after checking out and canceling the item to change my payment method, they immediately changed the price on me to $72. I wouldn’t buy this item unless the price is under $40. Will be returning the first one I bought."
                ]
            },
            {
                name: "MJ",
                rating: 5,
                generalReview: "Great multi function fan",
                detailedReview: [
                    "This is a great air-mover and helps keep my top floor bedroom cool in these 95+ degree heat. For the price it should have come with a remote control. So I added a smart-plug to mine and added it to Alexa so even while in bed I can tell Alexa to turn it on and off.",
                    "I like the directional fan on top and use it to move air up toward the ceiling while the vertical part moves a ton of air and keeps my bedroom cool, even on the hottest days when the AC can’t keep up."
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
        dimension: "10 x 8 x 32 inches",
        material: "Plastic",
        controllerType: "Remote Control",
        finishType: null,
        type: "Tower Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "8 speed tower fan: The Honeywell 8 speed tower fan exudes the feel of a spring breeze throughout your home; featuring quiet set technology that allows users to control their sound and cooling options, making it the perfect year round fan for any home",
            "Quiet cooling: The slim, modern design of this quiet & powerful fan features oscillating motion for whole room cooling; It features 8 speed touch button controls and comes with a remote control that nests in the back of the fan housing for easy storage",
            "Increase your comfort: Using fans for air circulation in your home can help Increase your comfort, and help reduce energy costs as well; Honeywell carries a range of tower fans, floor fans, and oscillating fans find one for every room in the house",
            "Honeywell fans: The right fan helps cool you off & improves airflow in your room or home; Give your air conditioner & wallet a break by using fans to help reduce your energy consumption & costs; Honeywell carries a variety of fans to meet your home needs",
            "Honeywell quality: Help improve air circulation & energy savings in your home, bedroom or office with Honeywell fans;Fused safety plug",
        ],
        customers: [
            {
                name: "Drogba",
                rating: 5,
                generalReview: "A Solid Fan, Not an AC Unit",
                detailedReview: [
                    "To begin with, no fan is a substitute of an AC system, those that use one need to understand thermodynamics, AC units remove the heat from the room and have super-cooling methods that wouldn't be used in a fan. To get air OUT of a room, you need an exit, an open door, window, etc.",
                    "I use mine in support of our AC unit, which is all the way in the living room (and struggles to reach my room). Fans are mainly intended to keep the air circulating, but by doing so also slightly (but noticeably in enclosed environments, far more than in open) increase the temperature as a byproduct. However, fans do make it more bearable, and make a significant difference when centered onto the person in question."
                ]
            },
            {
                name: "Lukaku",
                rating: 1,
                generalReview: "Worked for a month now can’t use higher than second setting!!",
                detailedReview: [
                    "I liked this fan when first using it but now i hate it! It was not worth the money or hassle I went through getting it..... bought and received the first part of February and started using it mid April worked fine for first month Of occasional use but now I can’t use any higher than second setting or it makes a horrible loud noise!!! Ridiculous I bought it to replace a fan I had been using for almost 5 1/2 years running almost non stop that entire time! Yet this more expensive newer fan didn’t last a month! Like I said RIDICULOUS!!!"
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
        price: 91.54,
        listPrice: 109.99,
        color: "Black",
        brand: "Vornado",
        dimension: "12 x 12 x 36.8 inches",
        material: "Plastic",
        controllerType: "Remote Control",
        finishType: null,
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "CIRCULATE OR OSCILLATE – Dual airflow settings for either optional oscillation or V-Flow whole room air circulation",
            "MOVES AIR FURTHER – Powerful motor produces higher volume of air movement and pushes air up to 75 feet",
            "SMOOTH OSCILLATION – Designed for smooth, quiet oscillation while the chromed arch with carrying handle provides style and portability",
            "ADVANCED CONTROLS – Touch-sensitive controls, 4 speed settings, energy-saving 2-8 hour timer and remote control",
            "SUPERIOR SUPPORT — When you choose a Vornado Tower Fan, you’re investing in superior performance and design that will deliver total satisfaction. If not, we’ll replace it, for 5 years.",
            "Built to meet U. S. voltage requirements. Certified, safety-tested, and warrantied for use only in the U. S."
        ],
        customers: [
            {
                name: "Xavi",
                rating: 4,
                generalReview: "Good air flow, remote sucks, pretty quiet at highest speed",
                detailedReview: [
                    "For a fan this size, it has a very good air flow. Even with the fan speed set to 1, a nice wind was felt ~10 ft away. At fan speed 4, it is not loud, but it does have a hum near the 3kHz and 4kHz range. It is noticeable but not to point where it's painful.",
                    "The circulatory claims does seem to be true. The fan was set to oscillate and then stationary, surprisingly the stationary (circulation) actually felt cooler."
                ]
            },
            {
                name: "Lingard",
                rating: 5,
                generalReview: "Real Review in list form with more emotion then descriptive detail. Enjoy",
                detailedReview: [
                    "This is a great fan. I did have an electrician install it as it was going over my so-called island. I did have another person put the fan together but unfortunately when the electrician tried to install it would not work and he could not take the fan light off to see what was the issue. The motor would start up ok then it would freeze. So I took the fan to an authorized dealer to see if they could get the light off but even they could not. So I returned it and bought the exact same fan again and the new replacement which was put together by the electrician worked like a charm with no issues. I like the fan because it does not move my recipe papers or recipe book pages. The light is also very good and bright. I would definitely recommend this product."
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
        price: 69.99,
        listPrice: 99.99,
        color: "Black",
        brand: "Vornado",
        dimension: "11 x 11 x 32.3 inches",
        material: null,
        controllerType: "Touchpad Control",
        finishType: null,
        type: "Tower Fan",
        bestSeller: true,
        sale: false,
        new: false,
        aboutItem: [
            "CONTINUAL AIRFLOW – Utilizes Vornado's signature Versa-Flow Technology to provide complete circulation of all the air in a room. Unique crosscut outlet create a wide span of constant airflow, eliminating the need for a wobbly oscillating base.",
            "MOVES AIR FURTHER – Powerful motor produces higher volume of air movement and pushes air up to 85 feet.",
            "ENERGY SAVING TIMER – 1-8 hour auto-off timer ensures you run your tower circulator in an efficient, energy-saving way.",
            "SIMPLE CONTROLS – Touch-sensitive controls allow you to select from 5 speed settings, and a remote control provides additional convenience.",
            "SUPERIOR SUPPORT — When you choose a Vornado Tower Fan, you’re investing in superior performance and design that will deliver total satisfaction. If not, we’ll replace it, for 5 years. Supported by a customer service team based in Andover, KS."
        ],
        customers: [
            {
                name: "Inesta",
                rating: 4,
                generalReview: "RattleRattleRattle*TAPE*.....silence....",
                detailedReview: [
                    "Not an awful lot to say here - it puts out a REALLY good amount of air and does so in an elegant package, as you'd expect for a premium fan at this price point. While I was almost ready to live with the rattle, cause returning stuff isn't my idea of a good time, the simple application of a strip of painters tape on the back completely cured it."
                ]
            },
            {
                name: "Thiago",
                rating: 3,
                generalReview: "No joy. Continue to rattle",
                detailedReview: [
                    "I bought these fans last year as a way to save space and they really do push air. I've bought several of the 42in and the smaller 33in. The problem is that after they have been in use for some time they start getting really noisy. This seems to be due to the inner cylinder spinning off balance and causing rattling, vibration, and whine. At first I thought it was due to dust build on on the internal cylinder, but then I tried cleaning it by blowing it out with an air compressor, being sure not to spin the blade at high RPMs. No joy. Continues to rattle, vibrate, buzz, and whine. ALL of the units (and I have 3 42in and 1 33in have this issue. Due to this, I would not recommend unless you use it for light use."
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
        price: 68.00,
        listPrice: 109.99,
        color: "Black",
        brand: "Vornado",
        dimension: "10.47 x 10.47 x 36.53 inches",
        material: null,
        controllerType: "Remote Control",
        finishType: "Black",
        type: "Tower Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "CONTINUAL AIRFLOW – Utilizes Vornado's signature V-Flow Technology to provide complete circulation of all the air in a room. Unique crosscut outlet create a wide span of constant airflow, eliminating the need for a wobbly oscillating base.",
            "MOVES AIR FURTHER – Powerful motor produces higher volume of air movement and pushes air up to 70 feet.",
            "ENERGY SAVING TIMER – Choose from 1, 2, 4, or 8 hour timer to ensure you run your tower circulator in an efficient, energy-saving way.",
            "SIMPLE CONTROLS – Push-button controls allow you to select from 3 speed settings, and a remote control that magnetically cradles at the top of the unit provides additional convenience.",
            "SUPERIOR SUPPORT — When you choose a Vornado Tower Fan, you’re investing in superior performance and design that will deliver total satisfaction. If not, we’ll replace it, for 5 years.",
            "Built to meet U. S. voltage requirements. Certified, safety-tested, and warrantied for use only in the U. S."
        ],
        customers: [
            {
                name: "Vidic",
                rating: 4,
                generalReview: "Don't expect to be blown away by this fan -UPDATED-",
                detailedReview: [
                    "Bought this hoping to have a nice fan to cool the room. Based on previous Vornado products I have had in the past i was expecting more and a bit disappointed with what it is. The description and history of these products I was expecting this thing to more air like no other. I expected that the lowest setting would be more than enough for my bedroom based on description saying this unit would push air 70' away.",
                    "I am maybe 10' away and i can barely feel the air. This is not the Vornado products of old. I have it on highest setting and it is not what i was expecting. The whole design of the curved vent to distribute the air a more of 180 degree is both a benefit and curse. It is great for the middle of the room but when you need it to hit a specific spot you are getting just a small portion of that 180 degree hitting it while the rest is dispersed everywhere else."
                ]
            },
            {
                name: "Greengood",
                rating: 5,
                generalReview: "Works great!",
                detailedReview: [
                    "I bought this fan as my previous similar fan had broken. The reason I love this fan as it does not move so it limits the chances of breaking near the motor of the other fan. It offers great circulation and it was much needed during the hot summer months with no air conditioning. I also like the remote so I keep it near my bed. Note I live in a studio apartment; I'm not sure how it would work in a larger house but for me, it worked for a 503 square foot apartment. It does get a bit loud on the high setting for when I was trying to watch TV or a movie so I would just change it to a lower setting. Lastly, I am constantly running this fan every night and have not run into any issues."
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
        dimension: "5.4 x 5.3 x 14.5 inches",
        material: null,
        controllerType: "Button Control",
        finishType: "Painted",
        type: "Tower Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "CONTINUAL AIRFLOW – Utilizes Vornado's signature Versa-Flow Technology to provide complete circulation of all the air in a small room Unique crosscut outlet create a wide span of constant airflow eliminating the need for a wobbly oscillating base",
            "DUAL VERSATILITY — Easily switch airflow direction from a small-footprint vertical tower position to a low-profile horizontal position",
            "MOVES AIR FURTHER – Powerful motor produces higher volume of air movement and pushes air up to 50 feet",
            "SIMPLE CONTROLS — 4 speed settings can easily be adjusted through the push of one button",
            "COMPACT AND QUIET — At 14 5\" tall and 5\" wide Duo is perfect for a breeze in tight quarters Enjoy quiet air comfort that won’t disrupt your surroundings",
            "SUPERIOR SUPPORT — When you choose a Vornado Tower Fan you’re investing in superior performance and design that will deliver total satisfaction If not we’ll replace it for 5 years",
            "Built to meet U S voltage requirements Certified safety-tested and warrantied for use only in the U S"
        ],
        customers: [
            {
                name: "Lampard",
                rating: 4,
                generalReview: " Good for a tight spot, but rattles after a few months.",
                detailedReview: [
                    "I have several different Vornado fans throughout the house. Most are conventional fans. They move a lot of air relative to the noise they make, which is why I am willing to pay a more for a Vornado over other brands. This is the only tower fan that I own at the moment. I've had it for over a year now and it runs continuously most of the time.",
                    "I like the compact design. it fits in a tight spot between my desk and the doorway to our office. We have a fair amount of computer equipment and this little fan does a good job of discretely circulating air from the hallway into the room. It's quiet on its lowest setting and tolerable on the next setting up. The two higher speeds make the squirrel cage blower whine loudly enough that I never use those speeds. Overall it's noisy for what I'd expect from a Vornado. I know tower fans are generally this way, but I was hoping for better."
                ]
            },
            {
                name: "Frank",
                rating: 2,
                generalReview: "Could use more angles.",
                detailedReview: [
                    "Where most devices with this \"tube and holster\" design let you swivel things almost 360 degrees, it was a disappointment to find that you get barely 45 degrees of motion, meaning that you shouldn't be surprised if you need to float another little tchotchke under it from around the house in order to get the angle you wanted. However, we haven't had any of the durability or noise problems others complained about. The mode-cycling power button is sleek, simple, and gives a little dash of modernity to what would otherwise be a very plain fan, and while it doesn't shoot a very wide cone of air, what it blows is very strong - once the fan was well-targeted, I was getting chilly in the middle of summer. That's what we're looking for here!"
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
        dimension: "3.78 x 2.83 x 10.47 inches",
        material: "Plastic",
        controllerType: "Button Control",
        finishType: null,
        type: "Misting Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "COMFORTABLE COOLING MIST: Beat the heat with a personal cooling system. This portable mini misting fan from O2COOL offers a fine mist of cold water and a powerful fan",
            "POWERFUL ONE-SPEED MOTOR: With the help of the powerful motor and flexible fan blades you can get a cool breeze anywhere! Its battery operated, requires 2 AA batteries (not included)",
            "PERFECT FOR OUTDOOR OUTINGS: Using the deluxe misting fan is the perfect way to cool your face at the beach, park, at a game, camping or at theme parks. Can be used indoors or outdoors",
            "PORTABLE & HANDHELD: This battery operated fan is perfect for travel and it’s a great way for kids to get some chill. It’s compact and lightweight so you can easily throw it in your tote bag or luggage",
            "COLORFUL DESIGNS FOR EVERYONE: All of our fans and bottles are stylish, colorful and bright"
        ],
        customers: [
            {
                name: "Chicharito",
                rating: 4,
                generalReview: "Great for mamas in labor-but bring extra batteries",
                detailedReview: [
                    "I purchased this to use while I was in labor with baby #2. It was amazing when I was having a slight panic attack, if you’re the type of person to need absolute COLD when you’re stressed/nervous this is a great product. However I removed a star because it died right when I needed it most! It started to sputter and I was able to give it a good smack and it turned back on, but about 10 minutes before push time the battery died!! I was NOT happy, my husband says my face was absolute rage. Buuut I had been using it off and on all day, and for a long stretch of time when it died. Didn’t feel like very long to me, time was flying but I’m pretty sure it wasn’t the fans fault! Just ran out the battery! All in all I would recommend this fan, just be sure to bring extra batteries if you’re planning on using it for very long!"
                ]
            },
            {
                name: "Emma Stone",
                rating: 5,
                generalReview: "Pretty nice",
                detailedReview: [
                    "We bought this fan for a trip to Orlando (Disney) and it held up great! We didn't have to replace the batteries at all during our stay there (one week). The \"blades\" are made out of silicone or something similar. They're pretty soft. When the fan is on they can hurt little baby fingers though - not cut or puncture the fingers, but just like a \"zap\". The cool mist that comes out is awesome for 90+ degree weather."
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
        color: "7050",
        brand: "Lasko",
        dimension: "16.25 x 12.3 x 14.85 inches",
        material: "Plastic",
        controllerType: "Manual Control",
        finishType: null,
        type: "Misting Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "Reduces air temperature up to 25 degrees",
            "Ideal for picnics, decks, patios, sorts and DIY projects",
            "90 Degree pivot directs mist flow",
            "Automatic louvers create wide sweep",
            "Three refreshing speeds",
            "finish types: Black"
        ],
        customers: [
            {
                name: "Emma Watson",
                rating: 5,
                generalReview: "Good but does put out a lot of water",
                detailedReview: [
                    "This machine really is wonderful. I live in Arizona and is very dry and hot so having the misting fan is super helpful, it truly does lower the temperature by about 30° if you’re in the direct spray. If you’re standing too close, you will get wet, obviously it’s spraying water. I use this in my aviary to keep my birds cool and they love it. I really do wish there was a way to control the flow of water though, make the mist finer or Be able to control how many nozzles are missing water at a time, currently it’s just on or off no ability to control the volume of water coming through it, if you try to turn the hose down It’s simply stoppes mistng and starts dripping. I let this run constantly and for the heat of the day, 6 to 8 hours. In the evening everything in there is pretty drenched. I don’t need as much water as air movement, so adjustable sprays would be super helpful, But otherwise, really fantastic."
                ]
            },
            {
                name: "Rooney",
                rating: 5,
                generalReview: "Happy with this purchase!",
                detailedReview: [
                    " So far, so good. The Lasko Misting Fan works well. I could definitely feel the difference when the unit is running, opposed to when it is not. I loaded pictures of the temperature difference, within the first 10 minutes of use. I tried adjusting the water pressure to decrease the amount of moisture that was left on the deck. I moved it back as well, but it still seemed to saturate things in spite of. I’ll keep working on it and will update this review if I find a way to resolve it. Overall, I’m happy with the purchase."
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
        color: "Raspberry",
        brand: "O2COOL",
        dimension: "3 x 3 x 10.5 inches",
        material: "Plastic",
        controllerType: null,
        finishType: null,
        type: "Misting Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "COMFORTABLE COOLING MIST: Beat the heat with a personal cooling system. This portable mini misting fan from O2COOL offers a fine mist of cold water and a powerful fan",
            "POWERFUL ONE-SPEED MOTOR: With the help of the powerful motor and flexible fan blades you can get a cool breeze anywhere! Its battery operated, requires 2 AA batteries (not included)",
            "PERFECT FOR OUTDOOR ACTIVITIES: Give yourself a refresh anywhere! It’s the perfect way to cool your face at the beach, park, at a game, camping or at theme parks. Perfect for use indoors or outdoors",
            "PORTABLE & HANDHELD: This battery operated fan is perfect for travel and it’s a great way for kids to get some chill. It’s compact and lightweight so you can easily throw it in your tote bag or luggage",
            "COLORFUL DESIGNS FOR EVERYONE: All of our fans and bottles are stylish, colorful and bright! This offer is a 2 PACK. You will receive 2 Raspberry Deluxe Misting Fans."
        ],
        customers: [
            {
                name: "Keanu",
                rating: 5,
                generalReview: "So good",
                detailedReview: [
                    "We live in Florida and have 2 young kids, we go to theme park every other weekend. We need this. It doesn’t hurt kids finger even they stick fingers in. Little bit hard to spray for 2 year old, but 3 year old master it.",
                    "Only drawback is if blade is in front of sprayer and not turn on to spray, water blocks it. Sounds obvious but sometime it gets annoying."
                ]
            },
            {
                name: "Reeves",
                rating: 4,
                generalReview: "Hot weathers must item",
                detailedReview: [
                    "Of the 2, one works well. The other...well it depends on how you hold it if any water comes out. Ended up being more hassle trying to get it to work than it was worth."
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
        dimension: "4.33 x 1.96 x 9.84 inches",
        material: "Plastic",
        controllerType: "Button Control",
        finishType: null,
        type: "Misting Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "【Cooling Fan with Humidifier】: The misting fan with a 55ML large capacity water tank to offer water spray, it can last spraying for about 40 minutes after a full water-filling, just hold the power button for 2 seconds to Activate or Inactivate the mist mode. It can help to keep your face or skin moist at office, home or outdoor, cool you down faster in hot days and refresh you from the tiredness",
            "【Long Working Time】: The battery operated fan with a 2000mAh bulit-in rechargeable battery, which can support to work 9 hours after a fully charge. It's pretty convenient to charge the fan when run out of power, connect with 5V output adapter, USB cable, laptop, power bank or any other USB-enable devices to charge, no worry about power off for outdoor activities",
            "【Multipurpose Fan】: This portable fan could work as a desktop fan with it's 180°foldable handle design,a clip on fan with enclosed metal bracket,a cooling humidifier with large water tank,a handheld fan with it's ergonomical handle. It's a necessity in hot summer for travel, hiking, shopping, watching sport games, disney land, and more.",
            "【Strong Wind + 3 Speeds】: This handheld fan has a unique design with 3 small+3 large fan blades, which helps the fan to generate a stronger airflow(5m/s) but with lower noise at the same time,you can feel the cool breeze from 3 meters away. You can just press the power button repeatedly to change the speed from Low, Middle to High level.",
            "【High Quality & Durable】：This personal fan was built with a durable brushless motor insdie, which able to provide 15,000 hours lifespan and it's 7 times longer than most of other mini fan. NOTE: The voltage should not exceed 9V when charging, or it will not get charged."
        ],
        customers: [
            {
                name: "Chris",
                rating: 5,
                generalReview: "Mister works fine if you turn it on properly",
                detailedReview: [
                    "This is an awesome fan. I have had several portable fans like this one and this is definitely the best. I've seen several reviews that say that the mister does not work which is what I thought was the case with mine but it turn out that you need to hold the button for about 4-5 seconds to turn it on and off. It's definitely the strongest fan I've seen of this type and the ability to adjust the angle with the movable handle with clip is a big plus."
                ]
            },
            {
                name: "Thor",
                rating: 5,
                generalReview: "Love my fan! If you have a problem: contact the seller!",
                detailedReview: [
                    "Unfortunately, when I received the original fan, it arrived broken and would not charge. This meant that once that battery died, it would have been useless. I decided to bypass Amazon and just contact the seller directly. I emailed them on a Friday afternoon and they got back to me the following Tuesday. They apologized for the problem and said they were sending me a replacement fan right away, and said that I didn't need to worry about sending back the defective one. I received my new fan the following Monday and it works exactly as advertised.",
                    "The fan is perfect for my needs, I just needed something that could sit on the patio table next to me and would help on hot/sunny days and to cool down after a run. Based on the other reviews here's my takeaway..."
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
        color: "White",
        brand: "Broan-NuTone",
        dimension: "8.25 x 7 x 8.25 inches",
        material: "Polymeric",
        controllerType: "Button Control",
        finishType: null,
        type: "Exhaust Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "VERSATILE FAN: Exhaust fan helps eliminate humidity, tobacco smoke, and cooking odors. The galvanized steel house installs easily between ceiling joists for use wherever you need it most",
            "EFFICIENT: Operates on 200 CFM and 8.5 Sones to ensure high-quality performance",
            "EASY INSTALLATION: Includes steel mounting brackets with keyhole slots for a fast and easy installation",
            "DECORATIVE: Paintable polymeric grilles allow you to ensure the fan is cohesive with your existing decor",
            "SAFE: This 8\" fan is ENERGY STAR certified and HVI certified to ensure safe use for years to come"
        ],
        customers: [
            {
                name: "Ramos",
                rating: 4,
                generalReview: "This fan really sucks (in a good way)",
                detailedReview: [
                    "I bought this fan because I needed a fan that was fairly noisy because my wife likes some background noise and often left our previous bathroom fan on. Little did I know what I was getting into. The following is all true.",
                    "It started with the inaugural starting of the fan. Wow, it was fairly loud. Definitely what the package said, I guess I just didn't know what 6.5 Sones sounds like. Imagine vacuum cleaner like noise. Oh well, it at least seemed to be working really well, you could really feel airflow in the bathroom, it was like air was being sucked out of the heating vent. It actually created a kind of pleasant breeze. After being in the attic for an hour on a hot day it was pretty wonderful.",
                    "Then I went to take a shower. I instantly knew something was wrong, the door wouldn't close. Something must be stuck in it, I checked everywhere but nope. Then it dawned on me, the fan was drawing so much air that the door was having trouble closing against the wall of air the fan was sucking into the room. \"Small price to pay for a good fan\" I naïvely thought as I switched off the fan and closed the bathroom door. I turned on the fan once more and started getting ready for my shower when I heard a loud bang. I glanced at the fan, no everything was good with it. Then I saw it, my heavy metal heater vent had been the only way for air to come in and the fan had heartlessly ripped it out of the wall so it could consume more valuable air."
                ]
            },
            {
                name: "Dominic",
                rating: 5,
                generalReview: "Mobile home approved",
                detailedReview: [
                    "I live in a 24 year old mobile home. And as you out there in my position know it is HARD to find mobile home parts. So when our 20 + something fan broke for the guest bathroom we were shocked to find that Home Depot and lowes both didn't have one that would work in our home. We have a vent that shoots straight up (vertical) into the roof. And most vents now have a left or right (horizontal) curvature to the vent. So when we found this one we were thrilled it was the right kind. One that just shoots straight up. Now the fan is a little louder than we hoped for however after careful consideration we are glad it is. Have you ever been to a house where the guest bathroom is so close to the main family room you don't feel comfortable, thinking someone can hear you using the restroom?? Well problem solved. This fan is just the right amount of loud so you don't hear a thing. And our house HAS a bathroom right off of the living room---to close for comfort. So in my opinion this fan is perfect. The outside of it is beige/cream not white. And the base is pretty wide at 8inches. But fits perfectly. Again, it is loud but I'm sure my guests appreciate the loud \"cover\" for them to do what they have to do and not be embarrassed. I have had several get togethers and almost everyone has used the fan to mask their private affairs. Glad I got it. Hope this helped. I have inserted a photo of installed fan, hopefully it comes through alright."
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
        color: "White",
        brand: "Broan-NuTone",
        dimension: "12.25 x 12.25 x 5.75 inches",
        material: "Plastic",
        controllerType: null,
        finishType: null,
        type: "Exhaust Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "HIGH-QUALITY FAN: Quiet, energy efficient exhaust fan operates with 110 CFM and 1.0 Sones to help control air quality is powerful enough for rooms (including bathroom) up to 105 sq. ft.",
            "EFFICIENT: Powerful ventilation removes moisture and reduces the risk of mold or mildew in most full baths at 110 CFM, so your surroundings will always be comfortable",
            "EASY INSTALLATION: Easy to install new/replace existing product with retrofit installations that can be done entirely from the room-side – no attic access required",
            "RELIABLE PERFORMANCE: With our TrueSeal Damper Technology, fans reduce air leakage by up to 50% compared to competitive models, resulting in better home performance via blower door tests and reducing cold and warm air backdrafts",
            "THREE YEAR LIMITED WARRANTY: Backed by a three year limited warranty for your convenience"
        ],
        customers: [
            {
                name: "Sanchez",
                rating: 5,
                generalReview: "Good fan for a good price, relatively easy install",
                detailedReview: [
                    "I installed this fan as a retro-fit. Overall, it was an easy process (much easier than getting the old one out). Could have been a bit easier. There are a few steps that seem a little counter intuitive. One thing that I did notice is that a lot of other reviews talk about have trouble attaching the cover. I don't know if they changed something since then, but the cover to my fan went on in literally ten seconds. No trouble in the slightest. The fan works very well, and the light is very bright (seriously, almost hurts to look at). It is also remarkably quiet (though my other fan was pretty loud so that might just be me. We are very happy with it."
                ]
            },
            {
                name: "Pedro",
                rating: 5,
                generalReview: "Stylish and quiet fan",
                detailedReview: [
                    "I like everything about this fan. First of all it looks so stylish and sleek. Second, the light is not dim at all. My first photo shows what it looks like with only the fan light on, and my second photo shows what it looks like with the fan light off and both my vanity lights on. My lights are on the right, which left my shower in the dark. With this fan I now have plenty of light by the shower. It is also very quiet and works really great. Extremely satisfied! It would probably be nice to have the option of having the light on or off while the fan is on, but not a real issue."
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
        color: "Sliver",
        brand: "Iliving",
        dimension: "23 x 5.75 x 23 inches",
        material: "Aluminum",
        controllerType: "Button Control",
        finishType: null,
        type: "Exhaust Fan",
        bestSeller: false,
        sale: true,
        new: false,
        aboutItem: [
            "CUT COOLING COSTS: Reduce expensive cooling bills at home. Ready to install, our wall-mounted automatic shutter vent fan is designed to help keep your living space cooler and more comfortable year-round.",
            "MULTIPURPOSE: Perfect cooling and ventilation solution for any space at your home - including the attic, garage, shed, and more.Corrosion-resistant, the fully enclosed motor is thermally protected and permanently lubricated for easy maintenance.",
            "VARIABLE SPEED: Customize your comfort. iLiving Exhaust Fan has adjustable speed functionality when combined with the iLIVINGILG8SFSC speed controller (sold separately).",
            "WEATHER RESISTANT SHUTTERS: Constructed from durable, high-grade aluminum, these shutters can withstand moisture and heat longer than other competitors’ products adding to the fan’s longevity.",
            "POWERFUL AND EFFICIENT: Small but mighty, you’ll enjoy the power and efficiency of iLiving’s Shutter Exhaust Fan. The 20-inch runs onstandard 120 volts at 1/4 HP, 2.59 amps with 1075 rotations per minute, cooling and ventilating an area of 3368 cubic feet per minute!"
        ],
        customers: [
            {
                name: "Samson",
                rating: 1,
                generalReview: "Not happy",
                detailedReview: [
                    "I'm slagging this item because it was promoted as \"variable speed.\" I bought it along with the ILG8SFSC speed control, which created an unacceptably loud hum in the motor and caused intense vibration in the fan across the entire range of variability. The fan by itself operates as expected without excessive noise, but now I'm stuck with a single-speed fan that I could have bought a lot cheaper. If you need variable speed buy a fan with 3-speed motor made in the USA. I'd be happy to have spent an extra $100 on something more suitable"
                ]
            },
            {
                name: "Drogo",
                rating: 5,
                generalReview: "If You Have a Metal Shop .. This is a Must Have",
                detailedReview: [
                    "Works great. Put it on a thermostat. Very quiet and cools excellent. Actually bought a second one to add to the shop. Dropped the ceiling temperature from about 130° (building is uninsulated ... big mistake) to about 105°F. This makes a tremendous difference in the shop. Can't wait to see what the second fan will do. But, the ad is a little misleading if you don't read closely. The fan does NOT come with a cord or thermostat. I did recommend one to my brother and he thought the same thing ... that it comes with a cord and thermostat. Not sure if he ever believed me or not when I told him it doesn't."
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
        material: null,
        controllerType: null,
        finishType: null,
        type: "Exhaust Fan",
        bestSeller: false,
        sale: false,
        new: true,
        aboutItem: [
            "EFFICIENT VENTILATION - Equipped with efficient double ball bearing motors, thickened paint impellers & blades. HG POWER Ventilation Fan Vent Blower can eliminate excess moisture, remove exhaust gas, eliminate odors and ventilation with quickly and quiet way. It is an ideal choice for creating efficient indoor HVAC system among workshops, basements, warehouses, apartment, kitchen, bathroom and other areas that require continuous or regular ventilation",
            "SUPER MOTOR - Adopts double ball bearing outer rotor brushless motor to ensure high efficient, quiet operation and high-quality performance. Compared with ordinary motors, the upgraded motor can reduce friction coefficient, save electricity effectively and enlarge the service life of the machine",
            "HIGH AIR FLOW EXHAUST FAN - Diameter: 150mm/ 6 inch; Air Flow: 308 CFM, Power: 38W, Voltage: 110VAC, Frequency: 60Hz, Current: 0.16A, Speed: 2800r/ min",
            "DURABLE BAKING VARNISH COMPONENTS - The fan shell and impeller are made of durable baking varnish material. Thickened protective dense mesh design can both prevent fragment from being involved to the motor blades, and also prevent accidental touch injury",
            "EASY TO INSTALL- Suitable for wall or ceiling installation. It's recommended to fix with glue or screws. This wall ceiling ventilation fan can be widely used in bathrooms, living rooms, bedrooms, kitchens, offices and other areas that require continuous or regular ventilation. Convenient to clean, you can remove the motor by unscrewing the four-corner screws. The detachable design is convenient for cleaning up fragment or greasy dirt regularly for increasing service life"
        ],
        customers: [
            {
                name: "Alonso",
                rating: 4,
                generalReview: "Appears solid.",
                detailedReview: [
                    "Fan seems to be okay damper is a little too loose doesn't close all the way and fan was missing screws and nuts if damper was better and not missing parts would have been a five-star very sad e-mailed and ask if they could send me missing hardware with no reply."
                ]
            },
            {
                name: "Robben",
                rating: 5,
                generalReview: "Good air flow.",
                detailedReview: [
                    "Like the volume of air it moves."
                ]
            },
            {
                name: "Pepe",
                rating: 5,
                generalReview: "Very powerful",
                detailedReview: [
                    "I installed this product above our dryer to get rid of some of the hot air in the closet,installed in ceiling to blow in attic,i wished it had more cfm but it has helped"
                ]
            }
        ]
    },
]