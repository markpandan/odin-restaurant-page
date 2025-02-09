export default function menuPage() {
  const pageSection = document.createElement("section");
  pageSection.classList.add("page-section");

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

  return [pageSection, pageSectionTitle, selectionContainer];
}
