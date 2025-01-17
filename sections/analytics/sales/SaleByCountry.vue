<script setup lang="ts">
import { ref, watchEffect } from "vue";

// ==============================================================
interface Props {
  id: number;
  name: string;
  flag: string;
  users: number;
  progress: number;
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
    <div class="flex items-center justify-between gap-10">
      <div class="flex items-center gap-3">
        <Avatar shape="square" class="w-12 h-9 shrink-0">
          <AvatarImage :src="flag" :alt="name" />
          <AvatarFallback>{{ name[0] }}</AvatarFallback>
        </Avatar>

        <div>
          <p class="text-sm font-medium truncate">{{ name }}</p>
          <p class="text-xs mt-0.5 leading-relaxed text-gray-600">
            {{ users }} Users
          </p>
        </div>
      </div>

      <div class="flex items-center flex-grow gap-4 mt-2 shrink-0">
        <Progress :model-value="progressValue" class="w-full h-[6px]" />
        <p class="text-xs font-semibold text-primary">{{ progress }}%</p>
      </div>
    </div>
  </div>
</template>
