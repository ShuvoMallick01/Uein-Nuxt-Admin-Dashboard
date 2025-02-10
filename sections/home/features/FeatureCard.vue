<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ===========================
interface Props {
  color: string;
  title: string;
  iconName: string;
}
// ===========================

defineProps<Props>();
</script>

<template>
  <Card class="p-5 xl:px-6 xl:py-8">
    <CardContent class="text-center">
      <div
        class="inline-block p-4 mb-5 rounded-lg"
        :class="{
          'bg-info-50 text-info dark:bg-info/10': color === 'info',
          'bg-error-50 text-error dark:bg-error/10': color === 'error',
          'bg-warning-50 text-warning dark:bg-warning/10': color === 'warning',
          'bg-primary-50 text-primary dark:bg-primary/10': color === 'primary',
          'bg-success-50 text-success dark:bg-success/10': color === 'success',
        }"
      >
        <Icon :icon="iconName" height="32" />
      </div>

      <h5 class="text-sm font-medium">{{ title }}</h5>
    </CardContent>
  </Card>
</template>
