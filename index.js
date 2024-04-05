document.addEventListener("DOMContentLoaded", function () {
  // Check if user is logged in
  var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Hide or show pages based on login status
  var loginPage = document.getElementById("loginPage");
  var registrationPage = document.getElementById("registrationPage");
  var dashboardPage = document.getElementById("dashboardPage");

  if (isLoggedIn) {
    loginPage.style.display = "none";
    registrationPage.style.display = "none";
    dashboardPage.style.display = "block";
  } else {
    loginPage.style.display = "block";
    registrationPage.style.display = "none";
    dashboardPage.style.display = "none";
  }

  // Handle login form submission
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Perform login authentication here

      // For demonstration purpose, set isLoggedIn to true
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    });

  // Handle logout link click
  document
    .getElementById("logoutLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      // Perform logout action here

      // For demonstration purpose, set isLoggedIn to false
      localStorage.setItem("isLoggedIn", "false");
      window.location.href = "index.html";
    });
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
