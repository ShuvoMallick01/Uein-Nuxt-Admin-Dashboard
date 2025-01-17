<script setup lang="ts">
// CUSTOM COMPONENT
import CourseItem from "./NetworkItem.vue";
// LIST DATA
import { networks } from "~/data/dashboards/career";
</script>

<template>
  <Card class="col-span-full xl:col-span-4">
    <CardTitle class="mb-6">Networks</CardTitle>

    <div class="space-y-4">
      <CourseItem
        v-for="network in networks"
        :id="network.id"
        :key="network.id"
        :title="network.title"
        :amount="network.amount"
        :progress="network.progress"
      />
    </div>
  </Card>
</template>
