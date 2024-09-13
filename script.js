setTimeout(function () {
    alert("Selamat datang di Toko online kami");
}, 3000);

const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57","#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

seTinterval(changeHeroTexColor,2000);

let currentImageIndex = 0;
const images = ["img/background.jpg","img/sepatu1.jpg","img/sepatu2.jpg"]

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
     "#hero"   
    ).Style.backgroundImage = url('${images[currentImagesIndex]}')
}

setInnterval(changeHeroImage,2000);

const productImages = document.quarySelectorAll(".product-card img");

productImages.forEach((images)=>{
    image.addEventlistener("click", ()=> {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    });
});
image.addventlistener("mouseleave", ()=> {
    image.style.transform ="scale(1)";
});
document.querySelectorAll(".cta").forEach(function (button){
    button.addEventlistener("click", function  (event) {
        event.preventDefault();
        alert("Terimakasih sudah membeli produk ini!");
    });
});

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textcontent = "=>";
scrollToTopBtn.id ="scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventlistener("scroll", () =>{
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display="block";
    } else {
        scrollToTopBtn.style.display="none";
    }
});

scrollToTopBtn.addEventlistener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});
