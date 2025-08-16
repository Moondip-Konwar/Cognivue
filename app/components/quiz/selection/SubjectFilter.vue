<template>
  <aside class="subject-list" aria-label="Subject filters">
    <h3>Filter by subject</h3>
    <div>
      <button v-for="subject in subjects" :key="subject.value" class="chip" :class="{ active: activeSubject === subject.value }" @click="$emit('update:activeSubject', subject.value)" :data-subject="subject.value">{{ subject.label }}</button>
    </div>
    <hr style="border:none; height:1px; background: rgba(156,217,156,0.02); margin:12px 0">
    <div style="font-size:13px; color: rgba(224,241,224,0.78);">
      <div style="margin-bottom:8px; font-weight:800">View</div>
      <div class="view-toggle">
        <button class="view-btn" :class="{ active: viewMode === 'grid' }" @click="$emit('update:viewMode', 'grid')" id="view-grid">Grid</button>
        <button class="view-btn" :class="{ active: viewMode === 'list' }" @click="$emit('update:viewMode', 'list')" id="view-list">List</button>
      </div>
      <div style="margin-top:18px; font-size:13px; color:rgba(224,241,224,0.7)">
        Tip: Use <strong>By Subject</strong> tab to focus. Sorting & filters will refine results.
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  subjects: Array,
  activeSubject: String,
  viewMode: String
})
</script>
