function goToAnchor(anchor) {
  const offset = document.querySelector(anchor).offsetTop;
  const scrollOptions = {
    top: offset,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
}
