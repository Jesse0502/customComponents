const navBar = document.querySelector(".navbar");
const navButton = document.createElement("button");
let navItems = document.createElement("div");
let home = document.createElement("button");
let contactUs = document.createElement("button");
let aboutUs = document.createElement("button");

const carousel = document.querySelector(".carousel");
let mainDiv = document.createElement("div");
let prevButton = document.createElement("button");
let frwdButton = document.createElement("button");
let navigationDiv = document.createElement("div");

let pic1 = "url('./assets/pic1.jpg')";
let pic2 = "url('./assets/pic2.jpg')";
let pic3 = "url('./assets/pic3.jpg')";

theNavbar();
carouselImg();

let navStatus = false;
function theNavbar() {
  navBar.appendChild(navButton);
  navButton.innerHTML =
    '<div class="navLine1"></div><br><div class="navLine2"></div><br><div class="navLine3"></div>';
  navButton.className = "toggleMenu";

  navButton.addEventListener("click", () => {
    if (!navStatus) {
      //opens

      navStatus = true;
      return navMenu();
    }
    if (navStatus) {
      //closes
      navStatus = false;
      return closeNav();
    }
  });
}
function navMenu() {
  navBar.appendChild(navItems);
  navItems.appendChild(home);
  navItems.appendChild(contactUs);
  navItems.appendChild(aboutUs);

  home.className = "items";
  contactUs.className = "items";
  aboutUs.className = "items";

  home.textContent = "Home";
  contactUs.textContent = "Contact Us";
  aboutUs.textContent = "About Us";

  navItems.className = "navItems";
  document.querySelector(".navLine2").classList.add("navHover1");
  document.querySelector(".navLine3").classList.add("navHover2");
  document.querySelector(".navLine1").classList.add("openNavLine1");
  document.querySelector(".navLine2").classList.add("openNavLine2");
  document.querySelector(".navLine3").classList.add("openNavLine3");
}
function closeNav() {
  document.querySelector(".navLine2").classList.remove("navHover1");
  document.querySelector(".navLine3").classList.remove("navHover2");
  document.querySelector(".navLine1").classList.remove("openNavLine1");
  document.querySelector(".navLine2").classList.remove("openNavLine2");
  document.querySelector(".navLine3").classList.remove("openNavLine3");
  navItems.remove();
  navStatus = false;
}

function carouselImg() {
  carousel.appendChild(mainDiv);
  mainDiv.appendChild(prevButton);
  mainDiv.appendChild(frwdButton);
  mainDiv.appendChild(navigationDiv);

  mainDiv.className = "mainDiv";
  prevButton.className = "prev";
  frwdButton.className = "frwd";
  navigationDiv.className = "carouselNav";

  prevButton.textContent = "<";
  frwdButton.textContent = ">";
  mainDiv.style.backgroundImage = pic1;

  navigationDiv.innerHTML =
    '<div class="nav1"></div><div class="nav2"></div><div class="nav3"></div>';
    document.querySelector(".nav1").style.backgroundColor = "white";
    document.querySelector(".nav3").style.backgroundColor = "rgb(216, 176, 216)";
    document.querySelector(".nav2").style.backgroundColor = "rgb(216, 176, 216)";
  let i = 0;
  prevButton.addEventListener("click", () => {
   i++;
    if (i == 0) {
      mainDiv.style.backgroundImage = pic3;
      document.querySelector(".nav1").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav2").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav3").style.backgroundColor = "white";
    }
    if (i == 1) {
      mainDiv.style.backgroundImage = pic2;
      document.querySelector(".nav3").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav1").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav2").style.backgroundColor = "white";
    }
    if (i == 2) {
      mainDiv.style.backgroundImage = pic1;
      document.querySelector(".nav1").style.backgroundColor = "white";
      document.querySelector(".nav3").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav2").style.backgroundColor = "rgb(216, 176, 216)";
    i = -1
    }
  });
  frwdButton.addEventListener("click", () => {
    i++; 
    if (i == 0) {
      mainDiv.style.backgroundImage = pic1;
      document.querySelector(".nav1").style.backgroundColor = "white";
      document.querySelector(".nav3").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav2").style.backgroundColor = "rgb(216, 176, 216)";
    }
    if (i == 1) {
      mainDiv.style.backgroundImage = pic2;
      document.querySelector(".nav2").style.backgroundColor = "white";
      document.querySelector(".nav3").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav1").style.backgroundColor = "rgb(216, 176, 216)";
    }
    if (i == 2) {
      mainDiv.style.backgroundImage = pic3;
      document.querySelector(".nav3").style.backgroundColor = "white";
      document.querySelector(".nav1").style.backgroundColor = "rgb(216, 176, 216)";
      document.querySelector(".nav2").style.backgroundColor = "rgb(216, 176, 216)";
      i = -1
    }
  });
}
