<script setup lang="ts" generic="T">
import { FlexRender, type ColumnDef } from "@tanstack/vue-table";
import { Icon } from "@iconify/vue";
import Scrollbar from "simplebar-vue";
// SHADCN COMPONENTS
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// CUSTOM COMPONENTS
import DataTablePagination from "./DataTablePagination.vue";
// CUSTOM COMPOSABLE
import useTable from "./useTable";

const emit = defineEmits<{ (e: "delete", rows: T[]): void }>();

const props = defineProps<{
  data: T[];
  columns: ColumnDef<T>[];
}>();

const { table, globalFilter, isFiltered, handleResetFilters } = useTable<T>({
  data: props.data,
  columns: props.columns,
});

// FOR DELETING SELECTED ROWS
const handleDeleteRows = () => {
  const selectedRows = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);
  emit("delete", selectedRows);
};
</script>

<template>
  <!-- TABLE TOOLBAR SLOT HERE -->
  <slot
    name="toolbar"
    :isFiltered="isFiltered"
    :globalFilter="globalFilter"
    :column="table.getColumn"
    :setGlobalFilter="table.setGlobalFilter"
    :handleResetFilters="handleResetFilters"
  ></slot>

  <!-- ROW SELECTION ALERT AREA WHEN ROWS ARE SELECTED -->
  <div
    class="flex items-center justify-between px-5 py-2 bg-active"
    v-if="table.getSelectedRowModel().rows.length > 0"
  >
    <p class="font-medium">
      {{ table.getSelectedRowModel().rows.length }} selected
    </p>

    <button
      @click="handleDeleteRows()"
      class="grid w-10 h-10 transition-all duration-150 rounded-full place-items-center hover:text-primary"
    >
      <Icon icon="lucide:trash-2" height="18" />
    </button>
  </div>

  <!-- DATA TABLE SECTION -->
  <Scrollbar :auto-hide="false">
    <Table class="min-w-[1200px]">
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead
            class="py-5"
            v-for="header in headerGroup.headers"
            :key="header.id"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            :key="row.id"
            v-for="row in table.getRowModel().rows"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
            class="border-b border-border"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>

        <!-- NOT FOUND MESSAGE -->
        <template v-else>
          <TableRow>
            <TableCell colspan="8" class="py-24 m-4 text-center bg-gray-50">
              <p class="mb-4 text-2xl">
                No data found for '{{ table.getState().globalFilter }}'
              </p>
              <Button variant="outline" @click="table.resetGlobalFilter">
                Clear your search and try again
              </Button>
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </Scrollbar>

  <hr class="border-border" />

  <!-- DATA TABLE PAGINATION -->
  <DataTablePagination :table="table" />
</template>
