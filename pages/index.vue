<script setup lang="ts">
const appConfig = useAppConfig();

console.log(appConfig);

const { data: time } = await useFetch("/api/server-time", {
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key];
  },
});

const { data: about } = await useFetch<any>("http://localhost:5000/about", {
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key];
  },
});
</script>

<template>
  <div class="py-6 space-y-8">
    <h4 class="text-primary text-xl font-semibold uppercase underline">
      Practice
    </h4>

    <!-- <Practice /> -->

    <div class="space-y-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur quidem dicta exercitationem rerum, illo deserunt atque
        quisquam, nemo eum veritatis doloribus iste, praesentium dignissimos
        sapiente esse vel placeat repellat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur quidem dicta exercitationem rerum, illo deserunt atque
        quisquam, nemo eum veritatis doloribus iste, praesentium dignissimos
        sapiente esse vel placeat repellat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur quidem dicta exercitationem rerum, illo deserunt atque
        quisquam, nemo eum veritatis doloribus iste, praesentium dignissimos
        sapiente esse vel placeat repellat.
      </p>
    </div>

    <!-- <h3>Time: {{ new Date().getTime() }}</h3> -->
    <!-- <h3 v-if="serverTime">Time: {{ serverTime }}</h3> -->
    <h3>Time: {{ time?.time }}</h3>

    <div v-if="about">
      <pre>
        {{ JSON.stringify(about, null, 2) }}
      </pre>
    </div>
  </div>
</template>
