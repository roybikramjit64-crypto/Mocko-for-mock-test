let currentViewMode = localStorage.getItem('userViewMode') || 'grid';


let currentPageKey = 'mathematics';


let currentQuestions =[];
let currentIndex = 0;
let isShowingPreviewMode = false;

let reviewPageSubject = "";
let reviewPageTitle = "";

let reviewPageOrigin = "report"; //Global variable to remember which screen opened the review panel

//Global placeholder to safely manage modal object instance
let bootstrapCancelModalInstance = null;

//Variables for timer countdown
let timeInterval = null;
let timeRemaining = 0; //Total seconds

const clickSound = new Audio('sounds/universfield-computer-mouse-click-352734.mp3');
clickSound.preload = 'auto';
clickSound.volume = 0.4;

const startBeepSound = new Audio('sounds/49447089-game-start-317318.mp3');
startBeepSound.preload = 'auto';

const endingAlertSound = new Audio('sounds/freesound_community-kitchen-timer-87485.mp3');
endingAlertSound.preload = 'auto';

const dashboardSubjectsConfig = [
    { key: 'mathematics', name: 'Mathematics', icon: '📐', bg: '#f1f2f6', border: '#4a69bd' },
    { key: 'geography', name: 'Geography', icon: '🌍', bg: '#e3f9e5', border: '#2ecc71' },
    { key: 'history', name: 'History', icon: '⏳', bg: '#fff2e6', border: '#e67e22' },
    { key: 'generalScience', name: 'General Science', icon: '🧪', bg: '#f3e5f5', border: '#9c27b0' },
    { key: 'reasoning', name: 'Reasoning', icon: '🧩', bg: '#e0f7fa', border: '#00bcd4' },
];

function loadContent(pageKey) {
    document.querySelector('.exam-area').classList.add('hidden');
    const contentArea = document.getElementById("dynamic-content");
    contentArea.classList.remove('d-none');

    contentArea.innerHTML = pageContent[pageKey] || `<h2>${pageKey}</h2>`;

    currentPageKey = pageKey;

    const viewContainer = document.getElementById("chapters-container");
    if (viewContainer) {
        if (currentViewMode === 'grid') {
            viewContainer.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";
        } else {
            viewContainer.className = "row row-cols-1 g-3";
        }
    }

    renderActiveCards();
    initViewToggles();

    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');
    if (gridBtn && listBtn) {
        if (currentViewMode === 'grid') {
            gridBtn.classList.add('active2');
            listBtn.classList.remove('active2');

            listBtn.classList.add('text-secondary');
            gridBtn.classList.remove('text-secondary');
        } else {
            listBtn.classList.add('active2');
            listBtn.classList.remove('text-secondary');

            gridBtn.classList.remove('active2');
            gridBtn.classList.add('text-secondary');
        }
    }


    document.querySelectorAll('.nav-link, .sub-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`[onclick="loadContent('${pageKey}')"]`).forEach(l => {
        const isAccountElement = 
            l.id === 'sidebar-btn-ac' ||
            l.id === 'topbar-btn-ac' ||
            l.id === 'sidebar-user-logged-in' ||
            l.id === 'topbar-user-logged-in' ||
            l.closest('#sidebar-ac') !== null ||
            l.closest('#topbar-ac') !== null;

            if (!isAccountElement) {
                l.classList.add('active');
            }
    });

    if (pageKey === 'dashboard') {
        buildDynamicDashboard();
        syncGlobalUserInterfaceEl();
        
    }

    if (pageKey === 'account') {
        renderAccountTabState();
    }
}

function buildDynamicDashboard() {
    const analyticsGrid = document.getElementById('analytics-grid');
    const chartsGrid = document.getElementById('charts-grid');

    if (!analyticsGrid || !chartsGrid) return;

    analyticsGrid.innerHTML = '';
    chartsGrid.innerHTML = '';

    let grandTotalTests = 0;
    let grandTotalAttempted = 0;

    dashboardSubjectsConfig.forEach(subject => {
        const subjectTests = quizData[subject.key] || [];
        const totalTestsCount = subjectTests.length;

        let attemptedCount = 0;
        let highPercantageScore = 0;
        let performancceTrendHistory = [];

        for (let i = 0; i < totalTestsCount; i++) {
            const storedResult = localStorage.getItem(`result_${subject.key}_${i}`);

            if (storedResult) {
                const parsedResult = JSON.parse(storedResult);
                attemptedCount++;

                const pct = Math.round(parseFloat(parsedResult.percentage));
                performancceTrendHistory.push(pct);

                if (pct > highPercantageScore) {
                    highPercantageScore = pct;
                }
            }
        }

        grandTotalTests += totalTestsCount;
        grandTotalAttempted += attemptedCount;

        const cardCol = document.createElement('div');
        cardCol.className = 'col-12 col-md-6 col-lg-4';
        cardCol.innerHTML = `
            <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="background-color: ${subject.bg}; border-left: 5px solid ${subject.border};">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fw-bold text-dark text-uppercase small">${subject.icon} ${subject.name}</span>
                    <span class="badge rounded-pill px-2 py-1 text-dark" style="background-color: rgba(0,0,0,0.05); font-size: 0.75rem;">
                        ${totalTestsCount > 0 ? 'Active' : 'Unavailable'}
                    </span>
                </div>
                <div class="d-flex justify-content-between my-2 pb-1 border-bottom border-black border-opacity-10">
                    <span class="text-secondary small">Attempted:</span>
                    <span class="fw-bold text-dark">${attemptedCount} / ${totalTestsCount} Tests</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-secondary small">Best Score:</span>
                    <span class="fw-bold ${highPercantageScore > 0 ? 'text-success' : 'text-muted'}">${highPercantageScore}%</span>
                </div>
            </div>
        `;
        analyticsGrid.appendChild(cardCol);

        if (performancceTrendHistory.length > 0) {
            const chartCol = document.createElement('div');
            chartCol.className = 'col-12 col-lg-6';
            chartCol.innerHTML = `
                <div class="p-3 rounded-3 border bg-white shadow-sm">
                    <h6 class="fw-bold text-secondary mb-3">${subject.name} Performance Trend</h6>
                    <div style="position: relative; height: 220px; width: 100%;">
                        <canvas id="canvas-chart-${subject.key}"></canvas>
                    </div>
                </div>
            `;
            chartsGrid.appendChild(chartCol);

            setTimeout(() => {
                const canvasEl = document.getElementById(`canvas-chart-${subject.key}`);
                if (!canvasEl) return;
                const ctx = canvasEl.getContext('2d');
                const testLabels = performancceTrendHistory.map((_, index) => `Test ${index + 1}`);

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: testLabels,
                        datasets: [{
                            label: 'Score Achieved (%)',
                            data: performancceTrendHistory,
                            borderColor: subject.border,
                            backgroundColor: 'rgba(0, 0, 0, 0.01)',
                            borderWidth: 3,
                            tension: 0.35,
                            fill: true,
                            pointBackgroundColor: subject.border,
                            pointRadius: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { min: 0, max: 100} }
                    }
                });
            }, 50);
        }
    });

    document.getElementById('global-total-tests').innerText = grandTotalTests;
    document.getElementById('global-attempted-tests').innerText = grandTotalAttempted;

    if (grandTotalAttempted === 0) {
        chartsGrid.innerHTML = `
            <div class="col-12 text-center py-4 text-muted">
                <p class="mb-0">No progress charts available. Complete any subject mock test to unlock timeline statistics!</p>
            </div>
        `;
    }
}

function renderAccountTabState() {
    const formBox = document.getElementById('account-creation-form');
    const viewBox = document.getElementById('profile-view-box');

    if (!formBox || !viewBox) return;

    const savedProfile = localStorage.getItem('mocko_user_profile');

    if (savedProfile) {
        const profile = JSON.parse(savedProfile);

        formBox.classList.add('d-none');
        viewBox.classList.remove('d-none');

        document.getElementById('profile-full-name').innerText = `${profile.firstName} ${profile.lastName}`;
        document.getElementById('profile-email-text').innerText = profile.email;
        document.getElementById('profile-focus-text').innerText = profile.focusArea;

        const initials = (profile.firstName.charAt(0) + profile.lastName.charAt(0)).toUpperCase();
        const avatarBadge = document.getElementById('profile-avatar-badge');
        avatarBadge.innerText = initials;
        avatarBadge.style.backgroundColor = profile.themeColor;

        const genderBadge = document.getElementById('profile-gender-badge');
        genderBadge.innerText = profile.gender;
        if (profile.gender === 'Male') {
            genderBadge.className = 'badge mt-2 rounded-pill px-3 py-1 bg-primary-subtle text-primary';
        } else if (profile.gender === 'Female') {
            genderBadge.className = 'badge mt-2 rounded-pill px-3 py-1 bg-danger-subtle text-danger';
        } else {
            genderBadge.className = 'badge mt-2 rounded-pill px-3 py-1 bg-secondary-subtle text-secondary';
        }
    } else {
        formBox.classList.remove('d-none');
        viewBox.classList.add('d-none');
    }
}

function syncGlobalUserInterfaceEl() {
    const savedProfile = localStorage.getItem('mocko_user_profile');

    const desktopProfileInfo = document.getElementById('user-profile-info-desktop');
    const mobileProfileInfo = document.getElementById('user-profile-info-mobile');

    let profileHTML = `
        <h6 class="mb-0 fw-bold text-secondary">Guest Student</h6>
        <p class="mb-0 small text-muted" style="font-size: 0.75rem;">Guest ID: MOCKO14072026001</p>
        <p class="mb-0 small text-muted" style="font-size: 0.75rem;">Please log in</p>
    `;

    const sidebarLoggedInBox = document.getElementById('sidebar-user-logged-in');
    const topbarLoggedInBox = document.getElementById('topbar-user-logged-in');

    const sidebarAccount = document.getElementById('sidebar-ac');
    const topbarAccount = document.getElementById('topbar-ac');

    const sidebarAccountBtn = document.getElementById('sidebar-btn-ac');
    const topbarAccountBtn = document.getElementById('topbar-btn-ac');


    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        const initials = (profile.firstName.charAt(0) + profile.lastName.charAt(0)).toUpperCase();
        const themeColor = profile.themeColor || '#4834d4';

        profileHTML = `
            <h6 class="mb-0 fw-bold text-truncate" style="color: ${profile.themeColor || 'inherit'};">${profile.firstName} ${profile.lastName}</h6>
            <p class="mb-0 small text-muted text-truncate" style="font-size: 0.75rem;">${profile.email || ''}</p>
            <p class="mb-0 small text-muted text-truncate" style="font-size: 0.75rem;">${profile.gender}</p>
            <p class="mb-0 small text-muted text-capitalize" style="font-size: 0.75rem;">Focus: ${profile.focusArea || 'General'}</p>
        `;

        updateDashboardWelcomeGlow();
        if (sidebarAccountBtn) {
            sidebarAccountBtn.classList.add('d-none');
            sidebarAccountBtn.style.display = 'none';
        }
        if (topbarAccountBtn) {
            topbarAccountBtn.classList.add('d-none');
            topbarAccountBtn.style.display = 'none';
        } 

        if (sidebarLoggedInBox) {
            sidebarLoggedInBox.classList.remove('d-none');
            sidebarLoggedInBox.style.display = 'block';
            sidebarLoggedInBox.innerHTML = `
                <div class="d-flex align-items-center bg-light p-2 rounded-3 shadow-sm border">
                    <div class="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-2" style="width: 36px; height: 36px; min-width: 36px; background-color: ${themeColor}; font-size: 0.9rem;">
                        ${initials}
                    </div>
                    <div class="small overflow-hidden flex-grow-1">
                        <div class="fw-bold text-dark text-truncate" style="font-size: 0.85rem;">${profile.firstName} ${profile.lastName}</div>
                        <div class="text-muted x-small text-truncate" style="font-size: 0.72rem;">${profile.email}</div>
                        
                    </div>
                    <button class="logOut-btn" title="Log out" onclick="clearProfileAccount()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" class="logOut-icon"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    </button>
                </div>
            `;
        }

        if (topbarLoggedInBox) {
            topbarLoggedInBox.classList.remove('d-none');
            topbarLoggedInBox.style.display = 'block';
            topbarLoggedInBox.innerHTML = `
                <a href="#" class="d-flex align-items-center gap-2 p-1 pe-2 text-decoration-none rounded-pill bg-light border btn-hover-tweak shadow-sm" onclick="loadContent('accounts')">
                    <div class="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold text-center" style="width: 28px; height: 28px; font-size: 0.75rem; background-color: ${themeColor};">
                        ${initials}
                    </div>
                    <span class="small fw-semibold text-dark d-none d-md-inline" style="font-size: 0.8rem;">${profile.firstName}</span>
                </a>
            `;
        }
    } else {
        if (sidebarLoggedInBox) {
            sidebarLoggedInBox.classList.add('d-none');
            sidebarLoggedInBox.innerHTML = '';
        }

        if (topbarLoggedInBox) {
            topbarLoggedInBox.classList.add('d-none');
            topbarLoggedInBox.innerHTML = '';
        }

        if (sidebarAccountBtn) {
            sidebarAccountBtn.classList.remove('d-none');
            sidebarAccountBtn.style.display = 'flex';
        } 
        if (topbarAccountBtn) {
            topbarAccountBtn.classList.remove('d-none');
            topbarAccountBtn.style.display = 'block';
        } 
    }

    if (desktopProfileInfo) desktopProfileInfo.innerHTML = profileHTML;
    if (mobileProfileInfo) mobileProfileInfo.innerHTML = profileHTML;
}

function handleAccountRegistration(event) {
    event.preventDefault();

    const firstName = document.getElementById('reg-firstname').value.trim();
    const lastName = document.getElementById('reg-lastname').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const gender = document.getElementById('reg-gender').value;
    const focusArea = document.getElementById('reg-focus').value;

    const checkedTheme = document.querySelector('input[name="avatarTheme"]:checked');
    const themeColor = checkedTheme ? checkedTheme.value : '#4834d4';

    const newProfileObject = {
        firstName,
        lastName,
        email,
        gender,
        focusArea,
        themeColor
    };

    localStorage.setItem('mocko_user_profile', JSON.stringify(newProfileObject));

    syncGlobalUserInterfaceEl();

    //updateDashboardWelcomeGlow();

    renderAccountTabState();
}


function clearProfileAccount() {
    if (confirm("Are you sure you want to delete your profile account credentials details? This will reset your avatar info details.")) {
        localStorage.removeItem('mocko_user_profile');
        syncGlobalUserInterfaceEl();
        //updateDashboardWelcomeGlow();
        renderAccountTabState();
    }
}

function updateDashboardWelcomeGlow() {
    const greetingText = document.getElementById("sidebar-user-greeting");
    if (!greetingText) return;

    const profile = JSON.parse(localStorage.getItem('mocko_user_profile'));

    greetingText.innerText = profile ? profile.firstName + "!" : "Future Leader!";
}

//Variable to store which test the user clicked while they read instructions
let pendingTestData = { subject: null, index: null };

function prepareTest(subject, index) {
    pendingTestData.subject = subject;
    pendingTestData.index = index;
    currentPageKey = subject;

    const test = quizData[subject][index];

    const homePage = document.getElementById("home-page");
    if (homePage) homePage.style.display = "none";

    const contentArea = document.getElementById("dynamic-content");
    if (contentArea) contentArea.classList.add("d-none");

    const instrPage = document.getElementById("instructions-page");
    if (instrPage) instrPage.style.display = "block";

    const templateCard = document.getElementById("instructions-template");
    if (templateCard) {
        templateCard.style.display = "block";
    }

    document.getElementById("instr-test-title").textContent = `Subject: ${test.title}`;
    document.getElementById("instr-q-count").textContent = test.questionSet.length;
    document.getElementById("instr-duration").textContent = test.totalDuration;
    document.getElementById("instr-total-marks").textContent = test.totalMarks;

    const checkbox = document.getElementById("confirmInstructions");
    const proceedBtn = document.getElementById("proceedBtn");

    if (checkbox && proceedBtn) {
        checkbox.checked = false;
        proceedBtn.disabled = true;

        checkbox.onchange = function () {
            proceedBtn.disabled = !this.checked;
        };
    }

    const backBtn = document.getElementById("instr-back-btn");
    if (backBtn) {
        backBtn.onclick = () => {
            if (instrPage) instrPage.style.display = "none";
            if (templateCard) templateCard.style.display = "none";
            if (contentArea) contentArea.classList.remove("d-none");
            if (homePage) homePage.style.display = "block";

            loadContent(subject);
        };
    }
}

function confirmAndStart() {
    const startBtn = document.getElementById("proceedBtn");
    if (startBtn) {
        startBtn.disabled = true;

        //Inject Bootstrap spinner
        startBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Preparing Exam Environment...
        `;
    }

    //Delay the execution
    setTimeout(() => {
        document.getElementById("instructions-page").style.display = "none";

        const activeSubject = pendingTestData.subject;
        const activeIndex = pendingTestData.index;

        if (typeof loadContent === "function") {
            loadContent(activeSubject);
        }

        //Unhide the primary quiz page
        const quizPage = document.getElementById("quiz-page");
        if (!quizPage) {
            const currentSubject = pendingTestData.subject || currentPageKey;
            loadContent(currentSubject);

            quizPage = document.getElementById("quiz-page");
        }

        if (quizPage) {
            quizPage.style.display = "block";
            quizPage.classList.remove("d-none", "hidden");
        }
        quizPage.style.display = "block";

        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = "I am ready to begin";
        }

        if (typeof startQuiz === "function") {
            startQuiz(activeSubject, activeIndex);
        } else {
            console.error("Critical error: startQuiz function could not be found.");
        }

        
    }, 2000);
    
    
}

function startQuiz(subject, testIndex) {
    const selectedTest = quizData[subject][testIndex];
    currentQuestions = selectedTest.questionSet;
    currentIndex = 0;

    /*currentQuestions.forEach(q => {
        q.selected = null;
        q.visited = false;
    });

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });*/

    document.getElementById("quizPage-totalTime-display").textContent = selectedTest.totalDuration;
    document.getElementById("quizPage-totalMarks-display").textContent = selectedTest.totalMarks;

    const baseMinutes = selectedTest.totalDuration ? parseInt(selectedTest.totalDuration) : 60;

    document.getElementById("home-page").classList.add("d-none");
    document.getElementById("dynamic-content").classList.add("d-none");
    document.querySelector(".exam-area").classList.remove("hidden");

    document.getElementById("header-title").textContent = selectedTest.title + "-Mock Test-" + `${testIndex + 1}`;
    document.getElementById("total-questions").textContent = currentQuestions.length;

    showQuestions();
    
    //Start timer
    timeRemaining = baseMinutes * 60;
    runExamCountdown();
}

function showQuestions() {
    const q = currentQuestions[currentIndex];
    q.visited = true;

    document.getElementById("question-number").textContent = currentIndex + 1;
    document.getElementById("question-text").innerHTML = q.question;

    const optionsEl = document.getElementById("options-container");
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = `form-check option-item p-3 mb-2 rounded-3 border ${q.selected === index ? 'active-option' : ''}`;

        const isChecked = q.selected === index ? "checked" : "";

        optionDiv.innerHTML = `
            <input class="form-check-input ms-0 me-3" type="radio" name="quizOption" id="opt${index}" ${isChecked} onclick="handleSelect(${index})">
            <label class="form-check-label d-block w-100 cursor-pointer" for="opt${index}">
                ${opt.text}
            </label>
        `;

        //Make the entire card block row clickable
        optionDiv.onclick = (e) => {
            //Prevent infinite click bubble loops if clicking the radio input circle itself
            if (e.target.tagName !== 'INPUT') {
                const radioInput = optionDiv.querySelector('input');
                if (radioInput) radioInput.click();
            }
        };
        optionsEl.appendChild(optionDiv);
    });

    renderPalette();
}

function runExamCountdown() {
    if (timeInterval) clearInterval(timeInterval);

    startBeepSound.currentTime = 0;
    startBeepSound.play().catch(err => console.log("Start beep deferred:", err));

    function updateClockUI() {
        const hrs = Math.floor(timeRemaining / 3600);
        const mins = Math.floor((timeRemaining % 3600) / 60);
        const secs = timeRemaining % 60;

        //Target exact three span of timer
        document.getElementById("timer-hrs").textContent = String(hrs).padStart(2, '0');
        document.getElementById("timer-min").textContent = String(mins).padStart(2, '0');
        document.getElementById("timer-sec").textContent = String(secs).padStart(2, '0');
        
        const timeBoxes = document.querySelectorAll("#quiz-page .text-center .bg-dark, #quiz-page .text-center .bg-danger");

        timeBoxes.forEach(box => {
            if (timeRemaining < 30) {
                box.classList.remove("bg-dark", "border-secondary");
                box.classList.add("bg-danger", "border-danger", "animate-shake");
            } else {
                box.classList.remove("bg-danger", "border-danger", "animate-shake");
                box.classList.add("bg-dark", "border-secondary");
            }
        });
    }

    updateClockUI();

    timeInterval = setInterval(() => {
        timeRemaining--;
        updateClockUI();

        if (timeRemaining === 10) {
            endingAlertSound.currentTime = 0;
            endingAlertSound.play().catch(err => console.log("Alert timer sound playback deferred:", err));
        }

        //Trigger safety lockdown mechanics when timer hits zero
        if (timeRemaining <= 0) {
            clearInterval(timeInterval);
            executeTimesUpSequence();
        }
    }, 1000);
}

function executeTimesUpSequence() {
    if (timeInterval) clearInterval(timeInterval);

    const overlay = document.getElementById("times-up-overlay");
    if (overlay) {
        overlay.classList.remove("d-none");
        overlay.style.display = "block";
    }

    setTimeout(() => {
        if (overlay) overlay.classList.add("d-none");

        //Trigger the loading page
        processExamAndShowReport();
    }, 3000);
}

function handleSelect(index) {
    //Block option chnages during review mode
    if (isShowingPreviewMode) return;

    currentQuestions[currentIndex].selected = index;
    showQuestions();
    renderPalette();
}

function renderPalette() {
    const desktopPalette = document.getElementById("questionPalette");
    const mobilePalette = document.getElementById("questionPaletteMobile");

    if (desktopPalette) desktopPalette.innerHTML = "";
    if (mobilePalette) mobilePalette.innerHTML = "";

    let counts = { att: 0, nAtt: 0, nVis: 0 };

    currentQuestions.forEach((q, index) => {
        const btn = document.createElement("div");
        btn.innerText = index + 1;
        btn.classList.add("q-btn");

        if (q.selected !== null) {
            btn.classList.add("status-attempted", "text-white");
            counts.att++;
        } else if (q.visited) {
            btn.classList.add("status-not-attempted", "text-white");
            counts.nAtt++;
        } else {
            btn.classList.add("status-not-visited");
            counts.nVis++;
        }

        btn.onclick = () => {
            currentIndex = index;
            showQuestions();

            const mobileSidebar = document.getElementById('offcanvasExamSidebar');
            if (mobileSidebar && window.innerWidth < 992) {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(mobileSidebar);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
        };

        if (desktopPalette) {
            //It clones the button design and drops it into the desktop grid area, but it does not copy JavaScript event listeners so button is currently unclickable
            desktopPalette.appendChild(btn.cloneNode(true));
            //This brings the cloned button to life
            desktopPalette.lastChild.onclick = btn.onclick;
        } 

        if (mobilePalette) {
            mobilePalette.appendChild(btn.cloneNode(true));
            mobilePalette.lastChild.onclick = btn.onclick;
        } 
    });

    const updateCount = (selector, val) => {
        document.querySelectorAll(selector).forEach(el => el.textContent = val);
    }

    updateCount("#not-visited", counts.nVis);
    updateCount(".not-visited-count", counts.nVis);

    updateCount("#not-attempted", counts.nAtt);
    updateCount(".not-attempted-count", counts.nAtt);

    updateCount("#attempted", counts.att);
    updateCount(".attempted-count", counts.att);
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        showQuestions();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestions();
    }
}

function clearResponse() {
    //Block clear response during review mode
    if (isShowingPreviewMode) return;

    currentQuestions[currentIndex].selected = null;
    showQuestions();
}

//SUBMITTING PROCESS
//---STEP A: Triggered when the user manually clicks 
function handleManualSubmitClick() {
    //Open the confirmation pop-up page using Bootstrap's Modal controller
    const submitModalEl = document.getElementById('submitConfirmModal');
    const bsModal = new bootstrap.Modal(submitModalEl);
    bsModal.show();
}

//---STEP B: Executed ONLY when the user clicks 'Yes'
function confirmManualSubmit() {
    //Immediatly kill the timer loop if submitted manually
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }

    //Clear out any remaining time data
    timeRemaining = 0;

    //1. Hide the active confirmation page pop-up safely
    const modalEl = document.getElementById('submitConfirmModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    //2. Pass straight into the core processing engine
    processExamAndShowReport();
}

//---STEP c: Triggered automatically by countdown timer reaching 00:00
function handleTimerExpiration() {
    //Force direct execution
    processExamAndShowReport();
}

function processExamAndShowReport() {
    document.getElementById("quiz-page").style.display = "none";

    //STOP the countdown here
    //clearInterval

    //Show loading spinner
    const suspenseScreen = document.getElementById("suspense-screen");
    if (suspenseScreen) {
        suspenseScreen.classList.remove("d-none");
    }
    
    let yourMarks = 0;

    const totalQ = currentQuestions.length;
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    currentQuestions.forEach(q => {
        const questionWeight = q.marks ? parseFloat(q.marks) : 1;
        //(0+5) * 3 = 15 //(0+5) * 2//(0+2) * 4
        const trueCorrectIndex = (q.answerKey / 3) - 5;

        if (q.selected === null || q.selected === undefined) {
            skipped++;
        } else if (q.selected === trueCorrectIndex) {
            correct++;
            yourMarks += questionWeight;

        } else {
            incorrect++;
        }

        
    });

    reviewPageSubject = pendingTestData.subject ? pendingTestData.subject : "Examination";
    const activeTest = quizData[pendingTestData.subject][pendingTestData.index];
    reviewPageTitle = activeTest ? activeTest.title : "";
    const maxMarks = activeTest.totalMarks;

    saveTestResult(pendingTestData.subject, pendingTestData.index, yourMarks, maxMarks, currentQuestions);

    //percentages formulations
    const attemptedCount = totalQ - skipped;
    const attemptedPct = totalQ > 0 ? Math.round((attemptedCount / totalQ) * 100) : 0;
    const accuracyPct = attemptedCount > 0 ? Math.round((correct / attemptedCount) * 100) : 0;

    //Calculate marks proportional to correct answers
    //const marksEarned = totalQ > 0 ? parseFloat(((correct / totalQ) * maxMarks).toFixed(1)) : 0;
    const marksEarned = totalQ > 0 ? parseFloat(yourMarks.toFixed(1)) : 0;
    const scorePct = maxMarks > 0 ? Math.round((marksEarned / maxMarks) * 100) : 0;

    //Pass/Fail requirement
    const passed = scorePct >= 40;

    //Hide buttons and data sections initially
    document.getElementById("report-stats-grid").style.opacity = "0";
    document.getElementById("report-footer-meta").style.opacity = "0";
    document.getElementById("report-feedback-box").style.opacity = "0";
    document.getElementById("report-action-buttons").style.opacity = "0";

    //Revealing result after 5-6 seconds wait
    setTimeout(() => {
        if (suspenseScreen) {
            suspenseScreen.classList.add("d-none");
        }

        //Show the report page
        document.getElementById("report-page").style.display = "block";
        window.scrollTo(0, 0);

        //Animate the Rings (First priority)
        setTimeout(() => {
            const ringColor = passed ? "#198754" : "#dc3545";
            const scoreCircleColor = document.getElementById("circle-score");
            if (scoreCircleColor) {
                scoreCircleColor.style.setProperty('--ring-color', ringColor);
            }
            animateValue("text-attempted", "circle-attempted", 0, attemptedPct, 1500);
            animateValue("text-accuracy", "circle-accuracy", 0, accuracyPct, 1500);
            animateValue("text-score", "circle-score", 0, scorePct, 1500);
        }, 500);

        //Fade in the Stats Grid (Correct/Incorrect/Skipped)
        setTimeout(() => {
            const statsGrid = document.getElementById("report-stats-grid");
            statsGrid.style.transition = "opacity 0.8s ease-in";
            statsGrid.style.opacity = "1";

            document.getElementById("stat-correct").textContent = correct;
            document.getElementById("stat-incorrect").textContent = incorrect;
            document.getElementById("stat-skipped").textContent = skipped;
        }, 2000);

        //Reveal Pass/Fail status & Feedback
        setTimeout(() => {
            const statusEl = document.getElementById("report-status");
            statusEl.textContent = passed ? "PASSED" : "FAILED";
            statusEl.className = passed ? "fw-bold fs-4 text-success" : "fw-bold fs-4 text-danger";

            displayExamFeedback(scorePct);
            document.getElementById("report-feedback-box").style.opacity = "1";
            document.getElementById("report-feedback-box").style.transition = "opacity 0.8s ease-in";
        }, 3000);

        //Final Footer & Buttons (The very end)
        setTimeout(() => {
            document.getElementById("meta-total-q").textContent = totalQ;
            document.getElementById("meta-total-marks").textContent = maxMarks;
            document.getElementById("meta-your-marks").textContent = marksEarned;

            document.getElementById("header-your-marks").textContent = marksEarned;
            document.getElementById("header-total-marks").textContent = maxMarks;

            document.getElementById("report-footer-meta").style.opacity = "1";
            document.getElementById("report-action-buttons").style.opacity = "1";
            document.getElementById("report-action-buttons").style.transition = "opacity 1s ease-in";
        }, 4500);
    }, 5500); 
    
    //This forces the "Start Test" cards to turn into "Review Test" cards instantly once users attempted any test
    if (typeof loadContent === "function") {
        loadContent(pendingTestData.subject);
    }
}

function saveTestResult(subject, testIndex, earnedMarks, totalMarks, questions) {
    const percentage = ((earnedMarks / totalMarks) * 100).toFixed(2);
    const status = percentage >= 40 ? "Passed" : "Failed";

    const resultData = {
        earnedMarks,
        totalMarks,
        percentage,
        status,
        attempted: true,
        savedQuestions: questions
    };

    //Store using a unique key per test
    localStorage.setItem(`result_${subject}_${testIndex}`, JSON.stringify(resultData));
}

function animateValue(id, circleId, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);

        document.getElementById(id).textContent = current + "%";

        if (circleId) {
            document.getElementById(circleId).style.setProperty('--value', `${current * 3.6}deg`);
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function displayExamFeedback(scorePct) {
    const feedbackBox = document.getElementById("report-feedback-box");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackMsg = document.getElementById("feedback-message");

    if (!feedbackBox || !feedbackTitle || !feedbackMsg) return;

    //Reset base style
    feedbackBox.className = "p-3 rounded-3 my-4 border text-center";

    if (scorePct >= 85) {
        feedbackTitle.textContent = "Outstanding Achievement! ✨";
        feedbackMsg.textContent = "Excellent work! You have demonstrated a masterful understanding of this subject matter. Keep up the phenomenal standard!";
        feedbackBox.classList.add("bg-success-subtle", "border-success-subtle", "text-success-emphasis");
    } else if (scorePct >= 40) {
        feedbackTitle.textContent = "Congratulations, You Passed! 🎉";
        feedbackMsg.textContent = "Great job! You have successfully cleared the verification threshold for this module. Keep pushing forward to reach higher milestones!";
        feedbackBox.classList.add("bg-success-subtle", "border-success-subtle", "text-success-emphasis");
    } else {
        feedbackTitle.textContent = "Don't Give Up! Keep Moving Forward";
        feedbackMsg.textContent = "Every mistake is a critical step toward learning. Review the test questions, polish your weak spots, and you will come back significantly stronger next time!";
        feedbackBox.classList.add("bg-danger-subtle", "border-danger-subtle", "text-danger-emphasis");
    }
}

function navigateToHome() {
    document.getElementById("report-page").style.display = "none";

    //As we are using bootstrap css, we need to remove classList first, otherwise "style.display" will not work
    const homePage =  document.getElementById("home-page");
    homePage.classList.remove("d-none");
    homePage.style.display = "block";

    const dynamicContent = document.getElementById("dynamic-content");
    dynamicContent.classList.remove("d-none");
    
    loadContent('dashboard');
    window.scrollTo(0, 0);
}

function navigateToContinue() {
    const activeSubject = pendingTestData && pendingTestData.subject ? pendingTestData.subject : "mathematics";

    document.getElementById("report-page").style.display = "none";

    const homePage = document.getElementById("home-page");
    if (homePage) {
        homePage.classList.remove("d-none");
        homePage.style.display = "block";
    }

    const dynamicContent = document.getElementById("dynamic-content");
    if (dynamicContent) {
        dynamicContent.classList.remove("d-none");
    }

    loadContent(activeSubject);
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

function reviewExam(subject, index) {
    const savedData = JSON.parse(localStorage.getItem(`result_${subject}_${index}`));

    if (savedData && savedData.savedQuestions) {
        //Restore the questions and titles so previewAnswers function can see them
        currentQuestions = savedData.savedQuestions;
        reviewPageSubject = subject;
        reviewPageTitle = quizData[subject][index].title;

        //Set the orgin to home, remember? we decalred it globally above
        reviewPageOrigin = "home";

        //Hide the dashboard/home and show the review page
        hideAllMainPages();
        //document.getElementById("home-page").classList.add("d-none");
        //document.getElementById("dynamic-content").classList.add("d-none");

        //Show the target review view 
        const reviewPageEl = document.getElementById("review-page");
        if (reviewPageEl) {
            reviewPageEl.classList.remove("d-none");
            reviewPageEl.style.display = "block";
        }

        //Run the existing function
        previewAnswers();
    }
}

function previewAnswers() {
    isShowingPreviewMode = true;
    
    //Only set it to "report" if reviewExam didn't already set it to "home"
    if (reviewPageOrigin !== "home") {
        reviewPageOrigin = "report";
    }

    hideAllMainPages();

    //document.getElementById("report-page").style.display = "none";

    const reviewPage = document.getElementById("review-page");
    reviewPage.classList.remove("d-none");
    reviewPage.style.display = "block";

    document.getElementById("review-subject-title").textContent = reviewPageSubject;
    document.getElementById("review-chapter-title").textContent = reviewPageTitle;

    const container = document.getElementById("review-questions-container");
    container.innerHTML = ""; //Clear out previous generation passes

    currentQuestions.forEach((q, index) => {
        const trueCorrectIndex = (q.answerKey / 3) - 5;
        const userSelectedIndex = q.selected;

        //Build container for individual question
        const questionCard = document.createElement("div");
        questionCard.className = "card border-0 shadow-sm p-4 rounded-4 mb-3 bg-white";

        let optionsHtml = "";

        q.options.forEach((opt, optIndex) => {
            let statusStyle = "border: 1px solid #dee2e6;";
            let statusBadge = "";

            if (optIndex === trueCorrectIndex) {
                statusStyle = "background-color: #d1e7dd !important; border-color: #a3cfbb !important; color: #0a3622 !important; font-weight: 600;";
                statusBadge = '<span class="badge bg-success float-end mt-1">✔ Correct Answer</span>';
            } else if (optIndex === userSelectedIndex && optIndex !== trueCorrectIndex) {
                statusStyle = "background-color: #f8d7da !important; border-color: #f1aeb5 !important; color: #58151c !important;";
                statusBadge = '<span class="badge bg-danger float-end mt-1">❌ Your Selection</span>';
            } else if (optIndex === userSelectedIndex) {
                //Backup check for correct selections
                statusBadge = '<span class="badge bg-primary float-end mt-1">✔ Your Correct Selection</span>';
            }

            optionsHtml += `
                <div class="p-3 mb-2 rounded-3 text-start clearfix" style="${statusStyle}">
                    <span class="fw-medium me-2">${String.fromCharCode(65 + optIndex)}.</span> ${opt.text} ${statusBadge}
                </div>
            `;
        });

        //Determine the text string representing the correct letter key (A, B, C, D)
        const correctLetter = String.fromCharCode(64 + (trueCorrectIndex + 1));

        questionCard.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-light text-dark border fw-semibold px-3 py-2 rounded-pill">Question ${index + 1}</span>
                <span class="text-muted small fw-medium">Marks: ${q.marks || 1}</span>
            </div>
            <h5 class="fw-bold mb-4 mt-2 text-dark lh-base">${q.question}</h5>
            <div class="options-list mb-3">
                ${optionsHtml}
            </div>
            <div class="mt-3 p-3 bg-light rounded-3 text-primary fw-bold fs-6 border-start border-primary border-3">
                Correct Answer Key: Option ${correctLetter}
            </div>
        `;
        container.appendChild(questionCard);
    });
    window.scrollTo(0, 0);
}

function exitReviewPage() {
    isShowingPreviewMode = false;
    hideAllMainPages();

    //Check where the user came from and open the correct screen
    if (reviewPageOrigin === "home") {
        const homePageEl = document.getElementById("home-page");
        if (homePageEl) {
            homePageEl.classList.remove("d-none");
            homePageEl.style.display = "block";
        } 
        

        //Refresh the cards for the current subject so everything is up to date
        if (typeof loadContent === "function") {
            loadContent(reviewPageSubject);
        }
    } else {
        //Default Fallback: take back to the report exam page
        const reportPageEl = document.getElementById("report-page");
        if (reportPageEl) {
            reportPageEl.classList.remove("d-none");
            reportPageEl.style.display = "block";
        } 
    }

    //Hide the review page
    //const reviewPage = document.getElementById("review-page");
    //reviewPage.classList.add("d-none");
    //reviewPage.style.display = "none";

    //document.getElementById("report-page").style.display = "block";
    window.scrollTo(0, 0);
}

function getActiveSubject() {
    //PRIORITY: If we are in the middle of a test
    if (typeof pendingTestData !== 'undefined' && pendingTestData && pendingTestData.subject) {
        return pendingTestData.subject;
    }

    //BACKUP: If we were reviewing, use the review subject
    if (typeof reviewPageSubject !== 'undefined' && reviewPageSubject) {
        return reviewPageSubject;
    }

    //If all else fails, read the active link in the sidebar
    const activeLink = document.querySelector('.sidebar a.active, .sidebar li.active');
    return activeLink ? activeLink.textContent.trim() : "mathematics";
}

function executeExamCancellation() {
    document.getElementById("cancel-step-warning").classList.add("d-none");
    document.getElementById("cancel-step-loading").classList.remove("d-none");

    //Shut down the live timer engine immediately
    if (typeof timeInterval !== 'undefined') {
        clearInterval(timeInterval);
        timeInterval = null;
    }

    setTimeout(() => {
        const subjectToReload = getActiveSubject();
        if (!bootstrapCancelModalInstance) {
            bootstrapCancelModalInstance = bootstrap.Modal.getInstance(document.getElementById('cancelExamModal'));
        }
        //Hide the modal container smoothly
        if (bootstrapCancelModalInstance) {
            bootstrapCancelModalInstance.hide();
        }

        if (typeof currentQuestions !== 'undefined' && Array.isArray(currentQuestions)) {
            currentQuestions.forEach(q=> {
                q.selected = null;
                q.visited = false;
            });
        }

        const container = document.getElementById("instructions-container");
        if (container) {
            const termsCheckbox = document.getElementById("confirmInstructions");
            if (termsCheckbox) {
                termsCheckbox.checked = false;
            }
            const proceedBtn = document.getElementById("proceedBtn");
            if (proceedBtn) {
                proceedBtn.disabled = true;
            }
            container.innerHTML = "";
        }

        const questionTextEl = document.getElementById("question-text");
        if (questionTextEl) {
            questionTextEl.innerHTML = "";
        }

        const optionsEl = document.getElementById("options-container");
        if (optionsEl) {
            optionsEl.innerHTML = "";
        }
        
        currentIndex = 0;
        if (typeof pendingTestData !== 'undefined') {
            pendingTestData = { subject: null, index: null };
        }

        hideAllMainPages();

        const homePageEl = document.getElementById("home-page");
        const contentArea = document.getElementById("dynamic-content");

        if (homePageEl) {
            homePageEl.classList.remove("d-none");
            homePageEl.style.display = "block";
        }

        if (contentArea) {
            contentArea.classList.remove("d-none");
            contentArea.style.display = "block";
        }
        //Force reload the category
        loadContent(subjectToReload);

        window.scrollTo({ top: 0, behavior: 'smooth'});

        //Crucial: Reset the modal internal layout views back to normal for the next time it's clicked
        setTimeout(() => {
            document.getElementById("cancel-step-warning").classList.remove("d-none");
            document.getElementById("cancel-step-loading").classList.add("d-none");
        }, 500);
    }, 2500);
}

//Helper utility to manage page switching
function hideAllMainPages() {
    const pages = ["home-page", "quiz-page", "report-page", "review-page"];
    pages.forEach(pageId => {
        const el = document.getElementById(pageId);
        if (el) el.classList.add("d-none");
    });
}


function updateDateTime() {
    const now = new Date();

    //Format the date e.g. 12 June 2026
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-GB', dateOptions);

    //Format the Time e.g. 09:23 PM
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    //Update the DOM elements
    const dateEl = document.getElementById('current-date');
    const timeEl = document.getElementById('current-time');

    if (dateEl) dateEl.textContent = dateString;
    if (timeEl) timeEl.textContent = timeString;
}
updateDateTime();
setInterval(updateDateTime, 60000); // Update every 1 min


//Dropdown filter function
function populateDropdownFilters(pageKey) {
    const dropdownMenu = document.getElementById('dropdown-filter-items');
    const dropdownButton = document.getElementById('subjectFilterDropdown');

    if (!dropdownMenu || !dropdownButton || !quizData[pageKey]) return;

    const quizzes = quizData[pageKey];

    const uniqueCategories = ['All Topics', ...new Set(quizzes.map(q => q.category).filter(Boolean))];

    dropdownMenu.innerHTML = '';

    dropdownButton.innerHTML = `<span class="allTopics">All Topics</span> <span class="text-muted fs-6 fw-normal font-monospace">(${quizzes.length})</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron2-icon transition-transform"><path fill="currentColor" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>`;

    //Build dropdown menu
    uniqueCategories.forEach(cat => {
        const count = cat === 'All Topics' ? quizzes.length : quizzes.filter(q => q.category === cat).length;

        const li = document.createElement('li');
        li.innerHTML = `
            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">
                ${cat} <span class="badge bg-light text-dark rounded-pill border">${count}</span>
            </a>
        `;

        li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();

            dropdownButton.innerHTML = `<span class="allTopics">${cat}</span> <span class="text-muted fs-6 fw-normal font-monospace">(${count})</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron2-icon transition-transform"><path fill="currentColor" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>`;

            filterCardsByCategory(cat);
        });

        dropdownMenu.appendChild(li);
    });
}

function filterCardsByCategory(selectedCategory) {
    const cards = document.querySelectorAll('.quiz-card');
    

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'All Topics' || cardCategory === selectedCategory) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
}

function initViewToggles() {
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (gridBtn && listBtn) {
        gridBtn.addEventListener('click', () => {
            toggleView('grid')
        });
        listBtn.addEventListener('click', () => toggleView('list'));
    }
}

function toggleView(view) {
    currentViewMode = view;

    localStorage.setItem('userViewMode', view);

    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (!gridBtn || !listBtn) return;

    if (view === 'grid') {
        
        gridBtn.classList.add('active2');
        listBtn.classList.remove('active2');

        listBtn.classList.add('text-secondary');
        gridBtn.classList.remove('text-secondary');

    } else {
        listBtn.classList.add('active2');
        listBtn.classList.remove('text-secondary');

        gridBtn.classList.remove('active2');
        gridBtn.classList.add('text-secondary');

    }

    const viewContainer = document.getElementById("chapters-container");
    if (viewContainer) {
        if (view === 'grid') {
            viewContainer.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";
        } else {
            viewContainer.className = "row row-cols-1 g-3";
        }
    }

    renderActiveCards();
}

function renderActiveCards(customTests = null) {
    const cardsContainer = document.getElementById('chapters-container');
    if (!cardsContainer) return;

    const subjectTests = customTests || quizData[currentPageKey];
    if (!subjectTests) return;

    let cardsHtml = '';


    subjectTests.forEach((test, index) => {
        if (!test) return;
        const cardSubjectKey = test.subjectKey || currentPageKey;
        //Generate a unique, ultra-subtle pastel color based on the card's index
        //Using a step multiplier (like * 137.5) ensures consecutive cards get distinctly different hues
        const hue = (index * 137.5) % 360;
        const subtleBgColor = `hsl(${hue}, 35%, 96%)`;

        //local database history record using the unique key
        //const resultKey = `result_${currentPageKey}_${index}`;
        const resultKey = `result_${cardSubjectKey}_${index}`;
        const savedResult = JSON.parse(localStorage.getItem(resultKey));

        //Initialize dynamic layout
        let badgeHtml = "";
        let statusHtml = "";
        let actionButtonHtml = "";
        let scoreDisplayHtml = "";

        if (savedResult) {
            const isPassed = savedResult.status === "Passed";

            //Define the SVG markup paths directly as template strings
            const checkmarkSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1 flex-shrink-0" viewBox="0 0 16 16" style="vertical-align: -0.125em;">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
            `;
            const crossSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1 flex-shrink-0" viewBox="0 0 16 16" style="vertical-align: -0.125em;">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            `;

            badgeHtml = `
                <span class="badge bg-light text-primary border border-primary-subtle rounded-pill px-3 py-2 fw-semibold">
                    Mock Test #${index + 1}
                </span>
            `;

            //Choose the right SVG 
            const activeSvg = isPassed ? checkmarkSvg : crossSvg;

            statusHtml = `
                <span class="badge ${isPassed ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'} rounded-pill px-3 py-2 fw-bold shadow-sm d-inline-flex align-items-center listView-status">
                    ${activeSvg} ${savedResult.status} (${savedResult.percentage}%)
                </span>
            `;

            scoreDisplayHtml = `
                <div class="mt-2 text-secondary small fw-semibold">
                    Score: <span class="text-dark fw-bold">${savedResult.earnedMarks}</span> / ${savedResult.totalMarks} Points
                </div>
            `;

            actionButtonHtml = `
                <button class="btn btn-outline-primary btn-sm w-100 rounded-pill fw-bold mt-3 py-2 transition-all shadow-sm" onclick="reviewExam('${currentPageKey}', ${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="magnify-icon me-1"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zm-312 8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> Review Exam
                </button>
            `;
        } else {
            //Fresh unattempted mock test
            badgeHtml = `
                <span class="badge bg-light text-primary border border-primary-subtle rounded-pill px-3 py-2 fw-semibold">
                    Mock Test #${index + 1}
                </span>
            `;

            statusHtml = `
                <span class="badge rounded-pill text-dark border px-2.5 py-1.5 fw-semibold border border-warning-subtle text-warning-emphasis bg-warning-subtle fs-7 shadow-2xs d-inline-flex align-items-center">
                    <span class="d-inline-block rounded-circle bg-warning" style="width: 6px; height: 6px;"></span>
                        Pending
                </span>
            `;

            scoreDisplayHtml = `
                <div class="mt-2 small text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="clock2-icon me-1"><path fill="currentColor" d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg> ${test.totalDuration} Min | ${test.totalMarks} Marks
                </div>
            `;

            actionButtonHtml = `
                <button class="btn btn-primary btn-sm w-100 rounded-pill fw-bold mt-3 py-2 dynamic-start-btn shadow-sm" onclick="prepareTest('${currentPageKey}', ${index})">
                    Start Test
                </button>
            `;
        }

        //Assemble everything
            
        const gridCardHtml = `
            <div class="col-12 col-md-6 col-lg-4 quiz-card" data-category="${test.category || ''}">
                <div class="card h-100 border shadow-sm rounded-4 p-4 text-start hover-lift" style="background-color: ${subtleBgColor};">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        ${badgeHtml}
                        <div class="dropdown">
                            <button class="btn p-0 border-0 text-muted" type="button" data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="dots2-icon"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end border shadow-sm">
                                <li>
                                    <button class="dropdown-item text-danger d-flex align-items-center gap-2" type="button" onclick="resetIndividualTest('${currentPageKey}', ${index})" disabled style="opacity: 0.6; cursor: not-allowed;">
                                        Reset Test
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                        ${statusHtml}
                        <small class="text-muted fw-medium">${test.questionSet.length} Qs</small>
                    </div>
                    <h5 class="fw-bold text-dark mt-2 mb-1 text-truncate" style="letter-spacing: -0.3px;">${test.title}</h5>
                    ${scoreDisplayHtml}
                    ${actionButtonHtml}
                </div>
            </div>
        `;

        const listCardHtml = `
            <div class="col-12 quiz-card" data-category="${test.category || ''}">
                <div class="card border shadow-sm rounded-3 p-3 text-start" style="background-color: ${subtleBgColor};">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div class="d-flex align-items-center gap-3">
                            <div style="min-width: 100px;">${badgeHtml}</div>
                            <div>
                                <h5 class="fw-bold text-dark mb-0">${test.title}</h5>
                                <div>
                                    <small class="text-muted fw-medium">${test.questionSet.length} Questions</small>
                                    ${statusHtml}
                                </div>
                                    
                                ${scoreDisplayHtml}
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-4">
                                
                            ${actionButtonHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;


        if (currentViewMode === 'grid') {
            cardsHtml += gridCardHtml;
        } else {
            cardsHtml += listCardHtml;
        }
    });
    cardsContainer.innerHTML = cardsHtml;

    if (!customTests) {
        if (typeof populateDropdownFilters === 'function') {
            try {
                populateDropdownFilters(currentPageKey);
            } catch (e) {
                console.error("Dropdown error:", e);
            }     
        }
    }

        //populateDropdownFilters(currentPageKey);

}

function resetIndividualTest(pageKey, index) {
    if (!confirm("Are you sure you want to reset your score and progress for this specific test?")) return;

    const resultKey = `result_${pageKey}_${index}`;
    localStorage.removeItem(resultKey);

    renderActiveCards();
}

function resetAllCurrentSubjectTests() {
    const currentSubjectTests = quizData[currentPageKey];

    if (!currentSubjectTests || currentSubjectTests.length === 0) {
        alert("No tests found to reset.");
        return;
    }

    const confirmation = confirm(`Are you sure you want to permanently delete progress for ALL ${currentSubjectTests.length} tests in this section?`);
    if (!confirmation) return;

    currentSubjectTests.forEach((test, index) => {
        const resultKey = `result_${currentPageKey}_${index}`;
        localStorage.removeItem(resultKey);
    });

    renderActiveCards();
}

function warmUpAudioPipeline() {
    clickSound.muted = true;
    clickSound.play()
        .then(() => {
            clickSound.pause();
            clickSound.currentTime = 0;
            clickSound.muted = false;

            cleanWarmUpListeners();
        })
        .catch(() => {
            //safe fallback if the browser blocks it; it will try again on the next action
        });
}

function cleanWarmUpListeners() {
    window.removeEventListener('touchstart', warmUpAudioPipeline);
    window.removeEventListener('mousedown', warmUpAudioPipeline);
    window.removeEventListener('scroll', warmUpAudioPipeline);
    window.removeEventListener('keydown', warmUpAudioPipeline);
}

window.addEventListener('touchstart', warmUpAudioPipeline, { passive: true });
window.addEventListener('mousedown', warmUpAudioPipeline, { passive: true });
window.addEventListener('scroll', warmUpAudioPipeline, { passive: true });
window.addEventListener('keydown', warmUpAudioPipeline, { passive: true });

document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a, .nav-link, .list-group-item-action, .option-block, input[type='radio'], .view-toggle-btn, .q-btn, .option-item");

    if (target) {
        clickSound.muted = false; //ensures it's audible
        clickSound.currentTime = 0;

        clickSound.play().catch((playbackError) => {
            console.log("Audio playback deferred safely until initial user layout tap:", playbackError);
        });
    }
});

//SEARCH FUNCTION FOR SEARCHBAR
function handleGlobalSearch(query) {
    const cleanQuery = query.toLowerCase().trim();
    const dynamicContent = document.getElementById("dynamic-content");

    if (!dynamicContent) return;

    if (cleanQuery === "") {
        if (typeof loadContent === 'function') {
            loadContent(currentPageKey);
        }
        return;
    }

    const filteredResults = [];

    for (const subjectKey in quizData) {
        if (quizData.hasOwnProperty(subjectKey)) {
            const chaptersArray = quizData[subjectKey];

            chaptersArray.forEach((chapter) => {
                const matchSub = subjectKey.toLocaleLowerCase().includes(cleanQuery);
                const matchTitle = chapter.title ? chapter.title.toLowerCase().includes(cleanQuery) : false;
                const matchCat = chapter.category ? chapter.category.toLowerCase().includes(cleanQuery) : false;

                if (matchSub || matchTitle || matchCat) {
                    filteredResults.push({
                        ...chapter,
                        subjectKey: subjectKey
                    });
                }
            });
        }
    }

    dynamicContent.innerHTML = `
        <div class="animate__animated animate__fadeIn px-3 pt-2">
            <h2 class="fw-bold text-dark mb-2">Search Results</h2>
            <p class="text-muted mb-4">Showing matches from your search query...</p>
            <div class="px-4 mt-4">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="chapters-container"></div>
            </div>
        </div>
    `;

    if (filteredResults.length === 0) {
        document.getElementById('chapters-container').innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted fs-5">No tests found matching your keywords.</p>
            </div>
        `;
    } else {
        renderActiveCards(filteredResults);
    }
}



document.addEventListener("DOMContentLoaded", () => {
    loadContent('dashboard');
    syncGlobalUserInterfaceEl();
    
});