// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Hero photo slideshow (stays on the first photo if the visitor prefers reduced motion)
const slides = [...document.querySelectorAll('.hero-media .slide')];
const cap = document.getElementById('cap');
if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('is-on');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-on');
    cap.textContent = slides[i].dataset.caption;
  }, 5000);
}

// Quote form: opens WhatsApp with the details filled in.
const WHATSAPP = '254704493312';
document.getElementById('quote-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hello Megamind Ventures, I would like a quote.\nName: ${f.get('name')}\nContact: ${f.get('contact')}\nService: ${f.get('service')}\nDetails: ${f.get('details')}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
