<script setup lang="ts">
// DATA LIST
import { notifications } from "~/data/notifications";
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Icon
        size="20"
        name="solar:chat-dots-broken"
        class="text-gray-500 cursor-pointer hover:text-primary"
      />
    </PopoverTrigger>

    <PopoverContent class="w-[350px] p-0 py-3 mt-2">
      <div
        v-if="notifications.length === 0"
        class="flex flex-col items-center gap-2 px-3 py-10"
      >
        <p class="text-sm">No new Messages</p>
      </div>

      <div v-else>
        <div
          class="flex items-center gap-2 px-4 pt-1 pb-4 border-b border-border"
        >
          <div
            class="grid rounded-lg w-7 h-7 text-primary place-items-center bg-primary-50 dark:bg-primary/10"
          >
            <Icon size="14" name="solar:chat-dots-broken" />
          </div>

          <p class="text-base font-medium">Messages</p>
        </div>

        <div
          :key="item.id"
          v-for="item in notifications"
          class="px-3 border-b cursor-pointer border-b-border hover:bg-hover"
          :class="{ 'bg-hover': !item.isRead }"
        >
          <div class="flex items-center gap-3 py-4 group">
            <Avatar shape="square">
              <AvatarImage :src="item.image" :alt="item.userName" />
              <AvatarFallback>{{ item.userName[0] }}</AvatarFallback>
            </Avatar>

            <div class="flex-grow overflow-hidden">
              <div class="flex items-start justify-between">
                <p class="text-sm font-medium text-nowrap">
                  {{ item.userName }}
                </p>

                <p class="pt-1 text-xs text-gray-400 truncate">5 min ago</p>
              </div>

              <div class="flex items-end justify-between gap-1">
                <p class="pt-1.5 text-xs text-gray-400 truncate max-w-40">
                  {{ item.message }}
                </p>

                <span
                  class="grid w-4 h-4 text-[10px] transition-all rounded-full text-primary place-items-center bg-primary-100 dark:bg-primary/20"
                >
                  8
                </span>
              </div>
            </div>
          </div>
        </div>

        <RouterLink
          to="/"
          class="block px-3 pt-3 pb-1 text-sm font-medium text-center transition-all text-primary-500 hover:underline"
        >
          View All Messages
        </RouterLink>
      </div>
    </PopoverContent>
  </Popover>
</template>
