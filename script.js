let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let photo = document.querySelector(".photo");
let paragraph = document.querySelector(".paragraph");
let name = document.querySelector(".name");
let jobTitle = document.querySelector(".job-title");
let surpriseBtn = document.querySelector(".surprise");
let namesArr = [
  "Abdelrhman Hossam",
  "Youssef Hossam",
  "Yahya Ehab",
  "Peter Jones",
];
let photosReviewArr = [
  "imgs//reviews2.jpeg",
  "imgs//reviews3.webp",
  "imgs//reviews4.jpg",
  "imgs//review1.jpeg",
];

let paragraphsArr = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga rerum perspiciatis nisi non molestiae tempora facere nostrum sit atque. Commodi numquam iusto sequi magnam ad esse nihil nemo quasi. Tempora.",
  "just a random text showing the change between reveiws",
  "Another random text but now i want to make it longer to show different between different texts",
  "and that's another one which will be between both reviwes in length",
];

let jobs = ["Software Engineer", "UX designer", "Doctor", "Intern"];
let i = 0;

if (rightArrow.addEventListener("click", rightSlide)) {
  i++;
} else if (leftArrow.addEventListener("click", leftSlide)) {
  i--;
}

function rightSlide() {
  photo.src = photosReviewArr[i];
  paragraph.textContent = paragraphsArr[i];
  jobTitle.textContent = jobs[i];
  name.textContent = namesArr[i];
  ++i;
  if (i == jobs.length) {
    i = 0;
  }
}

function leftSlide() {
  photo.src = photosReviewArr[i];
  paragraph.textContent = paragraphsArr[i];
  jobTitle.textContent = jobs[i];
  name.textContent = namesArr[i];
  if (i == 0) {
    i = jobs.length;
  }
  --i;
}

surpriseBtn.addEventListener("click", surpriseMe);

function surpriseMe() {
  i = Math.floor(Math.random(jobs.length) * jobs.length);
  console.log(Math.floor(Math.random(jobs.length) * jobs.length));
  photo.src = photosReviewArr[i];
  paragraph.textContent = paragraphsArr[i];
  jobTitle.textContent = jobs[i];
  name.textContent = namesArr[i];
}

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

// javascript for second page QA section
