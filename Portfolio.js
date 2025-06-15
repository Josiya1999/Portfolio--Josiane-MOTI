document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.forms['contactForm'];
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const prenom = document.getElementById('prenom').value.trim(); 
            const nom = document.getElementById('nom').value.trim();
            const email = document.getElementById('email').value.trim();
            const sujet = document.getElementById('sujet').value.trim();
            const message = document.getElementById('message').value.trim();
            if (prenom === '') {
                alert('Veuillez saisir votre prénom.');
                return false;
            }
            if (nom === '') {
                alert('Veuillez saisir votre nom.');
                return false;
            }
            if (email === '') {
                alert('Veuillez saisir votre adresse email.');
                return false;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Veuillez saisir une adresse email valide.');
                return false;
            }
            if (message === '') {
                alert('Veuillez saisir votre message.');
                return false;
            }

            alert('Message envoyé avec succès ! Merci pour votre intérêt, je vous recontacterai bientôt.');
            contactForm.reset();

            return true;
        });
    }
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const voirProjetsButton = document.querySelector('#accueil .cta-button');
    if (voirProjetsButton) {
        voirProjetsButton.addEventListener('click', function() {
            const projetsSection = document.getElementById('projets');
            if (projetsSection) {
                projetsSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
