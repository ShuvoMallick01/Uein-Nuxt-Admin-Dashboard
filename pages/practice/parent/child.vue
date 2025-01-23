<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

definePageMeta({
  key: (route) => route.fullPath,
});

// const props = defineProps(["num"]);
const route = useRoute();

const randomNumber = ref(Math.random());

const updateRandomNumber = () => {
  randomNumber.value = Math.random();
};
</script>

<template>
  <div class="bg-primary-25 p-5 my-10">
    <NuxtLink to="/practice/parent"><Button>Back to Users</Button></NuxtLink>

    <div class="space-y-5 mt-5">
      <h5>Child</h5>
      <h6>URL: {{ route.path }}</h6>

      <ClientOnly>
        <div>
          <!-- <p>Props {{ num }}</p> -->
          <p>Random Number: {{ randomNumber }}</p>
          <Button @click="updateRandomNumber">Generate Randome Number</Button>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>
