<template>
  <div class="tabs" role="tablist" aria-label="Browse tabs">
    <button v-for="tab in tabs" :key="tab.value" class="tab" :class="{ active: activeTab === tab.value }" @click="$emit('update:activeTab', tab.value)" :data-tab="tab.value">{{ tab.label }}</button>
    <div style="margin-left:auto; display:flex; gap:8px; align-items:center">
      <div style="color:rgba(224,241,224,0.75); font-weight:700; margin-right:8px">Sort</div>
      <select :value="sort" @change="$emit('update:sort', $event.target.value)" id="sort" style="background:transparent; color:var(--text); border-radius:8px; padding:8px; border:1px solid rgba(156,217,156,0.04)">
        <option value="new">Newest</option>
        <option value="easy">Easiest</option>
        <option value="hard">Hardest</option>
        <option value="popular">Most Played</option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: Array,
  activeTab: String,
  sort: String
})
</script>
