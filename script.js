const namesContainer = document.getElementById('namesContainer');
const searchInput = document.getElementById('searchInput');
const letterLinks = document.getElementById('letterLinks');
const randomNameBtn = document.getElementById('randomNameBtn');

// Initialize particles
particlesJS('particles-js', {
  particles: {
    number: { value: 50 },
    color: { value: '#4299e1' },
    opacity: { value: 0.1 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#4299e1',
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});

// Generate letter filters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
letterLinks.innerHTML = Array.from(letters)
  .map(letter => `<a href="#" data-letter="${letter}" class="filter-btn">${letter}</a>`)
  .join('') + '<a href="#" data-letter="all" class="filter-btn active">All</a>';

// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btn');

function groupNamesByLetter(namesList) {
  return namesList.reduce((groups, name) => {
    const letter = name.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(name);
    return groups;
  }, {});
}

function renderNames(filterGender = 'all', filterLetter = 'all', searchTerm = '') {
  namesContainer.style.opacity = '0';
  
  setTimeout(() => {
    let filteredNames = names.filter(name => {
      const genderMatch = filterGender === 'all' || name.gender === filterGender;
      const letterMatch = filterLetter === 'all' || name.name[0].toUpperCase() === filterLetter;
      const searchMatch = searchTerm === '' || 
        name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        name.meaning.toLowerCase().includes(searchTerm.toLowerCase());
      return genderMatch && letterMatch && searchMatch;
    });

    const groupedNames = groupNamesByLetter(filteredNames);
    
    namesContainer.innerHTML = Object.entries(groupedNames)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([letter, namesList]) => `
        <div class="letter-group">
          <h2 class="letter-heading">${letter}</h2>
          <div class="names-grid">
            ${namesList.map(name => `
              <a href="name-details.html?name=${encodeURIComponent(name.name)}" 
                 class="name-link" 
                 data-gender="${name.gender}">
                ${name.name}
              </a>
            `).join('')}
          </div>
        </div>
      `).join('');

    namesContainer.style.opacity = '1';
  }, 300);
}

// Random name functionality
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  window.location.href = `name-details.html?name=${encodeURIComponent(randomName.name)}`;
}

randomNameBtn.addEventListener('click', getRandomName);

// Enhanced search with keyboard navigation
let currentFocus = -1;

searchInput.addEventListener('input', (e) => {
  const searchResults = document.getElementById('searchResults');
  const searchTerm = e.target.value.toLowerCase();
  
  if (searchTerm.length < 2) {
    searchResults.classList.remove('active');
    return;
  }

  const matches = names.filter(name => 
    name.name.toLowerCase().includes(searchTerm) ||
    name.meaning.toLowerCase().includes(searchTerm)
  ).slice(0, 8);

  if (matches.length) {
    searchResults.innerHTML = matches.map(name => `
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

// Keyboard navigation for search results
searchInput.addEventListener('keydown', (e) => {
  const searchResults = document.getElementById('searchResults');
  const items = searchResults.getElementsByClassName('search-result-item');
  
  if (items.length === 0) return;

  if (e.key === 'ArrowDown') {
    currentFocus = (currentFocus + 1) % items.length;
    highlightItem(items);
  } else if (e.key === 'ArrowUp') {
    currentFocus = (currentFocus - 1 + items.length) % items.length;
    highlightItem(items);
  } else if (e.key === 'Enter' && currentFocus > -1) {
    e.preventDefault();
    items[currentFocus].click();
  }
});

function highlightItem(items) {
  Array.from(items).forEach((item, index) => {
    if (index === currentFocus) {
      item.classList.add('focused');
    } else {
      item.classList.remove('focused');
    }
  });
}

// Filter button functionality
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const group = btn.closest('.gender-links, .letter-links');
    group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const activeGender = document.querySelector('.gender-links .active')?.dataset.gender || 'all';
    const activeLetter = document.querySelector('.letter-links .active')?.dataset.letter || 'all';
    renderNames(activeGender, activeLetter, searchInput.value);
  });
});

// Close search dropdown when clicking outside
document.addEventListener('click', (e) => {
  const searchResults = document.getElementById('searchResults');
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.classList.remove('active');
  }
});
// Mobile random button functionality
const mobileRandomBtn = document.getElementById('mobileRandomBtn');
if (mobileRandomBtn) {
    mobileRandomBtn.addEventListener('click', getRandomName);
}
// Mobile search button functionality
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            searchInput.focus();
        }, 500);
    });
}




// Initial render
renderNames();

