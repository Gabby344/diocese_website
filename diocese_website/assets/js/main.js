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
      siteNav.classList.toggle('nav-open'); // utilise CSS pour afficher / masquer avec animation
    });
  }

  // --- Formulaire de contact ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContact);
  }

  // --- Scroll animations pour sections ---
  const scrollSections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  scrollSections.forEach(section => observer.observe(section));

  // --- Hover effect pour cartes (optionnel JS si nécessaire) ---
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

  // Validation basique
  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Données du formulaire
  const formData = { name, email, message };
  console.log('Formulaire soumis (demo) :', formData);

  // --- Remplacer par envoi réel via fetch / API si nécessaire ---
  alert(`Merci ${name} ! Votre message a été enregistré (demo).`);
  form.reset();
}
