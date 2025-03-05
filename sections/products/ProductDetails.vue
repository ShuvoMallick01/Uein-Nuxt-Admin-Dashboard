<script setup lang="ts">
// TYPES
import type { Product } from "~/types/Product";

defineProps<{ product: Product }>();
</script>

<template>
  <div>
    <Badge variant="info" class="mb-2 rounded-full">New Arrivals</Badge>
    <h6 class="text-lg font-semibold">
      {{ product.title }}
    </h6>
    <p class="text-sm text-gray-600">Category: {{ product.category }}</p>

    <div class="flex items-center gap-5 mt-3 font-medium text-gray-600">
      <div class="flex items-center gap-2">
        <Rating :rating="product.rating" />
        <p class="text-sm leading-none">({{ product.totalReviews }})</p>
      </div>

      <p class="text-sm font-medium leading-none">122 Sold</p>
    </div>
  </div>

  <!-- PRODUCT PRICE -->
  <div>
    <p class="mb-1 text-sm font-medium">Special Price</p>

    <div class="flex items-center gap-3">
      <h4 class="text-2xl font-semibold text-primary">
        {{ currency(product.price) }}
        <del class="text-base font-normal text-muted" v-if="product.discount">
          {{ currency(product.price + product.discount) }}
        </del>
      </h4>

      <p v-if="product.discount" class="text-base font-medium">
        {{ product.discount }}% off
      </p>
    </div>
  </div>

  <!-- PRODUCT COLORS -->
  <div v-if="product.colors && product.colors.length">
    <p class="mb-2 text-sm font-medium">Select Color</p>

    <div class="flex items-center gap-2">
      <input
        v-for="color in product.colors"
        type="radio"
        name="color"
        :id="color"
        :class="
          cn({
            'rounded-sm bg-slate-500 checked:ring-slate-500 appearance-none cursor-pointer size-5 ring-0 ring-offset-1 ring-offset-background ring-transparent checked:ring-1 disabled:cursor-default': true,
            'bg-red-500 checked:ring-red-500': color === 'red',
            'bg-blue-500 checked:ring-blue-500': color === 'blue',
            'bg-pink-500 checked:ring-pink-500': color === 'pink',
            'bg-green-500 checked:ring-green-500': color === 'green',
            'bg-orange-500 checked:ring-orange-500': color === 'orange',
            'bg-purple-500 checked:ring-purple-500': color === 'purple',
          })
        "
      />
    </div>
  </div>

  <!-- PRODUCT SIZES -->
  <div v-if="product.sizes && product.sizes.length">
    <p class="mb-2 text-sm font-medium">Select Size</p>

    <ToggleGroup type="single" class="inline-flex gap-2" default-value="l">
      <ToggleGroupItem
        v-for="size in product.sizes"
        :value="size.toLowerCase()"
        class="size-8 text-xs"
        size="sm"
        variant="outline"
      >
        {{ size }}
      </ToggleGroupItem>
    </ToggleGroup>
  </div>

  <!-- PRODUCT OFFERS -->
  <div v-if="product.offers && product.offers.length">
    <p class="mb-2 text-sm font-medium">
      Available Offers ({{ product.offers.length }})
    </p>

    <div class="space-y-2">
      <div
        class="flex items-center text-gray-600"
        v-for="(offer, index) in product.offers"
        :key="index"
      >
        <Icon
          name="akar-icons:tag"
          size="15"
          class="me-2 shrink-0 text-primary"
        />
        <p class="text-sm">{{ offer }}</p>
      </div>
    </div>
  </div>

  <!-- PRODUCT SHIPPING -->
  <div class="flex flex-wrap gap-4">
    <div
      class="flex items-center gap-4 px-6 py-3 border border-gray-200 rounded-lg dark:border-gray-50"
    >
      <Icon name="clarity:truck-solid" height="32" class="text-gray-600" />

      <div>
        <p class="text-sm font-semibold leading-6">Estimated Delivery</p>
        <p class="text-sm text-gray-600">07 Dec, 2025</p>
      </div>
    </div>

    <div
      class="flex items-center gap-4 px-6 py-3 border border-gray-200 rounded-lg dark:border-gray-50"
    >
      <Icon name="mdi:cart-outline" height="32" class="text-gray-600" />

      <div>
        <p class="text-sm font-semibold leading-6">Free Shipping & Returns</p>
        <p class="text-sm text-gray-600">On all orders over $200.00</p>
      </div>
    </div>
  </div>

  <!-- PRODUCT DESCRIPTION -->
  <div>
    <p class="mb-2 text-sm font-medium underline">Product Description</p>
    <p class="text-sm text-gray-600">
      {{ product.description }}
    </p>
  </div>

  <!-- PRODUCT FEATURES -->
  <div v-if="product.features && product.features.length">
    <p class="mb-2 text-sm font-medium underline">Features:</p>

    <Table>
      <TableBody>
        <TableRow
          v-for="feature in product.features"
          class="[&_td:last-child]:text-left"
        >
          <TableCell class="border border-gray-200 dark:border-gray-50">
            {{ feature.name }}
          </TableCell>
          <TableCell class="border border-gray-200 dark:border-gray-50">
            {{ feature.value }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
