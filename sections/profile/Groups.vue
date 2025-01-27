<script setup lang="ts">
// DATA LIST
import groups from "~/data/profile/groups";
</script>

<template>
  <Card class="p-6">
    <CardTitle class="mb-4">Groups</CardTitle>

    <div class="space-y-4">
      <div
        class="flex items-center gap-4"
        v-for="group in groups"
        :key="group.id"
      >
        <img
          :src="group.groupImg"
          alt="Group Image"
          class="object-cover rounded-lg w-14 h-14"
        />

        <div class="truncate">
          <p
            class="text-sm font-medium leading-relaxed cursor-pointer hover:underline"
          >
            {{ group.name }}
          </p>
          <p class="text-xs text-gray-400 truncate">
            {{ group.description }}
          </p>

          <p class="mt-2 text-xs font-medium">
            {{ group.followers }}k followers
          </p>
        </div>
      </div>
    </div>

    <!-- <Button variant="link" class="mt-6">See all groups</Button> -->
  </Card>
</template>
