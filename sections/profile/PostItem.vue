<script setup lang="ts">
import { Icon } from "@iconify/vue";
// TYPES
import type { Post } from "~/types/Post";

defineProps<{ post: Post }>();
</script>

<template>
  <Card class="p-6">
    <div class="flex justify-between mb-6">
      <div class="flex items-center gap-4">
        <Avatar shape="square">
          <AvatarImage :src="post.user.image" :alt="post.user.name" />
          <AvatarFallback>{{ post.user.name }}</AvatarFallback>
        </Avatar>

        <div>
          <p class="text-base font-medium">{{ post.user.name }}</p>
          <p class="text-sm font-normal text-muted">
            {{ post.createdAt }} minutes ago
          </p>
        </div>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            class="grid p-0 text-gray-500 rounded-lg w-7 h-7 place-items-center"
          >
            <Icon icon="pajamas:ellipsis-v" height="13" />
          </MenubarTrigger>

          <MenubarContent align="end" class="">
            <MenubarItem
              class="gap-2 px-4 py-2 font-medium text-card-foreground"
            >
              <Icon icon="lucide:eye" /> Save post
            </MenubarItem>

            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] text-card-foreground font-medium"
            >
              <Icon icon="lucide:eye-off" /> Hide post
            </MenubarItem>

            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] text-card-foreground font-medium"
            >
              <Icon icon="lucide:eye-off" /> Hide all
            </MenubarItem>

            <hr class="my-2 dark:border-border" />

            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] text-card-foreground font-medium"
            >
              <Icon icon="lucide:badge-alert" /> Report post
            </MenubarItem>

            <MenubarItem
              class="gap-2 px-4 py-2 text-[13px] text-card-foreground font-medium"
            >
              <Icon icon="lucide:bell" /> Turn on notifications
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>

    <!-- POST CONTENT & ACTION BUTTONS -->
    <div class="space-y-6">
      <p class="text-base">{{ post.content }}</p>

      <img
        v-if="post.thumbnail"
        :src="post.thumbnail"
        :alt="post.content"
        class="object-cover object-center w-full h-full rounded-xl"
      />

      <div class="flex items-center gap-3 xxs:justify-between">
        <div class="flex items-center gap-3">
          <button
            class="grid w-8 h-8 text-xs transition-all rounded-full text-muted place-items-center bg-primary-50 hover:bg-primary-100 dark:bg-primary/10"
          >
            <Icon icon="mdi:heart-outline" height="16" />
          </button>

          <div class="items-center hidden gap-3 xxs:flex">
            <AvatarGroup
              size="xs"
              :images="[
                '/images/users/12.png',
                '/images/users/15.png',
                '/images/users/13.png',
                '/images/users/14.png',
              ]"
            />
            <p class="text-sm font-normal leading-none truncate text-muted">
              you and {{ post.totalLikes }} more liked this
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="grid w-8 h-8 text-xs transition-all rounded-full text-muted place-items-center bg-primary-50 hover:bg-primary-100 dark:bg-primary/10"
          >
            <Icon icon="ic:outline-chat" height="15" />
          </button>

          <button
            class="grid w-8 h-8 text-xs transition-all rounded-full text-muted place-items-center bg-primary-50 hover:bg-primary-100 dark:bg-primary/10"
          >
            <Icon icon="solar:share-bold" height="15" />
          </button>
        </div>
      </div>
    </div>

    <hr class="my-6 border-border" />

    <!-- COMMENT INPUT BOX -->
    <div class="relative flex items-center">
      <Avatar class="hidden me-3 xxs:inline-flex">
        <AvatarImage :src="post.user.image" :alt="post.user.name" />
        <AvatarFallback>{{ post.user.name }}</AvatarFallback>
      </Avatar>

      <Input
        placeholder="write a comment..."
        class="rounded-lg h-11 min-w-72"
      />

      <div
        class="absolute flex items-center gap-1 text-gray-500 transform -translate-y-1/2 dark:text-gray-300 top-1/2 end-0 me-2"
      >
        <button
          class="grid rounded-full w-7 h-7 place-items-center hover:bg-primary-50 dark:hover:bg-primary/10"
        >
          <Icon height="19" icon="solar:gallery-broken" />
        </button>

        <button
          class="grid rounded-full w-7 h-7 place-items-center hover:bg-primary-50 dark:hover:bg-primary/10"
        >
          <Icon height="19" icon="iconoir:emoji" />
        </button>
      </div>
    </div>
  </Card>
</template>
