<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
    <AccordionItem
      v-for="item in list"
      :key="item.value"
      :value="item.value"
      class="mb-4 last:mb-0"
    >
      <AccordionTrigger>
        <div class="truncate">
          {{ item.title }}
          <Badge class="hidden ms-1 sm:inline-flex" v-if="item.category">{{
            item.category
          }}</Badge>
        </div>
      </AccordionTrigger>

      <AccordionContent>{{ item.content }}</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
