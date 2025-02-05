<script setup lang="ts">
import Scrollbar from "simplebar-vue";
</script>

<template>
  <Card class="p-6 col-span-full 2xl:col-span-8 2xl:col-start-3">
    <CardContent class="space-y-10">
      <div class="flex justify-between">
        <div>
          <img src="/logos/uno.svg" class="w-12 mb-10" alt="Uno" />
          <h5 class="w-20 h-3 mb-3 bg-skeleton animate-pulse"></h5>

          <div class="mb-8 space-y-2">
            <div class="w-40 h-2 rounded-md bg-skeleton animate-pulse"></div>
            <div class="w-40 h-1 rounded-md bg-skeleton animate-pulse"></div>
          </div>

          <div class="h-2 mb-2 rounded-md w-52 bg-skeleton animate-pulse"></div>
          <div class="h-2 rounded-md w-52 bg-skeleton animate-pulse"></div>
        </div>

        <div class="space-y-1 text-end">
          <h3 class="text-2xl font-semibold">Invoice</h3>
          <div
            class="w-20 h-2 rounded-md ms-auto bg-skeleton animate-pulse"
          ></div>
          <div class="pt-6 space-y-3">
            <div
              v-for="i in 4"
              :key="i"
              class="w-40 h-2 rounded-md bg-skeleton animate-pulse"
            ></div>
          </div>
        </div>
      </div>

      <Scrollbar>
        <Table class="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Product</TableHead>
              <TableHead class="text-center">Quantity</TableHead>
              <TableHead class="text-center">Discount</TableHead>
              <TableHead class="text-center">Price</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow
              v-for="i in 4"
              :key="i"
              class="[&>td]:font-normal [&>td]:border-b [&>td]:border-border animate-pulse"
            >
              <TableCell>
                <div class="w-8 h-2 rounded-md bg-skeleton"></div>
              </TableCell>

              <TableCell class="space-y-2">
                <div class="w-full h-2 rounded-md bg-skeleton"></div>
                <div class="w-full h-1 rounded-md bg-skeleton"></div>
              </TableCell>

              <TableCell class="text-center">
                <div class="w-full h-1 rounded-md bg-skeleton"></div>
              </TableCell>

              <TableCell class="text-center">
                <div class="w-full h-1 rounded-md bg-skeleton"></div>
              </TableCell>

              <TableCell class="text-center">
                <div class="w-full h-1 rounded-md bg-skeleton"></div>
              </TableCell>

              <TableCell class="text-end">
                <div class="w-full h-1 rounded-md bg-skeleton"></div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Scrollbar>

      <Table class="flex justify-end w-full">
        <TableBody>
          <TableRow v-for="i in 4" :key="i" class="animate-pulse">
            <TableCell class="py-3">
              <div class="w-20 h-2 rounded-full bg-skeleton"></div>
            </TableCell>
            <TableCell class="py-2 !text-end">
              <div class="h-2 rounded-full w-14 bg-skeleton"></div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div class="space-y-5">
        <h5 class="mb-4 text-sm font-semibold">Payments Details</h5>
        <p
          v-for="i in 4"
          :key="i"
          class="h-2 rounded-md w-60 bg-skeleton animate-pulse"
        ></p>
      </div>

      <div class="flex justify-end gap-2">
        <div class="h-10 rounded-md w-28 bg-skeleton animate-pulse"></div>
        <div class="h-10 rounded-md w-28 bg-skeleton animate-pulse"></div>
      </div>
    </CardContent>
  </Card>
</template>
