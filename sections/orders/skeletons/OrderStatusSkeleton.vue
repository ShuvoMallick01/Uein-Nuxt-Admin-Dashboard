<script setup lang="ts"></script>

<template>
  <Card class="p-5">
    <div class="flex items-start justify-between mb-8">
      <CardTitle class="text-base">Order Status</CardTitle>
      <div class="w-24 h-3 rounded-md bg-skeleton animate-pulse text-end"></div>
    </div>

    <CardContent class="ps-2">
      <div
        class="flex items-start justify-between gap-9 ps-5 border-s-2 border-border last:border-transparent"
        v-for="i in 5"
        :key="i"
      >
        <div class="relative w-full pt-0 pb-6">
          <div
            class="h-3 mb-3 -mt-1 rounded-md w-60 bg-skeleton animate-divulse"
          ></div>
          <div class="h-2 mb-1 rounded-md bg-skeleton animate-pulse"></div>
          <div class="w-2/3 h-2 rounded-md bg-skeleton animate-pulse"></div>
          <div
            class="h-3 w-3 bg-muted rounded-full absolute top-0 start-[-27px] z-10"
          ></div>
        </div>

        <div
          class="w-24 h-3 rounded-md bg-skeleton animate-pulse text-end"
        ></div>
      </div>
    </CardContent>
  </Card>
</template>
