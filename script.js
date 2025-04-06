// Navbar Toggle for Mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbarMenu').classList.toggle('show');
});

// Smooth scrolling and section display with fade
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);

        // Handle section visibility with fade
        if (targetId === 'home') {
            showSection('about'); // Show About section when Home is clicked
            let homeSection = document.getElementById('home');
            if (homeSection) {
                window.scrollTo({
                    top: homeSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        } else {
            showSection(targetId);
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Show specific section with fade effect
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    let sectionToShow = document.getElementById(sectionId);
    if (sectionToShow && sectionToShow.classList.contains('section')) {
        sectionToShow.style.display = 'block';
        setTimeout(() => {
            sectionToShow.classList.add('active');
        }, 10);
    }
}

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Show About section on load with fade
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});