<template>
        <section class="flex flex-col md:flex-row px-4 md:px-10 gap-10 md:gap-20 justify-center items-center w-full min-h-[80vh] py-16">
            <!-- About Card -->
            <div class="flex-1 flex justify-center items-center">
                <div class="bg-gradient-to-br from-background via-primary/1.5 to-tertiary/1.5 rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 hover:scale-[1.03]">
                    <div class="text-5xl md:text-7xl font-bold py-3 mb-2"><span class="text-gradient">About</span> Cognivue</div>
                    <div class="text-text pt-4 pb-2 font-normal md:text-2xl">
                        You can learn in-depth about Cognivue and its features on our <span class="text-gradient">GitHub</span> page.
                    </div>
                    <UButton
                        class="transition-all duration-250 transform hover:scale-110 hover:shadow-[0_0_25px_var(--color-tertiary)] w-fit text-2xl md:text-3xl p-3 md:p-4 mt-8 bg-gradient text-background font-extrabold"
                        @click="$router.push('/banana-milkshake')">
                        <UIcon name="mdi:github" class="mr-2" />
                        Github
                        <UIcon name="material-symbols:arrow-circle-right-outline" class="size-7 md:size-10 ml-2" />
                    </UButton>
                </div>
            </div>

            <!-- Credits Card -->
            <div class="flex-1 flex justify-center items-center">
                <div class="bg-gradient-to-br from-background via-secondary/10 to-accent/10 rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-xl transition-transform duration-300 hover:scale-[1.03]">
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
            </div>
        </section>
</template>
