<script setup lang="ts">
import { computed, ref } from "vue";
import { useFieldArray, useField } from "vee-validate";
import { Icon } from "@iconify/vue";
import Scrollbar from "simplebar-vue";
// CUSTOM COMPONENTS
import Item from "./InvoiceItem.vue";
// CUSTOM UTILS METHOD
import { currency } from "~/lib/currency";
// TYPES
import type { InvoiceItem } from "./types";

const initialItem = {
  title: "",
  price: null,
  total: null,
  discount: null,
  quantity: null,
};

const tableHeads = ref([
  "Item Name",
  "Quantity",
  "Price",
  "Discount ($)",
  "Total",
  "",
]);
const { fields, push } = useFieldArray<InvoiceItem>("products");

const subTotalAmount = computed(() => {
  return fields.value.reduce((acc, item) => acc + (item.value.total || 0), 0);
});

const { value: shipping } = useField<number>("shipping");
const { value: tax } = useField<number>("tax");
</script>

<template>
  <div class="space-y-6">
    <h5 class="text-sm font-semibold">Products Information</h5>

    <Scrollbar>
      <Table class="min-w-[900px]">
        <TableHeader>
          <TableRow>
            <TableHead
              :key="item"
              class="first:ps-0 last:pe-0"
              v-for="item in tableHeads"
            >
              {{ item }}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <!-- PRODUCT ITEM -->
          <Item v-for="(_, id) in fields" :id="id" :key="id" />

          <!-- ADD BUTTON -->
          <div class="inline-flex gap-4 mt-6 mb-8">
            <Button
              type="button"
              color="success"
              @click="push({ ...initialItem })"
            >
              <Icon icon="humbleicons:plus" class="me-1" /> Add
            </Button>
          </div>
        </TableBody>
      </Table>
    </Scrollbar>

    <Table class="flex justify-end w-full">
      <TableBody>
        <TableRow>
          <TableCell class="w-52">Sub Total</TableCell>
          <TableCell class="!text-end">{{
            currency(subTotalAmount)
          }}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Shipping ($)</TableCell>
          <TableCell>
            <Input
              type="number"
              name="shipping"
              v-model:modelValue="shipping"
              class="w-20 px-3 py-1 text-end"
            />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Tax (%)</TableCell>
          <TableCell>
            <Input
              name="tax"
              type="number"
              v-model:modelValue="tax"
              class="w-20 px-3 py-1 text-end"
            />
          </TableCell>
        </TableRow>

        <TableRow class="bg-gray-100">
          <TableCell class="font-semibold">Total Amount</TableCell>
          <TableCell class="font-semibold !text-end">
            {{ currency(subTotalAmount + shipping + tax) }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
