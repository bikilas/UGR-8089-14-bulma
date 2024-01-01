function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('is-active');
    
    const navbarLinks = dropdown.querySelector('.navbar-start');
    navbarLinks.style.display = navbarLinks.style.display === 'none' ? 'flex' : 'none';

    const menuButton = dropdown.querySelector('.navbar-burger');
    menuButton.style.display = menuButton.style.display === 'none' ? 'block' : 'none';
  }
  
  