
// Minimal JS for navigation and contact form demo
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle && toggle.addEventListener('click', ()=> {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    nav.style.display = expanded ? '' : 'flex';
  });
});

function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  // In a production site, send via fetch to backend or service (Formspree, Netlify Forms, etc.)
  alert('Merci ' + data.name + '! Votre message a été enregistré (demo).');
  form.reset();
}
