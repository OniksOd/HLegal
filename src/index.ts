import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../scss/styles.scss";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

(function () {
  const isOpen = document.querySelector(".nav__burger");
  const isClose = document.querySelector(".nav__icon-close");
  const navigation = document.querySelector(".header");

  if (isOpen && navigation) {
    isOpen.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  if (isClose && navigation) {
    isClose.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (
      navigation &&
      !navigation.contains(event.target) &&
      isOpen &&
      !isOpen.contains(event.target)
    ) {
      navigation.classList.remove("active");
    }
  });
})();
(function () {
  const tabs = document.querySelectorAll(".tabs__item");
  const contents = document.querySelectorAll(".tabs__content-text");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((n) => n.classList.remove("active"));
      contents.forEach((m) => m.classList.remove("active"));
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });
})();
