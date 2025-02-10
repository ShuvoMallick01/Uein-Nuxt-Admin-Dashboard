<script setup lang="ts">
import FaqAccordionWidget from "./FAQAccordionWidget.vue";
// DATA LIST
import { faqs } from "./faqData";
// STATE
const defaultValue = "item-1";
</script>

<template>
  <div class="py-24">
    <div class="container px-4 mx-auto space-y-14">
      <div class="text-center">
        <p class="text-base font-medium truncate text-muted">
          Frequently Asked Questions
        </p>

        <h3 class="pt-3 text-2xl font-bold lg:text-3xl">
          Here are some of the basic types <br />
          of questions for our customers
        </h3>
      </div>

      <div class="w-full max-w-4xl mx-auto">
        <FaqAccordionWidget :list="faqs" :defaultValue="defaultValue" />
      </div>
    </div>
  </div>
</template>
