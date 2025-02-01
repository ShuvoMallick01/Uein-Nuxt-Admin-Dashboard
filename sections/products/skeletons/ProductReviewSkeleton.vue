<script setup lang="ts"></script>

<template>
  <Card class="mb-5 space-y-2" v-for="n in 5" :key="n">
    <div class="flex items-center gap-3 mb-3 animate-pulse">
      <div class="w-10 h-10 rounded-md bg-skeleton"></div>

      <div class="space-y-3">
        <div class="h-2 rounded-md w-60 bg-skeleton"></div>
        <div class="w-32 h-2 rounded-md bg-skeleton"></div>
      </div>
    </div>

    <div class="inline-flex gap-3 animate-pulse">
      <div
        v-for="i in 5"
        :key="i"
        class="w-4 h-4 rounded-full bg-skeleton"
      ></div>
    </div>

    <div class="h-2 rounded-md w-90 bg-skeleton animate-pulse"></div>

    <div class="flex items-start gap-5 pt-2 animate-pulse">
      <div
        v-for="i in 2"
        :key="i"
        class="w-16 h-2 rounded-md bg-skeleton"
      ></div>
    </div>
  </Card>
</template>
