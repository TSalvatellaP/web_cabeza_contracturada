document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".js-carousel");
  const prevButton = document.querySelector(".js-button_scroll_left");
  const nextButton = document.querySelector(".js-button_scroll_right");
  let index = 0;
  const items = document.querySelectorAll(".js-carousel_img");
  const totalItems = items.length;
  const itemWidth = items[0].clientWidth + 10;

  function scrollCarousel(direction) {
    if (direction === "next") {
      index = (index + 1) % totalItems;
    } else {
      index = (index - 1 + totalItems) % totalItems;
    }
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextButton.addEventListener("click", () => scrollCarousel("next"));
  prevButton.addEventListener("click", () => scrollCarousel("prev"));

});