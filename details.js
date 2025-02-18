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
                <div class="action-buttons">
                    <button class="favorite-btn ${isFavorite(nameData.name) ? 'active' : ''}" 
                            onclick="toggleFavorite('${nameData.name}')">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="filter-btn" id="copyNameBtn">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="filter-btn" id="shareNameBtn">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
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
        setupCopyShare(nameData);
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

function setupCopyShare(nameData) {
    const copyNameBtn = document.getElementById('copyNameBtn');
    const shareNameBtn = document.getElementById('shareNameBtn');

    copyNameBtn.addEventListener('click', () => {
        const textToCopy = `
Name: ${nameData.name}
Meaning: ${nameData.meaning}
Gender: ${nameData.gender}
Origins: ${nameData.origins ? nameData.origins.join(', ') : ''}

Learn more at: ${window.location.href}
        `.trim();

        navigator.clipboard.writeText(textToCopy).then(() => {
            copyNameBtn.classList.add('copied');
            setTimeout(() => copyNameBtn.classList.remove('copied'), 300);
        });
    });

    shareNameBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: `Islamic Name: ${nameData.name}`,
                text: `Check out this beautiful Islamic name: ${nameData.name} - ${nameData.meaning}`,
                url: window.location.href
            });
        } else {
            window.open(`https://twitter.com/intent/tweet?text=Check out this beautiful Islamic name: ${nameData.name}&url=${encodeURIComponent(window.location.href)}`);
        }
    });
}

// Add to details.js
function addPronunciation(name) {
    const audioUrl = `audio/${name.toLowerCase().replace(' ', '_')}.mp3`;
    return `
        <div class="pronunciation">
            <button onclick="playPronunciation('${audioUrl}')">
                <i class="fas fa-volume-up"></i> Listen
            </button>
            <audio id="pronunciationAudio" src="${audioUrl}"></audio>
        </div>
    `;
}

// Add to details.js display
function showNameHistory(name) {
    return `
        <div class="name-history">
            <h3>Historical Significance</h3>
            <p>${name.history}</p>
            <p class="significance">${name.significance}</p>
        </div>
        <div class="action-buttons">
            <button class="favorite-btn ${isFavorite(nameData.name) ? 'active' : ''}" 
                    onclick="toggleFavorite('${nameData.name}')">
                <i class="fas fa-heart"></i>
            </button>
            <button class="filter-btn" id="copyNameBtn">
                <i class="fas fa-copy"></i>
            </button>
            <button class="filter-btn" id="shareNameBtn">
                <i class="fas fa-share-alt"></i>
            </button>
        </div>
    `;
}

// Add to details.js
function shareName(name) {
    const shareData = {
        title: `Islamic Name: ${name.name}`,
        text: `${name.name}: ${name.meaning}`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback for browsers without native sharing
        const shareUrl = `
            https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}
        `;
        window.open(shareUrl, '_blank');
    }
}

function isFavorite(nameId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(nameId);
}

function toggleFavorite(nameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(nameId)) {
        favorites = favorites.filter(id => id !== nameId);
    } else {
        favorites.push(nameId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(nameId);
}

function updateFavoriteButton(nameId) {
    const btn = document.querySelector('.favorite-btn');
    if (btn) {
        btn.classList.toggle('active', isFavorite(nameId));
    }
}



// Initialize the page
document.addEventListener('DOMContentLoaded', renderNameDetails);


