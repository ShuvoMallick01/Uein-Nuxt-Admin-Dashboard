<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCDN COMPONENTS
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// DATA LIST
import { notifications } from "@/data/notifications";
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Icon
        height="20"
        icon="solar:bell-bing-linear"
        class="text-gray-500 cursor-pointer hover:text-primary"
      />
    </PopoverTrigger>

    <PopoverContent class="w-[350px] p-0 py-3 mt-2">
      <div
        v-if="notifications.length === 0"
        class="flex flex-col items-center gap-2 px-3 py-10"
      >
        <p class="text-sm">No new notifications</p>
      </div>

      <div v-else>
        <div
          class="flex items-center gap-2 px-4 pt-1 pb-4 border-b border-border"
        >
          <div
            class="grid rounded-lg w-7 h-7 text-primary place-items-center bg-primary-50 dark:bg-primary/10"
          >
            <Icon height="14" icon="solar:bell-bing-linear" />
          </div>

          <p class="text-base font-medium">Notification</p>
        </div>

        <div
          :key="item.id"
          v-for="item in notifications"
          class="px-3 border-b cursor-pointer border-b-border hover:bg-hover"
          :class="{ 'bg-hover': !item.isRead }"
        >
          <div class="flex items-center gap-4 py-4 group">
            <span
              class="w-2 h-2 transition-all rounded-full group-hover:bg-primary"
              :class="{
                'bg-gray-300 dark:bg-gray-100': item.isRead,
                'bg-primary': !item.isRead,
              }"
            >
            </span>

            <Avatar shape="square">
              <AvatarImage :src="item.image" :alt="item.userName" />
              <AvatarFallback>{{ item.userName[0] }}</AvatarFallback>
            </Avatar>

            <div class="flex-grow overflow-hidden">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-nowrap">
                  {{ item.userName }}
                </p>

                <p class="pt-1 text-xs text-gray-400 truncate">5 min ago</p>
              </div>

              <p class="pt-1.5 text-xs text-gray-400 truncate max-w-40">
                {{ item.message }}
              </p>
            </div>
          </div>
        </div>

        <RouterLink
          to="/"
          class="block px-3 pt-3 pb-1 text-sm font-medium text-center transition-all text-primary-500 hover:underline"
        >
          View All Notification
        </RouterLink>
      </div>
    </PopoverContent>
  </Popover>
</template>
