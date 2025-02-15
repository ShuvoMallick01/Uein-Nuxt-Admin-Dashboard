<script setup lang="ts">
import { computed } from "vue";
import Scrollbar from "simplebar-vue";
import { Icon } from "@iconify/vue";
// CUSTOM UTILS METHODS
import { currency } from "~/utils/currency";
import { dateFormat } from "~/utils/dateFormat";
// TYPES
import type { Invoice } from "~/types/Invoice";

// PROPS
const { invoice } = defineProps<{ invoice: Invoice }>();

const printPage = () => {
  window.print();
};

const subtotal = computed(() => {
  return invoice.products.reduce((prev, curr) => prev + curr.total!, 0);
});
</script>

<template>
  <Card class="p-6 col-span-full 2xl:col-span-8 2xl:col-start-3">
    <CardContent class="space-y-10">
      <div class="flex justify-between">
        <div>
          <img src="/logos/uno.svg" class="w-12 mb-10" alt="Uno" />

          <h5 class="mb-3 text-base font-semibold">Bill To:</h5>
          <p class="text-sm font-semibold">{{ invoice.customer.name }}</p>
          <p class="mt-1 text-xs text-muted">
            {{ invoice.billingAddress?.phone }}
          </p>
          <p class="mt-1 mb-8 text-xs text-muted">
            {{ invoice.billingAddress?.address }}
          </p>

          <p class="mb-2 text-sm">
            <span class="font-medium me-1">Issue Date:</span>
            <span class="text-muted">
              {{ dateFormat(invoice.issueDate, "DD MMM YYYY") }}
            </span>
          </p>

          <p class="text-sm">
            <span class="font-medium me-1">Due Date:</span>
            <span class="text-muted">
              {{ dateFormat(invoice.dueDate, "DD MMM YYYY") }}
            </span>
          </p>
        </div>

        <div class="text-end">
          <h3 class="text-2xl font-semibold">{{ invoice.id }}</h3>
          <Badge class="mt-1 capitalize">{{ invoice.status }}</Badge>

          <p class="mt-5 text-sm text-muted">
            45 Roker Terrace <br />
            Latheronwheel<br />
            KW5 8NW, London<br />
            United Kingdom<br />
          </p>
        </div>
      </div>

      <!-- ITEM LIST TABLE -->
      <Scrollbar>
        <Table class="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Product</TableHead>
              <TableHead class="text-center">Quantity</TableHead>
              <TableHead class="text-center">Discount</TableHead>
              <TableHead class="text-center">Price</TableHead>
              <TableHead class="text-end">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="item in invoice.products" :key="item.id">
              <TableCell>{{ item.id }}</TableCell>
              <TableCell>
                <p class="text-sm font-medium">{{ item.title }}</p>
                <p class="pt-1 text-xs text-muted">
                  Build with Bootstrap, React JS, Angular, Nuxt etc.
                </p>
              </TableCell>
              <TableCell class="text-center">{{ item.quantity }}</TableCell>
              <TableCell class="text-center">{{ item.discount }}%</TableCell>
              <TableCell class="text-center">{{
                currency(item.price)
              }}</TableCell>
              <TableCell class="text-end">{{ currency(item.total) }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Scrollbar>

      <!-- INVOICE SUMMARY -->
      <Table class="flex justify-end w-full">
        <TableBody>
          <TableRow>
            <TableCell class="py-2">Subtotal:</TableCell>
            <TableCell class="py-2 !text-end">{{
              currency(subtotal)
            }}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="py-2">Vat(%): </TableCell>
            <TableCell class="py-2 !text-end">{{ invoice.tax }}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="py-2">Shipping:</TableCell>
            <TableCell class="py-2 !text-end">{{
              currency(invoice.shippingCharge!)
            }}</TableCell>
          </TableRow>
          <TableRow class="bg-gray-100">
            <TableCell class="py-2 text-sm font-semibold">Total:</TableCell>
            <TableCell class="py-2 !text-end text-sm font-semibold">
              {{ currency(invoice.totalAmount) }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <!-- PAYMENT INFORMATION -->
      <div>
        <h5 class="mb-4 text-sm font-semibold">Payments Details</h5>
        <p class="mb-2 text-sm font-medium">
          Payment Method:
          <span class="font-normal text-muted">
            {{ invoice.payment.paymentMethod }}
          </span>
        </p>

        <p class="mb-2 text-sm font-medium">
          Card Holder:
          <span class="font-normal text-muted">
            {{ invoice.payment.cardHolder }}
          </span>
        </p>

        <p class="mb-2 text-sm font-medium">
          Card Number:
          <span class="font-normal text-muted">
            {{ invoice.payment.cardNo }}
          </span>
        </p>

        <p class="mb-2 text-sm font-medium">
          Total Amount:
          <span class="font-normal text-muted"
            >{{ currency(invoice.totalAmount) }}
          </span>
        </p>
      </div>

      <div class="flex justify-end gap-4">
        <Button type="submit">
          <Icon icon="prime:save" height="19" class="me-2" /> Save PDF</Button
        >
        <Button type="submit" color="success" @click="printPage">
          <Icon icon="solar:printer-linear" height="18" class="me-2" /> Print
          Invoice
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
