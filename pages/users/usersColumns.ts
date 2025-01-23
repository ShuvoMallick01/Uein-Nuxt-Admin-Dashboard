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
import { dateFormat } from "@/lib/dateFormat";
import { formatPhoneNumber } from "@/lib/libPhoneNumber";
// TYPE
import type { User } from "@/types/User";

const sortingHeader = (name: string) => {
  return ({ column }: HeaderContext<User, unknown>) => {
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
  if (status === "Active") return "success";
  if (status === "Banned") return "destructive";
  if (status === "Rejected") return "warning";
  else return "info";
};

export const columns: ColumnDef<User>[] = [
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
    header: sortingHeader("Name"),
    cell: ({ row }) => {
      const name = row.getValue<string>("name");
      const image = row.original.image;
      const email = row.original.email;

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
    accessorKey: "phone",
    header: sortingHeader("Phone Number"),
    cell: ({ row }) => formatPhoneNumber(row.getValue<string>("phone")),
  },
  {
    accessorKey: "role",
    header: sortingHeader("Role"),
    cell: ({ row }) => row.getValue<string>("role"),
  },
  {
    accessorKey: "address",
    header: sortingHeader("Location"),
    cell: ({ row }) => row.getValue<string>("address"),
  },
  {
    accessorKey: "createdAt",
    header: sortingHeader("Joining Date"),
    cell: ({ row }) => dateFormat(row.getValue("createdAt")),
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
        if (confirm("Are you sure you want to delete this user?")) {
          console.log("Yes!");
        }
      };

      return h("div", null, [
        h(DataTableActions, {
          class: "justify-center",
          // THESE ARE CUSTOM PROPS
          handleDelete,
          editLink: `/users/${id}`,
          viewLink: "/users/profile",
        }),
      ]);
    },
  },
];
