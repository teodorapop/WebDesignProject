
const targetDate = new Date('2026-10-10T18:00:00').getTime();

// updateCounter();

function updateCounter() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(counterInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('counter-message').style.display = 'block';
    }
}

const counterInterval = setInterval(updateCounter, 1000);

///////////////////////////////////////

const galleryImages = [
    { src: "./assets/images/pic-1.png", title: "Image 1" },
    { src: "./assets/images/pic-2.png", title: "Image 2" },
    { src: "./assets/images/pic-3.png", title: "Image 3" },
    { src: "./assets/images/pic-4.png", title: "Image 4" },
    { src: "./assets/images/pic-5.png", title: "Image 5" },
    { src: "./assets/images/pic-6.png", title: "Image 6" },
    { src: "./assets/images/pic-7.png", title: "Image 7" }
];

let currentImageIndex = 0;

function openImage(index) {
    currentImageIndex = index;
    updateModal();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModal();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModal();
}

function updateModal() {
    const image = galleryImages[currentImageIndex];
    document.getElementById('modalImage').src = image.src;
    document.getElementById('modalImage').alt = image.title;
    document.getElementById('imageTitle').textContent = image.title;
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal.classList.contains('show')) {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'Escape') {
            // via bootstrap
        }
    }
});