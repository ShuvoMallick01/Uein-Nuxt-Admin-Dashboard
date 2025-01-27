<script setup lang="ts">
import Scrollbar from "simplebar-vue";
// SHADCN COMPONENTS
import { Badge, BadgeVariants } from "~/components/ui/badge";
// CUSTOM UTILS METHOD
import { currency } from "~/lib/currency";
// CUSTOM DATA
import { popularProducts } from "~/data/dashboards/sales";

const getVariant = (status: string): BadgeVariants["variant"] => {
  if (status === "Out of Stock") return "destructive";
  if (status === "Available") return "success";
  return "default";
};
</script>

<template>
  <Card class="p-0 col-span-full lg:col-span-8">
    <CardTitle class="p-5">Popular Products</CardTitle>

    <Scrollbar :autoHide="false">
      <CardContent class="min-w-[800px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow
              :key="product.id"
              v-for="product in popularProducts"
              class="border-b border-border"
            >
              <TableCell>
                <div class="flex items-center gap-3">
                  <Avatar shape="square">
                    <AvatarImage
                      :src="product.img"
                      :alt="product.productName"
                    />
                    <AvatarFallback>{{
                      product.productName[0]
                    }}</AvatarFallback>
                  </Avatar>

                  <div>
                    <RouterLink
                      to="#"
                      class="text-sm font-medium leading-relaxed hover:underline"
                    >
                      {{ product.productName }}
                    </RouterLink>

                    <p class="text-xs text-gray-600 mt-0.5">
                      {{ product.brand }}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>{{ product.date }}</TableCell>
              <TableCell>{{ product.category }}</TableCell>
              <TableCell>{{ product.brand }}</TableCell>
              <TableCell>{{ currency(product.price) }}</TableCell>

              <TableCell>
                <Badge :variant="getVariant(product.status)">
                  {{ product.status }}
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Scrollbar>
  </Card>
</template>
