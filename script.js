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

// Quote form: opens WhatsApp with the details filled in.
const WHATSAPP = '254704493312';
document.getElementById('quote-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hello Megamind Ventures, I would like a quote.
Name: ${f.get('name')}
Contact: ${f.get('contact')}
Service: ${f.get('service')}
Details: ${f.get('details')}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
