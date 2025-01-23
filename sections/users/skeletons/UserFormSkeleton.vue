<script setup lang="ts"></script>

<template>
  <div class="grid items-start grid-cols-12 gap-7">
    <Card
      class="flex flex-col items-center justify-center min-h-96 col-span-full lg:col-span-4"
    >
      <div
        class="w-32 h-32 rounded-full bg-skeleton animate-pulse outline-border outline-offset-8 outline-dashed outline-1"
      ></div>

      <div class="max-w-56">
        <p class="mt-8 text-xs leading-relaxed text-center text-gray-400">
          Allowed *.jpeg, *.jpg, *.png, <br />
          *.gif max size of 3 Mb
        </p>
      </div>
    </Card>

    <Card
      class="px-6 space-y-4 col-span-full lg:col-span-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-7"
    >
      <TextFieldSkeleton label="User Name" />
      <TextFieldSkeleton label="Email" />
      <TextFieldSkeleton label="Phone Number" />
      <TextFieldSkeleton label="Status" />
      <TextFieldSkeleton label="Role" />
      <TextFieldSkeleton label="Address" />
      <div
        class="h-10 rounded-md col-span-full w-28 bg-skeleton animate-pulse ms-auto"
      ></div>
    </Card>
  </div>
</template>
