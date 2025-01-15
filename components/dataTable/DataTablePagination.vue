<script setup lang="ts" generic="T">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import type { Table } from "@tanstack/vue-table";
// SHADCN COMPONENTS
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const { table } = defineProps<{ table: Table<T> }>();

const firstIndex = computed(() => {
  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;
  return pageIndex * pageSize + 1;
});

const lastIndex = computed(() => {
  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;
  return Math.min(
    (pageIndex + 1) * pageSize,
    table.getFilteredRowModel().rows.length
  );
});
</script>

<template>
  <div class="flex items-center justify-between p-5">
    <div class="flex-1 text-sm text-muted-foreground">
      Showing {{ firstIndex }} to {{ lastIndex }} of
      {{ table.getFilteredRowModel().rows.length }} entries
    </div>

    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm">Rows per page</p>

        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="table.setPageSize(Number($event))"
        >
          <SelectTrigger class="w-16 h-8 shadow-none">
            <SelectValue
              :placeholder="`${table.getState().pagination.pageSize}`"
            />
          </SelectTrigger>

          <SelectContent side="top">
            <SelectItem
              v-for="pageSize in [5, 10, 20]"
              :key="pageSize"
              :value="`${pageSize}`"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="flex items-center space-x-2 rtl:rotate-180">
        <Button
          variant="link"
          class="hidden p-0 w-7 h-7 lg:flex hover:bg-hover"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <span class="sr-only">Go to first page</span>
          <Icon icon="lucide:chevrons-left" height="16" />
        </Button>

        <Button
          variant="link"
          class="p-0 w-7 h-7 hover:bg-hover"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <span class="sr-only">Go to previous page</span>
          <Icon icon="lucide:chevron-left" height="16" />
        </Button>

        <Button
          variant="link"
          class="p-0 w-7 h-7 hover:bg-hover"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <span class="sr-only">Go to next page</span>
          <Icon icon="lucide:chevron-right" height="16" />
        </Button>

        <Button
          variant="link"
          class="hidden p-0 w-7 h-7 lg:flex hover:bg-hover"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <span class="sr-only">Go to last page</span>
          <Icon icon="lucide:chevrons-right" height="16" />
        </Button>
      </div>
    </div>
  </div>
</template>
