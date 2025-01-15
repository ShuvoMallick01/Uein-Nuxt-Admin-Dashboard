<script setup lang="ts"></script>

<template>
  <Card class="xl:py-4 col-span-full xl:col-span-6">
    <div
      class="flex flex-col-reverse items-center justify-between gap-6 xs:gap-2 xl:gap-5 2xl:gap-10 xs:flex-row"
    >
      <div class="text-center xs:text-left xl:text-balance rtl:text-right">
        <h6 class="mb-1 font-semibold">Welcome back, Will Jacks!</h6>
        <p class="text-sm text-gray-600">
          If you are going to use a passage of Lorem Ipsum, you need to be sure.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <Button class="mt-4">Go Now</Button>
      </div>

      <img
        class="w-2/5 xs:w-36"
        src="/images/illustration/read-book.png"
        alt="Read Book Illustration"
      />
    </div>
  </Card>
</template>
