<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <Card class="p-6">
    <CardTitle class="mb-4">About Me</CardTitle>

    <div class="space-y-6">
      <p class="text-sm leading-relaxed text-gray-400">
        I work as a nice kitchen assistant, but I have a terrible button phobia.
        brother of Elijah Jay Watkins, who struggles with trust and button
        phobia.
      </p>

      <hr class="border-border" />

      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <Icon icon="tabler:map-pin" height="18" class="text-gray-400" />
          <p class="text-sm">
            Live at <span class="font-medium hover:underline">Australia</span>
          </p>
        </div>

        <div class="flex items-center gap-2">
          <Icon icon="tabler:briefcase" height="18" class="text-gray-400" />
          <p class="text-sm">
            Software Engineer at
            <span class="font-medium hover:underline">Google</span>
          </p>
        </div>

        <div class="flex items-center gap-2">
          <Icon icon="tabler:gift" height="18" class="text-gray-400" />
          <p class="text-sm">
            Studied at
            <span class="font-medium hover:underline">DevOps Academy</span>
          </p>
        </div>
      </div>
    </div>
  </Card>
</template>
