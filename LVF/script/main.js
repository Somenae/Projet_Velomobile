import footer from "./footer.js";
import contactForm from "./form.js";

new contactForm();

const burger = document.getElementById("icons");
const nav = document.getElementById("navbar");

burger.onclick = () => {
  if (nav.classList.contains("activeBurger")) {
    nav.classList.remove("activeBurger");
  } else {
    nav.classList.add("activeBurger");
  }
};

new footer();
