function renderNameDetails() {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    const nameData = names.find((n) => n.name === nameParam);

    const nameDetailsDiv = document.getElementById("nameDetails");
    
    if (nameData) {
        document.title = `${nameData.name} - Islamic Baby Names`;
        nameDetailsDiv.innerHTML = `
            <div class="name-header">
                <a href="index.html" class="back-button">← Back</a>
                <h1 class="name-title">${nameData.name}</h1>
            </div>
            <div class="meaning-section">
                <h2 class="meaning-label">Meaning of ${nameData.name}</h2>
                <p class="meaning-text">${nameData.meaning}</p>
            </div>
            <div class="translations-section">
                <h2 class="translations-label">Name in Other Languages</h2>
                <div class="translations-grid">
                    ${Object.entries(nameData.translations).map(([lang, text]) => `
                        <div class="translation-card">
                            <span class="lang-label">${lang.charAt(0).toUpperCase() + lang.slice(1)}</span>
                            <div class="translation-text" dir="${lang === 'arabic' || lang === 'urdu' ? 'rtl' : 'ltr'}">${text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        renderSimilarNames(nameData);
        renderNameFacts(nameData);
        initializeSearch();
    } else {
        nameDetailsDiv.innerHTML = `
            <div class="name-header">
                <a href="index.html" class="back-button">← Back</a>
                <p>Name not found!</p>
            </div>
        `;
    }
}
function renderSimilarNames(nameData) {
    const similarNames = names.filter(n => 
        n.name !== nameData.name && 
        (n.name[0] === nameData.name[0] || n.gender === nameData.gender)
    ).slice(0, 6);

    document.getElementById('similarNames').innerHTML = similarNames.map(name => `
        <a href="name-details.html?name=${encodeURIComponent(name.name)}" 
           class="name-link" 
           data-gender="${name.gender}">
            ${name.name}
        </a>
    `).join('');
}

function renderNameFacts(nameData) {
    const facts = [`<li>Name: <span>${nameData.name}</span></li>`];
    
    if (nameData.gender) {
        facts.push(`<li>Gender: <span class="gender-tag" data-gender="${nameData.gender}">${nameData.gender.charAt(0).toUpperCase() + nameData.gender.slice(1)}</span></li>`);
    }
    
    if (nameData.origins && nameData.origins.length) {
        facts.push(`<li>Origins and Uses: <span>${nameData.origins.join(", ")}</span></li>`);
    }
    
    if (nameData.meaning) {
        facts.push(`<li>Meanings: <span>${nameData.meaning}</span></li>`);
    }
    
    if (nameData.variations && nameData.variations.length) {
        facts.push(`<li>Variation of: <span>${nameData.variations.join(", ")}</span></li>`);
    }
    
    facts.push(`
        <li class="keywords-section">
            <h4>Keywords:</h4>
            <div class="keywords">
                muslim, baby, ${nameData.gender || ''}, names, islamic, arabic, arabian, iranian, muslim, urdu, unique, traditional
            </div>
        </li>
    `);

    document.getElementById('nameFacts').innerHTML = facts.join('');
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const filteredNames = names.filter(name => 
            name.name.toLowerCase().includes(searchTerm) ||
            name.meaning.toLowerCase().includes(searchTerm)
        ).slice(0, 8);

        if (filteredNames.length) {
            searchResults.innerHTML = filteredNames.map(name => `
                <a href="name-details.html?name=${encodeURIComponent(name.name)}" 
                   class="search-result-item" 
                   data-gender="${name.gender}">
                    <div>
                        <div class="result-name">${name.name}</div>
                        <div class="result-meaning">${name.meaning}</div>
                    </div>
                </a>
            `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.classList.remove('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderNameDetails);
