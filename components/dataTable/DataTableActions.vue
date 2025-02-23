<script setup lang="ts">
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
        <Icon name="pajamas:ellipsis-v" size="12" />
      </MenubarTrigger>

      <MenubarContent align="end">
        <RouterLink :to="viewLink">
          <MenubarItem>
            <Icon
              class="text-gray-400 me-2"
              name="majesticons:eye-line"
              size="16"
            />
            View
          </MenubarItem>
        </RouterLink>

        <RouterLink v-if="editLink" :to="editLink">
          <MenubarItem>
            <Icon class="text-gray-400 me-2" name="tabler:edit" size="16" />
            Edit
          </MenubarItem>
        </RouterLink>

        <MenubarItem
          class="text-error hover:!text-error"
          @click="handleDelete()"
        >
          <Icon name="mynaui:trash" size="16" class="me-2" /> Delete
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
