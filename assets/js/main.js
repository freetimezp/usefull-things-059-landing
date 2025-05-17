const allContainers = gsap.utils.toArray(".container-item");
const venueImageWrap = document.querySelector(".container-img-wrap");
const venueImage = document.querySelector(".container-img");

function initContainer() {
    allContainers.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueImage);
    });
}

function moveVenueImage(e) {
    let xPos = e.clientX > (window.innerWidth / 2) ? e.clientX - 200 : e.clientX;
    let yPos = e.clientY - 200;

    const tl = gsap.timeline();

    tl.to(venueImageWrap, {
        x: xPos,
        y: yPos
    });
}

function venueHover(e) {
    if (e.type === "mouseenter") {
        const targetImage = e.target.dataset.img;

        const tl = gsap.timeline();

        tl.set(venueImage, {
            scale: 1,
          backgroundImage: `url(${targetImage})`
        }).to(venueImageWrap, {
          scale: 1,
          duration: 1,
          autoAlpha: 1
        });
    } else if (e.type === "mouseleave") {
        const tl = gsap.timeline();

        tl.to(venueImageWrap, {
          scale: 0,
          duration: 1,
          autoAlpha: 0,
        });
    }
}

function init() {
    initContainer();
}

window.addEventListener("DOMContentLoaded", function () {
    init();
});


















