document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for smooth section fade-ins
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible if you only want it to animate once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 2. Mascot Speech Logic
    const speechElement = document.getElementById('speech-text');
    const speechBubble = document.getElementById('speech-bubble');
    
    const speechMessages = [
        "Welcome to the Community Hub 🔵",
        "Base App is built for the builders",
        "Discover the ecosystem early",
        "Connect with real community members",
        "Join the onchain revolution",
        "Tap the link to get your access",
        "Building a global economy together",
        "Don't miss out on the next big thing"
    ];
    
    let speechIndex = 0;

    function cycleSpeech() {
        if (!speechBubble || !speechElement) return;
        
        speechBubble.style.opacity = 0;
        
        setTimeout(() => {
            speechIndex = (speechIndex + 1) % speechMessages.length;
            speechElement.textContent = speechMessages[speechIndex];
            speechBubble.style.opacity = 1;
        }, 400); // Wait for fade out
    }

    // Cycle messages every 5 seconds
    setInterval(cycleSpeech, 5000);

    // Provide console feedback
    console.log('%c🔵 Base Community Hub Loaded', 'color: #0052FF; font-size: 14px; font-weight: bold;');
});
