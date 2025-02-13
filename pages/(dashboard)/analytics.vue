<script setup lang="ts">
definePageMeta({
  title: "Analytics",
});
</script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <!-- WIDGET LIST CARDS -->
    <WidgetList />

    <!-- REVENUE STATISTIC GRAPH CARD -->
    <RevenueStatistic />

    <!-- RECENT ACTIVITY TABLE CARD -->
    <RecentActivity />

    <!-- SUPPORT TRACKER CARD -->
    <SupportTracker />

    <!-- SALES BY COUNTRIES CARD -->
    <SalesByCountries />

    <!-- VISITOR INSIGHTS CARD -->
    <VisitorInsights />

    <!-- TRANSACTIONS CARD -->
    <Transactions />

    <!-- FOOTER CARD -->
    <Footer></Footer>
  </div>
</template>
