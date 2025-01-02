<script setup lang="ts">
// CUSTOM COMPONENT
import ResultItem from "./ResultItem.vue";
// LIST DATA
import { result } from "~/data/dashboards/learning-management";
</script>

<template>
  <Card class="px-5 py-6 col-span-full xl:col-span-4">
    <CardTitle class="mb-5">Result</CardTitle>

    <div class="space-y-4">
      <ResultItem
        v-for="data in result"
        :key="data.id"
        :date="data.date"
        :title="data.title"
        :value="data.value"
      />
    </div>
  </Card>
</template>
