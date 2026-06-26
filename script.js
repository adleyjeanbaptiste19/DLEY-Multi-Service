// ========== TOGGLE MENU MOBIL ==========
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
}

// ========== MONTRE SÈVIS YO ==========
function showServices() {
    const content = document.getElementById('servicesContent');
    const btnEnter = document.getElementById('btnEnter');
    const btnExit = document.getElementById('btnExit');

    content.classList.add('active');
    btnEnter.style.display = 'none';
    btnExit.style.display = 'inline-flex';

    // Scroll jiska sèvis yo
    setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
}

// ========== KACHE SÈVIS YO ==========
function hideServices() {
    const content = document.getElementById('servicesContent');
    const btnEnter = document.getElementById('btnEnter');
    const btnExit = document.getElementById('btnExit');

    content.classList.remove('active');
    btnExit.style.display = 'none';
    btnEnter.style.display = 'inline-flex';

    // Scroll jiska bouton an
    setTimeout(() => {
        btnEnter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// ========== HEADER SCROLL EFFECT ==========
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '8px 30px';
        header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    } else {
        header.style.padding = '12px 30px';
        header.style.boxShadow = 'none';
    }
});

// ========== FÈMEN MENU LÈ KLICK DEYÒ ==========
document.addEventListener('click', function(e) {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// ========== ANIMATION AU CHARGEMENT ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('DLEY MULTI SERVICE - Sit la chaje avèk siksè!');
});