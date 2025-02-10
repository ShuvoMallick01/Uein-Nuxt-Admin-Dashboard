<script setup lang="ts">
// ======================================
interface Item {
  value: string;
  title: string;
  content: string;
  category?: string;
}
// ======================================

defineProps<{ list: Item[]; defaultValue?: string }>();
</script>

<template>
  <Accordion type="single" collapsible :default-value="defaultValue">
    <AccordionItem v-for="item in list" :key="item.value" :value="item.value">
      <AccordionTrigger class="py-5 rounded-none md:text-base">
        {{ item.title }}
      </AccordionTrigger>

      <AccordionContent class="text-sm">{{ item.content }}</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
