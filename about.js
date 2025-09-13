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






// <!-- section 3 -->

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector('.dropdown-toggle');

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('expanded');
  });
});





// <!-- section 4 -->


//   <!-- section 5 -->



document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".facts-section .tab");
  const contents = document.querySelectorAll(".facts-section .tab-content");
  const wrapper = document.querySelector(".facts-section .tabs-wrapper");
  const leftArrow = document.querySelector(".facts-section .arrow.left");
  const rightArrow = document.querySelector(".facts-section .arrow.right");

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  // Scroll tabs with arrows
  leftArrow.addEventListener("click", () => {
    wrapper.scrollBy({ left: -250, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    wrapper.scrollBy({ left: 250, behavior: "smooth" });
  });

  // Auto-hide arrows if not scrollable
  function toggleArrows() {
    leftArrow.style.visibility = wrapper.scrollLeft <= 0 ? "hidden" : "visible";
    rightArrow.style.visibility =
      wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth
        ? "hidden"
        : "visible";
  }

  wrapper.addEventListener("scroll", toggleArrows);
  window.addEventListener("resize", toggleArrows);
  toggleArrows();
});




//   <!-- section 6-->


function connectGreenhill() {
    alert("Thanks for your interest! We'll be in touch soon.");
    // Optional: redirect to a form
    // window.location.href = "your-form-page.html";
}


// <!-- /* section 7 */ -->