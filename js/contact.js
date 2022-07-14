const scriptURL = "https://script.google.com/macros/s/AKfycbwLgvD299NMTYfBhDHkk12h2HU14IZz-TiGLOjtHHotVRmOu5qom3mP26-qKwHC8ey0Kw/exec";
const form = document.forms["contact-form"];
const btnSubmit = document.querySelector(".submit");
const btnLoading = document.querySelector(".loading");
const myAlert = document.querySelector(".myAlert");
const closeMyAlert = document.querySelector(".close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("hide");
  btnSubmit.classList.toggle("hide");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("hide");
      btnSubmit.classList.toggle("hide");
      myAlert.classList.toggle("hide");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
closeMyAlert.addEventListener("click", function () {
  myAlert.classList.toggle("hide");
});
