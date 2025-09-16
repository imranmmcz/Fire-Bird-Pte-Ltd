document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        // Toggle the 'is-open' class on the mobile nav menu
        mobileNav.classList.toggle('is-open');

        // Toggle the 'is-active' class for the hamburger icon animation
        hamburger.classList.toggle('is-active');
    });

    // Optional: Close the menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-open');
            hamburger.classList.remove('is-active');
        });
    });
});
