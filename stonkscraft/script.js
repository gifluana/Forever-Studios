function loadTranslation(lang) {
    fetch('lang/' + lang + '.json')
        .then(response => response.json())
        .then(translations => {
            for (const id in translations) {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = translations[id];
                }
            }
        })
        .catch(error => console.error('Error loading translation file:', error));
}

var userLang = navigator.language || navigator.userLanguage; 
loadTranslation(userLang.split('-')[0]);


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