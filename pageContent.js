const pageContent = {
    dashboard: `
        <div class="animate__animated animate__fadeIn p-2">
            <div class="p-4 p-md-5 rounded-4 text-white shadow mb-4" style="background: linear-gradient(90deg, #4834d4 0%, #686de0 100%);">
                <h1 class="display-6 fw-bold mb-2">Welcome, <span id="sidebar-user-greeting">Future Leader!</span></h1>
                <p class="lead mb-3">Ready to sharpen your mind and crush your Mock Tests today?</p>
                <button class="btn btn-light text-primary fw-bold px-4 rounded-pill" onclick="loadContent('myLibrary')">View Recent Tests</button>
            </div>

            <div class="row g-4 mb-4">
                <div class="col-12 col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="background-color: #f1f2f6; border-left: 5px solid #2f3542;">
                        <div class="text-muted small fw-bold text-uppercase tracking-wider">Total Available Exams</div>
                        <h2 id="global-total-tests" class="fw-bold mt-2 mb-0 text-dark">0</h2>
                        <span class="text-primary small mt-1 fw-medium">Across all domains</span>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="card border-0 shadow-sm rounded-4 p-4 h-100" style="background-color: #e8f4fd; border-left: 5px solid #1e90ff;">
                        <div class="text-muted small fw-bold text-uppercase tracking-wider">Total Attempted</div>
                        <h2 id="global-attempted-tests" class="fw-bold mt-2 mb-0 text-dark">0</h2>
                        <span class="text-primary small mt-1 fw-medium">Progress milestones</span>
                    </div>
                </div>

            </div>

            <h5 class="fw-bold text-dark mb-3">Subject Performance Profiles</h5>
            <div id="analytics-grid" class="row g-4 mb-4"></div>

            <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <div class="mb-3">
                    <h4 class="fw-bold text-dark mb-1">Performance & Progress Trends</h4>
                    <p class="text-muted small">Track your historical timeline performance across your main subjects.</p>
                </div>
                <div id="charts-grid" class="row g-4"></div>
            </div>
        </div>

    `,
    account: `
        <div class="animate__animated animate__fadeIn p-3">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-8">
                    <div id="profile-view-box" class="card border-0 shadow-sm rounded-4 p-4 mb-4 d-none">
                        <div class="d-flex align-items-center gap-4 mb-4 pb-3 border-bottom">
                            <div id="profile-avatar-badge" class="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" style="width: 80px; height: 80px; font-size: 2rem;"></div>
                            <div>
                                <h3 id="profile-full-name" class="fw-bold text-dark mb-1">Guest Student</h3>
                                <p id="profile-email-text" class="text-muted mb-0 small">student@mocko.com</p>
                                <span id="profile-gender-badge" class="badge mt-2 rounded-pill px-2.5 py-1"></span>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col-6">
                                <div class="p-3 bg-light rounded-3">
                                    <span class="text-muted small d-block">Academic Focus Target</span>
                                    <strong id="profile-focus-text" class="text-dark">General Studies</strong>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-3 bg-light rounded-3">
                                    <span class="text-muted small d-block">Account Status</span>
                                    <strong id="profile-focus-text" class="text-success">Active</strong>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="clearProfileAccount()">Reset Profile Account Data</button>
                        </div>
                    </div>

                    <div id="account-creation-form" class="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                        <div class="mb-4">
                            <h3 class="fw-bold text-dark mb-1">Create Student Profile Account</h3>
                            <p class="text-muted small">Set up your local credentials to track your test matrices and personalized dashboard analytics data.</p>
                        </div>

                        <form id="studentSignupForm" onsubmit="handleAccountRegistration(event)">
                            <div class="row g-3">
                                <div class="col-12 col-md-6">
                                    <label class="form-label text-secondary small fw-semibold">First Name</label>
                                    <input type="text" id="reg-firstname" class="form-control rounded-3 placeholder="Alex" required autocomplete="off">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label text-secondary small fw-semibold">Last Name</label>
                                    <input type="text" id="reg-lastname" class="form-control rounded-3 placeholder="Morgan" required autocomplete="off">
                                </div>
                                <div class="col-12">
                                    <label class="form-label text-secondary small fw-semibold">Email Address</label>
                                    <input type="email" id="reg-email" class="form-control rounded-3 placeholder="alex.morgan@domain.com" required autocomplete="off">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label text-secondary small fw-semibold">Gender</label>
                                    <select id="reg-gender" class="form-select rounded-3" required>
                                        <option value="" disabled selected>Choose gender...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Non-binary">Non-binary</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label text-secondary small fw-semibold">Primary Focus Area</label>
                                    <select id="reg-focus" class="form-select rounded-3" required>
                                        <option value="General Mock Exams" selected>General Mock Exams</option>
                                        <option value="Competitive Entrance Examinations">Competitive Entrance Examinations</option>
                                        <option value="School Preparations">School Preparations</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label text-secondary small fw-semibold d-block mb-2">Choose Avatar Accent Color Theme</label>
                                    <div class="d-flex gap-3 align-items-center">
                                        <input type="radio" class="btn-check" name="avatarTheme" id="theme-indigo" value="#4834d4" checked>
                                        <label class="btn rounded-circle p-3 border-2 border-white shadow-sm avatar-color-input" style="background-color: #4834d4; width: 40px; height: 40px; cursor: pointer;" for="theme-indigo"></label>

                                        <input type="radio" class="btn-check" name="avatarTheme" id="theme-emerald" value="#10b981">
                                        <label class="btn rounded-circle p-3 border-2 border-white shadow-sm avatar-color-input" style="background-color: #10b981; width: 40px; height: 40px; cursor: pointer;" for="theme-emerald"></label>

                                        <input type="radio" class="btn-check" name="avatarTheme" id="theme-orange" value="#f39c12">
                                        <label class="btn rounded-circle p-3 border-2 border-white shadow-sm avatar-color-input" style="background-color: #f39c12; width: 40px; height: 40px; cursor: pointer;" for="theme-orange"></label>

                                        <input type="radio" class="btn-check" name="avatarTheme" id="theme-pink" value="#e84393">
                                        <label class="btn rounded-circle p-3 border-2 border-white shadow-sm avatar-color-input" style="background-color: #e84393; width: 40px; height: 40px; cursor: pointer;" for="theme-pink"></label>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 pt-2">
                                <button type="submit" class="btn btn-primary px-5 py-2 fw-bold rounded-pill shadow-sm">Save Profile Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                    
    `,
    mathematics: `
        <div class="aniamte__animated animate__fadeIn px-3 pt-2">
            <h2 class="fw-bold text-dark mb-2">Mathematics Mock Tests</h2>
            <p class="text-muted mb-4">Select a chapter to begin practicing formulas, algebra, and geometry.</p>
        </div>

        <div class="px-3">
            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom">
                <div class="dropdown">
                    <button class="btn btn-link text-dark fw-bold text-decoration-none dropdown-toggle-custom d-inline-flex align-items-center gap-2 shadow-none p-0 fs-4" type="button" id="subjectFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="font-family: inherit;">
                        <span class="allTopics">All Topics</span> <span id="total-card-count" class="text-muted fs-6 fw-normal font-monospace" style="opacity: 0.7;">(0)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron2-icon transition-transform"><path fill="currentColor" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
                    </button>
                    <ul class="dropdown-menu shadow border-0 rounded-3 mt-2" id="dropdown-filter-items" aria-labelledby="subjectFilterDropdown"></ul>
                </div>
                <div class="d-flex align-items-center gap-3 text-secondary">
                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg/" width="24" height="24" fill="currentColor" class="bi bi-grid cursor-pointer active2" viewBox="0 0 24 24" id="gridViewBtn">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                    </button>

                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="List View">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="list2-icon cursor-pointer text-secondary" id="listViewBtn"><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg>
                    </button>

                    <button class="btn btn-link p-1 text-secondary border-0 btn-action shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="More Options">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border rounded-3 mt-2">
                        <li>
                            <button class="dropdown-item text-danger fw-medium d-flex align-items-center gap-2 py-2" type="button" onclick="resetAllCurrentSubjectTests()" disabled style="opacity: 0.6; cursor: not-allowed;">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor" class="refresh-icon"><path d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z"/></svg>
                                Reset All Tests
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="px-4 mt-4">
            <div id="chapters-container" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
        </div>
    `,
    geography: `
        <div class="aniamte__animated animate__fadeIn px-3 pt-2">
            <h2 class="fw-bold text-dark mb-2">Geography Mock Tests</h2>
            <p class="text-muted mb-4">Test your knowledge on physical geography and world maps.</p>
        </div>

        <div class="px-3">
            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom">
                <div class="dropdown">
                    <button class="btn btn-link text-dark fw-bold text-decoration-none dropdown-toggle-custom d-inline-flex align-items-center gap-2 shadow-none p-0 fs-4" type="button" id="subjectFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="font-family: inherit;">
                        <span class="allTopics">All Topics</span> <span id="total-card-count" class="text-muted fs-6 fw-normal font-monospace" style="opacity: 0.7;">(0)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron2-icon transition-transform"><path fill="currentColor" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
                    </button>
                    <ul class="dropdown-menu shadow border-0 rounded-3 mt-2" id="dropdown-filter-items" aria-labelledby="subjectFilterDropdown"></ul>
                </div>
                <div class="d-flex align-items-center gap-3 text-secondary">
                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg/" width="24" height="24" fill="currentColor" class="bi bi-grid cursor-pointer active2" viewBox="0 0 24 24" id="gridViewBtn">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                    </button>

                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="List View">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="list2-icon cursor-pointer text-secondary" id="listViewBtn"><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg>
                    </button>

                    <button class="btn btn-link p-1 text-secondary border-0 btn-action shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="More Options">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border rounded-3 mt-2">
                        <li>
                            <button class="dropdown-item text-danger fw-medium d-flex align-items-center gap-2 py-2" type="button" onclick="resetAllCurrentSubjectTests()" disabled style="opacity: 0.6; cursor: not-allowed;">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor" class="refresh-icon"><path d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z"/></svg>
                                Reset All Tests
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="px-4 mt-4">
            <div id="chapters-container" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
        </div>
    `,
    history: `
        <div class="aniamte__animated animate__fadeIn px-3 pt-2">
            <h2 class="fw-bold text-dark mb-2">History Mock Tests</h2>
            <p class="text-muted mb-4">Test your knowledge on ancient, medieval, and modern history.</p>
        </div>

        <div class="px-3">
            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom">
                <div class="dropdown">
                    <button class="btn btn-link text-dark fw-bold text-decoration-none dropdown-toggle-custom d-inline-flex align-items-center gap-2 shadow-none p-0 fs-4" type="button" id="subjectFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="font-family: inherit;">
                        <span class="allTopics">All Topics</span> <span id="total-card-count" class="text-muted fs-6 fw-normal font-monospace" style="opacity: 0.7;">(0)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="chevron2-icon transition-transform"><path fill="currentColor" d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
                    </button>
                    <ul class="dropdown-menu shadow border-0 rounded-3 mt-2" id="dropdown-filter-items" aria-labelledby="subjectFilterDropdown"></ul>
                </div>
                <div class="d-flex align-items-center gap-3 text-secondary">
                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg/" width="24" height="24" fill="currentColor" class="bi bi-grid cursor-pointer active2" viewBox="0 0 24 24" id="gridViewBtn">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                    </button>

                    <button class="btn btn-link p-1 border-0 btn-action shadow-none" title="List View">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="list2-icon cursor-pointer text-secondary" id="listViewBtn"><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg>
                    </button>

                    <button class="btn btn-link p-1 text-secondary border-0 btn-action shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="More Options">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border rounded-3 mt-2">
                        <li>
                            <button class="dropdown-item text-danger fw-medium d-flex align-items-center gap-2 py-2" type="button" onclick="resetAllCurrentSubjectTests()" disabled style="opacity: 0.6; cursor: not-allowed;">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor" class="refresh-icon"><path d="M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z"/></svg>
                                Reset All Tests
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="px-4 mt-4">
            <div id="chapters-container" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"></div>
        </div>
    `,
    
};