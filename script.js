const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const btnRead = document.getElementById('btn-read');
const btnDown = document.getElementById('btn-down');
const aboutMore = document.querySelector('.about-more');
const aboutContent = document.querySelector('.about-content');
const headingHide = document.querySelector('.heading-hide');
const backBtn = document.getElementById('back-button')
const nextBtn = document.getElementById('next-button')
const galleryContainer = document.querySelector('.gallery');
const imagePreview = document.getElementById('image-preview');


const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 50, 
  backSpeed: 50, 
  backDelay: 1500,
  loop: true,
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

btnRead.addEventListener('click', function(event) {
  event.preventDefault();

  aboutMore.style.transform = 'translateY(0%)';
  aboutMore.style.zIndex = '1';
  aboutContent.style.zIndex = '1';
  headingHide.style.opacity = '0';
});

function hideAboutMore() {
  aboutMore.style.transform = 'translateY(100%)';
  aboutContent.style.zIndex = '1';
  aboutMore.style.zIndex = '0';
  headingHide.style.opacity = '1';
}

btnDown.addEventListener('click', function(event) {
  event.preventDefault();

  hideAboutMore();
});

const aboutSection = document.getElementById("about"); 
window.addEventListener("scroll", () => {
 
  const threshold = aboutSection.offsetHeight + aboutSection.offsetTop - window.innerHeight;

  if (window.scrollY > threshold) {
    hideAboutMore();
  }
});

galleryContainer.addEventListener('wheel', event => {
  event.preventDefault();
  galleryContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener('click', () => {
  galleryContainer.scrollLeft += 337;
});

backBtn.addEventListener('click', () => {
  galleryContainer.scrollLeft -= 337;
});


galleryContainer.querySelectorAll('img').forEach(img => {
  img.addEventListener('mouseenter', function () {
    if (window.innerWidth > 768) {
      const clonedImage = img.cloneNode(true);
    
      clonedImage.style.maxWidth = '100%'; 
      clonedImage.style.maxHeight = '80%'; 
      clonedImage.style.filter = 'grayscale(0)';
      clonedImage.style.transform = 'scale(1.1)';
      clonedImage.style.cursor = 'zoom-out';
      clonedImage.style.position = 'absolute';
      clonedImage.style.top = '10rem';
      clonedImage.style.left = '9rem';
      clonedImage.style.zIndex = '1';


      imagePreview.innerHTML = ''; 
      imagePreview.appendChild(clonedImage);
    }
    else{
      document.querySelector('#image-preview').style = 'none';
    }
  });

  img.addEventListener('mouseleave', function () {
      imagePreview.innerHTML = '';
  });
});

const supportsHover = window.matchMedia('(hover: hover)').matches;

if (supportsHover) {
  galleryContainer.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function () {
        const clonedImage = img.cloneNode(true);
      
        clonedImage.style.maxWidth = '100%'; 
        clonedImage.style.maxHeight = '80%'; 
        clonedImage.style.filter = 'grayscale(0)';
        clonedImage.style.transform = 'scale(1.1)';
        clonedImage.style.cursor = 'zoom-out';
        clonedImage.style.position = 'absolute';
        clonedImage.style.top = '10rem';
        clonedImage.style.left = '9rem';
        clonedImage.style.zIndex = '1';
   
        imagePreview.innerHTML = ''; 
        imagePreview.appendChild(clonedImage);
      
    });
  
    img.addEventListener('mouseleave', function () {
        imagePreview.innerHTML = '';
    });
  });
} else {
  document.querySelector('#image-preview').style.display = 'none';
}
