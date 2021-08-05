// tabs
let tab = document.querySelectorAll(".featured__tabs-item");
let info = document.querySelector(".featured__tabs-nav");
let content = document.querySelectorAll(".featured__tabs-list");

function hideTabContent(a) {
  for (let i = a; i < content.length; i++) {
    content[i].classList.remove("show");
    content[i].classList.add("hide");
    tab[i].classList.remove("featured__tabs-item-active");
  }
}
hideTabContent(1);
function showTabContent(b) {
  if (content[b].classList.contains("hide")) {
    content[b].classList.remove("hide");
    content[b].classList.add("show");
    tab[b].classList.add("featured__tabs-item-active");
  }
}
info.addEventListener("click", function (event) {
  let target = event.target;
  if (target && target.classList.contains("featured__tabs-item")) {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
});

// tabs 2
let blogTab = document.querySelectorAll(".blog__items");
let blogInfo = document.querySelector(".blog__list");
let blogContent = document.querySelectorAll(".blog__card-group");

function hideBlogTabContent(a) {
  for (let i = a; i < blogContent.length; i++) {
    blogContent[i].classList.remove("show");
    blogContent[i].classList.add("hide");
    blogTab[i].classList.remove("blog__items-active");
  }
}
hideBlogTabContent(1);
function showBlogTabContent(b) {
  if (blogContent[b].classList.contains("hide")) {
    blogContent[b].classList.remove("hide");
    blogContent[b].classList.add("show");
    blogTab[b].classList.add("blog__items-active");
  }
}
blogInfo.addEventListener("click", function (event) {
  let target = event.target;
  if (target && target.classList.contains("blog__items")) {
    for (let i = 0; i < blogTab.length; i++) {
      if (target == blogTab[i]) {
        hideBlogTabContent(0);
        showBlogTabContent(i);
        break;
      }
    }
  }
});
// включаем слайдер
new ChiefSlider(".slider", {
  autoplay: true,
  interval: 5000,
});
