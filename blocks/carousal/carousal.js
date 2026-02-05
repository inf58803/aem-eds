export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'carousel-slides';

  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'carousel-dots';

  const slides = [];

  rows.forEach((row, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    if (index !== 0) {
      slide.style.display = 'none';
    }

    while (row.firstElementChild) {
      slide.appendChild(row.firstElementChild);
    }

    slides.push(slide);
    slidesWrapper.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'carousel-dot';

    if (index === 0) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      slides.forEach((s, i) => {
        s.style.display = i === index ? 'block' : 'none';
      });

      dotsWrapper.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    });

    dotsWrapper.appendChild(dot);
  });

  block.textContent = '';
  block.appendChild(slidesWrapper);
  block.appendChild(dotsWrapper);
}
