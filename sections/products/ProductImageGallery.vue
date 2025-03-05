<script setup lang="ts">
const props = defineProps<{ images: string[] }>();
const selectedImage = ref(props.images[0]);
</script>

<template>
  <Card class="sticky top-24">
    <div v-if="selectedImage" class="rounded-lg col-span-full min-h-[400px]">
      <img :src="selectedImage" alt="product" class="object-contain w-full" />
    </div>

    <div class="flex justify-center gap-3 mt-3">
      <div
        :key="image"
        v-for="image in images"
        @click="selectedImage = image"
        :class="
          cn(
            'size-16 transition-all duration-300 border border-transparent rounded-lg opacity-50 cursor-pointer hover:opacity-100 hover:border-primary',
            { 'border-primary opacity-100': selectedImage === image }
          )
        "
      >
        <img :src="image" alt="product" class="w-full h-auto" />
      </div>
    </div>

    <div class="flex justify-between gap-5 pt-8">
      <Button class="w-full" variant="outline">Add to Cart</Button>
      <Button class="w-full">Buy Now</Button>
    </div>

    <div
      class="flex flex-col items-center justify-center gap-3 pb-2 xxs:gap-8 pt-7 xxs:flex-row"
    >
      <button
        class="inline-flex items-center text-sm font-medium hover:text-primary"
      >
        <Icon name="fluent:arrow-swap-20-filled" size="15" class="me-2" />
        <span>Compare</span>
      </button>

      <button
        class="inline-flex items-center text-sm font-medium whitespace-nowrap hover:text-primary"
      >
        <Icon name="ri:question-line" size="15" class="me-2" />
        <span>Ask a Question</span>
      </button>

      <button
        class="inline-flex items-center text-sm font-medium hover:text-primary"
      >
        <Icon name="material-symbols:share-outline" class="me-2" />
        <span>Share</span>
      </button>
    </div>
  </Card>
</template>
