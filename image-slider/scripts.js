(function () {
  const slide = document.slide;
  const slideWrap = document.querySelector(".slider-wrapper");
  const slides = document.querySelector(".slides");
  const prevButton = document.querySelector(".navigation-prev");
  const nextButton = document.querySelector(".navigation-next");

  let loopFlag = null;

  let currentIndex = 0;

  const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg",
  ];

  prevButton.addEventListener("click", prev);
  nextButton.addEventListener("click", next);

  slideWrap.addEventListener("mouseover", () => {
    clearInterval(loopFlag);
  });

  slideWrap.addEventListener("mouseout", () => {
    loop();
  });

  setCurrentImage();
  loop();

  function setCurrentImage() {
    slide.src = images[currentIndex];
  }

  function next() {
    currentIndex++;
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    setCurrentImage();
  }
  function prev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    setCurrentImage();
  }
  function loop() {
    loopFlag = setInterval(next, 2000);
  }
})();
