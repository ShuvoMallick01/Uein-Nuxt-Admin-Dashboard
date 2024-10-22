<script setup lang="ts">
defineProps<{ id: number; title: string; size: string }>();

const downloadProgress = ref(0);
const isDownloading = ref(false);

let timer: NodeJS.Timeout | undefined = undefined;

const startDownload = () => {
  timer = setInterval(() => {
    downloadProgress.value += 10;
  }, 1000);
};

const handleCancel = () => {
  clearInterval(timer);
  timer = undefined;

  isDownloading.value = false;
  downloadProgress.value = 0;
};

const handleDownload = () => {
  isDownloading.value = true;
  startDownload();
};

watch(downloadProgress, (newValue) => {
  if (newValue > 100) handleCancel();
});
</script>

<template>
  <ClientOnly>
    <div class="flex items-center justify-between">
      <div class="flex items-start gap-2">
        <Icon name="FileText" :size="38" class="text-muted" />

        <div>
          <p class="text-[13px] font-medium">{{ title }}</p>
          <Progress
            v-if="isDownloading"
            :model-value="downloadProgress"
            class="h-[6px] mt-2"
          ></Progress>
          <span class="font-medium text-[12px] text-muted block" v-else>{{
            size
          }}</span>
        </div>
      </div>

      <div class="flex flex-col items-end justify-between" v-if="isDownloading">
        <button @click="handleCancel">
          <Button
            variant="link"
            color="error"
            class="text-[12px] font-medium hover:no-underline"
          >
            Cancel
          </Button>
        </button>

        <p class="mt-2 text-xs font-semibold text-primary">
          {{ downloadProgress }}%
        </p>
      </div>

      <button v-else @click="handleDownload">
        <Button variant="link" class="text-xs font-semibold hover:no-underline"
          >Download</Button
        >
      </button>
    </div>
  </ClientOnly>
</template>
