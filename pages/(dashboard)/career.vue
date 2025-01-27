<script setup lang="ts">
// import Footer from "~/components/Footer.vue";
// import Stats from "~/sections/career/Stats.vue";
// import Networks from "~/sections/career/networks";
// import RecentJobs from "~/sections/career/RecentJobs.vue";
// import VacancyStatus from "~/sections/career/vacancy-status";
// import VisitorGraph from "~/sections/career/VisitorGraph.vue";
// import ProfileStrength from "~/sections/career/ProfileStrength.vue";
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
