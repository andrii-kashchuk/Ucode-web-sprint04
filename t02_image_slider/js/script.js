let offset = 0;

const sliderBlock = document.querySelector(".slider");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

function slideShow() {
    if (offset >= -1280) {
        offset += -640;
        sliderBlock.style.left = offset + "px";
    } else {
        offset = 0;
        sliderBlock.style.left = offset + "px";
    }

    setTimeout(() => {
        slideShow();
    }, 3000);
}

slideShow();

previousButton.addEventListener("click", function () {
    if (offset < 0) {
        offset += +640;
        sliderBlock.style.left = offset + "px";
    } else {
        offset = -1920;
        sliderBlock.style.left = offset + "px";
    }
}, false);

nextButton.addEventListener("click", function () {
    if (offset >= -1280) {
    offset += -640;
    sliderBlock.style.left = offset + "px";
    } else {
        offset = 0;
        sliderBlock.style.left = offset + "px";
    }
}, false);