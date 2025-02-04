<script setup lang="ts">
import Scrollbar from "simplebar-vue";
</script>

<template>
  <Scrollbar>
    <Table class="animate-pulse">
      <TableBody>
        <TableRow
          v-for="i in 10"
          :key="i"
          class="[&>td]:font-normal [&>td]:border-b [&>td]:border-border animate-pulse"
        >
          <TableCell>
            <div class="w-4 h-4 rounded-md bg-skeleton"></div>
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
  </Scrollbar>
</template>
