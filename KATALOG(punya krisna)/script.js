
const productImages = document.querySelectorAll('.product-image');

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.style.display = 'none';

lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Tutup gambar">&times;</button>
  <img src="" alt="Foto model diperbesar">
`;

document.body.appendChild(lightbox);

const enlargedImage = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.lightbox-close');

function closeLightbox() {
  lightbox.style.display = 'none';
  enlargedImage.src = '';
  document.body.style.overflow = '';
}

productImages.forEach((container) => {
  const image = container.querySelector('img');

  image.addEventListener('click', () => {
    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
