
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



// section 2 



  document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector(".academics-text");
    if (textBlock) {
      textBlock.style.opacity = 0;
      textBlock.style.transform = "translateY(30px)";

      setTimeout(() => {
        textBlock.style.transition = "all 1s ease";
        textBlock.style.opacity = 1;
        textBlock.style.transform = "translateY(0)";
      }, 300);
    }
  });



// <!-- section3  -->






// Subtle hover zoom effect for images
document.addEventListener("DOMContentLoaded", () => {
    // Optional: manually add hover zoom if not using :hover in CSS
    // But it's safer to leave it to CSS for performance
    const cards = document.querySelectorAll(".school-card img");

    cards.forEach(img => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
      });

      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });
  });








//   /* section 7  */




// Currently no JavaScript functionality needed for this footer
// But if you want to add interactive elements in future, you can add here

console.log("Footer loaded");
