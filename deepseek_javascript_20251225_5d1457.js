// Tambahkan di dalam tag <script> yang sudah ada:

// 1. Snowflakes generator
function createSnowflakes() {
    const snowflakes = document.createElement('div');
    snowflakes.className = 'snowflakes';
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        snowflake.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        snowflakes.appendChild(snowflake);
    }
    
    document.body.appendChild(snowflakes);
}

// 2. Mouse tracking for sparkle effect
document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
    
    const photos = document.querySelectorAll('.photo-display');
    
    photos.forEach(photo => {
        photo.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.style.setProperty('--x', `${x}%`);
            this.style.setProperty('--y', `${y}%`);
        });
    });
    
    // 3. Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});

// 4. Typewriter effect for the letter (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Untuk menggunakan efek ketik, tambahkan ini saat membuka surat:
// const letterText = document.querySelector('.letter-content p');
// typeWriter(letterText, 'Isi suratmu disini...');