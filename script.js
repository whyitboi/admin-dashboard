"use-strict";

let iconNames = ["star", "eye", "fork"];
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  let iconContainer = document.createElement("div");
  iconContainer.classList.add("card-icons");

  iconNames.forEach((name) => {
    let icon = document.createElement("img");
    icon.src = `./icons/${name}.svg`;

    iconContainer.appendChild(icon);
  });
  card.appendChild(iconContainer);
});
