function goToAnchor(anchor) {
  const offset = document.querySelector(anchor).offsetTop;
  const scrollOptions = {
    top: offset,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    const bottomTwo = document.getElementById("bottomTwo");
    bottomTwo.classList.remove("center");
  }
});
