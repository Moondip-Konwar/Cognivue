<script setup>
    defineProps({
        icon: String,
        title: String,
        content: String
    })
</script>

<template>
    <li class="flex items-center text-xl md:text-2xl font-light">
        <span class="inline-flex items-center justify-center rounded-full bg-secondary w-8 h-8 mr-3 shrink-0">
            <UIcon :name=icon class="size-6 text-white"></UIcon>
        </span>
        <span>
            <span class="font-bold text-gradient">{{ title }}</span> {{ content }}
        </span>
    </li>
</template>