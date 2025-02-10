<script setup lang="ts">
// DATA LIST
import { features } from "./featuresData";
</script>

<template>
  <div class="py-24">
    <div class="container px-4 mx-auto space-y-14">
      <div class="text-center">
        <p class="text-base font-medium truncate text-muted">
          Almost covered everything
        </p>

        <h3 class="pt-3 text-2xl font-bold lg:text-3xl text-balance">
          Key Features & Flexibility Provided
        </h3>
      </div>

      <div
        class="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <FeatureCard
          v-for="(item, index) in features"
          :key="index"
          :title="item.title"
          :iconName="item.icon"
          :color="item.color"
        />
      </div>
    </div>
  </div>
</template>
