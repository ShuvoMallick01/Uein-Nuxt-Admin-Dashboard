<script setup lang="ts">
// DATA LIST
import { categories } from "~/data/dashboards/course";
</script>

<template>
  <Card class="col-span-full md:col-span-6 2xl:col-span-4">
    <CardTitle class="pb-6">Top Categories</CardTitle>

    <div class="space-y-5">
      <RouterLink
        v-for="cat in categories"
        :key="cat.id"
        to="#"
        class="flex items-center justify-between group"
      >
        <div class="flex items-start gap-3">
          <Avatar shape="square">
            <AvatarImage as="img" :src="cat.image" :alt="cat.title" />
            <AvatarFallback>{{ cat.title[0] }}</AvatarFallback>
          </Avatar>

          <div>
            <p
              class="pb-2 text-sm font-medium leading-none group-hover:underline"
            >
              {{ cat.title }}
            </p>

            <p class="text-xs font-normal text-gray-600">
              {{ cat.size }}
            </p>
          </div>
        </div>

        <Icon
          name="heroicons:chevron-right-20-solid"
          class="w-5 h-5 text-gray-500 rtl:rotate-180"
        />
      </RouterLink>
    </div>
  </Card>
</template>
