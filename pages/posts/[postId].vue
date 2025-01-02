<script setup lang="ts">
const route = useRoute();
let postId = ref(route.params.postId ? route.params.postId : 1);

useHead({
  title: "Post Overview",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${postId.value} - ${titleChunk}` : "Post";
  },
});

const { data } = await useAsyncData("post", () =>
  $fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
);
console.log(data.value);
</script>

<template>
  <Card v-if="data" class="mt-8 p-6">
    <div class="space-y-4">
      <div class="flex gap-2 uppercase text-primary">
        <p class="text-[15px] font-semibold">Post ID: {{ postId }},</p>
        <p class="text-[16px] font-semibold">User Id: {{ data.userId }}</p>
      </div>
      <p class="text-[16px] font-semibold uppercase">{{ data.title }}</p>

      <div>
        <p
          v-for="item in 10"
          class="text-sm text-muted font-light justify-end leading-6"
        >
          {{ data.body }}
        </p>
      </div>
    </div>
  </Card>
</template>
