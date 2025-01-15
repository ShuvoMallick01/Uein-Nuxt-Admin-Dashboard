import { computed, ref } from "vue";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/vue-table";
import {
  useVueTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/vue-table";
// CUSTOM UTILS METHOD
import { valueUpdater } from "@/lib/utils";

// ==============================================================
interface Options<T> {
  data: T[];
  columns: ColumnDef<T>[];
}
// ==============================================================

export default function useTable<T>({ data, columns }: Options<T>) {
  const globalFilter = ref("");
  const rowSelection = ref({});
  const sorting = ref<SortingState>([]);
  const columnFilters = ref<ColumnFiltersState>([]);

  const table = useVueTable({
    get data() {
      return data;
    },
    get columns() {
      return columns;
    },
    state: {
      get sorting() {
        return sorting.value;
      },
      get columnFilters() {
        return columnFilters.value;
      },
      get globalFilter() {
        return globalFilter.value;
      },
      get rowSelection() {
        return rowSelection.value;
      },
    },
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
    onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: (updaterOrValue) =>
      valueUpdater(updaterOrValue, columnFilters),
    onGlobalFilterChange: (updaterOrValue) =>
      valueUpdater(updaterOrValue, globalFilter),
    onRowSelectionChange: (updaterOrValue) =>
      valueUpdater(updaterOrValue, rowSelection),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleResetFilters = () => {
    table.resetGlobalFilter();
    table.resetColumnFilters();
  };

  const isFiltered = computed(() => {
    return (
      table.getState().columnFilters.length > 0 || table.getState().globalFilter
    );
  });

  return {
    table,
    isFiltered,
    globalFilter,
    handleResetFilters,
  };
}
