<script setup lang="ts">
// SHADCN COMPONENT
import { Badge, type BadgeVariants } from "~/components/ui/badge";
// DATA LIST
import { widgets } from "~/data/dashboards/finance";

const getVariant = (color: string): BadgeVariants["variant"] => {
  if (color === "info") return "info";
  if (color === "success") return "success";
  if (color === "error") return "destructive";
  return "default";
};
</script>

<template>
  <div class="grid grid-cols-4 col-span-full gap-7">
    <Card
      class="col-span-full sm:col-span-2 xl:col-span-1"
      v-for="item in widgets"
    >
      <div class="flex items-start justify-between">
        <div>
          <h6 class="mb-2 font-semibold leading-none">{{ item.amount }}</h6>
          <p class="text-sm text-gray-600 truncate">
            {{ item.title }}
          </p>

          <Badge class="mt-3 rounded-md" :variant="getVariant(item.color)">
            {{ item.percent }}%
          </Badge>
        </div>

        <div
          class="grid w-12 h-12 rounded-lg place-items-center"
          :class="{
            'bg-primary-50 text-primary dark:bg-primary/10':
              item.color === 'primary',
            'bg-success-50 text-success dark:bg-success/10':
              item.color === 'success',
            'bg-error-50 text-error dark:bg-error/10': item.color === 'error',
            'bg-info-50 text-info dark:bg-info/10': item.color === 'info',
          }"
        >
          <Icon :name="item.icon" size="25" />
        </div>
      </div>
    </Card>
  </div>
</template>
