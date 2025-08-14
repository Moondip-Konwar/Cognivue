<template>
    <section class="flex flex-col md:flex-row px-4 md:px-10 gap-8 md:gap-15 mt-10 justify-center items-center w-full">
        <!-- Title -->
        <div class="flex-1 flex justify-center flex-col items-center md:items-start text-center md:text-left">
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
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-accent h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-tertiary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
            </div>
            <div class="flex flex-row gap-2 md:gap-3 w-full justify-center">
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-accent h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-primary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
            </div>
            <div class="flex flex-row gap-2 md:gap-3 w-full justify-center">
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-tertiary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-secondary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
                <div
                    class="bg-primary h-16 md:h-35 w-12 md:w-30 rounded-2xl hover:scale-110 transition-all duration-250 hover:shadow-[0_0_15px_var(--color-tertiary)]">
                </div>
            </div>
        </div>

    </section>
    <!-- <hr class="mt-10 md:mt-30 text-tertiary" /> -->
</template>