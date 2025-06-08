document.addEventListener('DOMContentLoaded', function() {

    // --- Active Navigation Link Highlighting ---
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const currentPath = window.location.pathname.split('/').pop(); // Gets "chapter1.html" or "index.html"

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // Handle index.html explicitly, or if currentPath is empty (root)
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰ Menu'; // Hamburger icon
    document.body.prepend(menuToggle); // Add to the beginning of body

    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            menuToggle.innerHTML = '× Close'; // Change to X when open
        } else {
            menuToggle.innerHTML = '☰ Menu';
        }
    });

    // Optional: Close sidebar when clicking a link or outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (sidebar.classList.contains('open') && !isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.remove('open');
            menuToggle.innerHTML = '☰ Menu';
        }
    });
     // Close sidebar when a nav link is clicked on mobile
    if (window.innerWidth <= 768) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    menuToggle.innerHTML = '☰ Menu';
                }
            });
        });
    }


    // --- Smooth Scroll for Internal Page Links (e.g., #section1-2) ---
    // This is often handled by html { scroll-behavior: smooth; } in CSS,
    // but can be enhanced or made more compatible with JS.
    // For this minimalist setup, CSS `scroll-behavior` is usually sufficient.

    console.log("Digital Tome script loaded.");
});
