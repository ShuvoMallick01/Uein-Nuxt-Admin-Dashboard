<script setup lang="ts">
import PostItem from "./PostItem.vue";
// DATA LIST
import posts from "@/data/profile/posts";
</script>

<template>
  <PostItem v-for="post in posts" :key="post.id" :post="post" />

  <div class="pt-4 text-center">
    <Button>Load More</Button>
  </div>
</template>
