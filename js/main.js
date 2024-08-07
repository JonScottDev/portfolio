// Toggle Top Button
window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("top-btn");

  if (window.scrollY > 0) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
});
