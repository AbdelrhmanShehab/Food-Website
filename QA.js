let plusIcons = document.querySelectorAll(".plus-icon");
let ansTexts = document.querySelectorAll(".ans-text");
let i;
plusIcons.forEach(function (plusIcon, index) {
  plusIcon.addEventListener("click", function () {
    if (ansTexts[index].classList.contains("show-question")) {
      ansTexts[index].classList.remove("show-question");
    } else {
      ansTexts[index].classList.add("show-question");
      for (i = 0; i < ansTexts.length; i++) {
        if (i == index) continue;
        ansTexts[i].classList.remove("show-question");
      }
    }
  });
});

// javascript for menu and sidebar

let sidebarBurgerMenu = document.querySelector(".sidebar-burger-menu");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");
function scaleMenu() {
  sidebarBurgerMenu.style.transition = "all .8s ease-in-out";
  sidebarBurgerMenu.style.transform = "scale(2.4)";
  setTimeout(scaleReverse, 500);
}
function scaleReverse() {
  sidebarBurgerMenu.style.transition = "all .8s ease-in-out";
  sidebarBurgerMenu.style.transform = "scale(1)";
  setTimeout(scaleMenu, 500);
}
setTimeout(scaleMenu, 500);

sidebarBurgerMenu.addEventListener("click", sidebarMenu);

function sidebarMenu() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
}

closeBtn.addEventListener("click", closeSidebar);

function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
}
