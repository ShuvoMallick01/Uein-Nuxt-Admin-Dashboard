<script setup lang="ts">
definePageMeta({
  title: "Career",
});
</script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <!-- STATS CARDS -->
    <Status />

    <!-- NETWORK LIST CARD -->
    <Networks />

    <!-- PROFILE STRENGTH CARD -->
    <ProfileStrength />

    <!-- VACANCY STATUS CARD -->
    <VacancyStatus />

    <!-- RECENT JOBS CARD -->
    <RecentJobs />

    <!-- VISITOR GRAPH CARD -->
    <VisitorGraph />

    <!-- FOOTER CARD -->
    <Footer></Footer>
  </div>
</template>
