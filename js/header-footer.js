
// grab header and footer elements - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

// include header
mainHeader.innerHTML = `
<div class="header">
<img class="logo" src="img/logo4.png">
<h1>My Website</h1>
<p>A <b>responsive</b> website created by me.</p>
</div>

<nav class="navbar">
<a href="Home.html" class="active"><img src="img/home-icon1.png" ></a>
<a href="about-us.html">About</a>
<a href="products.html">Products</a>
<a href="services.html">Srvices</a>
<a href="#">Contact Us</a>
<a href="#" class="right"><img src="img/shopping-cart-icon.png" ></a>
</nav>
`;

// include footer
// mainFooter.innerHTML = `
// <div class="footer">
//   <h2>Footer</h2>
// </div>
// `;


mainFooter.innerHTML = `
<footer class="footer-distributed">

      <div class="footer-left">

      <img class="logo" src="/img/NES-Console-logo.png" alt="">

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
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

    </footer>
`;

let index = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(step) {
  index = (index + step + slides.length) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

