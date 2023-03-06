let homeEl = document.getElementById("home")
let nameEl = document.getElementById("name")
let aboutEl = document.getElementById("about-nav")
let projectsEl = document.getElementById("projects-nav")
let contactEl = document.getElementById("contact-nav")

// detects what page you're in
window.onscroll = function() {
  // @var int totalPageHeight
  var totalPageHeight = document.body.scrollHeight; 

  // @var int scrollPoint
  var scrollPoint = window.scrollY + window.innerHeight;

  if (scrollPoint < 1000) { // if at first page
    removeAllClass();
  }
  else if (scrollPoint >= 1000 && scrollPoint < 2000) { // if at second page
    removeAllClass();
    aboutEl.classList.add('current-page');
  }
  else if (scrollPoint >= 2000 && scrollPoint < 3000) { // if at third page
    removeAllClass();
    projectsEl.classList.add('current-page');
  }
  else if (scrollPoint >= 3000) { // if at fourth page
    removeAllClass();
    contactEl.classList.add('current-page');
  }
}

// remove all class func
function removeAllClass() {
  aboutEl.classList.remove('current-page');
  projectsEl.classList.remove('current-page');
  contactEl.classList.remove('current-page');
}

// nav bar event listener
window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  var scrollPoint = window.scrollY + window.innerHeight;
  header.classList.toggle("sticky", window.scrollY > 0)
  if(scrollPoint >= 1000) {
    homeEl.src="sources/images/home.png";
  }
  else {
    homeEl.src="sources/images/home-filled.png";
  }
})