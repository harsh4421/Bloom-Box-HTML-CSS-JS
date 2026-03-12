// Scroll Spy — highlight the active nav link based on scroll position
window.addEventListener('scroll', function () {
    const boxesSection = document.getElementById('boxes');
    const flowersSection = document.getElementById('flowers');
    const vasesSection = document.getElementById('vases');
    const careGuideSection = document.getElementById('care-guide');

    const boxesLink = document.getElementById('nav-boxes');
    const flowersLink = document.getElementById('nav-flowers');
    const vasesLink = document.getElementById('nav-vases');
    const careLink = document.getElementById('nav-care');

    // Remove active from all
    [boxesLink, flowersLink, vasesLink, careLink].forEach(l => l && l.classList.remove('active'));

    // Offset so it triggers a bit before the section top
    const scrollPosition = window.scrollY + 160;

    // Check from BOTTOM section upwards
    if (careGuideSection && scrollPosition >= careGuideSection.offsetTop) {
        if (careLink) careLink.classList.add('active');
    } else if (vasesSection && scrollPosition >= vasesSection.offsetTop) {
        if (vasesLink) vasesLink.classList.add('active');
    } else if (flowersSection && scrollPosition >= flowersSection.offsetTop) {
        if (flowersLink) flowersLink.classList.add('active');
    } else if (boxesSection && scrollPosition >= boxesSection.offsetTop) {
        if (boxesLink) boxesLink.classList.add('active');
    }
});

// ──────────────────────────────────────────────
// Hero Image Carousel
// ──────────────────────────────────────────────
(function initHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.hero-carousel-slide');
    const dotsContainer = document.getElementById('carouselDots');
    let current = 0;
    let timer;

    // Build dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function goTo(index) {
        slides[current].classList.remove('active');
        dotsContainer.children[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dotsContainer.children[current].classList.add('active');
    }

    function next() { goTo(current + 1); }

    function startTimer() { timer = setInterval(next, 4000); }
    function stopTimer() { clearInterval(timer); }

    startTimer();

    // Pause on hover, resume on leave
    carousel.addEventListener('mouseenter', stopTimer);
    carousel.addEventListener('mouseleave', startTimer);
})();

// ──────────────────────────────────────────────
// Boxes.html Builder Logic
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const buildForm = document.getElementById('build-box-form');
    if (!buildForm) return; // Only run on boxes.html

    const boxRadios = document.querySelectorAll('input[name="boxSize"]');
    const flowerRadios = document.querySelectorAll('input[name="flowerType"]');
    const vaseRadios = document.querySelectorAll('input[name="vaseOption"]');

    const summaryBoxName = document.getElementById('summary-box-name');
    const summaryBoxPrice = document.getElementById('summary-box-price');
    const summaryFlowerName = document.getElementById('summary-flower-name');
    const summaryVaseName = document.getElementById('summary-vase-name');
    const summaryVasePrice = document.getElementById('summary-vase-price');
    const summaryTotalPrice = document.getElementById('summary-total-price');

    function updateSummary() {
        let boxPrice = 0;
        let vasePrice = 0;

        // Box
        const selectedBox = document.querySelector('input[name="boxSize"]:checked');
        if (selectedBox) {
            summaryBoxName.textContent = selectedBox.value + ' Box';
            boxPrice = parseInt(selectedBox.getAttribute('data-price'));
            summaryBoxPrice.textContent = '₹' + boxPrice.toFixed(2);
        }

        // Flower
        const selectedFlower = document.querySelector('input[name="flowerType"]:checked');
        if (selectedFlower) {
            summaryFlowerName.textContent = selectedFlower.value;
        }

        // Vase
        const selectedVase = document.querySelector('input[name="vaseOption"]:checked');
        if (selectedVase) {
            summaryVaseName.textContent = selectedVase.getAttribute('data-name');
            vasePrice = parseInt(selectedVase.value);
            summaryVasePrice.textContent = '₹' + vasePrice.toFixed(2);
        }

        // Total
        const total = boxPrice + vasePrice;
        summaryTotalPrice.textContent = '₹' + total.toFixed(2);
    }

    // Attach event listeners
    boxRadios.forEach(r => r.addEventListener('change', updateSummary));
    flowerRadios.forEach(r => r.addEventListener('change', updateSummary));
    vaseRadios.forEach(r => r.addEventListener('change', updateSummary));

    // Initial calculation
    updateSummary();

    // Proceed Button
    document.getElementById('proceed-btn').addEventListener('click', () => {
        const selectedBox = document.querySelector('input[name="boxSize"]:checked');
        const selectedFlower = document.querySelector('input[name="flowerType"]:checked');
        const selectedVase = document.querySelector('input[name="vaseOption"]:checked');

        if (!selectedBox || !selectedFlower || !selectedVase) {
            alert('Please select a box size, flower type, and vase option.');
            return;
        }

        const orderData = {
            boxSize: selectedBox.value,
            boxPrice: parseInt(selectedBox.getAttribute('data-price')),
            flowerType: selectedFlower.value,
            vaseOption: selectedVase.getAttribute('data-name'),
            vasePrice: parseInt(selectedVase.value)
        };

        localStorage.setItem('bloomboxOrder', JSON.stringify(orderData));
        window.location.href = 'subscription.html';
    });
});