<script setup lang="ts">
// CUSTOM COMPONENT
import DownloadItem from "./DownloadItem.vue";
// DATA LIST
import { downloads } from "@/data/dashboards/learning-management";
</script>

<template>
  <Card class="p-5 col-span-full 2xl:col-span-4">
    <CardTitle class="pb-7">Your Downloads</CardTitle>

    <div class="space-y-5">
      <DownloadItem
        :id="data.id"
        :key="data.id"
        :size="data.size"
        :title="data.title"
        v-for="data in downloads"
      />
    </div>
  </Card>
</template>
