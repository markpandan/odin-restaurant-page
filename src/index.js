import backgroundPage from "./pages/background.js";
import menuPage from "./pages/menu.js";

import "./styles.css";

const content = document.querySelector("#content");

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(...menuPage());
});

const backgroundButton = document.querySelector("#background-button");
backgroundButton.addEventListener("click", () => {
  content.textContent = "";
  console.log(...backgroundPage());
  content.append(...backgroundPage());
});

const contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", () => {});
