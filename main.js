// ============================================
// Diocèse de Kolwezi — Script Principal
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Navigation responsive ---
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('nav-open'); // CSS doit gérer la visibilité et l'animation
    });
  }

  // --- Formulaire de contact ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContact);
  }

  // --- Animation au scroll ---
  const scrollSections = document.querySelectorAll('.fade-in-section');
  if ('IntersectionObserver' in window && scrollSections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    scrollSections.forEach(section => observer.observe(section));
  }

  // --- Effet hover pour cartes (optionnel si besoin JS) ---
  const cards = document.querySelectorAll('.card, .pastorale-card, .parish-card, .school-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });
});

// ============================================
// Fonction de gestion du formulaire de contact
// ============================================
function handleContact(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validation simple
  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Données pour envoi
  const formData = { name, email, message };
  console.log('Formulaire soumis (demo) :', formData);

  // TODO : Remplacer par un envoi réel via fetch / API
  alert(`Merci ${name} ! Votre message a été enregistré (demo).`);
  form.reset();
}
