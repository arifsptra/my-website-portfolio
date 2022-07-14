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

about.addEventListener("click", function (event) {
  this.classList.toggle("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
education.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
skills.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
portfolio.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  contact.classList.remove("active");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
contact.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  education.classList.remove("active");
  skills.classList.remove("active");
  portfolio.classList.remove("active");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
