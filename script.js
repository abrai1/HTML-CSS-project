const images = document.querySelector("#images");
const imageElements = images.children;
let currentIndex = 0;

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, imageElements.length - 1);
  } else if (event.deltaY < 0) {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  images.style.transform = `translateY(-${currentIndex * 100}vh)`;
});
