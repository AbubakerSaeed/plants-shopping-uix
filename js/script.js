/*
  ---------------------------------------------------
    Copyright (c) Abubaker Saeed (@AbubakerSaeed96)
                  (MIT LICENSE)

  Check it out on GitHub:
     github.com/AbubakerSaeed/plants-shopping-uix
  ---------------------------------------------------
*/

// GSAP
// ---------------------------------------
gsap.registerPlugin(Flip);

// HELPERS
// ---------------------------------------
let $ = (e) => document.querySelector(e);

// VARIABLES
// ---------------------------------------
let listContainer = $(".basket__list");
let items = gsap.utils.toArray(".item__image");

// HACKING
// ---------------------------------------
items.forEach((item) => {
  let itemContainer = item.parentNode;

  item.addEventListener("click", () => {
    let state = Flip.getState(item);

    const newContainer =
      item.parentNode === itemContainer ? listContainer : itemContainer;

    item.parentNode === itemContainer
      ? item.classList.add("basket__item")
      : item.classList.remove("basket__item");

    newContainer.appendChild(item);

    Flip.from(state, {
      duration: 1,
      ease: "power1.inOut",
      scale: true,
      zIndex: 10,
    });
  });
});

// On *Window* load
// Click on plant 1, plant 3, & plant 6
// ---------------------------------------
window.addEventListener("load", () => {
  items[0].click();
  setTimeout(() => {
    items[2].click();
  }, 1000);
  setTimeout(() => {
    items[5].click();
  }, 2000);
});
