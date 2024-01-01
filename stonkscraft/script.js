function loadTranslation(lang) {
    // Attempt to fetch the translation file for the given language
    fetch('lang/' + lang + '.json')
        .then(response => {
            // Check if the response is okay (file exists)
            if (response.ok) {
                return response.json();
            } else {
                // If the file does not exist, throw an error or handle it
                throw new Error('Translation file not found. Falling back to default language.');
            }
        })
        .then(translations => {
            // Apply the translations to the page
            for (const id in translations) {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = translations[id];
                }
            }
        })
        .catch(error => {
            console.error(error);
            // Load a default language, e.g., English, if the desired language file is not found
            if (lang !== 'en') {
                loadTranslation('en');
            }
        });
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