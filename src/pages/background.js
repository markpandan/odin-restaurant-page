export default function backgroundPage() {
  const historyContainer = document.createElement("section");
  historyContainer.classList.add("history-container");

  const historyContainer2 = document.createElement("section");
  historyContainer2.classList.add("history-container");

  const historyDescription = document.createElement("article");
  historyDescription.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quasi atque voluptatum provident aut exercitationem delectus fugit. Ad excepturi quia debitis quod, ut, facere quasi, repudiandae facilis fugiat magnam esse.";

  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile-container");

  const profileImg = document.createElement("div");
  profileImg.classList.add("profile-img");
  profileContainer.appendChild(profileImg);

  const line = document.createElement("hr");
  line.style.width = "100%";
  line.style.margin = "auto";

  historyContainer.append(profileContainer, historyDescription);
  historyContainer2.append(
    historyDescription.cloneNode(true),
    profileContainer.cloneNode(true)
  );

  return [historyContainer, line, historyContainer2];
}
