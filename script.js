
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});







const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.hero-dots span');
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000); // auto-slide every 5s

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Click dots to navigate
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval); // stop auto-slide on manual navigation
    let index = parseInt(dot.getAttribute('data-slide'));
    showSlide(index);
    slideInterval = setInterval(nextSlide, 5000); // restart auto-slide
  });
});








// /* <!-- section 4--> */



const tabs = document.querySelectorAll(".tab");
const circles = document.querySelectorAll(".circle");
const contentBoxes = document.querySelectorAll(".content-box");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Reset active states
    circles.forEach(c => c.classList.remove("active"));
    contentBoxes.forEach(box => box.classList.remove("active"));

    // Activate clicked tab
    circles[index].classList.add("active");
    contentBoxes[index].classList.add("active");
  });
});






// <!-- section 5-->


const tSlides = document.querySelectorAll(".t-slide");
const tDots = document.querySelectorAll(".t-dot");
let tCurrent = 0;

function showTSlide(index) {
  tSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    tDots[i].classList.toggle("active", i === index);
  });
  tCurrent = index;
}

// Dot click
tDots.forEach((dot, i) => {
  dot.addEventListener("click", () => showTSlide(i));
});

// Auto slide
setInterval(() => {
  let next = (tCurrent + 1) % tSlides.length;
  showTSlide(next);
}, 5000);


// section  7


  document.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('video');
    const btn = card.querySelector('.play-btn');

    btn.addEventListener('click', () => {
      video.play();
      btn.style.display = 'none'; // hide play button

      // Pause other videos when one plays
      document.querySelectorAll('.video-card video').forEach(other => {
        if (other !== video) {
          other.pause();
          other.parentElement.querySelector('.play-btn').style.display = 'block';
        }
      });
    });

    // Show button again when video ends
    video.addEventListener('ended', () => {
      btn.style.display = 'block';
    });
  });

