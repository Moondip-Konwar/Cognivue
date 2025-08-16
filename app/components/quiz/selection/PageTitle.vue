<template>
  <div class="page-title">
    <h1>Browse Quizzes</h1>
    <div class="controls">
      <div class="search" role="search" aria-label="Search quizzes">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style="opacity:.8">
          <path d="M21 21l-4.35-4.35" stroke="rgba(224,241,224,0.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="11" cy="11" r="6" stroke="rgba(224,241,224,0.6)" stroke-width="1.6"></circle>
        </svg>
  <input :value="search" @input="$emit('update:search', $event.target.value)" placeholder="Search topics, subjects or quizzes..." @keydown.enter="$event.target.blur()" />
        <button title="Filter" style="background:transparent;border:0;color:rgba(224,241,224,0.7);font-weight:800">⚲</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  search: String
})
</script>
