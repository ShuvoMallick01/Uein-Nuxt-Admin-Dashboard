<script setup lang="ts">
import { useRoute } from "vue-router";

// const props = defineProps(["num"]);
// const { data, pending, error } = useFetch<any>(
//   "https://jsonplaceholder.typicode.com/users"
// );
const route = useRoute();

const randomNumber = ref(Math.random());
function updateRandomNumber() {
  randomNumber.value = Math.random();
}
</script>

<template>
  <div class="bg-primary-25 p-5 my-10">
    <NuxtLink to="/practice/parent"><Button>Back to Users</Button></NuxtLink>

    <div class="space-y-5 mt-5">
      <h5>Child-2</h5>
      <h6>URL: {{ route.path }}</h6>

      <div>
        <!-- <p>Props {{ data.slice(1, 2) }}</p> -->
        <p>Random Number: {{ randomNumber }}</p>
        <button @click="updateRandomNumber">Generate Random Number</button>
      </div>
    </div>
  </div>
</template>
