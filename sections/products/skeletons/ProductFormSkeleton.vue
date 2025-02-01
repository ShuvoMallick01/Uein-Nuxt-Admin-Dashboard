<script setup lang="ts"></script>

<template>
  <Card class="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <TextFieldSkeleton label="Title" />
    </div>

    <TextFieldSkeleton label="Code" />
    <TextFieldSkeleton label="Category" />
    <TextFieldSkeleton label="Price" />
    <TextFieldSkeleton label="Stock" />
    <TextFieldSkeleton label="Colors" />
    <TextFieldSkeleton label="Sizes" />

    <div class="col-span-full">
      <Label class="inline-block mb-3 text-sm font-medium">Images</Label>
      <div class="w-full h-40 rounded-md bg-skeleton animate-pulse"></div>
    </div>

    <div class="col-span-full">
      <Label class="inline-block mb-3 text-sm font-medium">Description</Label>
      <div class="w-full h-32 rounded-md bg-skeleton animate-pulse"></div>
    </div>

    <div class="col-span-full">
      <h4 class="mb-3 text-sm font-medium">Features</h4>

      <div class="space-y-5">
        <div
          v-for="i in 3"
          :key="i"
          class="flex items-center justify-between gap-8"
        >
          <div class="flex-1">
            <TextFieldSkeleton />
          </div>

          <div class="flex-1">
            <TextFieldSkeleton />
          </div>

          <div class="px-2">
            <div class="w-10 h-10 rounded-md bg-skeleton animate-pulse"></div>
          </div>
        </div>

        <div class="w-20 h-10 rounded-md bg-skeleton animate-pulse"></div>
      </div>
    </div>

    <div class="flex flex-wrap justify-between gap-6 col-span-full">
      <div class="w-20 h-10 rounded-md bg-skeleton animate-pulse"></div>
      <div class="w-32 h-10 rounded-md bg-skeleton animate-pulse"></div>
    </div>
  </Card>
</template>
