import { h } from "vue";
import type { ColumnDef, HeaderContext } from "@tanstack/vue-table";
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge, type BadgeVariants } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// CUSTOM COMPONENTS
import DataTableActions from "~/components/dataTable/DataTableActions.vue";
// CUSTOM UTILS METHODS
import { currency } from "@/lib/currency";
import { dateFormat } from "@/lib/dateFormat";
// TYPE
import type { Invoice } from "@/types/Invoice";

const sortingHeader = (name: string) => {
  return ({ column }: HeaderContext<Invoice, unknown>) => {
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
  if (status === "published") return "success";
  if (status === "pending") return "warning";
};

export const columns: ColumnDef<Invoice>[] = [
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
    accessorKey: "name",
    header: sortingHeader("Customer"),
    cell: ({ row }) => {
      const name = row.original.customer.name;
      const image = row.original.customer.image;
      const id = row.original.id;

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
          h("span", { class: "text-xs text-gray-400 mt-0.5" }, id),
        ]),
      ]);
    },
  },
  {
    accessorKey: "issueDate",
    header: sortingHeader("Issue"),
    cell: ({ row }) => {
      const date = dateFormat(row.getValue<string>("issueDate"), "DD MMM YYYY");
      const time = dateFormat(row.getValue<string>("issueDate"), "h:mm a");
      return [
        h("p", { class: "text-sm" }, date),
        h("p", { class: "text-xs text-muted" }, time),
      ];
    },
  },
  {
    accessorKey: "dueDate",
    header: sortingHeader("Due"),
    cell: ({ row }) => {
      const date = dateFormat(row.getValue<string>("dueDate"), "DD MMM YYYY");
      const time = dateFormat(row.getValue<string>("dueDate"), "h:mm a");
      return [
        h("p", { class: "text-sm" }, date),
        h("p", { class: "text-xs text-muted" }, time),
      ];
    },
  },
  {
    accessorKey: "totalAmount",
    header: sortingHeader("Amount"),
    cell: ({ row }) => currency(row.getValue<number>("totalAmount")),
  },

  {
    accessorKey: "status",
    header: sortingHeader("Status"),
    cell: ({ row }) => {
      const status = row.getValue<string>("status");
      return h(
        Badge,
        { variant: getBadgeVariant(status), class: "capitalize" },
        () => status
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;

      const handleDelete = () => {
        if (confirm("Are you sure you want to delete this user?")) {
          console.log("Yes!");
        }
      };

      return h("div", null, [
        h(DataTableActions, {
          class: "justify-center",
          // THESE ARE CUSTOM PROPS
          handleDelete,
          editLink: `/invoices/${id}`,
          viewLink: `/invoices/overview/${id}`,
        }),
      ]);
    },
  },
];
