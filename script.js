const namesContainer=document.getElementById("namesContainer"),searchInput=document.getElementById("searchInput"),letterLinks=document.getElementById("letterLinks"),randomNameBtn=document.getElementById("randomNameBtn"),mobileRandomBtn=document.getElementById("mobileRandomBtn"),uniqueNames=Array.from(new Map(names.map(e=>[e.name,e])).values());function initParticles(){particlesJS("particles-js",{particles:{number:{value:80},color:{value:"#4299e1"},opacity:{value:.5},size:{value:4},line_linked:{enable:!0,distance:150,color:"#4299e1",opacity:.4,width:1.5},move:{enable:!0,speed:2}}})}function updateParticles(){window.pJSDom&&window.pJSDom[0]&&window.pJSDom[0].pJS.fn.vendors.destroypJS(),initParticles()}names.length=0,names.push(...uniqueNames),document.addEventListener("DOMContentLoaded",initParticles),document.addEventListener("themeChanged",updateParticles);const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";letterLinks&&(letterLinks.innerHTML=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(e=>`<a href="#" data-letter="${e}" class="filter-btn">${e}</a>`).join("")+'<a href="#" data-letter="all" class="filter-btn active">All</a>');const filterButtons=document.querySelectorAll(".filter-btn");function groupNamesByLetter(e){return e.sort((e,t)=>e.name.localeCompare(t.name)).reduce((e,t)=>{let a=t.name[0].toUpperCase();return e[a]||(e[a]=[]),e[a].push(t),e},{})}function renderNames(e="all",t="all",a=""){namesContainer&&(namesContainer.style.opacity="0",namesContainer.style.transform="translateY(10px)",setTimeout(()=>{let n=names.filter(n=>{let l="all"===e||n.gender===e,r="all"===t||n.name[0].toUpperCase()===t,i=""===a||n.name.toLowerCase().includes(a.toLowerCase())||n.meaning.toLowerCase().includes(a.toLowerCase());return l&&r&&i}),l=groupNamesByLetter(n);namesContainer.innerHTML=Object.entries(l).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`
        <div class="letter-group">
          <h2 class="letter-heading">${e}</h2>
          <div class="names-grid">
            ${t.map(e=>`
              <a href="name-details.html?name=${encodeURIComponent(e.name)}" 
                 class="name-link" 
                 data-gender="${e.gender}">
                ${e.name}
              </a>
            `).join("")}
          </div>
        </div>
      `).join(""),requestAnimationFrame(()=>{namesContainer.style.opacity="1",namesContainer.style.transform="translateY(0)"})},300))}function getRandomName(){let e=window.location.pathname.includes("boy-names"),t=window.location.pathname.includes("girl-names"),a=names;e?a=names.filter(e=>"boy"===e.gender):t&&(a=names.filter(e=>"girl"===e.gender));let n=Math.floor(Math.random()*a.length),l=a[n];window.location.href=`name-details.html?name=${encodeURIComponent(l.name)}`}randomNameBtn&&randomNameBtn.addEventListener("click",getRandomName),mobileRandomBtn&&mobileRandomBtn.addEventListener("click",getRandomName);const mobileSearchBtn=document.getElementById("mobileSearchBtn");mobileSearchBtn&&mobileSearchBtn.addEventListener("click",e=>{e.preventDefault();let t=document.getElementById("searchInput");t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{t.focus()},500)});let currentFocus=-1;function highlightItem(e){Array.from(e).forEach((e,t)=>{t===currentFocus?e.classList.add("focused"):e.classList.remove("focused")})}function toggleLoadAllButton(){let e=document.getElementById("loadMore"),t=document.querySelector(".gender-links .active")?.dataset.gender,a=document.querySelector(".letter-links .active")?.dataset.letter;e&&("all"===t&&"all"===a?e.style.display="none":e.style.display="block")}searchInput.addEventListener("input",e=>{let t=document.getElementById("searchResults"),a=e.target.value.toLowerCase();if(a.length<2){t.classList.remove("active");return}let n=names.filter(e=>e.name.toLowerCase().includes(a)||e.meaning.toLowerCase().includes(a)).slice(0,8);n.length?(t.innerHTML=n.map(e=>`
      <a href="name-details.html?name=${encodeURIComponent(e.name)}" 
         class="search-result-item" 
         data-gender="${e.gender}">
        <div>
          <div class="result-name">${e.name}</div>
          <div class="result-meaning">${e.meaning}</div>
        </div>
      </a>
    `).join(""),t.classList.add("active")):t.classList.remove("active")}),searchInput.addEventListener("keydown",e=>{let t=document.getElementById("searchResults"),a=t.getElementsByClassName("search-result-item");0!==a.length&&("ArrowDown"===e.key?(currentFocus=(currentFocus+1)%a.length,highlightItem(a)):"ArrowUp"===e.key?(currentFocus=(currentFocus-1+a.length)%a.length,highlightItem(a)):"Enter"===e.key&&currentFocus>-1&&(e.preventDefault(),a[currentFocus].click()))}),filterButtons.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let a=e.closest(".gender-links, .letter-links");a.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),e.classList.add("active");let n=document.querySelector(".gender-links .active")?.dataset.gender||"all",l=document.querySelector(".letter-links .active")?.dataset.letter||"all";localStorage.setItem("activeLetterFilter",l),localStorage.setItem("activeGenderFilter",n),renderNames(n,l,searchInput.value),toggleLoadAllButton()})}),toggleLoadAllButton(),document.addEventListener("DOMContentLoaded",()=>{let e=localStorage.getItem("activeLetterFilter"),t=localStorage.getItem("activeGenderFilter");if(t&&"all"!==t){let a=document.querySelector(`[data-gender="${t}"]`);a&&a.click()}if(e&&"all"!==e){let n=document.querySelector(`[data-letter="${e}"]`);n&&n.click()}}),document.addEventListener("click",e=>{let t=document.getElementById("searchResults");searchInput.contains(e.target)||t.contains(e.target)||t.classList.remove("active")});const loadMoreBtn=document.getElementById("loadMore");function toggleFavorite(e){let t=JSON.parse(localStorage.getItem("favorites")||"[]");t.includes(e)?t=t.filter(t=>t!==e):t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),updateFavoriteButton(e)}function renderNameCard(e){return`
      <div class="name-link" data-gender="${e.gender}">
          ${e.name}
          <button class="favorite-btn ${isFavorite(e.name)?"active":""}" 
                  onclick="toggleFavorite('${e.name}')">
              <i class="fas fa-heart"></i>
          </button>
      </div>
  `}function printNameList(){let e=window.open("","_blank"),t=getCurrentFilteredNames();e.document.write(`
      <html>
          <head>
              <title>Islamic Names List</title>
              <style>
                  .print-name {
                      margin: 10px 0;
                      page-break-inside: avoid;
                  }
              </style>
          </head>
          <body>
              <h1>Islamic Names Collection</h1>
              ${t.map(e=>`
                  <div class="print-name">
                      <h3>${e.name}</h3>
                      <p>Meaning: ${e.meaning}</p>
                      <p>Origin: ${e.origins.join(", ")}</p>
                  </div>
              `).join("")}
          </body>
      </html>
  `),e.document.close(),e.print()}loadMoreBtn&&loadMoreBtn.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),document.querySelector('[data-gender="all"]').classList.add("active"),document.querySelector('[data-letter="all"]').classList.add("active"),searchInput&&(searchInput.value=""),localStorage.removeItem("activeLetterFilter"),localStorage.removeItem("activeGenderFilter"),renderNames("all","all","")}),renderNames();
