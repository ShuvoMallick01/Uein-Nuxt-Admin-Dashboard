<script setup lang="ts">
import { useRouter } from "vue-router";
import { useDark } from "@vueuse/core";

// ===========================
interface Props {
  image: string;
  title: string;
  route: string;
  description: string;
  isDark?: boolean;
}
// ===========================

const props = defineProps<Props>();

const router = useRouter();
const isDark = useDark();

const handleClickDemo = () => {
  router.push(props.route);
  if (props.isDark) isDark.value = true;
  else isDark.value = false;
};
</script>

<template>
  <Card class="p-0">
    <CardContent class="text-center">
      <div
        class="relative rounded-t-xl cursor-pointer group overflow-hidden p-1.5"
      >
        <img :src="image" alt="Demo Main " class="rounded-lg" />

        <div
          class="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/15 group-hover:opacity-100 dark:bg-black/25"
        >
          <Button @click="handleClickDemo" size="sm">Live Preview</Button>
        </div>
      </div>

      <div class="py-4">
        <p class="text-sm font-semibold">{{ title }}</p>
        <p class="text-xs text-muted">{{ description }}</p>
      </div>
    </CardContent>
  </Card>
</template>
