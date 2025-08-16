<template>
    <section class="flex flex-col pt-15 md:flex-row px-4 md:px-10 gap-8 md:gap-15 justify-center items-center w-full calc(100vh - 4rem) md:min-h-screen">
        <!-- Title -->
        <div class="flex-1 flex justify-center flex-col items-center md:items-start text-center md:text-left">
            <div class="text-5xl md:text-7xl font-bold py-3"><span class="text-gradient">About</span> Cognivue</div>
            <div class="text-text pt-7 font-normal md:text-3xl">
                You can learn in-depth about Cognivue and it's features on our <span class="text-gradient">GitHub</span>
                page.
            </div>
            <!-- Get Started -->
            <UButton
                class="transition-all duration-250 transform hover:scale-105 hover:shadow-[0_0_15px_var(--color-tertiary)] w-fit text-2xl md:text-4xl p-3 md:p-4 mt-10 md:mt-18 bg-gradient text-background font-extrabold"
                @click="$router.push('/banana-milkshake')">
                <UIcon name="mdi:github"></UIcon>
                Github
                <UIcon name="material-symbols:arrow-circle-right-outline" class="size-7 md:size-10"></UIcon>
            </UButton>
        </div>

        <!-- Credits -->
        <div class="flex-1 flex flex-col justify-center items-center gap-3 w-full">
            <ul class="space-y-4 w-full max-w-md mx-auto">
                <WelcomeCredits icon="material-symbols:person" title="Created By:" content="some_useless_person" />
                <WelcomeCredits icon="material-symbols:design" title="Designed By:" content="mrNoob" />
                <WelcomeCredits icon="simple-icons:vuedotjs" title="Built with:" content="Vue" />
                <WelcomeCredits icon="simple-icons:nuxt" title="Powered with:" content="Nuxt" />
                <WelcomeCredits icon="simple-icons:figma" title="Prototyped on:" content="Figma" />
                <WelcomeCredits icon="simple-icons:tailwindcss" title="Designed using:" content="Tailwind" />
                <WelcomeCredits icon="simple-icons:nuxt" title="Styled with:" content="NuxtUI" />
                <WelcomeCredits icon="simple-icons:nodedotjs" title="Backend with:" content="NodeJs" />
                <WelcomeCredits icon="simple-icons:iconify" title="Icons from:" content="Iconify" />
                <WelcomeCredits icon="simple-icons:github" title="Hosted on:" content="Github" />
                <WelcomeCredits icon="simple-icons:netlify" title="Deployed with:" content="Netlify" />
            </ul>
        </div>
    </section>
</template>
