import { h } from "vue";
import type { ColumnDef, HeaderContext } from "@tanstack/vue-table";
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Badge, type BadgeVariants } from "~/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import DataTableActions from "~/components/dataTable/DataTableActions.vue";

// CUSTOM UTILS METHODS
import { dateFormat } from "~/utils/dateFormat";

// TYPE
import type { Product } from "~/types/Product";
import { currency } from "~/utils/currency";
import { Progress } from "~/components/ui/progress";

const sortingHeader = (name: string) => {
  return ({ column }: HeaderContext<Product, unknown>) => {
    return h(
      Button,
      {
        variant: "link",
        class: "text-muted !no-underline group",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      },
      () => [
        name,
        h(Icon, {
          icon: "lucide:arrow-down-up",
          height: 13,
          class:
            "ms-2 opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out",
        }),
      ]
    );
  };
};

const getBadgeVariant = (status: string): BadgeVariants["variant"] => {
  if (status === "Published") return "success";
  else return "warning";
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => {
      return h(Checkbox, {
        ariaLabel: "Select all",
        class: "translate-y-0.5",
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() ? "indeterminate" : false),
        "onUpdate:checked": (value) => table.toggleAllPageRowsSelected(!!value),
      });
    },
    cell: ({ row }) => {
      return h(Checkbox, {
        ariaLabel: "Select row",
        checked: row.getIsSelected(),
        "onUpdate:checked": (value) => row.toggleSelected(!!value),
      });
    },
  },
  {
    accessorKey: "title",
    header: sortingHeader("Product"),
    cell: ({ row }) => {
      const name = row.getValue<string>("title");
      const image = row.original.featureImage;
      const category = row.original.category;

      return h("div", { class: "flex items-center gap-3" }, [
        h(Avatar, { shape: "square" }, () => [
          h(AvatarImage, { src: image, alt: name }),
          h(AvatarFallback, null, () => name[0].toUpperCase()),
        ]),
        h("div", null, [
          h(
            "p",
            { class: "text-sm font-medium leading-relaxed hover:underline" },
            name
          ),
          h("span", { class: "text-xs text-gray-400 mt-0.5" }, category),
        ]),
      ]);
    },
  },
  {
    accessorKey: "createdAt",
    header: sortingHeader("Create At"),
    cell: ({ row }) => dateFormat(row.getValue("createdAt")),
  },
  {
    accessorKey: "stock",
    header: sortingHeader("Stock"),
    cell: ({ row }) => {
      const stock = row.original.stock;

      return h("div", null, [
        h(Progress, {
          class: "h-[5px] w-4/5",
          modelValue: stock,
          color: stock > 0 ? (stock > 10 ? "success" : "warning") : "error",
        }),
        h(
          "p",
          { class: "text-xs text-gray-400 mt-2" },
          row.getValue<number>("stock") + " in stock"
        ),
      ]);
    },
    filterFn: (row, _, value) => {
      return value === "1" ? row.original.stock > 0 : row.original.stock === 0;
    },
  },
  {
    accessorKey: "price",
    header: sortingHeader("Price"),
    cell: ({ row }) => currency(row.getValue<number>("price")),
  },
  {
    accessorKey: "status",
    header: sortingHeader("Status"),
    cell: ({ row }) => {
      const status = row.getValue<string>("status");
      return h(Badge, { variant: getBadgeVariant(status) }, () => status);
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;

      const handleDelete = () => {
        if (confirm("Are you sure you want to delete this product?")) {
          console.log("Yes!");
        }
      };

      return h("div", null, [
        h(DataTableActions, {
          class: "justify-center",
          // THESE ARE CUSTOM PROPS
          handleDelete,
          editLink: `/products/${id}`,
          viewLink: `/products/${id}/overview`,
        }),
      ]);
    },
  },
];
