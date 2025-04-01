
// grab header and footer elements - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

// include header
mainHeader.innerHTML = `
<nav>
        <a href="/html/index.html" class="logo">
          <img
            src="/img/Nintendo.svg.png"
            alt="NES Logo"
            class="logo-img"
          />
        </a>
        <div id="nav-links" class="nav-links">
          <a href="/html/index.html">Home</a>
          <a href="/html/AboutUs.html">About</a>
          <a href="/html/products.html">Games</a>
          <a href="/html/ContactUs.html">Contact</a>
        </div>
        <img id="button-links" class="button-links" src="/img/menu-button.1024x1024.png" alt="button-links">
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

      <img class="logo" src="/img/NES-Console-logo.png" alt="">

        <p class="footer-links">
          
          <a href="/html/index.html"  class="link-1">Home</a>

          <a href="/html/AboutUs.html">About</a>

          <a href="/html/products.html">Games</a>
          
          <a href="/html/ContactUs.html">Contact</a>
        </p>

        <p class="footer-company-name">Company Name © 2015</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@nintendo.com">support@nintendo.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#" id="fa-facebook" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
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

