document.addEventListener("DOMContentLoaded", function () {
  let plusIcons = document.querySelectorAll(".plus-icon");
  let ansTexts = document.querySelectorAll(".ans-text");

  // Ensure the elements exist on the current page before attaching event listeners
  if (plusIcons.length && ansTexts.length) {
    plusIcons.forEach(function (plusIcon, index) {
      plusIcon.addEventListener("click", function () {
        if (ansTexts[index].classList.contains("show-question")) {
          ansTexts[index].classList.remove("show-question");
        } else {
          ansTexts[index].classList.add("show-question");
          ansTexts.forEach((ans, i) => {
            if (i !== index) ans.classList.remove("show-question");
          });
        }
      });
    });
  }

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
    "imgs/reviews2.jpeg",
    "imgs/reviews3.webp",
    "imgs/reviews4.jpg",
    "imgs/review1.jpeg",
  ];
  let paragraphsArr = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "just a random text showing the change between reviews",
    "Another random text but longer",
    "and that's another one which is in-between length",
  ];
  let jobs = ["Software Engineer", "UX designer", "Doctor", "Intern"];
  let i = 0;

  if (rightArrow) rightArrow.addEventListener("click", rightSlide);
  if (leftArrow) leftArrow.addEventListener("click", leftSlide);

  function rightSlide() {
    photo.src = photosReviewArr[i];
    paragraph.textContent = paragraphsArr[i];
    jobTitle.textContent = jobs[i];
    name.textContent = namesArr[i];
    ++i;
    if (i == jobs.length) i = 0;
  }

  function leftSlide() {
    photo.src = photosReviewArr[i];
    paragraph.textContent = paragraphsArr[i];
    jobTitle.textContent = jobs[i];
    name.textContent = namesArr[i];
    if (i == 0) i = jobs.length;
    --i;
  }

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function () {
      i = Math.floor(Math.random() * jobs.length);
      photo.src = photosReviewArr[i];
      paragraph.textContent = paragraphsArr[i];
      jobTitle.textContent = jobs[i];
      name.textContent = namesArr[i];
    });
  }

  let sidebarBurgerMenu = document.querySelector(".sidebar-burger-menu");
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector(".close-btn");

  if (sidebarBurgerMenu && sidebar && closeBtn) {
    sidebarBurgerMenu.addEventListener("click", sidebarMenu);
    closeBtn.addEventListener("click", closeSidebar);

    function sidebarMenu() {
      sidebar.classList.toggle("show-sidebar");
    }

    function closeSidebar() {
      sidebar.classList.remove("show-sidebar");
    }
  }
});

//  filtering menu based on category
const filterButtons = document.querySelectorAll(".food-flex button");
const foodItems = document.querySelectorAll(".overlay-food");

// end of container section
filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.target.className;

    foodItems.forEach((food) => {
      if (category === "all") {
        food.style.display = "block";
      } else {
        if (food.getAttribute("data-category") === category) {
          food.style.display = "block";
        } else {
          food.style.display = "none";
        }
      }
    });
  });
});
