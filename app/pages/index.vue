<template>
    <!-- Hero -->
    <section
        class="flex flex-col md:flex-row md:mb-0 mb-10 m px-4 md:px-10 gap-8 md:gap-15 justify-center items-center w-full calc(100vh - 4rem) md:min-h-screen">
        <!-- Title -->
        <div
            class="flex-1 flex justify-center flex-col items-center md:items-start text-center md:text-left mt-20 md:mt-0">
            <div class="text-5xl md:text-8xl font-bold text-gradient py-3">Cognivue</div>
            <div class="text-text pt-7 font-bold text-2xl md:text-5xl">
                <span class="text-outline">Elegant learning</span> for steady progress.
            </div>
            <!-- Get Started -->
            <UButton
                class="transition-all duration-250 transform hover:scale-105 hover:shadow-[0_0_15px_var(--color-tertiary)] w-fit text-2xl md:text-4xl p-3 md:p-4 mt-10 md:mt-18 bg-gradient text-background font-extrabold"
                @click="$router.push('/banana-milkshake')">
                Get Started
                <UIcon name="material-symbols:arrow-circle-right-outline" class="size-7 md:size-10"></UIcon>
            </UButton>
        </div>

        <!-- Art -->
        <div class="flex-1 flex flex-col justify-center items-center gap-3 w-full">
            <div class="flex flex-row gap-2 md:gap-3 w-full justify-center">
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="accent"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="tertiary"></WelcomeInteractiveCards>
            </div>
            <div class="flex flex-row gap-2 md:gap-3 w-full justify-center">
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="accent"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="primary"></WelcomeInteractiveCards>
            </div>
            <div class="flex flex-row gap-2 md:gap-3 w-full justify-center">
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="tertiary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="secondary"></WelcomeInteractiveCards>
                <WelcomeInteractiveCards color="primary"></WelcomeInteractiveCards>
            </div>
        </div>

    </section>

    <!-- Sub-Hero -->
    <section
        class="flex flex-col md:flex-row px-4 md:px-10 gap-8 md:gap-15 justify-center items-center w-full calc(100vh - 4rem) md:min-h-screen md:mb-0 mb-10">

        <!-- Art -->
        <div
            class="flex-1 flex flex-col justify-center items-center gap-3 w-full order-2 md:order-1 py-0 md:py-0 my-30 md:my-0">
            <div class="relative w-40 h-40">
                <!-- Solar System -->
                <div class="relative flex justify-center items-center w-full h-full">
                    <!-- Sun -->
                    <!-- Always-active Planet -->
                    <div class="relative w-15 h-15 rounded-full bg-accent flex items-center justify-center"
                        style="--planet-color: var(--color-accent); box-shadow: 0 0 20px var(--planet-color);">
                        <!-- Always-on Glow -->
                        <div class="absolute inset-0 w-full h-full rounded-full scale-125 opacity-80"
                            style="background: radial-gradient(circle, var(--planet-color) 40%, transparent 80%); filter: blur(8px);">
                        </div>

                        <!-- Always-on Icon -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <UIcon name="material-symbols:star" class="text-white text-2xl animate-spin-slow"></UIcon>
                        </div>
                    </div>

                    <!-- TODO: Componentify the Planets -->

                    <!-- Planet 1 -->
                    <div class="absolute flex justify-center items-center"
                        style="--orbit-radius: 75px; --orbit-speed: 8s; --planet-color: #ffbe0b;">
                        <div class="planet w-4 h-4 rounded-full bg-secondary"></div>
                    </div>

                    <!-- Planet 2 -->
                    <div class="absolute flex justify-center items-center"
                        style="--orbit-radius: 105px; --orbit-speed: 12s; --planet-color: #8338ec;">
                        <div class="planet w-5 h-5 rounded-full bg-tertiary"></div>
                    </div>

                    <!-- Planet 3 -->
                    <div class="absolute flex justify-center items-center"
                        style="--orbit-radius: 135px; --orbit-speed: 18s; --planet-color: #3a86ff;">
                        <div class="planet w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <!-- Planet 4 -->
                    <div class="absolute flex justify-center items-center"
                        style="--orbit-radius: 165px; --orbit-speed: 25s; --planet-color: #3a86ff;">
                        <div class="planet w-6 h-6 rounded-full bg-secondary"></div>
                    </div>
                    <!-- Planet 5 -->
                    <div class="absolute flex justify-center items-center"
                        style="--orbit-radius: 195px; --orbit-speed: 10s; --planet-color: #3a86ff;">
                        <div class="planet w-2 h-2 rounded-full bg-primary "></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Title -->
        <div class="flex-2 flex justify-center flex-col items-center md:items-start md:text-left">
            <div class="text-5xl md:text-7xl font-bold py-3 text-center"><span class="text-gradient">Our</span> School,
                <span class="text-gradient">Our</span> Syllabus, <span class="text-gradient">My</span> Style
            </div>
            <div class="text-text pt-5 text-2xl md:text-2xl text-center">
                No random from some other school. No pointless practice. Just the stuff I actually need - all in one
                place
            </div>
            <!-- Get Started -->
            <div class="w-full flex justify-center">
                <UButton
                    class="transition-all duration-250 transform hover:scale-105 hover:shadow-[0_0_15px_var(--color-tertiary)] w-fit text-2xl md:text-4xl p-3 md:p-4 mt-10 md:mt-18 bg-gradient text-background font-extrabold"
                    @click="$router.push('/banana-milkshake')">
                    Learn More
                    <UIcon name="material-symbols:arrow-circle-right-outline" class="size-7 md:size-10"></UIcon>
                </UButton>
            </div>
        </div>

    </section>

    <!-- About -->
     <!-- TODO: Add links for each service -->
    <section
        class="flex flex-col md:flex-row px-4 md:px-10 gap-8 md:gap-15 justify-center items-center w-full calc(100vh - 4rem) md:min-h-screen">
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

    <footer class="text-text text-center mt-10 font-light pb-2 border-t-1 border-tertiary">
    <p>© 2025 some_useless_person. All rights reserved.</p>
  </footer>

</template>