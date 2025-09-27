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
  const select = document.getElementById("facts-select");

  // Desktop tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");

      // Sync dropdown with active tab
      select.value = tab.dataset.target;
    });
  });

  // Mobile dropdown
  select.addEventListener("change", () => {
    const value = select.value;
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(value).classList.add("active");

    // Sync tabs with dropdown
    document.querySelector(`.tab[data-target="${value}"]`).classList.add("active");
  });
});




//   <!-- section 6-->


function connectGreenhill() {
    alert("Thanks for your interest! We'll be in touch soon.");
    // Optional: redirect to a form
    // window.location.href = "your-form-page.html";
}


// <!-- /* section 7 */ -->