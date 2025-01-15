<script setup lang="ts"></script>

<template>
  <Card class="col-span-full">
    <CardContent
      class="flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="text-center md:text-start">
        <h5 class="mb-2 font-semibold">Buy & Get 20% Off</h5>
        <p class="mb-4 text-base text-gray-600">
          We design theme to make everything better.
        </p>

        <Button>Go Now</Button>
      </div>

      <div class="w-[210px] hidden md:block">
        <img
          alt="footer illustration"
          src="/images/illustration/Illustration-2.svg"
          class="w-full"
        />
      </div>
    </CardContent>
  </Card>
</template>
