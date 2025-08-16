<script lang="ts" setup>
  const router = useRouter();
  router.push('/quiz/selection');
</script>

<template>
  <div class="bg-background min-h-screen text-text">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
