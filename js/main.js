const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


// image slice

const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll(".image_slider");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (window.screen.availWidth >= 1024){
    if (currentImg > imgsEl.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 1024}px)`;
    timeout = setTimeout(() => {
      currentImg++;
      updateImg();
    }, 3000);}
  else if (window.screen.availWidth >= 760){
    if (currentImg > imgsEl.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 768}px)`;
    timeout = setTimeout(() => {
      currentImg++;
      updateImg();
    }, 3000);
  }else{
    if (currentImg > imgsEl.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 300}px)`;
    timeout = setTimeout(() => {
      currentImg++;
      updateImg();
    }, 3000);
  }
}









