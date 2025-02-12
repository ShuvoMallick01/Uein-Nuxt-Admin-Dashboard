<script setup lang="ts"></script>

<template>
  <div>
    <!-- USER PROFILE OVERVIEW -->
    <ProfileIntro />

    <div class="relative grid items-start grid-cols-12 mb-6 gap-7">
      <div
        class="hidden col-span-5 space-y-6 xl:sticky xl:top-24 xl:block 2xl:col-span-4"
      >
        <About />
        <Groups />
      </div>

      <div class="space-y-6 col-span-full 2xl:col-span-8 xl:col-span-7">
        <PostCompose />
        <PostList />
      </div>
    </div>
  </div>
</template>
