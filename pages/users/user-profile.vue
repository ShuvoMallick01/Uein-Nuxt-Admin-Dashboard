<script setup lang="ts">
// import About from "@/sections/profile/About.vue";
// import Groups from "@/sections/profile/Groups.vue";
// import PostList from "@/sections/profile/PostList.vue";
// import PostCompose from "@/sections/profile/PostCompose.vue";
// import ProfileIntro from "@/sections/profile/ProfileIntro.vue";
</script>

<template>
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
</template>
