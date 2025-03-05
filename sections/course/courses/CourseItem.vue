<script setup lang="ts">
// ==============================================================
interface Props {
  title: string;
  progress: number;
  totalModules: number;
  completedModules: number;
}
// ==============================================================

const progressValue = ref(0);
const props = defineProps<Props>();

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progressValue.value = props.progress), 300);
  cleanupFn(() => clearTimeout(timer));
});
</script>

<template>
  <div class="space-y-3">
    <div>
      <p class="text-sm font-medium truncate">{{ title }}</p>
      <p class="text-xs leading-relaxed text-gray-600">
        Modules: {{ completedModules }}/{{ totalModules }}
      </p>

      <div class="flex items-center gap-4 mt-2">
        <Progress
          :model-value="progressValue"
          class="w-full h-[6px] rtl:rotate-180"
        />
        <p class="text-xs font-semibold text-primary">{{ progress }}%</p>
      </div>
    </div>
  </div>
</template>
