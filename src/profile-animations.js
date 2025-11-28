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
                transform: translateY(0px) rotate(0deg); 
            }
            50% { 
                transform: translateY(-8px) rotate(0.5deg); 
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
    `;
    document.head.appendChild(style);

    // Find hero section profile image
    const heroSection = document.querySelector('section#home, [class*="gradient-bg"]');
    
    if (heroSection) {
        const profileContainers = heroSection.querySelectorAll('.w-64, .w-80, [class*="rounded-full"]');
        
        profileContainers.forEach(container => {
            const image = container.querySelector('img');
            if (image && (image.alt.includes('AM Sazid') || image.src.includes('WhatsApp'))) {
                // Add subtle animation classes
                container.classList.add('hero-profile-container', 'hero-profile-frame');
                image.classList.add('hero-profile-image');
                
                console.log('Hero profile image animations applied successfully!');
            }
        });
    }
});