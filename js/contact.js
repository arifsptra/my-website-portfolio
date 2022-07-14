const scriptURL = "https://script.google.com/macros/s/AKfycbwLgvD299NMTYfBhDHkk12h2HU14IZz-TiGLOjtHHotVRmOu5qom3mP26-qKwHC8ey0Kw/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
