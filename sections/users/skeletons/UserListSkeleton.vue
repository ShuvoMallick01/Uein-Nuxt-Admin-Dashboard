<script setup lang="ts"></script>

<template>
  <div class="overflow-x-auto">
    <Table class="animate-pulse">
      <TableBody>
        <TableRow v-for="i in 6" :key="i" class="border-b border-border">
          <TableCell>
            <div class="w-4 h-4 rounded-md bg-skeleton"></div>
          </TableCell>

          <TableCell>
            <div class="flex items-center gap-2">
              <div class="flex-shrink-0 w-10 h-10 rounded-md bg-skeleton"></div>
              <div class="w-full">
                <p class="w-40 h-2 mb-1 rounded-full bg-skeleton"></p>
                <p class="w-10 h-2 rounded-full bg-skeleton"></p>
              </div>
            </div>
          </TableCell>

          <TableCell
            ><div class="w-40 h-2 rounded-full bg-skeleton"></div
          ></TableCell>
          <TableCell
            ><div class="w-40 h-2 rounded-full bg-skeleton"></div
          ></TableCell>
          <TableCell
            ><div class="w-40 h-2 rounded-full bg-skeleton"></div
          ></TableCell>
          <TableCell
            ><div class="w-40 h-2 rounded-full bg-skeleton"></div
          ></TableCell>
          <TableCell
            ><div class="w-40 h-2 rounded-full bg-skeleton"></div
          ></TableCell>
          <TableCell>
            <div class="mx-auto rounded-md w-7 h-7 bg-skeleton"></div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
