<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";

defineProps<{
  viewLink: string;
  editLink?: string;
  handleDelete: () => void;
}>();
</script>

<template>
  <Menubar class="bg-transparent">
    <MenubarMenu>
      <MenubarTrigger
        class="grid text-gray-500 rounded-lg w-7 h-7 place-items-center"
      >
        <Icon icon="pajamas:ellipsis-v" height="12" />
      </MenubarTrigger>

      <MenubarContent align="end">
        <RouterLink :to="viewLink">
          <MenubarItem>
            <Icon
              class="text-gray-400 me-2"
              icon="majesticons:eye-line"
              height="16"
            />
            View
          </MenubarItem>
        </RouterLink>

        <RouterLink v-if="editLink" :to="editLink">
          <MenubarItem>
            <Icon class="text-gray-400 me-2" icon="tabler:edit" height="16" />
            Edit
          </MenubarItem>
        </RouterLink>

        <MenubarItem
          class="text-error hover:!text-error"
          @click="handleDelete()"
        >
          <Icon icon="mynaui:trash" height="16" class="me-2" /> Delete
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
