<template>
  <nav class="sidebar" aria-label="Left navigation (unchanged)">
    <div class="user">
      <div class="avatar" aria-hidden=""></div>
      <div>
        <div style="font-weight:800">Alex Benjamin</div>
        <div style="font-size:13px; color:rgba(224,241,224,0.7)">Roll No. 4 • Class 9</div>
      </div>
    </div>
    <div class="navlist">
      <div class="nav-item" :class="{ active: activeNav === 'overview' }" @click="$emit('update:activeNav', 'overview')">
        <div class="nav-ico"></div> Overview
      </div>
      <div class="nav-item" :class="{ active: activeNav === 'my-quizzes' }" @click="$emit('update:activeNav', 'my-quizzes')">
        <div class="nav-ico"></div> My Quizzes
      </div>
      <div class="nav-item" :class="{ active: activeNav === 'subjects' }" @click="$emit('update:activeNav', 'subjects')">
        <div class="nav-ico"></div> Subjects
      </div>
      <div class="nav-item" :class="{ active: activeNav === 'progress' }" @click="$emit('update:activeNav', 'progress')">
        <div class="nav-ico"></div> Progress
      </div>
      <div class="nav-item" :class="{ active: activeNav === 'settings' }" @click="$emit('update:activeNav', 'settings')">
        <div class="nav-ico"></div> Settings
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  activeNav: String
})
</script>
