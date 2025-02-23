<script setup lang="ts">
import Scrollbar from "simplebar-vue";
// CUSTOM DATA
import { recentActivity } from "~/data/dashboards/analytics";
</script>

<template>
  <Card class="p-0 col-span-full xl:col-span-8">
    <CardTitle class="p-5">Recent Activity</CardTitle>

    <Scrollbar :autoHide="false">
      <Table class="min-w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Retained</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow
            v-for="(item, index) in recentActivity"
            :key="item.id"
            class="border-b border-border"
          >
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar shape="square">
                  <AvatarImage :src="item.image" :alt="item.name" />
                  <AvatarFallback>{{ item.name[0] }}</AvatarFallback>
                </Avatar>

                <div>
                  <RouterLink
                    to="#"
                    class="text-sm font-medium leading-relaxed hover:underline"
                  >
                    {{ item.name }}
                  </RouterLink>

                  <p class="text-xs text-gray-600 mt-0.5">
                    {{ item.email }}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell>{{ item.id }}</TableCell>
            <TableCell>{{ item.time }}</TableCell>
            <TableCell>{{ item.amount }}</TableCell>

            <TableCell class="text-start">
              <Badge :variant="index % 2 ? 'success' : 'info'">
                {{ item.status }}
              </Badge>
            </TableCell>

            <TableCell class="flex justify-center">
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

                    <MenubarItem
                      ><Icon name="mynaui:trash" size="16" />
                      Delete</MenubarItem
                    >
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
</template>
