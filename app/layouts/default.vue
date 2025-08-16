<template>
  <Navbar></Navbar>
  <slot></slot>
  <footer class="w-full bg-gradient-to-r from-primary/10 via-background to-tertiary/10 border-t border-tertiary/30 py-6 mt-16 flex flex-col items-center">
    <div class="flex items-center gap-2 text-lg text-text font-semibold">
      <UIcon name="mdi:copyright" class="text-xl" />
      <span>2025 some_useless_person</span>
    </div>
    <div class="text-sm text-text/70 mt-2">All rights reserved.</div>
    <div class="mt-3 flex gap-4">
      <a href="https://github.com/Moondip-Konwar/Cognivue/" target="_blank" class="hover:text-accent transition-colors">
        <UIcon name="mdi:github" class="text-2xl" />
      </a>
      <a href="/about" class="hover:text-primary transition-colors">About</a>
      <a href="/quiz/selection" class="hover:text-tertiary transition-colors">Quizzes</a>
    </div>
  </footer>
</template>