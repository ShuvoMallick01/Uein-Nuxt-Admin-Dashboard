<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <!-- DISPLAY WIDGETS CARD -->
    <SalesWidgets />

    <!-- SALES OVERVIEW GRAPH -->
    <SalesOverview />

    <!-- SALES BY CATEGORY GRAPH -->
    <SalesByCategory />

    <!-- POPULAR PRODUCTS TABLE -->
    <PopularProducts />

    <!-- Recent Orders List -->
    <RecentOrders />

    <!-- FOOTER CARD -->
    <Footer></Footer>
  </div>
</template>
