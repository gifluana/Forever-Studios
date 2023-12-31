 // Get the browser's default language
 var userLang = navigator.language || navigator.userLanguage; 

 // Define translations for the welcome message
 var translations = {
    'en-US': 'Welcome to',
    'fr': 'Bienvenue à',
    'es-ES': 'Bienvenido a',
    'pt-BR': 'Bem-vindo à'
 };

 // Get the welcome message element
 var welcomeMessageElement = document.getElementById('subtitle');

 // Based on the language, change the welcome message
 if (translations[userLang]) {
     welcomeMessageElement.textContent = translations[userLang];
 } else {
     welcomeMessageElement.textContent = translations['en-US']; // default to English if no match
 }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        }
    });
})

const hiddenElements = document.querySelectorAll('.animative');
hiddenElements.forEach((el) => observer.observe(el));