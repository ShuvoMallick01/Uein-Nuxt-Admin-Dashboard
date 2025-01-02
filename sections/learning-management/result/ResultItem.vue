<script setup lang="ts">
// ==============================================================
interface Props {
  title: string;
  date: string;
  value: number;
}
// ==============================================================

const progress = ref(0);
const props = defineProps<Props>();

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = props.value), 300);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-6">
    <div class="min-w-20">
      <p class="text-sm font-medium">
        {{ title }}
      </p>

      <p v-if="date" class="font-medium text-[11px] text-muted">
        {{ date }}
      </p>
    </div>

    <div class="flex-grow">
      <Progress :model-value="progress" class="w-full h-2" />
    </div>

    <p class="text-[12px] font-semibold min-w-10 text-right">{{ value }}%</p>
  </div>
</template>
