// DONNÉES DES CHALLENGES
const challenges = [
    { id: 1, title: "Lien Externe", category: "Web", difficulty: "Très Facile", points: 10, desc: "Le flag est sur cette page : <br><a href='challenges/ChallengeWeb-1.html' target='_blank'>Clique ici</a>", flag: "FLAG{TUt0riE1_f14g}" },
    { id: 2, title: "Web Inspector", category: "Web", difficulty: "Facile", points: 50, desc: "Utilisez l'inspecteur d'élément (F12).", flag: "FLAG{INSPECT_ELEMENT_PRO}" },
    
    { id: 3, title: "César 13", category: "Crypto", difficulty: "Facile", points: 30, desc: "SYNT{pelcgb_vf_sha}", flag: "FLAG{crypto_is_fun}" },
    
    { id: 4, title: "Googleplex", category: "OSINT", difficulty: "Facile", points: 50, desc: "Dans quelle ville se trouve le siège de Google ?", flag: "FLAG{mountain view}" },
    
    { id: 5, title: "Fichier Caché", category: "Stégano", difficulty: "Facile", points: 40, desc: "Téléchargez l'image : <br><a href='files/steg.jpg' download class='download-btn'><i class='fas fa-download'></i> Challenge.jpg</a>", flag: "FLAG{pixel_secret}" },
    
    { id: 6, title: "Reverse JS", category: "Reverse", difficulty: "Moyen", points: 100, desc: "Analysez le code de cette page.", flag: "FLAG{reverse_js_basic}" },
    
    { id: 7, title: "Analyse Forensics", category: "Forensics", difficulty: "Facile", points: 60, desc: "Identifiez ce fichier : <br><a href='files/mystere' download class='download-btn'>Télécharger</a>", flag: "FLAG{magic_bytes_ident}" }
];

let userScore = 0;
let currentChallengeId = null;
let solvedChallenges = [];

// CHARGEMENT
window.onload = () => {
    loadProgress();
    distributeChallenges();
    updateUI();
};

// SAUVEGARDE LOCALE
function saveProgress() {
    localStorage.setItem('ctf_score', userScore);
    localStorage.setItem('ctf_solved', JSON.stringify(solvedChallenges));
}

function loadProgress() {
    const sScore = localStorage.getItem('ctf_score');
    const sSolved = localStorage.getItem('ctf_solved');
    if(sScore) userScore = parseInt(sScore);
    if(sSolved) solvedChallenges = JSON.parse(sSolved);
}

function updateUI() {
    document.getElementById('user-points').innerText = userScore;
}

function resetProgress() {
    if(confirm("Voulez-vous vraiment réinitialiser votre progression ?")) {
        localStorage.clear();
        location.reload();
    }
}

// AFFICHAGE DES CARTES
function distributeChallenges() {
    const categoryMapping = {
        'Web': 'list-web', 'Crypto': 'list-crypto', 'OSINT': 'list-osint',
        'Stégano': 'list-stegano', 'Reverse': 'list-reverse', 'Forensics': 'list-forensics'
    };

    Object.keys(categoryMapping).forEach(cat => {
        const container = document.getElementById(categoryMapping[cat]);
        if(container) {
            container.innerHTML = challenges.filter(c => c.category === cat).map(ch => {
                const isSolved = solvedChallenges.includes(ch.id) ? 'solved' : '';
                return `
                    <div class="challenge-card ${isSolved}" id="card-${ch.id}" onclick="openSidebar(${ch.id})">
                        <div class="card-diff ${getDiffClass(ch.difficulty)}">${ch.difficulty}</div>
                        <h3>${ch.title}</h3>
                        <p>${ch.points} pts</p>
                    </div>
                `;
            }).join('');
        }
    });
}

function getDiffClass(diff) {
    const map = {"Très Facile": "v-easy", "Facile": "easy", "Moyen": "medium", "Difficile": "hard"};
    return map[diff] || "easy";
}

function openSidebar(id) {
    const ch = challenges.find(c => c.id === id);
    currentChallengeId = id;
    document.getElementById('side-title').innerText = ch.title;
    document.getElementById('side-desc').innerHTML = ch.desc;
    document.getElementById('side-category').innerText = ch.category;
    document.getElementById('side-points').innerText = ch.points;
    const diffEl = document.getElementById('side-diff');
    diffEl.innerText = ch.difficulty;
    diffEl.className = "difficulty-label " + getDiffClass(ch.difficulty);
    document.getElementById('challenge-sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.getElementById('feedback').innerText = "";
    document.getElementById('flag-input').value = "";
}

function closeSidebar() {
    document.getElementById('challenge-sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function checkFlag() {
    const input = document.getElementById('flag-input').value.trim();
    const ch = challenges.find(c => c.id === currentChallengeId);
    const fb = document.getElementById('feedback');

    if (input === ch.flag) {
        if (!solvedChallenges.includes(ch.id)) {
            userScore += ch.points;
            solvedChallenges.push(ch.id);
            updateUI();
            saveProgress();
            document.getElementById(`card-${ch.id}`).classList.add('solved');
        }
        fb.innerText = "ACCÈS ACCORDÉ !"; fb.style.color = "var(--very-easy)";
        setTimeout(closeSidebar, 1200);
    } else {
        fb.innerText = "ACCÈS REFUSÉ..."; fb.style.color = "var(--hard)";
    }
}
