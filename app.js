function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
     sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
// JS for tab switching
function showMenu(n) {
  var tabs = document.querySelectorAll('.mega-nav-tab');
  var drops = document.querySelectorAll('.mega-drop');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === n);
    drops[i].style.display = i === n ? 'flex' : 'none';
  });
}
// Optional: set default tab on load
showMenu(0);
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
     sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// JS for tab switching
function showMenu(n) {
  var tabs = document.querySelectorAll('.mega-nav-tab');
  var drops = document.querySelectorAll('.mega-drop');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === n);
    drops[i].style.display = i === n ? 'flex' : 'none';
  });
}

// Set default tab on load
showMenu(0);

// Featured Profile Mobile Carousel - FIXED VERSION
function initProfileCarousel() {
  const container = document.getElementById('profileCarousel');
  const prevBtn = document.getElementById('profilePrev');
  const nextBtn = document.getElementById('profileNext');
  const dotsContainer = document.getElementById('profileDots');
  
  // Check if elements exist
  if (!container || !prevBtn || !nextBtn || !dotsContainer) {
    console.log('Carousel elements not found');
    return;
  }
  
  const profiles = container.querySelectorAll('.pro1');
  
  if (!profiles.length) {
    console.log('No profiles found');
    return;
  }
  
  let currentIndex = 0;

  // Create dot indicators
  profiles.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'profile-dot';
    dot.setAttribute('aria-label', `Go to profile ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.profile-dot');

  function updateCarousel() {
    // Remove active class from all profiles
    profiles.forEach(profile => profile.classList.remove('active'));
    
    // Add active class to current profile
    profiles[currentIndex].classList.add('active');
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === profiles.length - 1;
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < profiles.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Initialize
  updateCarousel();
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProfileCarousel);
} else {
  initProfileCarousel();
}
