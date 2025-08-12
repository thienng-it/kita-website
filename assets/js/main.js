/*
==============================================
MAIN.JS (OPTIMIZED)
- All scripts wrapped in DOMContentLoaded.
- Modular functions for better organization.
- Added sticky header logic.
==============================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize Lucide Icons ---
    lucide.createIcons();

    // --- Sticky Header Function ---
    const handleStickyHeader = () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                header.classList.remove('header-default');
            } else {
                header.classList.remove('header-scrolled');
                header.classList.add('header-default');
            }
        }
    };

    // --- Mobile Menu Toggle ---
    const handleMobileMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    };

    // --- Back to Top Button ---
    const handleBackToTop = () => {
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
                    backToTopButton.classList.add('opacity-100');
                } else {
                    backToTopButton.classList.add('opacity-0', 'pointer-events-none');
                    backToTopButton.classList.remove('opacity-100');
                }
            });
        }
    };
    
    // --- Intersection Observer for Animations ---
    const handleScrollAnimations = () => {
        const sections = document.querySelectorAll('.fade-in-section');
        if (sections.length > 0) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach(section => observer.observe(section));
        }
    };

    // --- Initialize all features ---
    handleMobileMenu();
    handleStickyHeader();
    handleBackToTop();
    handleScrollAnimations();

    // --- Add event listeners ---
    window.addEventListener('scroll', handleStickyHeader);

});
