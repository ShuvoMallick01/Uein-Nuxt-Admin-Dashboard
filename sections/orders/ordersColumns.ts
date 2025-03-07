import { h } from "vue";
import type { ColumnDef, HeaderContext } from "@tanstack/vue-table";
import { Icon } from "#components";
// SHADCN COMPONENTS
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Badge, type BadgeVariants } from "~/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
// CUSTOM COMPONENTS
import DataTableActions from "~/components/dataTable/DataTableActions.vue";
// CUSTOM UTILS METHODS
import { dateFormat } from "~/utils/dateFormat";
import { currency } from "~/utils/currency";
// TYPE
import type { Order } from "~/types/Order";

const sortingHeader = (name: string) => {
  return ({ column }: HeaderContext<Order, unknown>) => {
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
          name: "lucide:arrow-down-up",
          size: 13,
          class:
            "ms-2 opacity-0 group-hover:opacity-100 transition-transform duration-200 ease-in-out",
        }),
      ]
    );
  };
};

const getBadgeVariant = (status: string): BadgeVariants["variant"] => {
  if (status === "Delivered") return "default";
  if (status === "Shipping") return "success";
  if (status === "New") return "info";
  if (status === "Pending") return "warning";
  if (status === "Return") return "destructive";
  else return "secondary";
};

export const columns: ColumnDef<Order>[] = [
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
    accessorKey: "invoiceId",
    header: sortingHeader("Invoice Id"),
    cell: ({ row }) => row.getValue<string>("invoiceId"),
  },
  {
    accessorKey: "customer.name",
    header: sortingHeader("Customer"),
    cell: ({ row }) => {
      const { email, name, image } = row.original.customer;

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
          h("span", { class: "text-xs text-gray-400 mt-0.5" }, email),
        ]),
      ]);
    },
  },
  {
    accessorKey: "createAt",
    header: sortingHeader("Created At"),
    cell: ({ row }) => dateFormat(row.getValue("createAt")),
  },
  {
    accessorKey: "items",
    header: sortingHeader("Items"),
    cell: ({ row }) => {
      const items = row.getValue<Order["items"]>("items");
      return items.length;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: sortingHeader("Payment Method"),
    cell: ({ row }) => String(row.original.payment.paymentMethod),
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true;
      return row.original.payment.paymentMethod
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  },
  {
    accessorKey: "totalAmount",
    header: sortingHeader("Amount"),
    cell: ({ row }) => currency(row.getValue("totalAmount")),
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
        if (confirm("Are you sure you want to delete this Order?")) {
          console.log("Yes!");
        }
      };

      return h("div", null, [
        h(DataTableActions, {
          class: "justify-center",
          // THESE ARE CUSTOM PROPS
          handleDelete,
          viewLink: `/orders/${id}`,
        }),
      ]);
    },
  },
];
