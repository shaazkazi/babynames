const namesContainer = document.getElementById('namesContainer');
const searchInput = document.getElementById('searchInput');
const letterLinks = document.getElementById('letterLinks');

// Generate letter filters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
letterLinks.innerHTML = Array.from(letters)
  .map(letter => `<a href="#" data-letter="${letter}" class="filter-btn">${letter}</a>`)
  .join('') + '<a href="#" data-letter="all" class="filter-btn active">All</a>';

const gender = document.title.toLowerCase().includes('boy') ? 'boy' : 'girl';

function groupNamesByLetter(namesList) {
  return namesList.reduce((groups, name) => {
    const letter = name.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(name);
    return groups;
  }, {});
}

function renderNames(filterLetter = 'all', searchTerm = '') {
  namesContainer.style.opacity = '0';
  
  setTimeout(() => {
    let filteredNames = names.filter(name => {
      const genderMatch = name.gender === gender;
      const letterMatch = filterLetter === 'all' || name.name[0].toUpperCase() === filterLetter;
      const searchMatch = searchTerm === '' || name.name.toLowerCase().includes(searchTerm.toLowerCase());
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

// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderNames(btn.dataset.letter, searchInput.value);
  });
});

// Update search placeholder
searchInput.placeholder = `Search ${gender} names...`;

searchInput.addEventListener('input', (e) => {
  renderNames(document.querySelector('.letter-links .active').dataset.letter, e.target.value);
});

// Random name functionality for gender-specific pages
const mobileRandomBtn = document.getElementById('mobileRandomBtn');

function getRandomName() {
    const isBoysPage = window.location.pathname.includes('boy-names');
    const isGirlsPage = window.location.pathname.includes('girl-names');
    
    let filteredNames = names;
    if (isBoysPage) {
        filteredNames = names.filter(name => name.gender === 'boy');
    } else if (isGirlsPage) {
        filteredNames = names.filter(name => name.gender === 'girl');
    }
    
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const randomName = filteredNames[randomIndex];
    window.location.href = `name-details.html?name=${encodeURIComponent(randomName.name)}`;
}

if (mobileRandomBtn) {
    mobileRandomBtn.addEventListener('click', getRandomName);
}

// Enhanced mobile navigation active state
function updateMobileNav() {
    const currentPath = window.location.pathname;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a[href]');
    
    mobileNavLinks.forEach(link => {
        if (link.id === 'mobileRandomBtn' || link.id === 'mobileSearchBtn') return;
        
        const isHome = currentPath === '/' || currentPath.includes('index.html');
        const isBoyNames = currentPath.includes('boy-names.html');
        const isGirlNames = currentPath.includes('girl-names.html');
        
        if ((isHome && link.href.includes('index.html')) ||
            (isBoyNames && link.href.includes('boy-names.html')) ||
            (isGirlNames && link.href.includes('girl-names.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateMobileNav);


// Initial render
renderNames();
