<template>
        <div>
            <!-- Navbar can be added here if needed -->
            <Sidebar :activeNav="activeNav" @update:activeNav="activeNav = $event" />
            <main class="content">
                <PageTitle :search="search" @update:search="search = $event" />
                <QuizTabs :tabs="tabs" :activeTab="activeTab" :sort="sort" @update:activeTab="activeTab = $event" @update:sort="sort = $event" />
                <div class="page-layout">
                    <SubjectFilter :subjects="subjects" :activeSubject="activeSubject" :viewMode="viewMode" @update:activeSubject="activeSubject = $event" @update:viewMode="viewMode = $event" />
                    <BrowseArea>
                        <!-- Tab Panels -->
                        <div v-if="activeTab === 'featured'" class="tab-panel" data-panel="featured">
                            <div class="section-title">Featured</div>
                            <div v-if="viewMode === 'grid'" class="grid" id="featured-grid">
                                <article v-for="quiz in filteredQuizzes('featured')" :key="quiz.title" class="card" :data-subject="quiz.subject" :style="quiz.style">
                                    <div>
                                        <h4>{{ quiz.title }}</h4>
                                        <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty }}</div>
                                        <div class="meta">{{ quiz.questions }} Questions</div>
                                    </div>
                                    <a class="continue" href="#">{{ quiz.cta }}</a>
                                </article>
                            </div>
                            <div v-else class="list">
                                <div v-for="quiz in filteredQuizzes('featured')" :key="quiz.title" class="list-item" :data-subject="quiz.subject">
                                    <div class="list-thumb" aria-hidden=""></div>
                                    <div class="list-body">
                                        <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                        <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{ quiz.questions }} Questions</div>
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
                                <article v-for="quiz in filteredQuizzes('new')" :key="quiz.title" class="card" :data-subject="quiz.subject">
                                    <div>
                                        <h4>{{ quiz.title }}</h4>
                                        <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty }}</div>
                                        <div class="meta">{{ quiz.questions }} Questions</div>
                                    </div>
                                    <a class="continue" href="#">{{ quiz.cta }}</a>
                                </article>
                            </div>
                            <div v-else class="list">
                                <div v-for="quiz in filteredQuizzes('new')" :key="quiz.title" class="list-item" :data-subject="quiz.subject">
                                    <div class="list-thumb" aria-hidden=""></div>
                                    <div class="list-body">
                                        <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                        <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{ quiz.questions }} Questions</div>
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
                                <article v-for="quiz in filteredQuizzes('popular')" :key="quiz.title" class="card" :data-subject="quiz.subject">
                                    <div>
                                        <h4>{{ quiz.title }}</h4>
                                        <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty }}</div>
                                        <div class="meta">{{ quiz.questions }} Questions</div>
                                    </div>
                                    <a class="continue" href="#">{{ quiz.cta }}</a>
                                </article>
                            </div>
                            <div v-else class="list">
                                <div v-for="quiz in filteredQuizzes('popular')" :key="quiz.title" class="list-item" :data-subject="quiz.subject">
                                    <div class="list-thumb" aria-hidden=""></div>
                                    <div class="list-body">
                                        <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                        <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{ quiz.questions }} Questions</div>
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
                                <article v-for="quiz in filteredQuizzes('by-subject')" :key="quiz.title" class="card" :data-subject="quiz.subject">
                                    <div>
                                        <h4>{{ quiz.title }}</h4>
                                        <div class="meta">Subject: {{ quiz.subjectLabel }} • Difficulty: {{ quiz.difficulty }}</div>
                                        <div class="meta">{{ quiz.questions }} Questions</div>
                                    </div>
                                    <a class="continue" href="#">{{ quiz.cta }}</a>
                                </article>
                            </div>
                            <div v-else class="list">
                                <div v-for="quiz in filteredQuizzes('by-subject')" :key="quiz.title" class="list-item" :data-subject="quiz.subject">
                                    <div class="list-thumb" aria-hidden=""></div>
                                    <div class="list-body">
                                        <div style="font-weight:800; font-size:16px">{{ quiz.title }}</div>
                                        <div style="color:rgba(224,241,224,0.78)">Subject: {{ quiz.subjectLabel }} • {{ quiz.questions }} Questions</div>
                                        <div class="difficulty">{{ quiz.difficulty }}</div>
                                    </div>
                                    <div style="display:flex; gap:8px; align-items:center">
                                        <a class="continue" href="#" style="padding:8px 12px">Open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BrowseArea>
                </div>
            </main>
        </div>
</template>

<script setup>
import '@/assets/css/quiz/selection.css'
import { ref, computed } from 'vue'
import Sidebar from '@/components/quiz/selection/Sidebar.vue'
import PageTitle from '@/components/quiz/selection/PageTitle.vue'
import QuizTabs from '@/components/quiz/selection/QuizTabs.vue'
import SubjectFilter from '@/components/quiz/selection/SubjectFilter.vue'
import BrowseArea from '@/components/quiz/selection/BrowseArea.vue'

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