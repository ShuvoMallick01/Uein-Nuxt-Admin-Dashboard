<script setup lang="ts">
// LIST DATA
import { upcomingTasks } from "@/data/dashboards/learning-management";
</script>

<template>
  <Card class="px-5 py-6 col-span-full xl:col-span-4">
    <CardTitle class="mb-3">
      <div class="flex items-center justify-between">
        <p>Upcoming Task</p>
        <Button variant="link" class="p-0">View all Tasks</Button>
      </div>
    </CardTitle>

    <div
      v-for="task in upcomingTasks"
      :key="task.id"
      class="flex items-center justify-between py-3 last:!pb-0"
    >
      <div class="flex items-stretch gap-3">
        <div
          class="w-1 min-h-full rounded-full bg-primary"
          :class="{ 'bg-warning': task.status }"
        ></div>

        <div>
          <p class="mb-1 text-sm font-medium">
            {{ task.title }}
          </p>

          <p class="font-medium text-[12px] text-muted">
            {{ task.time }}
          </p>
        </div>
      </div>

      <Menubar class="p-0 bg-transparent">
        <MenubarMenu>
          <MenubarTrigger
            class="w-6 h-6 p-1 rounded-sm bg-slate-100 dark:bg-slate-700"
          >
            <Icon name="Ellipsis" :size="18" />
          </MenubarTrigger>

          <MenubarContent align="end">
            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] font-medium hover:!bg-hover"
            >
              <Icon name="Eye" :size="18" class="text-muted" /> View
            </MenubarItem>

            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] font-medium hover:!bg-hover"
            >
              <Icon name="Trash" :size="18" class="text-muted" /> Delete
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </Card>
</template>
