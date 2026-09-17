/* =====================================================
   PRODUCT INFORMATION
===================================================== */

const product = {

    name: "MONARCH BED",

    company: "The Charcoal Project",

    dimensions: "Width: 6.89 ft | Depth: 5.91 ft",

    material: "Engineered Wood + Caramel Leather",

    category: "Bedroom Furniture"

};

const siteUrl= 'https://tcp-id2026.netlify.app/'

/* =====================================================
   WHATSAPP NUMBER
===================================================== */

/*
    Replace this with the actual WhatsApp number.

    IMPORTANT:

    India example:

    919876543210

    Do NOT use:

    +91 9876543210
    09876543210

*/

const whatsappNumber = "917075197627";



/* =====================================================
   WHATSAPP ENQUIRY
===================================================== */

const enquiryButton =
    document.getElementById("enquiryButton");


if (enquiryButton) {

    enquiryButton.addEventListener("click", function () {


        /* ---------------------------------------------
           PRE-TYPED MESSAGE
        --------------------------------------------- */

        const message =
`
Hello,
"${siteUrl}"
I am interested in this product. Could you please share more details?
Thank you.`;


        /* ---------------------------------------------
           CREATE WHATSAPP URL
        --------------------------------------------- */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        /* ---------------------------------------------
           OPEN WHATSAPP
        --------------------------------------------- */

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}



/* =====================================================
   PRODUCT IMAGE INTERACTION
===================================================== */

const productImage =
    document.getElementById("productImage");

const productVisual =
    document.querySelector(".product-visual");


if (productImage && productVisual) {


    productVisual.addEventListener(
        "mousemove",
        function (event) {


            const rect =
                productVisual.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width;


            const y =
                (event.clientY - rect.top) /
                rect.height;


            /*
                Convert mouse position into
                small image movement.
            */

            const moveX =
                (x - 0.5) * 10;


            const moveY =
                (y - 0.5) * 10;


            productImage.style.transform =
                `scale(1.045) translate(${moveX}px, ${moveY}px)`;

        }
    );


    productVisual.addEventListener(
        "mouseleave",
        function () {


            productImage.style.transform =
                "scale(1.01) translate(0, 0)";

        }
    );

}



/* =====================================================
   MOBILE TOUCH EFFECT
===================================================== */

if (productVisual && productImage) {

    productVisual.addEventListener(
        "touchmove",
        function (event) {


            const touch =
                event.touches[0];


            const rect =
                productVisual.getBoundingClientRect();


            const x =
                (touch.clientX - rect.left) /
                rect.width;


            const y =
                (touch.clientY - rect.top) /
                rect.height;


            const moveX =
                (x - 0.5) * 5;


            const moveY =
                (y - 0.5) * 5;


            productImage.style.transform =
                `scale(1.025) translate(${moveX}px, ${moveY}px)`;

        },
        {
            passive: true
        }
    );

}



/* =====================================================
   PAGE VISIBILITY
===================================================== */

document.addEventListener(
    "visibilitychange",
    function () {

        if (!document.hidden && productImage) {

            productImage.style.transform =
                "scale(1.01) translate(0, 0)";

        }

    }
);