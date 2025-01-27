<script setup lang="ts">
// CUSTOM COMPONENTS
import TaskItem from "./TaskItem.vue";
// LIST DATA
import { upcomingTasks } from "~/data/dashboards/course";
</script>

<template>
  <Card class="p-0 overflow-hidden col-span-full md:col-span-6 2xl:col-span-4">
    <CardTitle class="px-5 pt-5 pb-4">Upcoming Task</CardTitle>

    <TaskItem
      v-for="task in upcomingTasks"
      :key="task.id"
      :id="task.id"
      :time="task.time"
      :title="task.title"
      :status="task.status"
    />
  </Card>
</template>
