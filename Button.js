const btnNavEl = document.querySelector(".Btn-Mobile-Nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("Nav-open");
});
