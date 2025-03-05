<script setup lang="ts">
// ==============================================================
interface Props {
  title: string;
  status: boolean;
  time: string;
  id: number;
}
// ==============================================================

const props = defineProps<Props>();

const checked = ref(props.status);
</script>

<template>
  <div
    class="flex items-center justify-between px-5 py-3 hover:bg-hover"
    :class="{ 'bg-hover': checked }"
  >
    <div class="flex items-center gap-4">
      <Checkbox v-model:checked="checked" />

      <div class="space-y-1">
        <p class="text-sm font-medium">
          {{ title }}
        </p>

        <p class="text-xs text-gray-600">
          {{ time }}
        </p>
      </div>
    </div>

    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          class="grid p-0 text-gray-500 rounded-lg w-7 h-7 place-items-center"
        >
          <Icon name="pajamas:ellipsis-v" size="12" />
        </MenubarTrigger>

        <MenubarContent align="end">
          <MenubarItem>
            <Icon name="majesticons:eye-line" size="16" /> View
          </MenubarItem>
          <MenubarItem>
            <Icon name="mynaui:trash" size="16" /> Delete
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
