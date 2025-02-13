<script setup lang="ts">
definePageMeta({
  title: "Finance",
});
</script>

<template>
  <div class="grid grid-cols-12 mt-2 mb-6 gap-7">
    <!-- DIFFERENT WIDGETS CARD -->
    <FinanceWidgets />

    <!-- REVENUE GRAPH CARD -->
    <Revenue />

    <!-- REVENUE GRAPH CARD -->
    <Expenses />

    <!-- RECENT TRANSACTION TABLE -->
    <RecentTransactions />

    <!-- REVENUE SOURCES GRAPH -->
    <RevenueSources />

    <!-- FOOTER CARD -->
    <Footer></Footer>
  </div>
</template>
