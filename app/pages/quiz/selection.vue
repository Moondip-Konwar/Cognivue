<template>
    <div>
        <!-- Topbar (componentify: Topbar) -->
        <header class="topbar">
            <div class="brand">
                <div class="dot" aria-hidden=""></div>
                <div style="font-weight:800">Cognivue</div>
            </div>
            <div class="top-actions">
                <div style="color:rgba(224,241,224,0.78)">Login</div>
                <div style="padding:8px 12px; border-radius:8px; border:1px solid rgba(156,217,156,0.06)">Docs</div>
            </div>
        </header>

        <!-- Sidebar (componentify: Sidebar) -->
        <nav class="sidebar" aria-label="Left navigation (unchanged)">
            <div class="user">
                <div class="avatar" aria-hidden=""></div>
                <div>
                    <div style="font-weight:800">Alex Benjamin</div>
                    <div style="font-size:13px; color:rgba(224,241,224,0.7)">Roll No. 4 • Class 9</div>
                </div>
            </div>
            <div class="navlist">
                <div class="nav-item" :class="{ active: activeNav === 'overview' }" @click="activeNav = 'overview'">
                    <div class="nav-ico"></div> Overview
                </div>
                <div class="nav-item" :class="{ active: activeNav === 'my-quizzes' }" @click="activeNav = 'my-quizzes'">
                    <div class="nav-ico"></div> My Quizzes
                </div>
                <div class="nav-item" :class="{ active: activeNav === 'subjects' }" @click="activeNav = 'subjects'">
                    <div class="nav-ico"></div> Subjects
                </div>
                <div class="nav-item" :class="{ active: activeNav === 'progress' }" @click="activeNav = 'progress'">
                    <div class="nav-ico"></div> Progress
                </div>
                <div class="nav-item" :class="{ active: activeNav === 'settings' }" @click="activeNav = 'settings'">
                    <div class="nav-ico"></div> Settings
                </div>
            </div>
        </nav>

        <main class="content">
            <!-- Page Title & Search (componentify: PageTitle) -->
            <div class="page-title">
                <h1>Browse Quizzes</h1>
                <div class="controls">
                    <div class="search" role="search" aria-label="Search quizzes">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style="opacity:.8">
                            <path d="M21 21l-4.35-4.35" stroke="rgba(224,241,224,0.6)" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <circle cx="11" cy="11" r="6" stroke="rgba(224,241,224,0.6)" stroke-width="1.6"></circle>
                        </svg>
                        <input v-model="search" placeholder="Search topics, subjects or quizzes..."
                            @keydown.enter="$event.target.blur()" />
                        <button title="Filter"
                            style="background:transparent;border:0;color:rgba(224,241,224,0.7);font-weight:800">⚲</button>
                    </div>
                </div>
            </div>

            <!-- Tabs (componentify: QuizTabs) -->
            <div class="tabs" role="tablist" aria-label="Browse tabs">
                <button v-for="tab in tabs" :key="tab.value" class="tab" :class="{ active: activeTab === tab.value }"
                    @click="activeTab = tab.value" :data-tab="tab.value">{{ tab.label }}</button>
                <div style="margin-left:auto; display:flex; gap:8px; align-items:center">
                    <div style="color:rgba(224,241,224,0.75); font-weight:700; margin-right:8px">Sort</div>
                    <select v-model="sort" id="sort"
                        style="background:transparent; color:var(--text); border-radius:8px; padding:8px; border:1px solid rgba(156,217,156,0.04)">
                        <option value="new">Newest</option>
                        <option value="easy">Easiest</option>
                        <option value="hard">Hardest</option>
                        <option value="popular">Most Played</option>
                    </select>
                </div>
            </div>

            <div class="page-layout">
                <!-- Subject Filter (componentify: SubjectFilter) -->
                <aside class="subject-list" aria-label="Subject filters">
                    <h3>Filter by subject</h3>
                    <div>
                        <button v-for="subject in subjects" :key="subject.value" class="chip"
                            :class="{ active: activeSubject === subject.value }" @click="activeSubject = subject.value"
                            :data-subject="subject.value">{{ subject.label }}</button>
                    </div>
                    <hr style="border:none; height:1px; background: rgba(156,217,156,0.02); margin:12px 0">
                    <div style="font-size:13px; color: rgba(224,241,224,0.78);">
                        <div style="margin-bottom:8px; font-weight:800">View</div>
                        <div class="view-toggle">
                            <button class="view-btn" :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'"
                                id="view-grid">Grid</button>
                            <button class="view-btn" :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'"
                                id="view-list">List</button>
                        </div>
                        <div style="margin-top:18px; font-size:13px; color:rgba(224,241,224,0.7)">
                            Tip: Use <strong>By Subject</strong> tab to focus. Sorting &amp; filters will refine
                            results.
                        </div>
                    </div>
                </aside>

                <!-- Main browsing area (componentify: QuizGrid, QuizList) -->
                <section id="browse-area">
                    <!-- Tab Panels -->
                    <div v-if="activeTab === 'featured'" class="tab-panel" data-panel="featured">
                        <div class="section-title">Featured</div>
                        <div v-if="viewMode === 'grid'" class="grid" id="featured-grid">
                            <article v-for="quiz in filteredQuizzes('featured')" :key="quiz.title" class="card"
                                :data-subject="quiz.subject" :style="quiz.style">
                                <div>
                                    <h4>{{ quiz.title }}</h4>
                                    <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty
                                    }}</div>
                                    <div class="meta">{{ quiz.questions }} Questions</div>
                                </div>
                                <a class="continue" href="#">{{ quiz.cta }}</a>
                            </article>
                        </div>
                        <div v-else class="list">
                            <div v-for="quiz in filteredQuizzes('featured')" :key="quiz.title" class="list-item"
                                :data-subject="quiz.subject">
                                <div class="list-thumb" aria-hidden=""></div>
                                <div class="list-body">
                                    <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                    <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{
                                        quiz.questions }} Questions</div>
                                    <div class="difficulty">{{ quiz.difficulty }}</div>
                                </div>
                                <div style="display:flex; gap:8px; align-items:center">
                                    <a class="continue" href="#" style="padding:8px 12px">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'new'" class="tab-panel" data-panel="new">
                        <div class="section-title">Newly Added</div>
                        <div v-if="viewMode === 'grid'" class="grid">
                            <article v-for="quiz in filteredQuizzes('new')" :key="quiz.title" class="card"
                                :data-subject="quiz.subject">
                                <div>
                                    <h4>{{ quiz.title }}</h4>
                                    <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty
                                    }}</div>
                                    <div class="meta">{{ quiz.questions }} Questions</div>
                                </div>
                                <a class="continue" href="#">{{ quiz.cta }}</a>
                            </article>
                        </div>
                        <div v-else class="list">
                            <div v-for="quiz in filteredQuizzes('new')" :key="quiz.title" class="list-item"
                                :data-subject="quiz.subject">
                                <div class="list-thumb" aria-hidden=""></div>
                                <div class="list-body">
                                    <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                    <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{
                                        quiz.questions }} Questions</div>
                                    <div class="difficulty">{{ quiz.difficulty }}</div>
                                </div>
                                <div style="display:flex; gap:8px; align-items:center">
                                    <a class="continue" href="#" style="padding:8px 12px">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'popular'" class="tab-panel" data-panel="popular">
                        <div class="section-title">Popular</div>
                        <div v-if="viewMode === 'grid'" class="grid">
                            <article v-for="quiz in filteredQuizzes('popular')" :key="quiz.title" class="card"
                                :data-subject="quiz.subject">
                                <div>
                                    <h4>{{ quiz.title }}</h4>
                                    <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty
                                    }}</div>
                                    <div class="meta">{{ quiz.questions }} Questions</div>
                                </div>
                                <a class="continue" href="#">{{ quiz.cta }}</a>
                            </article>
                        </div>
                        <div v-else class="list">
                            <div v-for="quiz in filteredQuizzes('popular')" :key="quiz.title" class="list-item"
                                :data-subject="quiz.subject">
                                <div class="list-thumb" aria-hidden=""></div>
                                <div class="list-body">
                                    <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                    <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{
                                        quiz.questions }} Questions</div>
                                    <div class="difficulty">{{ quiz.difficulty }}</div>
                                </div>
                                <div style="display:flex; gap:8px; align-items:center">
                                    <a class="continue" href="#" style="padding:8px 12px">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab === 'by-subject'" class="tab-panel" data-panel="by-subject">
                        <div class="section-title">By Subject — select a subject chip to filter left</div>
                        <div v-if="viewMode === 'grid'" class="grid">
                            <article v-for="quiz in filteredQuizzes('by-subject')" :key="quiz.title" class="card"
                                :data-subject="quiz.subject">
                                <div>
                                    <h4>{{ quiz.title }}</h4>
                                    <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty
                                    }}</div>
                                    <div class="meta">{{ quiz.questions }} Questions</div>
                                </div>
                                <a class="continue" href="#">{{ quiz.cta }}</a>
                            </article>
                        </div>
                        <div v-else class="list">
                            <div v-for="quiz in filteredQuizzes('by-subject')" :key="quiz.title" class="list-item"
                                :data-subject="quiz.subject">
                                <div class="list-thumb" aria-hidden=""></div>
                                <div class="list-body">
                                    <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                    <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{
                                        quiz.questions }} Questions</div>
                                    <div class="difficulty">{{ quiz.difficulty }}</div>
                                </div>
                                <div style="display:flex; gap:8px; align-items:center">
                                    <a class="continue" href="#" style="padding:8px 12px">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Navigation state
const activeNav = ref('overview')

// Tabs
const tabs = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newly Added', value: 'new' },
    { label: 'Popular', value: 'popular' },
    { label: 'By Subject', value: 'by-subject' }
]
const activeTab = ref('featured')

// Subjects
const subjects = [
    { label: 'All', value: 'all' },
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
    { label: 'English', value: 'english' },
    { label: 'Other', value: 'misc' }
]
const activeSubject = ref('all')

// View mode
const viewMode = ref('grid')

// Sorting
const sort = ref('new')

// Search
const search = ref('')

// Quiz data (componentify: move to composable or store)
const quizzes = [
    // Featured
    { tab: 'featured', subject: 'math', subjectLabel: 'Maths', title: 'Congruence of Triangles', difficulty: 'Easy', questions: 12, cta: 'Continue →', style: '' },
    { tab: 'featured', subject: 'science', subjectLabel: 'Science', title: 'Chemical Bonds', difficulty: 'Hard', questions: 15, cta: 'Continue →', style: 'background: linear-gradient(180deg, rgba(156,217,156,0.10), rgba(23,134,24,0.04))' },
    { tab: 'featured', subject: 'history', subjectLabel: 'History', title: 'World War II', difficulty: 'Easy', questions: 8, cta: 'Continue →', style: 'background: linear-gradient(180deg, rgba(156,217,156,0.08), rgba(23,134,24,0.03))' },
    // New
    { tab: 'new', subject: 'math', subjectLabel: 'Maths', title: 'Pythagoras — Quick Quiz', difficulty: 'Medium', questions: 10, cta: 'Start →', style: '' },
    { tab: 'new', subject: 'science', subjectLabel: 'Science', title: 'Water Cycle', difficulty: 'Easy', questions: 14, cta: 'Start →', style: '' },
    { tab: 'new', subject: 'english', subjectLabel: 'English', title: 'Comprehension — Passages', difficulty: 'Medium', questions: 9, cta: 'Start →', style: '' },
    // Popular
    { tab: 'popular', subject: 'math', subjectLabel: 'Maths', title: 'Algebra Warmup', difficulty: 'Medium', questions: 20, cta: 'Play →', style: '' },
    { tab: 'popular', subject: 'science', subjectLabel: 'Science', title: 'Photosynthesis', difficulty: 'Medium', questions: 7, cta: 'Play →', style: '' },
    { tab: 'popular', subject: 'history', subjectLabel: 'History', title: 'Ancient Civilizations', difficulty: 'Hard', questions: 11, cta: 'Play →', style: '' },
    // By Subject
    { tab: 'by-subject', subject: 'math', subjectLabel: 'Maths', title: 'Trigonometry Basics', difficulty: 'Medium', questions: 13, cta: 'Start →', style: '' },
    { tab: 'by-subject', subject: 'math', subjectLabel: 'Maths', title: 'Angles & Arcs', difficulty: 'Easy', questions: 9, cta: 'Start →', style: '' },
    { tab: 'by-subject', subject: 'science', subjectLabel: 'Science', title: 'Cells & Tissues', difficulty: 'Medium', questions: 12, cta: 'Start →', style: '' },
    // By Subject List
    { tab: 'by-subject', subject: 'math', subjectLabel: 'Maths', title: 'Vectors — Quick', difficulty: 'Medium', questions: 8, cta: 'Open', style: '' },
    { tab: 'by-subject', subject: 'history', subjectLabel: 'History', title: 'Medieval India — Short', difficulty: 'Easy', questions: 10, cta: 'Open', style: '' }
]

// Filtering logic
const filteredQuizzes = (tab) => {
    let filtered = quizzes.filter(q => q.tab === tab)
    if (activeSubject.value !== 'all') {
        filtered = filtered.filter(q => q.subject === activeSubject.value)
    }
    if (search.value) {
        const s = search.value.toLowerCase()
        filtered = filtered.filter(q =>
            q.title.toLowerCase().includes(s) ||
            q.subjectLabel.toLowerCase().includes(s)
        )
    }
    // Sorting (simple demo)
    if (sort.value === 'easy') filtered = filtered.sort((a, b) => a.difficulty.localeCompare(b.difficulty))
    if (sort.value === 'hard') filtered = filtered.sort((a, b) => b.difficulty.localeCompare(a.difficulty))
    if (sort.value === 'popular') filtered = filtered.sort((a, b) => b.questions - a.questions)
    if (sort.value === 'new') filtered = filtered // Add your own logic for "new"
    return filtered
}
</script>

<style>
:root {
    --background: #0a120a;
    --text: #e0f1e0;
    --accent: #24e727;
    --primary: #9cd99c;
    --sidebar-bg: linear-gradient(180deg, rgba(23, 134, 24, 0.06), rgba(23, 134, 24, 0.02));
    --sidebar-shadow: 0 6px 22px rgba(0, 0, 0, 0.6);
    --sidebar-border: 1px solid rgba(156, 217, 156, 0.035);
    --topbar-bg: linear-gradient(180deg, rgba(8, 12, 6, 0.98), rgba(6, 11, 6, 0.95));
    --topbar-border: 1px solid rgba(156, 217, 156, 0.035);
    --chip-bg: rgba(156, 217, 156, 0.06);
    --chip-active-bg: linear-gradient(180deg, rgba(36, 231, 39, 0.12), rgba(156, 217, 156, 0.06));
    --chip-border: 1px solid rgba(36, 231, 39, 0.06);
    --tab-bg: transparent;
    --tab-color: rgba(224, 241, 224, 0.86);
    --tab-border: 1px solid rgba(156, 217, 156, 0.03);
    --tab-active-bg: linear-gradient(90deg, rgba(156, 217, 156, 0.14), rgba(36, 231, 39, 0.04));
    --tab-active-color: var(--background);
    --nav-item-bg: transparent;
    --nav-item-active-bg: linear-gradient(90deg, rgba(156, 217, 156, 0.14), rgba(36, 231, 39, 0.06));
    --nav-item-active-color: var(--background);
    --nav-ico-bg: rgba(224, 241, 224, 0.06);
    --search-bg: rgba(156, 217, 156, 0.03);
    --search-border: 1px solid rgba(156, 217, 156, 0.04);
    --search-color: rgba(224, 241, 224, 0.78);
    --card-bg: linear-gradient(180deg, rgba(156, 217, 156, 0.14), rgba(23, 134, 24, 0.06));
    --card-border: 1px solid rgba(156, 217, 156, 0.04);
    --card-hover-shadow: 0 8px 30px rgba(0, 0, 0, 0.55);
    --card-continue-bg: linear-gradient(90deg, rgba(36, 231, 39, 0.95), rgba(156, 217, 156, 0.9));
    --list-bg: linear-gradient(180deg, rgba(156, 217, 156, 0.04), rgba(23, 134, 24, 0.02));
    --list-border: 1px solid rgba(156, 217, 156, 0.03);
    --list-thumb-bg: linear-gradient(180deg, rgba(36, 231, 39, 0.22), rgba(156, 217, 156, 0.06));
    --difficulty-bg: rgba(156, 217, 156, 0.06);
    --meta-color: rgba(224, 241, 224, 0.78);
    --difficulty-color: rgba(224, 241, 224, 0.88);
    --subject-list-bg: linear-gradient(180deg, rgba(156, 217, 156, 0.02), rgba(23, 134, 24, 0.02));
    --subject-list-border: 1px solid rgba(156, 217, 156, 0.03);
    --view-btn-border: 1px solid rgba(156, 217, 156, 0.03);
    --view-btn-active-bg: rgba(36, 231, 39, 0.07);
    --hr-bg: rgba(156, 217, 156, 0.02);
    --controls-color: rgba(224, 241, 224, 0.78);
    --controls-sort-color: rgba(224, 241, 224, 0.75);
}

* {
    box-sizing: border-box
}

html,
body {
    height: 100%
}

body {
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

header.topbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    gap: 16px;
    background: var(--topbar-bg);
    border-bottom: var(--topbar-border);
    z-index: 40;
}

.brand {
    display: flex;
    gap: 12px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
}

.brand .dot {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: var(--accent)
}

.top-actions {
    display: flex;
    gap: 12px;
    align-items: center
}

nav.sidebar {
    position: fixed;
    top: 84px;
    left: 24px;
    width: 240px;
    bottom: 24px;
    padding: 22px;
    border-radius: 14px;
    background: var(--sidebar-bg);
    box-shadow: var(--sidebar-shadow);
    overflow: hidden;
}

.sidebar .user {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
}

.avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--primary)
}

.navlist {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 6px
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 999px;
    color: var(--text);
    font-weight: 700;
    font-size: 15px;
    background: var(--nav-item-bg);
    cursor: pointer;
}

.nav-item.active {
    background: var(--nav-item-active-bg);
    color: var(--nav-item-active-color)
}

.nav-ico {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: var(--nav-ico-bg)
}

main.content {
    margin-left: 300px;
    padding: 110px 48px 48px 48px;
    min-height: calc(100vh - 160px);
}

.page-title {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 18px;
}

.page-title h1 {
    font-size: 42px;
    margin: 0;
    font-weight: 800;
    letter-spacing: -0.02em;
}

.controls {
    margin-left: auto;
    display: flex;
    gap: 12px;
    align-items: center;
}

.search {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--search-bg);
    border-radius: 999px;
    padding: 12px 16px;
    min-width: 480px;
    border: var(--search-border);
    color: var(--search-color);
}

.search input {
    background: transparent;
    border: 0;
    outline: 0;
    color: var(--text);
    font-size: 15px;
    width: 100%;
}

.tabs {
    display: flex;
    gap: 12px;
    margin-top: 18px;
    margin-bottom: 18px;
    align-items: center;
}

.tab {
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 700;
    background: var(--tab-bg);
    color: var(--tab-color);
    border: var(--tab-border);
}

.tab.active {
    background: var(--tab-active-bg);
    color: var(--tab-active-color)
}

.page-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 22px;
    align-items: start;
}

.subject-list {
    padding: 12px;
    border-radius: 12px;
    background: var(--subject-list-bg);
    border: var(--subject-list-border);
}

.subject-list h3 {
    margin: 0 0 12px 0;
    font-size: 16px;
    color: var(--text)
}

.chip {
    display: inline-block;
    margin: 6px 8px 6px 0;
    padding: 8px 12px;
    border-radius: 999px;
    cursor: pointer;
    background: var(--chip-bg);
    color: var(--text);
    font-weight: 700;
    font-size: 13px;
    border: var(--chip-border);
}

.chip.active {
    background: var(--chip-active-bg);
    color: var(--background)
}

.view-toggle {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px
}

.view-btn {
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
    border: var(--view-btn-border);
    background: transparent;
    color: var(--text);
    font-weight: 700
}

.view-btn.active {
    background: var(--view-btn-active-bg);
    color: var(--text)
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
    border-radius: 14px;
    padding: 20px;
    min-height: 140px;
    background: var(--card-bg);
    border: var(--card-border);
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    transition: transform .18s ease, box-shadow .18s ease;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: var(--card-hover-shadow);
}

.card h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: var(--text)
}

.meta {
    color: var(--meta-color);
    font-weight: 700;
    font-size: 13px
}

.card .continue {
    margin-top: 8px;
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
    font-weight: 800;
    background: var(--card-continue-bg);
    color: var(--background);
    text-decoration: none;
    width: fit-content;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.list-item {
    display: flex;
    gap: 18px;
    padding: 16px;
    border-radius: 12px;
    background: var(--list-bg);
    border: var(--list-border);
    align-items: center;
}

.list-thumb {
    width: 92px;
    height: 72px;
    border-radius: 8px;
    background: var(--list-thumb-bg);
    flex-shrink: 0
}

.list-body {
    flex: 1
}

.difficulty {
    font-weight: 800;
    font-size: 12px;
    color: var(--difficulty-color);
    padding: 6px 8px;
    border-radius: 8px;
    display: inline-block;
    margin-top: 8px;
    background: var(--difficulty-bg)
}

.section-title {
    font-size: 20px;
    font-weight: 800;
    margin: 8px 0 12px 0
}

hr {
    border: none;
    height: 1px;
    background: var(--hr-bg);
    margin: 12px 0;
}

@media (max-width:1200px) {
    .grid {
        grid-template-columns: repeat(2, 1fr)
    }

    main.content {
        padding-left: 36px;
        padding-right: 36px
    }
}

@media (max-width:900px) {
    nav.sidebar {
        display: none
    }

    main.content {
        margin-left: 0;
        padding-top: 90px
    }

    .grid {
        grid-template-columns: repeat(1, 1fr)
    }
}

</style>