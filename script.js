document.addEventListener('DOMContentLoaded', () => {
    // ========================= */
    // 1. HEADER SCROLL EFFECT
    // ========================= */
    const header = document.querySelector('header');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });

    // ========================= */
    // 2. ACTIVE LINK ON SCROLL
    // ========================= */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const updateActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);

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
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, observerOptions);

    // Animate cards and stats
    const animatedElements = document.querySelectorAll('.card, .artist-card:not(.hidden), .stat, .contact-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
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
                        artist.style.animation = 'slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                        observer.observe(artist);
                    }, index * 100);
                });
                
                loadMoreBtn.textContent = 'إخفاء الفنانين';
                loadMoreBtn.style.transform = 'scale(1.05)';
                allArtistsVisible = true;
            } else {
                // Hide artists again
                hiddenArtists.forEach((artist, index) => {
                    setTimeout(() => {
                        artist.classList.add('hidden');
                    }, index * 100);
                });
                
                loadMoreBtn.textContent = 'عرض المزيد من الفنانين';
                loadMoreBtn.style.transform = 'scale(1)';
                allArtistsVisible = false;
            }
        });

        // Button hover effect
        loadMoreBtn.addEventListener('mouseenter', () => {
            if (!allArtistsVisible) {
                loadMoreBtn.style.transform = 'translateY(-4px) scale(1.02)';
            }
        });

        loadMoreBtn.addEventListener('mouseleave', () => {
            if (!allArtistsVisible) {
                loadMoreBtn.style.transform = 'scale(1)';
            }
        });
    }

    // ========================= */
    // 6. SMOOTH SCROLL FOR BUTTONS
    // ========================= */
    const allButtons = document.querySelectorAll('.btn, .btn-load-more');
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
            bgLight.style.transform = `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0001})`;
        }
        if (bgLight2) {
            bgLight2.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.00005})`;
        }
    });

    // ========================= */
    // 8. CONTACT FORM INTERACTIONS
    // ========================= */
    const contactLinks = document.querySelectorAll('.contact-links a');
    contactLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
            contactLinks.forEach((otherLink, otherIndex) => {
                if (otherIndex !== index) {
                    otherLink.style.opacity = '0.6';
                }
            });
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            contactLinks.forEach((otherLink) => {
                otherLink.style.opacity = '1';
            });
        });
    });

    // ========================= */
    // 9. CARD HOVER EFFECTS
    // ========================= */
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            cards.forEach(c => {
                if (c !== this) {
                    c.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            cards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // ========================= */
    // 10. ARTIST CARD HOVER EFFECT
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
    // 11. STAT COUNTER ANIMATION
    // ========================= */
    const stats = document.querySelectorAll('.stat h2');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                stats.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.animation = 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // ========================= */
    // 12. MOUSE MOVE EFFECT ON HERO
    // ========================= */
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const bgLight = document.querySelector('.bg-light');
            if (bgLight) {
                const x = (e.clientX / window.innerWidth) * 20;
                const y = (e.clientY / window.innerHeight) * 20;
                bgLight.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        heroSection.addEventListener('mouseleave', () => {
            const bgLight = document.querySelector('.bg-light');
            if (bgLight) {
                bgLight.style.transform = 'translate(0, 0)';
            }
        });
    }

    // ========================= */
    // 13. KEYBOARD NAVIGATION
    // ========================= */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals if needed
        }
        
        // Arrow key navigation
        if (e.key === 'ArrowDown') {
            window.scrollBy({ top: 100, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp') {
            window.scrollBy({ top: -100, behavior: 'smooth' });
        }
    });

    // ========================= */
    // 14. RIPPLE EFFECT ON BUTTONS
    // ========================= */
    const buttons = document.querySelectorAll('.btn, .btn-load-more, .contact-links a');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Remove previous ripple
            const previousRipple = this.querySelector('.ripple');
            if (previousRipple) {
                previousRipple.remove();
            }

            this.appendChild(ripple);
        });
    });

    // ========================= */
    // 15. SCROLL TO TOP BUTTON (Optional)
    // ========================= */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            // You can add a scroll-to-top button here if needed
        }
    });

    // ========================= */
    // 16. PERFORMANCE: Lazy load images
    // ========================= */
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
});

// ========================= */
// UTILITY: Page load animation
// ========================= */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial page opacity
document.body.style.opacity = '0.95';
// =========================
// ARTIST PROFILE SYSTEM
// =========================

function openArtist(type, spotifyId, name = "Spotify") {

    const profile = document.getElementById("artist-profile");

    let embedUrl = "";

    // Artist Profile
    if(type === "artist"){
        embedUrl = `https://open.spotify.com/embed/artist/${spotifyId}`;
    }

    // Playlist
    else if(type === "playlist"){
        embedUrl = `https://open.spotify.com/embed/playlist/${spotifyId}`;
    }

    profile.innerHTML = `

        <button class="btn" onclick="closeArtist()">
            رجوع
        </button>

        <h2>${name}</h2>

        <iframe
            style="border-radius:12px; margin-top:20px;"
            src="${embedUrl}"
            width="100%"
            height="600"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>

    `;

    profile.style.display = "block";

    window.scrollTo({
        top: profile.offsetTop - 100,
        behavior: "smooth"
    });
}

function closeArtist() {

    const profile = document.getElementById("artist-profile");

    profile.style.display = "none";

    profile.innerHTML = "";
}


