// Simple subtle effects for hero section image only
document.addEventListener('DOMContentLoaded', function() {
    // Create style element for subtle animations
    const style = document.createElement('style');
    style.textContent = `
        .hero-profile-container {
            animation: gentle-float 8s ease-in-out infinite;
        }
        
        .hero-profile-frame {
            animation: gentle-border-pulse 4s ease-in-out infinite;
        }
        
        .hero-profile-image {
            animation: gentle-scale 12s ease-in-out infinite;
            transition: all 0.5s ease;
        }
        
        .hero-profile-image:hover {
            animation: gentle-scale 6s ease-in-out infinite;
        }

        @keyframes gentle-float {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) rotate(0deg); 
            }
            25% { 
                transform: translateY(-6px) translateX(2px) rotate(0.3deg); 
            }
            50% { 
                transform: translateY(-8px) translateX(-2px) rotate(-0.2deg); 
            }
            75% { 
                transform: translateY(-4px) translateX(1px) rotate(0.1deg); 
            }
        }

        @keyframes gentle-border-pulse {
            0%, 100% { 
                border-color: rgba(255, 255, 255, 0.3);
                box-shadow: 0 0 0 rgba(126, 116, 241, 0.1);
            }
            50% { 
                border-color: rgba(255, 255, 255, 0.6);
                box-shadow: 0 0 20px rgba(126, 116, 241, 0.2);
            }
        }

        @keyframes gentle-scale {
            0%, 100% { 
                transform: scale(1);
                filter: brightness(1);
            }
            50% { 
                transform: scale(1.02);
                filter: brightness(1.05);
            }
        }

        /* Additional subtle movement effects */
        .hero-profile-container::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: gentle-glow 6s ease-in-out infinite;
            z-index: -1;
        }

        @keyframes gentle-glow {
            0%, 100% { 
                opacity: 0.3;
                transform: scale(1);
            }
            50% { 
                opacity: 0.6;
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // Find hero section profile image
    const heroSection = document.querySelector('section#home, [class*="gradient-bg"]');
    
    if (heroSection) {
        const profileContainers = heroSection.querySelectorAll('.w-48, .w-56, .w-64, .w-80, [class*="rounded-full"]');
        
        profileContainers.forEach(container => {
            const image = container.querySelector('img');
            if (image && (image.alt.includes('AM Sazid') || image.src.includes('WhatsApp') || image.src.includes('profile') || image.classList.contains('object-cover'))) {
                // Add subtle animation classes
                container.classList.add('hero-profile-container', 'hero-profile-frame');
                image.classList.add('hero-profile-image');
                
                // Add relative positioning for the container
                container.style.position = 'relative';
                container.style.overflow = 'visible';
                
                console.log('Hero profile image animations applied successfully!');
            }
        });

        // If no image found, try to find by parent structure
        if (profileContainers.length === 0) {
            const possibleContainers = heroSection.querySelectorAll('div > div > div.rounded-full');
            possibleContainers.forEach(container => {
                const image = container.querySelector('img');
                if (image) {
                    container.classList.add('hero-profile-container', 'hero-profile-frame');
                    image.classList.add('hero-profile-image');
                    container.style.position = 'relative';
                    container.style.overflow = 'visible';
                    console.log('Hero profile image found and animations applied!');
                }
            });
        }
    }

    // Fallback: Apply to any circular container in hero section
    setTimeout(() => {
        const heroCircularContainers = document.querySelectorAll('section#home .rounded-full, [class*="gradient-bg"] .rounded-full');
        heroCircularContainers.forEach(container => {
            const image = container.querySelector('img');
            if (image && !container.classList.contains('hero-profile-container')) {
                container.classList.add('hero-profile-container', 'hero-profile-frame');
                image.classList.add('hero-profile-image');
                container.style.position = 'relative';
                container.style.overflow = 'visible';
                console.log('Fallback: Animations applied to circular container');
            }
        });
    }, 1000);
});