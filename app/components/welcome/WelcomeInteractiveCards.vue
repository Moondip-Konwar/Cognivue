<script setup>
    defineProps({
        color: {
            type: String,
            default: "tertiary",
        }
    })
</script>

<template>
    <div
        :class="[`bg-${color}`, 'h-16', 'md:h-35', 'w-12', 'md:w-30', 'rounded-2xl', 'hover:scale-110', 'transition-all duration-250', 'hover:shadow-[0_0_15px_var(--color-tertiary)']">
    </div>
</template>