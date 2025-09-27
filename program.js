
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

document.querySelector('.hero-button').addEventListener('click', function () {
  // Replace with actual link or action
  window.location.href = "/connect";
});



// section 3
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-item.active');
    
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
    }

    item.classList.toggle('active');
  });
});


// section 4







// section 5
 function openBox(type) {
    alert("You clicked: " + type);
    // You can replace this with:
    // window.location.href = 'somefile.pdf';
  }
