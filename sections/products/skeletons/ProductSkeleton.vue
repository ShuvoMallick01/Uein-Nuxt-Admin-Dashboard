<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <div class="col-span-full 2xl:col-span-4 xl:col-span-5">
      <Card class="sticky top-24">
        <div
          class="rounded-lg col-span-full min-h-[400px] bg-skeleton animate-pulse"
        ></div>

        <div class="flex justify-center gap-3 mt-3">
          <div
            :key="image"
            v-for="image in 5"
            class="transition-all duration-300 border border-transparent rounded-lg opacity-50 cursor-pointer animate-pulse size-16 bg-skeleton"
          ></div>
        </div>

        <div class="flex justify-between gap-5 pt-8">
          <div
            v-for="i in 2"
            :key="i"
            class="w-full h-12 rounded-lg bg-skeleton animate-pulse"
          ></div>
        </div>

        <div
          class="flex flex-col items-center justify-center gap-3 pb-2 xxs:gap-8 pt-7 xxs:flex-row"
        >
          <div
            :key="i"
            v-for="i in 3"
            class="w-full h-6 rounded-lg bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </div>

    <div class="col-span-full 2xl:col-span-8 xl:col-span-7">
      <Card class="space-y-6 pa-6">
        <div class="h-3 rounded-md w-28 bg-skeleton animate-pulse"></div>

        <div class="mt-4 space-y-4 animate-pulse">
          <div class="h-3 rounded-md w-80 bg-skeleton"></div>
          <div class="h-3 rounded-md w-60 bg-skeleton"></div>
          <div class="flex items-center gap-5 mt-2 font-medium">
            <div class="w-32 h-3 rounded-md bg-skeleton"></div>
            <div class="w-24 h-3 rounded-md bg-skeleton"></div>
          </div>
        </div>

        <div class="mt-8 space-y-2 animate-pulse" v-for="i in 3" :key="i">
          <div class="w-40 h-3 rounded-md bg-skeleton"></div>
          <div class="h-2 rounded-md w-72 bg-skeleton"></div>
        </div>

        <div class="mt-8 animate-pulse">
          <div class="w-40 h-3 mb-4 rounded-md bg-skeleton"></div>

          <div class="space-y-3">
            <div
              v-for="i in 3"
              :key="i"
              class="h-2 rounded-md bg-skeleton"
            ></div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 mt-10 animate-pulse">
          <div
            v-for="i in 2"
            :key="i"
            class="flex items-center w-full gap-2 p-4 border rounded-lg border-border sm:max-w-64"
          >
            <div class="rounded-md size-10 bg-skeleton"></div>

            <div class="w-full space-y-1">
              <div class="w-20 h-3 rounded-md bg-skeleton"></div>
              <div class="h-2 rounded-md bg-skeleton"></div>
            </div>
          </div>
        </div>

        <div class="mt-8 space-y-3 animate-pulse">
          <div class="w-40 h-3 rounded-md bg-skeleton"></div>
          <div class="h-2 rounded-md bg-skeleton"></div>
          <div class="h-2 rounded-md bg-skeleton"></div>
        </div>

        <div class="mt-8 space-y-3 animate-pulse">
          <div class="w-40 h-3 rounded-md bg-skeleton"></div>

          <Table>
            <TableBody>
              <TableRow
                v-for="i in 3"
                :key="i"
                class="[&_td:last-child]:text-left"
              >
                <TableCell class="py-2 border border-border">
                  <div class="w-40 h-3 rounded-md bg-skeleton"></div>
                </TableCell>

                <TableCell class="py-2 border border-border">
                  <div class="w-40 h-3 rounded-md bg-skeleton"></div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  </div>
</template>
