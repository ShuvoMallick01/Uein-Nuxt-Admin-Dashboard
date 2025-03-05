<script setup lang="ts">
const tableHeads = ref([
  "Item Name",
  "Quantity",
  "Price",
  "Discount ($)",
  "Total",
  "",
]);
</script>

<template>
  <form class="space-y-8">
    <div class="space-y-5">
      <h5 class="text-sm font-semibold">General Information</h5>
      <div class="mb-8 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
        <TextFieldSkeleton label="Invoice Id" />
        <TextFieldSkeleton label="Due Date" />
        <TextFieldSkeleton label="Status" />
      </div>
    </div>

    <div class="space-y-5">
      <h5 class="text-sm font-semibold">Billing Information</h5>
      <div class="mb-8 space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
        <TextFieldSkeleton label="Customer Name" />
        <TextFieldSkeleton label="Email" />
        <TextFieldSkeleton label="Phone" />
        <TextFieldSkeleton label="Address" />
      </div>
    </div>

    <div class="space-y-6">
      <h5 class="mb-4 text-sm font-semibold">Products Information</h5>

      <div class="overflow-x-auto">
        <Table class="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead
                :key="item"
                class="first:pl-0 last:pr-0"
                v-for="item in tableHeads"
              >
                {{ item }}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="i in 2" :key="i">
              <TableCell v-for="i in 5" :key="i" class="first:pl-1">
                <TextFieldSkeleton />
              </TableCell>

              <TableCell class="w-12">
                <div
                  class="w-20 rounded-md ms-auto h-11 bg-skeleton animate-pulse"
                ></div>
              </TableCell>
            </TableRow>

            <div class="inline-flex gap-4 mt-6 mb-8">
              <div
                class="w-20 rounded-md ms-auto h-11 bg-skeleton animate-pulse"
              ></div>
            </div>
          </TableBody>
        </Table>
      </div>

      <Table class="flex justify-end w-full">
        <TableBody>
          <TableRow v-for="i in 4" :key="i">
            <TableCell class="w-52">
              <div class="h-3 rounded-md w-26 bg-skeleton animate-pulse"></div>
            </TableCell>

            <TableCell class="!text-end">
              <div class="w-20 h-3 rounded-md bg-skeleton animate-pulse"></div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="space-y-5">
      <h5 class="text-sm font-semibold">Payments Details</h5>

      <div
        class="mb-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5"
      >
        <TextFieldSkeleton label="Card Holder Name" />
        <TextFieldSkeleton label="Payment Method" />
        <TextFieldSkeleton label="Card No" />
        <TextFieldSkeleton label="Card CVC" />
      </div>
    </div>

    <div class="flex justify-end">
      <div class="w-32 rounded-md ms-auto h-11 bg-skeleton animate-pulse"></div>
    </div>
  </form>
</template>
