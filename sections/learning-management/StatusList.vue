<script setup lang="ts">
// LIST DATA
import { widgets } from "@/data/dashboards/learning-management";
</script>

<template>
  <Card
    :key="widget.id"
    v-for="widget in widgets"
    class="px-5 py-5 xl:px-7 xl:py-7 col-span-full md:col-span-4"
  >
    <CardContent class="flex items-center gap-4 xl:gap-6">
      <div
        class="grid w-12 h-12 rounded-xl shrink-0 place-items-center"
        :class="{
          'bg-warning/10 text-warning': widget.color === 'warning',
          'bg-success/10 text-success': widget.color === 'success',
          'bg-primary/10 text-primary': widget.color === 'primary',
        }"
      >
        <Icon :name="widget.icon" />
      </div>

      <div>
        <p class="mb-1 text-sm font-semibold">{{ widget.title }}</p>
        <h6
          class="text-2xl font-semibold"
          :class="{
            'text-warning': widget.color === 'warning',
            'text-success': widget.color === 'success',
            'text-primary': widget.color === 'primary',
          }"
        >
          {{ widget.value }}
        </h6>
      </div>
    </CardContent>
  </Card>
</template>
