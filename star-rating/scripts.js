let stars = document.querySelectorAll(".star");

let currentRating = -1;
let rated = false;

stars.forEach((star) => {
  star.addEventListener("mouseover", function (e) {
    let element = e.target;
    currentRating = element.dataset.star;
    updateRating();
  });

  star.addEventListener("mouseout", function (e) {
    currentRating = -1;
    updateRating();
  });

  star.addEventListener("click", function (e) {
    rated = true;
    currentRating = e.target.dataset.star;
  });
});

function updateRating() {
  if (!rated) {
    stars.forEach((star, index) => {
      if (currentRating >= index) {
        star.classList.add("golden");
      } else {
        star.classList.remove("golden");
      }
    });
  }
}
