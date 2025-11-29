// Direct approach - guaranteed to work
document.addEventListener('DOMContentLoaded', function() {
    function applyAnimations() {
        const imgHero = document.getElementById('img-hero');
        if (imgHero) {
            // Create and add styles directly
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float-up-down {
                    10%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-14px); }
                }
                @keyframes scale-pulse {
                    10%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                }
                #img-hero {
                    animation: float-up-down 3s ease-in-out infinite !important;
                }
                #img-hero img {
                    animation: scale-pulse 7s ease-in-out infinite !important;
                }
            `;
            document.head.appendChild(style);
            console.log('✅ Profile image animations applied!');
        } else {
            console.log('❌ img-hero not found, retrying...');
            setTimeout(applyAnimations, 5000);
        }
    }
    
    applyAnimations();
});