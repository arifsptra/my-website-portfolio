const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

burger.addEventListener("click", function () {
  this.classList.toggle("change");
  sidebar.classList.toggle("change");
  bgSidebar.classList.toggle("change");
});

bgSidebar.addEventListener("click", function () {
  this.classList.remove("change");
  sidebar.classList.remove("change");
  burger.classList.remove("change");
});

// for color navbar active
const about = document.querySelector(".about");
const education = document.querySelector(".education");
const skills = document.querySelector(".skills");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

about.addEventListener("click", function () {
  this.classList.toggle("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
});
education.addEventListener("click", function () {
  this.classList.toggle("active");
  about.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
});
skills.addEventListener("click", function () {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
});
portfolio.addEventListener("click", function () {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  contact.classList.remove("active");
});
contact.addEventListener("click", function () {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
});
