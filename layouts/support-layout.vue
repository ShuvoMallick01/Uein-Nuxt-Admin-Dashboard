<script setup lang="ts">
// CUSTOM COMPONENT
import DefaultLayout from "~/layouts/default/index.vue";
</script>

<template>
  <DefaultLayout>
    <!-- TOP NAVIGATION -->
    <Card>
      <CardContent class="p-5 lg:px-10 xl:px-24 sm:py-5 xl:pt-10">
        <div class="flex items-center justify-between gap-8 mb-10">
          <div
            class="flex flex-col items-center w-full space-y-5 sm:items-start sm:max-w-md"
          >
            <div class="space-y-2 text-center sm:text-start">
              <h3 class="max-w-lg text-2xl font-semibold leading-none">
                How Can We Help You?
              </h3>
              <p class="max-w-lg text-sm text-muted">
                By Uno to save tons and more to time money projects are listed
                and outstanding. By Uno to save tons and more to time money
                projects are listed and outstanding.
              </p>
            </div>

            <SearchInput placeholder="Ask you questions" />
          </div>

          <img
            alt="Illustration"
            src="/images/illustration/support-1.svg"
            class="hidden w-60 md:w-72 sm:block"
          />
        </div>

        <!-- TOP NAVIGATION -->
        <TopNavigation />
      </CardContent>
    </Card>

    <!-- CONTENT -->
    <RouterView />
  </DefaultLayout>
</template>
