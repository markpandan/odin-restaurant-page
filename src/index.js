import "./styles.css";

const content = document.querySelector("#content");

// const hero = document.createElement("div");
// hero.classList.add("hero");
// hero.textContent = "Hero Image";
// content.appendChild(hero);

const pageSection = document.createElement("section");
pageSection.classList.add("page-section");
content.appendChild(pageSection);

const pageSectionTitle = document.createElement("h1");
pageSectionTitle.textContent = "Restaurant Menus";
pageSection.appendChild(pageSectionTitle);

const selectionContainer = document.createElement("div");
selectionContainer.classList.add("selection-container");
pageSection.appendChild(selectionContainer);

for (let i = 1; i <= 6; i++) {
  const selection = document.createElement("div");
  selection.classList.add("selection");
  selection.textContent = i;

  selectionContainer.appendChild(selection);
}

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  console.log("Hello World");
});

const backgroundButton = document.querySelector("#background-button");
backgroundButton.addEventListener("click", () => {});

const contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", () => {});
