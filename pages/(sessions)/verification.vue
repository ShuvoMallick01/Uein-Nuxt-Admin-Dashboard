<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="relative grid min-h-screen p-4 place-items-center">
    <Card class="relative z-10 grid max-w-screen-lg grid-cols-12 gap-6 p-5">
      <div class="col-span-full lg:col-span-6">
        <div
          class="flex h-64 overflow-hidden rounded-xl lg:h-[25rem] lg:rounded-tr-none lg:rounded-br-none"
        >
          <img
            src="/images/covers/cover-3.jpg"
            alt="cover-image"
            class="object-cover w-full"
          />
        </div>
      </div>

      <div
        class="self-center xs:px-8 col-span-full lg:col-span-6 sm:px-16 lg:px-12 lg:py-6"
      >
        <img
          src="/images/illustration/verification.svg"
          class="w-20 mb-4"
          alt="User Verification"
        />

        <h5 class="mb-1 font-semibold">Confirmation required 👋</h5>
        <p class="text-sm text-gray-600">
          A confirmation mail with instructions has been sent to your email
          address. Follow those instructions to confirm your email address and
          activate your account.
        </p>

        <div class="flex flex-wrap items-center gap-1 mt-8">
          <p class="text-sm font-medium">Did you not receive an email?</p>
          <Button variant="link"> Please try again </Button>
        </div>
      </div>
    </Card>

    <!-- BACKGROUND SHAPE -->
    <div
      class="absolute inset-0 pointer-events-none h-3/6 bg-primary-50 dark:bg-primary/5"
    ></div>
  </div>
</template>
