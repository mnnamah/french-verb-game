/* =====================================================
   FRENCH VERB QUIZ - MAIN APPLICATION
   =====================================================
   This file contains all the application logic for the
   French Verb Quiz app. It connects to verb_library.js
   for conjugation data and styles.css for styling.
   ===================================================== */

/* =====================================================
   SECTION 1: CONFIGURATION & CONSTANTS
   ===================================================== */

// Storage keys for localStorage persistence
const STORAGE_KEYS = {
    ALL_TIME_STATS: 'fvq_all_time_stats_v2',
    ROUND_HISTORY: 'fvq_round_history_v2',
    SEARCHED_VERB: 'fvq_searched_verb_v2',
    SETTINGS: 'fvq_settings_v2'
};

// Tense configuration with display labels and difficulty weights
const TENSES = {
    'present': { label: 'Présent', weight: 1.0 },
    'passe-compose': { label: 'Passé Composé', weight: 1.2 },
    'imparfait': { label: 'Imparfait', weight: 1.1 },
    'futur-proche': { label: 'Futur Proche', weight: 1.0 },
    'futur-simple': { label: 'Futur Simple', weight: 1.3 },
    'conditionnel-present': { label: 'Conditionnel Présent', weight: 1.4 }
};

// Pronouns - il/elle and ils/elles are quizzed separately
const PRONOUNS = [
    { key: 'je', label: 'je', verbKey: 'je' },
    { key: 'tu', label: 'tu', verbKey: 'tu' },
    { key: 'il', label: 'il', verbKey: 'il' },
    { key: 'elle', label: 'elle', verbKey: 'il' },  // Uses 'il' conjugation
    { key: 'nous', label: 'nous', verbKey: 'nous' },
    { key: 'vous', label: 'vous', verbKey: 'vous' },
    { key: 'ils', label: 'ils', verbKey: 'ils' },
    { key: 'elles', label: 'elles', verbKey: 'ils' }  // Uses 'ils' conjugation
];

// Verb categories by game mode
// Note: Keys must match exactly with verb_library.js (including encoding)
const VERB_CATEGORIES = {
    movement: [
        'aller', 'venir', 'devenir', 'revenir', 'monter', 'descendre', 
        'sortir', 'partir', 'arriver', 'entrer', 'rentrer', 'retourner', 
        'tomber', 'rester', 'passer', 'mourir', 'naître', 'repartir', 'ressortir'
    ],
    reflexive: [
        // Note: Reflexive verbs may not be in the library - will be filtered
        'se laver', 'se lever', 'se coucher'
    ],
    irregular: [
        'avoir', 'être', 'faire', 'aller', 'venir', 'pouvoir', 'vouloir',
        'devoir', 'savoir', 'prendre', 'voir', 'dire', 'lire', 'écrire',
        'mettre', 'connaître', 'vivre', 'tenir', 'recevoir', 'ouvrir',
        'courir', 'boire', 'croire', 'suivre', 'apprendre', 'comprendre',
        'sourire', 'conduire', 'construire', 'traduire', 'dormir', 'servir',
        'mentir', 'sentir', 'offrir', 'souffrir', 'découvrir', 'couvrir', 'rire',
        'battre', 'asseoir', 'paraître', 'apparaître', 'disparaître',
        'promettre', 'permettre', 'coudre', 'confire', 'décrire', 'plaire', 
        'plaindre', 'falloir', 'ressortir', 'repartir', 'endormir'
    ],
    regular: [
        'parler', 'aimer', 'travailler', 'étudier', 'écouter', 'chanter',
        'danser', 'habiter', 'regarder', 'jouer', 'voyager', 'marcher',
        'trouver', 'chercher', 'demander', 'donner', 'fermer', 'préparer',
        'manger', 'finir', 'choisir', 'réussir', 'grandir', 'réfléchir',
        'agir', 'remplir', 'obéir', 'attendre', 'entendre', 'perdre',
        'rendre', 'répondre', 'vendre', 'descendre', 'accepter', 'accomplir',
        'acheter', 'adorer', 'aider', 'ajouter', 'allumer', 'annoncer',
        'apporter', 'applaudir', 'arranger', 'assister', 'attraper', 'avancer',
        'bavarder', 'bouger', 'brûler', 'bâtir', 'cacher', 'casser',
        'changer', 'charger', 'commander', 'commencer', 'compléter', 'compter',
        'continuer', 'corriger', 'couper', 'créer', 'critiquer', 'cuisiner',
        'célébrer', 'décider', 'définir', 'déjeuner', 'désobéir', 'détester',
        'discuter', 'durer', 'emmener', 'engager', 'enlever', 'épouser',
        'expliquer', 'fleurir', 'fondre', 'gagner', 'garder', 'guérir',
        'habiller', 'investir', 'inviter', 'jeter', 'laisser', 'laver',
        'lever', 'louer', 'montrer', 'nettoyer', 'nourrir', 'organiser',
        'oublier', 'payer', 'penser', 'pleurer', 'porter', 'punir', 'pâlir',
        'quitter', 'raconter', 'ranger', 'recommencer', 'remercier', 'saluer',
        'signer', 'souhaiter', 'téléphoner', 'télétravaille', 'terminer',
        'tourner', 'traverser', 'utiliser', 'vieillir', 'visiter'
    ]
};

// COD (Complément d'Objet Direct) pronouns
const COD_PRONOUNS = ['me', 'te', 'le', 'la', 'nous', 'vous', 'les'];

// COI (Complément d'Objet Indirect) pronouns
const COI_PRONOUNS = ['me', 'te', 'lui', 'nous', 'vous', 'leur'];

// Default time for skipped/timed-out questions (for difficulty weighting)
const DEFAULT_SKIP_TIME = 30;

// Delay after correct answer before auto-advancing (milliseconds)
const CORRECT_ANSWER_DELAY = 5000;

/* =====================================================
   SECTION 2: APPLICATION STATE
   ===================================================== */

const STATE = {
    // User Settings (persisted)
    selectedMode: 'movement',
    selectedTenses: new Set(Object.keys(TENSES)),
    selectedPronouns: new Set(PRONOUNS.map(p => p.key)),
    questionCount: 10,
    timeLimit: 10,
    codEnabled: false,
    coiEnabled: false,
    searchedVerb: null,
    
    // Current Game State
    currentQuestion: null,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    history: [],  // Array of {verb, pronoun, tense, correct, timeSpent, cod, coi}
    questionStartTime: null,
    timerInterval: null,
    autoAdvanceTimeout: null,
    isAnswered: false,
    
    // Persistent Data
    allTimeStats: {},  // key: "verb:pronoun:tense" -> {times:[], correctCount, totalCount, streak, difficulty}
    roundHistory: [],  // Last rounds played
    
    // Leaderboard State
    leaderboardScope: 'all',  // 'all' or 'round'
    lastRoundData: null
};

/* =====================================================
   SECTION 3: UTILITY FUNCTIONS
   ===================================================== */

/**
 * Safe JSON parse from localStorage
 * @param {string} key - Storage key
 * @param {*} fallback - Default value if not found
 * @returns {*} Parsed value or fallback
 */
function loadFromStorage(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch (e) {
        console.error('Error loading from storage:', key, e);
        return fallback;
    }
}

/**
 * Safe JSON stringify and save to localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error saving to storage:', key, e);
    }
}

/**
 * Generate a unique key for verb-pronoun-tense combinations
 * @param {string} verb 
 * @param {string} pronoun 
 * @param {string} tense 
 * @returns {string}
 */
function getStatsKey(verb, pronoun, tense) {
    return `${verb}:${pronoun}:${tense}`;
}

/**
 * Shuffle array in place using Fisher-Yates algorithm
 * @param {Array} array 
 * @returns {Array}
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Get random element from array
 * @param {Array} array 
 * @returns {*}
 */
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Check if a verb exists in the VERBS library
 * @param {string} verb 
 * @returns {boolean}
 */
function verbExists(verb) {
    return typeof VERBS !== 'undefined' && VERBS[verb] !== undefined;
}

/**
 * Get conjugation for a verb/tense/pronoun combination
 * @param {string} verb 
 * @param {string} tense 
 * @param {string} pronoun - The display pronoun (je, tu, il, elle, etc.)
 * @returns {string|null}
 */
function getConjugation(verb, tense, pronoun) {
    if (!verbExists(verb)) return null;
    
    const verbData = VERBS[verb];
    if (!verbData || !verbData[tense]) return null;
    
    // Map display pronoun to verb library key (elle -> il, elles -> ils)
    const pronounObj = PRONOUNS.find(p => p.key === pronoun);
    const verbKey = pronounObj ? pronounObj.verbKey : pronoun;
    
    return verbData[tense][verbKey] || null;
}

/**
 * Get all available verbs for a given mode that exist in the library
 * Falls back to all available verbs if category is empty
 * @param {string} mode 
 * @returns {Array<string>}
 */
function getVerbsForMode(mode) {
    const categoryVerbs = VERB_CATEGORIES[mode] || [];
    const existingVerbs = categoryVerbs.filter(verb => verbExists(verb));
    
    // If no verbs found in category, try to get all available verbs from library
    if (existingVerbs.length === 0 && typeof VERBS !== 'undefined') {
        console.warn(`No verbs found for mode "${mode}", using all available verbs`);
        return Object.keys(VERBS).filter(verb => {
            // Filter out entries that aren't actually verbs (like tense names)
            const data = VERBS[verb];
            return data && typeof data === 'object' && 
                   (data.present || data['passe-compose'] || data.imparfait);
        });
    }
    
    return existingVerbs;
}

/**
 * Search for a verb by infinitive or conjugation form
 * @param {string} query 
 * @returns {string|null} The infinitive if found
 */
function searchVerb(query) {
    if (!query || typeof VERBS === 'undefined') return null;
    
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check if it's an infinitive
    if (VERBS[normalizedQuery]) {
        return normalizedQuery;
    }
    
    // Search through all conjugations
    for (const [infinitive, verbData] of Object.entries(VERBS)) {
        for (const tenseKey of Object.keys(TENSES)) {
            if (verbData[tenseKey]) {
                for (const conj of Object.values(verbData[tenseKey])) {
                    if (conj && conj.toLowerCase() === normalizedQuery) {
                        return infinitive;
                    }
                }
            }
        }
    }
    
    return null;
}

/* =====================================================
   SECTION 4: INITIALIZATION
   ===================================================== */

/**
 * Initialize the application
 */
function initializeApp() {
    // Load persistent data from storage
    loadPersistentData();
    
    // Render UI components
    renderTenseToggles();
    renderPronounToggles();
    renderLastRounds();
    
    // Restore searched verb if any
    if (STATE.searchedVerb) {
        document.getElementById('verbSearch').value = STATE.searchedVerb;
        updateSearchResult(STATE.searchedVerb);
    }
    
    // Attach event listeners
    attachEventListeners();
    
    console.log('French Verb Quiz initialized successfully');
}

/**
 * Load all persistent data from localStorage
 */
function loadPersistentData() {
    // Load all-time stats
    STATE.allTimeStats = loadFromStorage(STORAGE_KEYS.ALL_TIME_STATS, {});
    
    // Load round history
    STATE.roundHistory = loadFromStorage(STORAGE_KEYS.ROUND_HISTORY, []);
    
    // Load searched verb
    STATE.searchedVerb = loadFromStorage(STORAGE_KEYS.SEARCHED_VERB, null);
    
    // Load settings
    const savedSettings = loadFromStorage(STORAGE_KEYS.SETTINGS, null);
    if (savedSettings) {
        STATE.selectedMode = savedSettings.selectedMode || 'movement';
        STATE.selectedTenses = new Set(savedSettings.selectedTenses || Object.keys(TENSES));
        STATE.selectedPronouns = new Set(savedSettings.selectedPronouns || PRONOUNS.map(p => p.key));
        STATE.questionCount = savedSettings.questionCount || 10;
        STATE.timeLimit = savedSettings.timeLimit || 10;
        STATE.codEnabled = savedSettings.codEnabled || false;
        STATE.coiEnabled = savedSettings.coiEnabled || false;
    }
}

/**
 * Save current settings to localStorage
 */
function saveSettings() {
    saveToStorage(STORAGE_KEYS.SETTINGS, {
        selectedMode: STATE.selectedMode,
        selectedTenses: Array.from(STATE.selectedTenses),
        selectedPronouns: Array.from(STATE.selectedPronouns),
        questionCount: STATE.questionCount,
        timeLimit: STATE.timeLimit,
        codEnabled: STATE.codEnabled,
        coiEnabled: STATE.coiEnabled
    });
}

/**
 * Save all-time stats to localStorage
 */
function saveAllTimeStats() {
    saveToStorage(STORAGE_KEYS.ALL_TIME_STATS, STATE.allTimeStats);
}

/**
 * Save round history to localStorage
 */
function saveRoundHistory() {
    saveToStorage(STORAGE_KEYS.ROUND_HISTORY, STATE.roundHistory);
}

/**
 * Save searched verb to localStorage
 */
function saveSearchedVerb() {
    saveToStorage(STORAGE_KEYS.SEARCHED_VERB, STATE.searchedVerb);
}

/* =====================================================
   SECTION 5: UI RENDERING
   ===================================================== */

/**
 * Render tense toggle buttons
 */
function renderTenseToggles() {
    const container = document.getElementById('tenseToggles');
    container.innerHTML = '';
    
    Object.entries(TENSES).forEach(([key, tense]) => {
        const btn = document.createElement('button');
        btn.className = STATE.selectedTenses.has(key) ? 'toggle active' : 'toggle inactive';
        btn.textContent = tense.label;
        btn.dataset.tense = key;
        btn.addEventListener('click', () => toggleTense(key, btn));
        container.appendChild(btn);
    });
}

/**
 * Render pronoun toggle buttons
 */
function renderPronounToggles() {
    const container = document.getElementById('pronounToggles');
    container.innerHTML = '';
    
    PRONOUNS.forEach(pronoun => {
        const btn = document.createElement('button');
        btn.className = STATE.selectedPronouns.has(pronoun.key) ? 'toggle active' : 'toggle inactive';
        btn.textContent = pronoun.label;
        btn.dataset.pronoun = pronoun.key;
        btn.addEventListener('click', () => togglePronoun(pronoun.key, btn));
        container.appendChild(btn);
    });
}

/**
 * Render last 5 rounds summary
 */
function renderLastRounds() {
    const container = document.getElementById('lastRoundsList');
    
    if (STATE.roundHistory.length === 0) {
        container.innerHTML = '<p style="color:#888; font-style:italic;">No rounds played yet.</p>';
        return;
    }
    
    // Get last 5 rounds (most recent first)
    const last5 = STATE.roundHistory.slice(-5).reverse();
    
    container.innerHTML = last5.map((round, idx) => {
        const avgTime = round.totalQuestions > 0 
            ? (round.totalTime / round.totalQuestions).toFixed(2) 
            : '0.00';
        const correctPct = round.totalQuestions > 0 
            ? ((round.correctAnswers / round.totalQuestions) * 100).toFixed(0) 
            : '0';
        const date = new Date(round.timestamp).toLocaleDateString();
        
        return `
            <div class="round-item">
                <div class="round-meta">Round ${STATE.roundHistory.length - idx} • ${date} • ${round.mode}</div>
                <div class="round-stats">
                    Score: <strong>${round.correctAnswers}/${round.totalQuestions}</strong> (${correctPct}%) • 
                    Avg: <strong>${avgTime}s</strong>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update search result display
 * @param {string|null} foundVerb 
 */
function updateSearchResult(foundVerb) {
    const resultDiv = document.getElementById('searchResult');
    
    if (foundVerb) {
        resultDiv.innerHTML = `✓ Found: <strong>${foundVerb}</strong> - Quiz will focus on this verb`;
        resultDiv.className = 'search-result found';
        resultDiv.classList.remove('hidden');
    } else if (document.getElementById('verbSearch').value.trim()) {
        resultDiv.innerHTML = '✗ Verb not found in library';
        resultDiv.className = 'search-result not-found';
        resultDiv.classList.remove('hidden');
    } else {
        resultDiv.classList.add('hidden');
    }
}

/* =====================================================
   SECTION 6: EVENT LISTENERS
   ===================================================== */

/**
 * Attach all event listeners
 */
function attachEventListeners() {
    // Mode toggles
    document.querySelectorAll('#modeToggles .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleModeToggle(btn));
    });
    
    // Question count toggles
    document.querySelectorAll('#questionCountToggles .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleQuestionCountToggle(btn));
    });
    
    // Time limit toggles
    document.querySelectorAll('#timeLimitToggles .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleTimeLimitToggle(btn));
    });
    
    // COD/COI toggles
    document.querySelectorAll('#objectToggles .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleObjectToggle(btn));
    });
    
    // Verb search
    document.getElementById('verbSearch').addEventListener('input', handleVerbSearch);
    
    // Start button
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    
    // Leaderboard button
    document.getElementById('leaderboardBtn').addEventListener('click', showLeaderboardFromMenu);
    
    // Back to menu button
    document.getElementById('backToMenuBtn').addEventListener('click', backToMenu);
    
    // Skip button
    document.getElementById('skipBtn').addEventListener('click', skipToNext);
    
    // Leaderboard filter toggles
    document.querySelectorAll('#leaderboardFilters .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleLeaderboardFilterToggle(btn));
    });
    
    // Leaderboard sort toggles
    document.querySelectorAll('#leaderboardSort .toggle').forEach(btn => {
        btn.addEventListener('click', () => handleLeaderboardSortToggle(btn));
    });
}

/**
 * Handle mode toggle click
 * @param {HTMLElement} btn 
 */
function handleModeToggle(btn) {
    document.querySelectorAll('#modeToggles .toggle').forEach(b => {
        b.className = 'toggle inactive';
    });
    btn.className = 'toggle active';
    STATE.selectedMode = btn.dataset.mode;
    saveSettings();
}

/**
 * Handle question count toggle click
 * @param {HTMLElement} btn 
 */
function handleQuestionCountToggle(btn) {
    document.querySelectorAll('#questionCountToggles .toggle').forEach(b => {
        b.className = 'toggle inactive';
    });
    btn.className = 'toggle active';
    STATE.questionCount = btn.dataset.num === 'Infinity' ? Infinity : parseInt(btn.dataset.num);
    saveSettings();
}

/**
 * Handle time limit toggle click
 * @param {HTMLElement} btn 
 */
function handleTimeLimitToggle(btn) {
    document.querySelectorAll('#timeLimitToggles .toggle').forEach(b => {
        b.className = 'toggle inactive';
    });
    btn.className = 'toggle active';
    STATE.timeLimit = btn.dataset.time === 'Infinity' ? Infinity : parseInt(btn.dataset.time);
    saveSettings();
}

/**
 * Handle COD/COI toggle click
 * @param {HTMLElement} btn 
 */
function handleObjectToggle(btn) {
    const type = btn.dataset.type;
    
    if (type === 'cod') {
        STATE.codEnabled = !STATE.codEnabled;
        btn.className = STATE.codEnabled ? 'toggle active' : 'toggle inactive';
    } else if (type === 'coi') {
        STATE.coiEnabled = !STATE.coiEnabled;
        btn.className = STATE.coiEnabled ? 'toggle active' : 'toggle inactive';
    }
    
    saveSettings();
}

/**
 * Toggle tense selection
 * @param {string} key 
 * @param {HTMLElement} btn 
 */
function toggleTense(key, btn) {
    if (STATE.selectedTenses.has(key)) {
        STATE.selectedTenses.delete(key);
        btn.className = 'toggle inactive';
    } else {
        STATE.selectedTenses.add(key);
        btn.className = 'toggle active';
    }
    saveSettings();
}

/**
 * Toggle pronoun selection
 * @param {string} key 
 * @param {HTMLElement} btn 
 */
function togglePronoun(key, btn) {
    if (STATE.selectedPronouns.has(key)) {
        STATE.selectedPronouns.delete(key);
        btn.className = 'toggle inactive';
    } else {
        STATE.selectedPronouns.add(key);
        btn.className = 'toggle active';
    }
    saveSettings();
}

/**
 * Handle verb search input
 * @param {Event} e 
 */
function handleVerbSearch(e) {
    const query = e.target.value.trim();
    
    if (!query) {
        STATE.searchedVerb = null;
        saveSearchedVerb();
        updateSearchResult(null);
        return;
    }
    
    const foundVerb = searchVerb(query);
    STATE.searchedVerb = foundVerb;
    saveSearchedVerb();
    updateSearchResult(foundVerb);
}

/**
 * Handle leaderboard filter toggle
 * @param {HTMLElement} btn 
 */
function handleLeaderboardFilterToggle(btn) {
    btn.classList.toggle('active');
    btn.classList.toggle('inactive');
    updateLeaderboard();
}

/**
 * Handle leaderboard sort toggle
 * @param {HTMLElement} btn 
 */
function handleLeaderboardSortToggle(btn) {
    document.querySelectorAll('#leaderboardSort .toggle').forEach(b => {
        b.className = 'toggle inactive';
    });
    btn.className = 'toggle active';
    updateLeaderboard();
}

/* =====================================================
   SECTION 7: QUIZ LOGIC
   ===================================================== */

/**
 * Start a new quiz
 */
function startQuiz() {
    // Validate selections
    if (STATE.selectedTenses.size === 0) {
        alert('Please select at least one tense!');
        return;
    }
    
    if (STATE.selectedPronouns.size === 0) {
        alert('Please select at least one pronoun!');
        return;
    }
    
    // Get available verbs
    const availableVerbs = STATE.searchedVerb 
        ? [STATE.searchedVerb].filter(v => verbExists(v))
        : getVerbsForMode(STATE.selectedMode);
    
    if (availableVerbs.length === 0) {
        alert('No verbs available for the selected mode. Please check your verb library.');
        return;
    }
    
    // Reset game state
    STATE.currentQuestionIndex = 0;
    STATE.correctAnswers = 0;
    STATE.history = [];
    STATE.isAnswered = false;
    
    // Show game screen
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    // Start first question
    nextQuestion();
}

/**
 * Generate and display the next question
 */
function nextQuestion() {
    // Check if quiz is complete
    const totalQuestions = STATE.questionCount === Infinity ? Infinity : STATE.questionCount;
    
    if (STATE.currentQuestionIndex >= totalQuestions) {
        endQuiz();
        return;
    }
    
    // Increment question counter
    STATE.currentQuestionIndex++;
    STATE.isAnswered = false;
    
    // Clear any existing timers
    clearTimers();
    
    // Generate question
    const question = generateQuestion();
    
    if (!question) {
        console.error('Failed to generate question');
        endQuiz();
        return;
    }
    
    STATE.currentQuestion = question;
    STATE.questionStartTime = Date.now();
    
    // Update UI
    updateGameUI(question);
    
    // Start timer
    startTimer();
    
    // Hide feedback
    document.getElementById('feedback').classList.add('hidden');
}

/**
 * Generate a single question
 * @returns {Object|null}
 */
function generateQuestion() {
    // Get available verbs
    const availableVerbs = STATE.searchedVerb 
        ? [STATE.searchedVerb].filter(v => verbExists(v))
        : getVerbsForMode(STATE.selectedMode);
    
    if (availableVerbs.length === 0) return null;
    
    // Select verb (weighted by difficulty)
    const verb = selectWeightedVerb(availableVerbs);
    
    // Select tense
    const tensesArray = Array.from(STATE.selectedTenses);
    const tense = randomElement(tensesArray);
    
    // Select pronoun
    const pronounsArray = Array.from(STATE.selectedPronouns);
    const pronoun = randomElement(pronounsArray);
    
    // Get correct conjugation
    const correctAnswer = getConjugation(verb, tense, pronoun);
    
    if (!correctAnswer) {
        // Try again with different combination
        return generateQuestion();
    }
    
    // Select COD/COI if enabled
    let objectPronoun = null;
    let objectType = null;
    
    if (STATE.codEnabled && STATE.coiEnabled) {
        objectType = Math.random() < 0.5 ? 'COD' : 'COI';
    } else if (STATE.codEnabled) {
        objectType = 'COD';
    } else if (STATE.coiEnabled) {
        objectType = 'COI';
    }
    
    if (objectType === 'COD') {
        objectPronoun = randomElement(COD_PRONOUNS);
    } else if (objectType === 'COI') {
        objectPronoun = randomElement(COI_PRONOUNS);
    }
    
    // Generate wrong answers
    const wrongAnswers = generateWrongAnswers(verb, tense, pronoun, correctAnswer, objectPronoun);
    
    // Combine and shuffle all answers
    const allAnswers = [correctAnswer, ...wrongAnswers];
    shuffleArray(allAnswers);
    
    return {
        verb,
        tense,
        pronoun,
        objectType,
        objectPronoun,
        correctAnswer,
        allAnswers
    };
}

/**
 * Select a verb weighted by difficulty (harder verbs more likely)
 * @param {Array<string>} verbs 
 * @returns {string}
 */
function selectWeightedVerb(verbs) {
    const weights = verbs.map(verb => {
        let totalDifficulty = 0;
        let count = 0;
        
        // Sum difficulty across all pronoun-tense combinations
        STATE.selectedTenses.forEach(tense => {
            STATE.selectedPronouns.forEach(pronoun => {
                const key = getStatsKey(verb, pronoun, tense);
                const stats = STATE.allTimeStats[key];
                
                if (stats && stats.difficulty !== undefined) {
                    totalDifficulty += stats.difficulty;
                    count++;
                } else {
                    // Default difficulty for untested combinations
                    totalDifficulty += 0.5;
                    count++;
                }
            });
        });
        
        // Return average difficulty (minimum 0.1 to ensure all verbs have a chance)
        return count > 0 ? Math.max(0.1, totalDifficulty / count) : 0.5;
    });
    
    // Weighted random selection
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < verbs.length; i++) {
        random -= weights[i];
        if (random <= 0) return verbs[i];
    }
    
    return verbs[verbs.length - 1];
}

/**
 * Generate 3 wrong answers for a question
 * @param {string} verb 
 * @param {string} tense 
 * @param {string} pronoun 
 * @param {string} correctAnswer 
 * @param {string|null} objectPronoun 
 * @returns {Array<string>}
 */
function generateWrongAnswers(verb, tense, pronoun, correctAnswer, objectPronoun) {
    const wrongAnswers = new Set();
    const maxAttempts = 50;
    let attempts = 0;
    
    // Strategy 1: Same verb, different pronouns (same tense)
    if (verbExists(verb) && VERBS[verb][tense]) {
        PRONOUNS.forEach(p => {
            const conj = VERBS[verb][tense][p.verbKey];
            if (conj && conj !== correctAnswer) {
                wrongAnswers.add(conj);
            }
        });
    }
    
    // Strategy 2: Same verb, different tenses (same pronoun)
    if (verbExists(verb)) {
        const pronounObj = PRONOUNS.find(p => p.key === pronoun);
        const verbKey = pronounObj ? pronounObj.verbKey : pronoun;
        
        Object.keys(TENSES).forEach(t => {
            if (t !== tense && VERBS[verb][t]) {
                const conj = VERBS[verb][t][verbKey];
                if (conj && conj !== correctAnswer) {
                    wrongAnswers.add(conj);
                }
            }
        });
    }
    
    // Strategy 3: Random verbs, same tense and pronoun
    const allVerbs = Object.keys(VERBS);
    const pronounObj = PRONOUNS.find(p => p.key === pronoun);
    const verbKey = pronounObj ? pronounObj.verbKey : pronoun;
    
    while (wrongAnswers.size < 10 && attempts < maxAttempts) {
        const randomVerb = randomElement(allVerbs);
        if (VERBS[randomVerb] && VERBS[randomVerb][tense]) {
            const conj = VERBS[randomVerb][tense][verbKey];
            if (conj && conj !== correctAnswer) {
                wrongAnswers.add(conj);
            }
        }
        attempts++;
    }
    
    // Convert to array and select 3
    const wrongArray = Array.from(wrongAnswers);
    shuffleArray(wrongArray);
    
    // Ensure we have exactly 3 wrong answers
    while (wrongArray.length < 3) {
        wrongArray.push(correctAnswer + '_' + Math.random().toString(36).substr(2, 4));
    }
    
    return wrongArray.slice(0, 3);
}

/**
 * Update the game UI with current question
 * @param {Object} question 
 */
function updateGameUI(question) {
    const { verb, tense, pronoun, objectPronoun, allAnswers } = question;
    
    // Update progress info
    const totalQ = STATE.questionCount === Infinity ? '∞' : STATE.questionCount;
    document.getElementById('currentQ').textContent = STATE.currentQuestionIndex;
    document.getElementById('totalQ').textContent = totalQ;
    document.getElementById('correctCount').textContent = STATE.correctAnswers;
    document.getElementById('totalCount').textContent = STATE.currentQuestionIndex - 1;
    
    // Update verb display
    document.getElementById('verbDisplay').textContent = verb;
    
    // Update tense display
    document.getElementById('tenseDisplay').textContent = TENSES[tense].label;
    
    // Build question text with object pronoun if enabled
    let questionText = pronoun;
    if (objectPronoun) {
        // Handle elision (me/te/le/la before vowel)
        questionText = `${pronoun} ${objectPronoun}`;
    }
    questionText += ' _____';
    document.getElementById('questionText').textContent = questionText;
    
    // Update answer buttons
    const answerGrid = document.getElementById('answerGrid');
    answerGrid.innerHTML = '';
    
    allAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => handleAnswer(answer));
        answerGrid.appendChild(btn);
    });
}

/**
 * Handle answer selection
 * @param {string} selectedAnswer 
 */
function handleAnswer(selectedAnswer) {
    if (STATE.isAnswered) return;
    
    STATE.isAnswered = true;
    clearTimers();
    
    const question = STATE.currentQuestion;
    const isCorrect = selectedAnswer === question.correctAnswer;
    const timeSpent = (Date.now() - STATE.questionStartTime) / 1000;
    
    // Record answer
    recordAnswer(isCorrect, timeSpent);
    
    // Update score if correct
    if (isCorrect) {
        STATE.correctAnswers++;
    }
    
    // Update score display
    document.getElementById('correctCount').textContent = STATE.correctAnswers;
    document.getElementById('totalCount').textContent = STATE.currentQuestionIndex;
    
    // Visual feedback on buttons
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Show feedback
    showFeedback(isCorrect, timeSpent);
}

/**
 * Record an answer in history and update stats
 * @param {boolean} isCorrect 
 * @param {number} timeSpent 
 */
function recordAnswer(isCorrect, timeSpent) {
    const question = STATE.currentQuestion;
    
    // Add to round history
    STATE.history.push({
        verb: question.verb,
        pronoun: question.pronoun,
        tense: question.tense,
        objectType: question.objectType,
        objectPronoun: question.objectPronoun,
        correct: isCorrect,
        timeSpent: timeSpent
    });
    
    // Update all-time stats (ignoring COD/COI for difficulty tracking)
    updateAllTimeStats(question.verb, question.pronoun, question.tense, isCorrect, timeSpent);
}

/**
 * Update all-time statistics for a verb-pronoun-tense combination
 * @param {string} verb 
 * @param {string} pronoun 
 * @param {string} tense 
 * @param {boolean} isCorrect 
 * @param {number} timeSpent 
 */
function updateAllTimeStats(verb, pronoun, tense, isCorrect, timeSpent) {
    const key = getStatsKey(verb, pronoun, tense);
    
    if (!STATE.allTimeStats[key]) {
        STATE.allTimeStats[key] = {
            times: [],
            correctCount: 0,
            totalCount: 0,
            streak: 0,
            difficulty: 0.5
        };
    }
    
    const stats = STATE.allTimeStats[key];
    
    // Update times array (keep last 20 for efficiency)
    stats.times.push(timeSpent);
    if (stats.times.length > 20) {
        stats.times.shift();
    }
    
    // Update counts
    stats.totalCount++;
    if (isCorrect) {
        stats.correctCount++;
        stats.streak++;
    } else {
        stats.streak = 0;
    }
    
    // Recalculate difficulty
    stats.difficulty = calculateDifficulty(stats, tense);
    
    // Save to storage
    saveAllTimeStats();
}

/**
 * Calculate difficulty score based on performance
 * Higher difficulty = more likely to be selected for practice
 * @param {Object} stats 
 * @param {string} tense 
 * @returns {number}
 */
function calculateDifficulty(stats, tense) {
    if (stats.totalCount === 0) return 0.5;
    
    // Base weight from tense
    const tenseWeight = TENSES[tense]?.weight || 1.0;
    
    // Correctness factor (lower correctness = higher difficulty)
    const correctnessRate = stats.correctCount / stats.totalCount;
    const correctnessFactor = 1 - correctnessRate;
    
    // Speed factor (slower = higher difficulty)
    const avgTime = stats.times.reduce((a, b) => a + b, 0) / stats.times.length;
    const speedFactor = Math.min(avgTime / 10, 2); // Normalize to ~2 max
    
    // Streak factor (higher streak = lower difficulty, to vary practice)
    const streakFactor = Math.max(0, 1 - stats.streak * 0.1);
    
    // Combine factors
    let difficulty = (
        tenseWeight * 0.2 +
        correctnessFactor * 0.4 +
        speedFactor * 0.2 +
        streakFactor * 0.2
    );
    
    // Clamp between 0.1 and 2.0
    return Math.max(0.1, Math.min(2.0, difficulty));
}

/**
 * Show feedback after answer
 * @param {boolean} isCorrect 
 * @param {number} timeSpent 
 */
function showFeedback(isCorrect, timeSpent) {
    const feedbackDiv = document.getElementById('feedback');
    const feedbackMsg = document.getElementById('feedbackMsg');
    
    if (isCorrect) {
        feedbackMsg.innerHTML = `<span class="feedback-correct">✓ Correct!</span> (${timeSpent.toFixed(2)}s)`;
    } else {
        feedbackMsg.innerHTML = `<span class="feedback-incorrect">✗ Incorrect!</span> Answer: <strong>${STATE.currentQuestion.correctAnswer}</strong>`;
    }
    
    feedbackDiv.classList.remove('hidden');
    
    // Auto-advance after delay
    STATE.autoAdvanceTimeout = setTimeout(() => {
        nextQuestion();
    }, CORRECT_ANSWER_DELAY);
}

/**
 * Skip to next question (manual skip)
 */
function skipToNext() {
    clearTimers();
    nextQuestion();
}

/**
 * Start the timer for current question
 */
function startTimer() {
    const timerBar = document.getElementById('timerBar');
    
    if (STATE.timeLimit === Infinity) {
        timerBar.style.width = '100%';
        return;
    }
    
    let elapsed = 0;
    const interval = 100; // Update every 100ms
    
    timerBar.style.width = '100%';
    
    STATE.timerInterval = setInterval(() => {
        elapsed += interval / 1000;
        const remaining = Math.max(0, STATE.timeLimit - elapsed);
        const percent = (remaining / STATE.timeLimit) * 100;
        
        timerBar.style.width = percent + '%';
        
        if (remaining <= 0) {
            handleTimeout();
        }
    }, interval);
}

/**
 * Handle timeout (time ran out)
 */
function handleTimeout() {
    if (STATE.isAnswered) return;
    
    STATE.isAnswered = true;
    clearTimers();
    
    // Record as incorrect with default skip time
    recordAnswer(false, DEFAULT_SKIP_TIME);
    
    // Update score display
    document.getElementById('totalCount').textContent = STATE.currentQuestionIndex;
    
    // Visual feedback
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === STATE.currentQuestion.correctAnswer) {
            btn.classList.add('correct');
        }
    });
    
    // Show feedback
    const feedbackDiv = document.getElementById('feedback');
    const feedbackMsg = document.getElementById('feedbackMsg');
    feedbackMsg.innerHTML = `<span class="feedback-incorrect">⏱ Time's up!</span> Answer: <strong>${STATE.currentQuestion.correctAnswer}</strong>`;
    feedbackDiv.classList.remove('hidden');
    
    // Auto-advance
    STATE.autoAdvanceTimeout = setTimeout(() => {
        nextQuestion();
    }, CORRECT_ANSWER_DELAY);
}

/**
 * Clear all timers
 */
function clearTimers() {
    if (STATE.timerInterval) {
        clearInterval(STATE.timerInterval);
        STATE.timerInterval = null;
    }
    if (STATE.autoAdvanceTimeout) {
        clearTimeout(STATE.autoAdvanceTimeout);
        STATE.autoAdvanceTimeout = null;
    }
}

/**
 * End the quiz and show results
 */
function endQuiz() {
    clearTimers();
    
    // Calculate round stats
    const totalTime = STATE.history.reduce((sum, h) => sum + h.timeSpent, 0);
    const totalQuestions = STATE.history.length;
    
    // Save round data
    const roundData = {
        mode: STATE.selectedMode,
        correctAnswers: STATE.correctAnswers,
        totalQuestions: totalQuestions,
        totalTime: totalTime,
        timestamp: Date.now(),
        history: STATE.history
    };
    
    STATE.lastRoundData = roundData;
    
    // Add to round history (keep last 20)
    STATE.roundHistory.push(roundData);
    if (STATE.roundHistory.length > 20) {
        STATE.roundHistory.shift();
    }
    saveRoundHistory();
    
    // Show results screen
    STATE.leaderboardScope = 'round';
    showResultsScreen();
}

/**
 * Show results/leaderboard screen
 */
function showResultsScreen() {
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    // Show final score section if coming from quiz
    const finalScoreSection = document.getElementById('finalScoreSection');
    if (STATE.leaderboardScope === 'round' && STATE.lastRoundData) {
        finalScoreSection.classList.remove('hidden');
        document.getElementById('finalScore').textContent = STATE.lastRoundData.correctAnswers;
        document.getElementById('finalTotal').textContent = STATE.lastRoundData.totalQuestions;
    } else {
        finalScoreSection.classList.add('hidden');
    }
    
    // Update leaderboard
    updateLeaderboard();
}

/**
 * Show leaderboard from main menu (all-time stats)
 */
function showLeaderboardFromMenu() {
    STATE.leaderboardScope = 'all';
    STATE.lastRoundData = null;
    showResultsScreen();
}

/**
 * Return to main menu
 */
function backToMenu() {
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
    
    // Refresh last rounds display
    renderLastRounds();
    
    // Reset leaderboard scope
    STATE.leaderboardScope = 'all';
}

/* =====================================================
   SECTION 8: LEADERBOARD LOGIC
   ===================================================== */

/**
 * Update the leaderboard table based on current filters and scope
 */
function updateLeaderboard() {
    // Get active filters
    const filterBtns = document.querySelectorAll('#leaderboardFilters .toggle');
    const groupByTense = filterBtns[0].classList.contains('active');
    const groupByVerb = filterBtns[1].classList.contains('active');
    const groupByPronoun = filterBtns[2].classList.contains('active');
    
    // Get sort type
    const sortBtns = document.querySelectorAll('#leaderboardSort .toggle');
    const showImprovement = sortBtns[0].classList.contains('active');
    
    // Get data source based on scope
    let entries = [];
    
    if (STATE.leaderboardScope === 'round' && STATE.lastRoundData) {
        // Use only this round's data
        entries = STATE.lastRoundData.history.map(h => ({
            verb: h.verb,
            pronoun: h.pronoun,
            tense: h.tense,
            correct: h.correct,
            timeSpent: h.timeSpent
        }));
    } else {
        // Use all-time stats
        Object.entries(STATE.allTimeStats).forEach(([key, stats]) => {
            const [verb, pronoun, tense] = key.split(':');
            
            // Create individual entries for each attempt (approximation from stats)
            const avgTime = stats.times.length > 0 
                ? stats.times.reduce((a, b) => a + b, 0) / stats.times.length 
                : DEFAULT_SKIP_TIME;
            
            entries.push({
                verb,
                pronoun,
                tense,
                correctCount: stats.correctCount,
                totalCount: stats.totalCount,
                avgTime: avgTime,
                times: stats.times
            });
        });
    }
    
    // Group entries
    const groups = {};
    
    if (STATE.leaderboardScope === 'round') {
        // Group round data
        entries.forEach(entry => {
            const keyParts = [];
            if (groupByTense) keyParts.push(entry.tense);
            if (groupByVerb) keyParts.push(entry.verb);
            if (groupByPronoun) keyParts.push(entry.pronoun);
            
            // Default grouping if none selected
            if (keyParts.length === 0) keyParts.push(entry.verb);
            
            const key = keyParts.join(' + ');
            
            if (!groups[key]) {
                groups[key] = {
                    tense: entry.tense,
                    verb: entry.verb,
                    pronoun: entry.pronoun,
                    times: [],
                    correctCount: 0,
                    totalCount: 0
                };
            }
            
            groups[key].times.push(entry.timeSpent);
            groups[key].totalCount++;
            if (entry.correct) groups[key].correctCount++;
        });
    } else {
        // Group all-time data
        entries.forEach(entry => {
            const keyParts = [];
            if (groupByTense) keyParts.push(entry.tense);
            if (groupByVerb) keyParts.push(entry.verb);
            if (groupByPronoun) keyParts.push(entry.pronoun);
            
            if (keyParts.length === 0) keyParts.push(entry.verb);
            
            const key = keyParts.join(' + ');
            
            if (!groups[key]) {
                groups[key] = {
                    tense: entry.tense,
                    verb: entry.verb,
                    pronoun: entry.pronoun,
                    times: [],
                    correctCount: 0,
                    totalCount: 0
                };
            }
            
            groups[key].times.push(...entry.times);
            groups[key].correctCount += entry.correctCount;
            groups[key].totalCount += entry.totalCount;
        });
    }
    
    // Calculate statistics for each group
    const groupStats = Object.entries(groups).map(([key, group]) => {
        const avgTime = group.times.length > 0 
            ? group.times.reduce((a, b) => a + b, 0) / group.times.length 
            : 0;
        
        const correctness = group.totalCount > 0 
            ? (group.correctCount / group.totalCount) * 100 
            : 0;
        
        // Calculate improvement (compare recent avg to all-time median)
        let improvement = 0;
        if (group.times.length >= 2) {
            const sortedTimes = [...group.times].sort((a, b) => a - b);
            const median = sortedTimes[Math.floor(sortedTimes.length / 2)];
            
            // Recent average (last 5 attempts)
            const recentTimes = group.times.slice(-5);
            const recentAvg = recentTimes.reduce((a, b) => a + b, 0) / recentTimes.length;
            
            // Positive improvement = getting faster
            improvement = median > 0 ? ((median - recentAvg) / median) * 100 : 0;
        }
        
        return {
            key,
            verb: group.verb,
            pronoun: group.pronoun,
            tense: group.tense,
            avgTime,
            correctness,
            improvement,
            attempts: group.totalCount
        };
    });
    
    // Sort groups
    if (showImprovement) {
        // Top 10 by improvement (best improvement first)
        groupStats.sort((a, b) => b.improvement - a.improvement);
    } else {
        // Bottom 10 (struggling) - worst performance first
        // Lower correctness and slower time = more struggling
        groupStats.sort((a, b) => {
            const scoreA = a.correctness - (a.avgTime * 5);
            const scoreB = b.correctness - (b.avgTime * 5);
            return scoreA - scoreB;
        });
    }
    
    // Take top/bottom 10
    const displayData = groupStats.slice(0, 10);
    
    // Update table header
    const headerParts = [];
    if (groupByTense) headerParts.push('Tense');
    if (groupByVerb) headerParts.push('Verb');
    if (groupByPronoun) headerParts.push('Pronoun');
    if (headerParts.length === 0) headerParts.push('Verb');
    
    document.getElementById('objectHeader').textContent = headerParts.join(' + ');
    
    // Render table rows
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';
    
    if (displayData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:20px; color:#888; font-style:italic;">
                    No data available yet. Play some rounds to see statistics!
                </td>
            </tr>
        `;
        return;
    }
    
    displayData.forEach((item, idx) => {
        const row = document.createElement('tr');
        
        // Format object column
        const objectParts = [];
        if (groupByTense && item.tense) objectParts.push(TENSES[item.tense]?.label || item.tense);
        if (groupByVerb && item.verb) objectParts.push(item.verb);
        if (groupByPronoun && item.pronoun) objectParts.push(item.pronoun);
        if (objectParts.length === 0 && item.verb) objectParts.push(item.verb);
        const objectText = objectParts.join(' + ');
        
        // Format improvement
        const improvementClass = item.improvement >= 0 ? 'improvement-positive' : 'improvement-negative';
        const improvementSign = item.improvement >= 0 ? '+' : '';
        
        row.innerHTML = `
            <td>${idx + 1}</td>
            <td>${escapeHtml(objectText)}</td>
            <td>${item.avgTime.toFixed(2)}</td>
            <td class="${improvementClass}">${improvementSign}${item.improvement.toFixed(1)}%</td>
            <td>${item.correctness.toFixed(0)}%</td>
            <td>${item.attempts}</td>
        `;
        
        tbody.appendChild(row);
    });
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str 
 * @returns {string}
 */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* =====================================================
   SECTION 9: INITIALIZATION
   ===================================================== */

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Also handle if script loads after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initializeApp, 1);
}
