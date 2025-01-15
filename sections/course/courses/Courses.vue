<script setup lang="ts">
// CUSTOM COMPONENT
import CourseItem from "./CourseItem.vue";
// LIST DATA
import { runningCourses } from "@/data/dashboards/course";
</script>

<template>
  <Card class="col-span-full md:col-span-6 2xl:col-span-4">
    <CardTitle class="mb-6">Continue Courses</CardTitle>

    <div class="space-y-4">
      <CourseItem
        v-for="course in runningCourses"
        :key="course.id"
        :title="course.title"
        :progress="course.progress"
        :totalModules="course.totalModules"
        :completedModules="course.completedModules"
      />
    </div>
  </Card>
</template>
