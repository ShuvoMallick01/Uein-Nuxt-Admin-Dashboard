<script setup lang="ts"></script>

<template>
  <Card class="pt-5 px-0">
    <CardTitle class="px-5 mb-4 text-base">Order Summary</CardTitle>

    <Table>
      <TableBody>
        <TableRow
          class="[&>td]:font-normal [&>td]:border-b [&>td]:border-border [&>td]:last:border-b-0 animate-pulse"
          v-for="i in 3"
          :key="i"
        >
          <TableCell>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-md bg-skeleton shrink-0"></div>

              <div class="w-full space-y-3">
                <div class="w-3/4 h-3 rounded-md bg-skeleton"></div>
                <div class="w-32 h-2 rounded-md bg-skeleton"></div>
              </div>
            </div>
          </TableCell>

          <TableCell>
            <div class="h-3 rounded-full bg-skeleton"></div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table class="mt-3">
      <TableBody>
        <TableRow
          class="[&>td]:font-normal [&>td]:border-b [&>td]:border-border animate-pulse"
          v-for="i in 4"
          :key="i"
        >
          <TableCell>
            <div class="h-2 rounded-full bg-skeleton"></div>
          </TableCell>

          <TableCell>
            <div class="w-12 h-2 rounded-full ms-auto bg-skeleton"></div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>
