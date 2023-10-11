
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

