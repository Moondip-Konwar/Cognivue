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
import '@/assets/css/quiz/selection.css'
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'default'
})

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

</style>