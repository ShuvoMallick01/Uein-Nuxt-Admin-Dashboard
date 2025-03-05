<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
  url?: string;
  isConnected?: boolean;
}>();
</script>

<template>
  <div
    class="flex items-center justify-between px-4 py-3 border rounded-lg border-border"
  >
    <div class="flex items-center gap-3">
      <Icon :name="icon" size="26" />

      <div>
        <p class="text-sm font-semibold">{{ name }}</p>
        <p class="text-xs text-muted">
          {{ isConnected ? url : "Not connected" }}
        </p>
      </div>
    </div>

    <Button size="sm" variant="outline" color="success" v-if="isConnected">
      <Icon name="ic:round-check" size="18" />
      <span class="hidden ms-2 sm:inline">Connected</span>
    </Button>

    <Button size="sm" variant="outline" v-else>
      <Icon name="iconoir:user-plus" size="18" />
      <span class="hidden ms-2 sm:inline">Connect</span>
    </Button>
  </div>
</template>
