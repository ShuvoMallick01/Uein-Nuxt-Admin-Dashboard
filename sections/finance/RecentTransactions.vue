<script setup lang="ts">
// CUSTOM UTILS METHOD
import { currency } from "~/utils/currency";
// CUSTOM DATA
import { recentTransactions } from "~/data/dashboards/finance";
</script>

<template>
  <Card class="p-0 col-span-full xl:col-span-8 overflow-x-auto">
    <CardTitle class="p-5">Recent Transactions</CardTitle>

    <Table class="min-w-[800px]">
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="item in recentTransactions"
          :key="item.id"
          class="border-b border-border"
        >
          <TableCell>
            <div class="flex items-center gap-3 truncate">
              <Avatar shape="square">
                <AvatarImage :src="item.user.image" :alt="item.user.name" />
                <AvatarFallback>{{ item.user.name[0] }}</AvatarFallback>
              </Avatar>

              <div>
                <RouterLink
                  to="#"
                  class="text-sm font-medium leading-relaxed hover:underline"
                >
                  {{ item.user.name }}
                </RouterLink>

                <p class="text-xs text-gray-600 mt-0.5">
                  {{ item.user.email }}
                </p>
              </div>
            </div>
          </TableCell>

          <TableCell>{{ item.description }}</TableCell>
          <TableCell>{{ currency(item.amount) }}</TableCell>
          <TableCell>{{ item.createdAt }}</TableCell>
          <TableCell>
            <Badge
              :variant="item.status === 'Credit' ? 'success' : 'destructive'"
            >
              {{ item.status }}
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>
