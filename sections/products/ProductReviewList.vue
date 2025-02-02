<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ProductReviewSkeleton from "./skeletons/ProductReviewSkeleton.vue";
// TYPES
import type { Review } from "@/types/Product";

// PROPS
const { productId } = defineProps<{ productId: number }>();

const {
  data: reviews,
  status,
  error,
} = useFetch<Review[]>(`/api/products/reviews/${productId}`);

// Error Handling
if (error.value) {
  console.error("Failed to fetch reviews:", error.value);
}
</script>

<template>
  <!-- SHOW LOADING SKELETON -->
  <template v-if="status === 'pending'">
    <ProductReviewSkeleton />
  </template>

  <!-- SHOW REVIEWS WHEN DATA IS AVAILABLE -->
  <template v-else-if="status !== 'pending' && reviews">
    <Card class="mb-5 space-y-2" v-for="review in reviews">
      <div class="flex items-center gap-3 mb-3">
        <Avatar shape="square" size="sm">
          <AvatarImage :src="review.user.image" :alt="review.user.name" />
          <AvatarFallback>{{ review.user.name[0] }}</AvatarFallback>
        </Avatar>

        <div>
          <h5 class="mb-1 text-sm font-semibold">
            {{ review.user.name }}
          </h5>

          <p class="text-xs text-gray-600">on {{ review.createdAt }}</p>
        </div>
      </div>

      <div class="py-3 space-y-3">
        <Rating :rating="review.rating" />
        <p class="text-sm text-gray-600">"{{ review.review }}"</p>
      </div>

      <div class="flex items-center gap-6 text-gray-600">
        <div class="flex items-start gap-1">
          <Icon icon="uil:thumbs-up" :height="16" />
          <p class="text-sm">({{ review.likes }})</p>
        </div>

        <div class="flex items-start gap-1">
          <Icon icon="uil:thumbs-down" :height="16" />
          <p class="text-sm leading-none">({{ review.dislikes }})</p>
        </div>
      </div>
    </Card>
  </template>
</template>
