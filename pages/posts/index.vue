<script setup lang="ts">
// const posts = ref([null]);
const meta = reactive({
  firstIndex: 0,
  lastIndex: null,
  totalPage: null,
  perPagePost: null,
  currentPage: null,
});
let isLoading = ref(true);

const { data: posts, status } = await useAsyncData("posts", () =>
  $fetch("https://dummyjson.com/posts")
);

// if (data.value.posts.length > 0) {
//   posts.value = [...data.value.posts];
// }

// GET DATA
// const getData = async () => {
//   try {
//     isLoading.value = true;
//     const { data, status } = await useAsyncData("posts", () =>
//       $fetch("https://dummyjson.com/posts")
//     );
//     // console.log(data.value.posts);
//     if (data.value.posts.length > 0) {
//       posts.value = [...data.value.posts];
//     }
//   } catch (error) {
//     console.log("Someting wents wrong!");
//   } finally {
//     isLoading.value = false;
//   }
// };

// getData();

// console.log(posts.value.posts);

// SEO
useHead({
  title: "Posts - Uein Site",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="mt-6">
    <div
      class="text-center py-10 xl:py-16 px-10 xl:px-52 2xl:px-72 space-y-5 bg-gray-200 rounded-xl dark:bg-card"
    >
      <h3 class="font-semibold text-2xl lg:text-5xl">
        Welcome to <span class="text-primary-dark">NUXT Blog</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore
        ipsum corporis suscipit unde porro deserunt corrupti. Voluptatibus
        deleniti perspiciatis quasi harum iusto? Officia provident vel
        necessitatibus aliquam ipsum adipisci.
      </p>
    </div>

    <!-- POST -->

    <div v-if="status === 'pending'" class="py-4">
      <p class="text-center text-lg text-gray-700">Loading...</p>
    </div>

    <div v-else class="space-y-5 mt-10">
      <div class="w-96">
        <Input class="border-gray-300 border-2" />
      </div>
      <div class="grid grid-cols-12 gap-6">
        <!-- {{ posts }} -->
        <Card
          v-for="(item, index) in posts.posts"
          :key="index"
          class="col-span-4 hover:border-primary/50 transition-all duration-300"
        >
          <CardContent class="p-6 cursor-pointer space-y-3">
            <NuxtLink :to="`posts/${item?.id}`" class="space-y-4">
              <p
                class="text-base font-semibold uppercase transition-all duration-300 hover:text-primary hover:underline"
              >
                {{
                  item?.title.length > 30
                    ? item?.title.slice(0, 30) + "..."
                    : item?.title
                }}
              </p>
            </NuxtLink>
            <p class="text-sm font-light text-muted">
              {{ item?.body.slice(0, 150) + "..." }}
            </p>

            <div class="flex gap-3 text-primary">
              <p
                v-for="(tag, index) in item.tags"
                :key="index"
                class="bg-primary-light/10 py-1 px-2 rounded-lg"
              >
                #{{ tag }}
              </p>
            </div>

            <div
              class="text-muted font-light flex justify-between items-center gap-2 pt-2"
            >
              <div class="flex gap-2">
                <p>{{ item.reactions.likes }} likes</p>
                <p>{{ item.reactions.dislikes }} dislikes</p>
              </div>

              <div class="flex gap-2">
                <p>Views {{ item.views }}</p>
                <p>User ID: {{ item.userId }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
