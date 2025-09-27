
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

