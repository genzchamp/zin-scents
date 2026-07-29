renderProducts(products.jallabiyas, "products");

renderProducts(products.perfumes, "perfumes");

renderProducts(products.abayas, "abayas");

renderProducts(products.scarves, "scarves");


// Scroll reveal animation

const cards = document.querySelectorAll(".product-card");

const revealCards = () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealCards);

revealCards();


// Image Lightbox

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");


document.querySelectorAll(".product-card img").forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightbox.classList.add("show");

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});



// Collections Toggle

function toggleCollection(id){

const collection =
document.getElementById(id);



if(collection.style.display==="none" ||
collection.style.display===""){

document.getElementById("products").style.display="none";

document.getElementById("perfumes").style.display="none";

document.getElementById("abayas").style.display="none";

document.getElementById("scarves").style.display="none";

collection.style.display="grid";

}else{

collection.style.display="none";

}


}


document.getElementById("show-jallabiyas")
.onclick=function(){

toggleCollection("products");

};


document.getElementById("show-perfumes")
.onclick=function(){

toggleCollection("perfumes");

};


document.getElementById("show-abayas")
.onclick=function(){

toggleCollection("abayas");

};


document.getElementById("show-scarves")
.onclick=function(){

toggleCollection("scarves");

};
