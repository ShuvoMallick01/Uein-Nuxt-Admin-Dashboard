<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="bg-[#0b0e1e] px-4 md:mx-5 xl:mx-8 mt-2 rounded-xl lg:rounded-3xl dark:bg-primary/10"
  >
    <div
      class="container relative px-4 pt-20 mx-auto space-y-5 text-center lg:pt-24"
    >
      <h2
        class="text-3xl font-bold !leading-tight text-white md:text-4xl lg:text-5xl text-balance"
      >
        Transform your development <br class="hidden lg:block" />
        with Powerful <span class="text-primary">Nuxt JS</span> dashboard
      </h2>

      <p class="text-base lg:text-lg text-muted text-balance">
        Uno includes well-designed dashboards, applications,
        <br class="hidden lg:block" />
        and pages in both light and dark color schemes.
      </p>

      <div class="flex justify-center gap-4 py-5 mt-5">
        <Button :as="RouterLink" to="/course" size="md">Live Preview</Button>
        <Button
          as="a"
          size="md"
          variant="outline"
          href="https://shuvomallick.com/uein/documentation"
        >
          Documentation
        </Button>
      </div>

      <div class="relative mx-auto rounded-lg sm:w-3/4 xl:w-3/5 md:pt-12">
        <img
          src="/images/covers/cover-2.jpg"
          class="w-full rounded-t-xl"
          alt="Highlight Demo"
        />

        <div
          class="absolute bottom-0 z-10 w-full h-full pointer-events-none bg-gradient-to-t from-black/20 to-transparent from-10%"
        ></div>
      </div>
    </div>
  </div>
</template>
