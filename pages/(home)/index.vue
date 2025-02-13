<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Home",
});
</script>

<template>
  <div>
    <HomeHeader />
    <HomeBanner />

    <main>
      <DemoTemplates />
      <Features />
      <HomeFAQ />
      <HomeFooter />
    </main>
  </div>
</template>
