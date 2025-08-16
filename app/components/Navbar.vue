<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// TODO: Complete the navigation menu items (Add links, items, etc.)
const items = ref<NavigationMenuItem[]>([
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank',
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true,
  }
])
</script>

<template>
    <nav class="flex justify-between items-center w-full px-4 fixed">
        <div class="flex items-center gap-2">
            <i class="bg-accent rounded-full w-4.5 h-4.5"></i>
            <div class="font-bold text-1xl">Cognivue</div>
        </div>
        <UNavigationMenu :items="items" class="w-full justify-end" />
    </nav>
</template>
