function goToAnchor(anchor) {
  const offset = document.querySelector(anchor).offsetTop;
  const scrollOptions = {
    top: offset,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  document
    .querySelector(".back-top")
    .classList.toggle("hidden", window.pageYOffset <= 100);
});
