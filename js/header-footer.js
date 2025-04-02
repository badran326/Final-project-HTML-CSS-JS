
// grab header and footer elements - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

// include header
mainHeader.innerHTML = `
<nav>
        <a href="../../Final-project-HTML-CSS-JS/index.html" class="logo">
          <img
            src="../../Final-project-HTML-CSS-JS/img/Nintendo.svg.png"
            alt="NES Logo"
            class="logo-img"
          />
        </a>
        <div id="nav-links" class="nav-links">
          <a href="../../Final-project-HTML-CSS-JS/index.html">Home</a>
          <a href="../../Final-project-HTML-CSS-JS/html/AboutUs.html">About</a>
          <a href="../../Final-project-HTML-CSS-JS/html/products.html">Games</a>
          <a href="../../Final-project-HTML-CSS-JS/html/ContactUs.html">Contact</a>
        </div>
        <img id="button-links" class="button-links" src="../../Final-project-HTML-CSS-JS/img/menu-button.1024x1024.png" alt="button-links">
      </nav>
`;

const buttonLinks = document.getElementById("button-links");
const nav = document.getElementById("nav-links");
const header = document.getElementById("main-header");

buttonLinks.onclick = function () {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "grid";
    header.style.height = "250px";
  } else {
    nav.style.display = "none";
    header.style.height = "70px";
  }
};

// Listen for window resize and reset styles
window.addEventListener("resize", function () {
  if (window.innerWidth > 730) {
    nav.style.display = ""; // Reset to CSS default
    header.style.height = "70px"; // Ensure header height is normal
  }
});

// include footer
// mainFooter.innerHTML = `
// <div class="footer">
//   <h2>Footer</h2>
// </div>
// `;


mainFooter.innerHTML = `
<div class="footer-left">

      <img class="logo" src="../../Final-project-HTML-CSS-JS/img/NES-Console-logo.png" alt="">

        <p class="footer-links">
          
          <a href="../../Final-project-HTML-CSS-JS/index.html"  class="link-1">Home</a>

          <a href="../../Final-project-HTML-CSS-JS/html/AboutUs.html">About</a>

          <a href="../../Final-project-HTML-CSS-JS/html/products.html">Games</a>
          
          <a href="../../Final-project-HTML-CSS-JS/html/ContactUs.html">Contact</a>
        </p>

        <p class="footer-company-name">Nintendo © 1981</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>11-1 Hokotate-cho</span> Kamitoba, Minami-ku, Kyoto, Japan</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1-800-255-3700</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@nintendo.com">support@nintendo.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          <h4>NES Global Expansion (1985)</h4>
          <p>Redesigned for Western markets featuring:</p>
          <ul>
              <li>10NES lockout chip for quality control</li>
              <li>"Game Pak" cartridges instead of "video games"</li>
              <li>ROB the robot bundled in North America</li>
          </ul>
        </p>

        <div class="footer-icons">

          <a href="https://www.facebook.com/NintendoAmerica/" id="fa-facebook" class="fa fa-facebook"></a>
          <a href="https://x.com/NintendoAmerica" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-github"></a>

        </div>
      </div>
`;

let index = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(step) {
  index = (index + step + slides.length) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

