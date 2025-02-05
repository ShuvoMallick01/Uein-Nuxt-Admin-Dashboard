<script lang="ts" setup>
import { watch } from "vue";
import { Icon } from "@iconify/vue";
import { useFieldArray } from "vee-validate";
// SHADCN COMPONENTS
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
// CUSTOM COMPONENTS
import TextField from "@/components/form/TextField.vue";
// TYPES
import type { InvoiceItem } from "./types";

const { fields, update, remove } = useFieldArray<InvoiceItem>("products");

const props = defineProps<{ id: number }>();

watch(
  () => fields.value[props.id],
  (current) => {
    if (!current.value || !current.value.quantity || !current.value.price)
      return;

    const { discount, price, quantity } = current.value;
    const subtotal = quantity * price;
    update(props.id, { ...current.value, total: subtotal - (discount || 0) });
  },
  { deep: true }
);
</script>

<template>
  <TableRow>
    <TableCell class="align-top ps-1">
      <TextField
        :id="`products[${id}].title`"
        :name="`products[${id}].title`"
        placeholder="Ex: Product Title"
      />
    </TableCell>

    <TableCell class="align-top">
      <TextField
        type="number"
        placeholder="Ex: 1"
        :id="`products[${id}].quantity`"
        :name="`products[${id}].quantity`"
      />
    </TableCell>

    <TableCell class="align-top">
      <TextField
        type="number"
        placeholder="Ex: 100"
        :id="`products[${id}].price`"
        :name="`products[${id}].price`"
      />
    </TableCell>

    <TableCell class="align-top">
      <TextField
        type="number"
        placeholder="Ex: 4"
        :id="`products[${id}].discount`"
        :name="`products[${id}].discount`"
      />
    </TableCell>

    <TableCell class="align-top">
      <TextField
        :isDisable="true"
        placeholder="Ex: 55"
        :id="`products[${id}].total`"
        :name="`products[${id}].total`"
      />
    </TableCell>

    <TableCell class="align-top pe-0">
      <Button
        size="sm"
        color="error"
        type="button"
        variant="outline"
        @click="remove(id)"
      >
        <Icon icon="mage:trash" height="18" />
      </Button>
    </TableCell>
  </TableRow>
</template>
