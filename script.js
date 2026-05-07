document.addEventListener('DOMContentLoaded', () => {
    // ========================= */
    // 1. HEADER SCROLL EFFECT
    // ========================= */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========================= */
    // 2. ACTIVE LINK ON SCROLL
    // ========================= */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ========================= */
    // 3. SMOOTH SCROLLING FOR NAVIGATION
    // ========================= */
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================= */
    // 4. INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card, .artist-card:not(.hidden), .stat, .contact-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // ========================= */
    // 5. LOAD MORE ARTISTS FUNCTIONALITY
    // ========================= */
    const loadMoreBtn = document.getElementById('load-more-btn');
    const artistsGrid = document.getElementById('artists-grid');
    let allArtistsVisible = false;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const hiddenArtists = document.querySelectorAll('.artist-card.hidden');
            
            if (!allArtistsVisible) {
                // Show all hidden artists
                hiddenArtists.forEach((artist, index) => {
                    setTimeout(() => {
                        artist.classList.remove('hidden');
                        artist.style.animation = 'slideIn 0.5s ease-out';
                        observer.observe(artist);
                    }, index * 100);
                });
                
                loadMoreBtn.textContent = 'إخفاء الفنانين';
                allArtistsVisible = true;
            } else {
                // Hide artists again
                hiddenArtists.forEach((artist, index) => {
                    setTimeout(() => {
                        artist.classList.add('hidden');
                    }, index * 100);
                });
                
                loadMoreBtn.textContent = 'عرض المزيد من الفنانين';
                allArtistsVisible = false;
            }
        });
    }

    // ========================= */
    // 6. SMOOTH SCROLL FOR BUTTONS
    // ========================= */
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================= */
    // 7. PARALLAX EFFECT FOR BACKGROUND
    // ========================= */
    const bgLight = document.querySelector('.bg-light');
    const bgLight2 = document.querySelector('.bg-light2');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (bgLight) {
            bgLight.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
        if (bgLight2) {
            bgLight2.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });

    // ========================= */
    // 8. CONTACT FORM INTERACTIONS
    // ========================= */
    const contactLinks = document.querySelectorAll('.contact-links a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================= */
    // 9. ARTIST CARD HOVER EFFECT
    // ========================= */
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================= */
    // 10. STAT COUNTER ANIMATION (Optional)
    // ========================= */
    const stats = document.querySelectorAll('.stat h2');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                stats.forEach(stat => {
                    stat.style.animation = 'fadeInUp 0.8s ease-out';
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// ========================= */
// UTILITY: Add keyboard navigation support
// ========================= */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or overlays if needed
    }
});
