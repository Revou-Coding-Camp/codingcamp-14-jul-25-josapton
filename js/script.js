// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("DOMContentLoaded", () => {
  // 1. Prompt for user name and fill welcome message (only on index.html)
  const welcomeName = document.getElementById("welcome-name");
  if (welcomeName) {
    let userName = prompt("Please enter your name:");
    if (!userName) userName = "Guest";
    welcomeName.textContent = userName;
  }

  // 2. Form validation & result display (only on index.html)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = form.nama.value.trim();
      const dob = form.dob.value;
      const gender = form.gender.value;
      const message = form.message.value.trim();

      // Simple validation
      if (!nama || !dob || !gender || !message) {
        alert("Please fill all fields.");
        return;
      }

      // Build result HTML
      const currentTime = new Date().toString();
      let resultHTML = `<p>Current time: ${currentTime}</p>`;
      resultHTML += `<p>Name: ${nama}</p>`;
      resultHTML += `<p>Date of Birth: ${dob}</p>`;
      resultHTML += `<p>Gender: ${gender}</p>`;
      resultHTML += `<p>Message: ${message}</p>`;

      document.getElementById("form-result").innerHTML = resultHTML;
      form.reset();
    });
  }

  // 3. Navbar toggle (works on all pages)
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }
});