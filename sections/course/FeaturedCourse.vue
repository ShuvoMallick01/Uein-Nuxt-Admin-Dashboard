<script setup lang="ts">
import Scrollbar from "simplebar-vue";
// CUSTOM UTILS METHOD
import { currency } from "@/lib/currency";
// DATA LIST
import { featureCourses } from "@/data/dashboards/course";
</script>

<template>
  <Card class="p-0 col-span-full 2xl:col-span-8">
    <CardTitle class="p-5">Featured course</CardTitle>

    <Scrollbar :autoHide="false">
      <Table class="min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Enrolled</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow
            v-for="item in featureCourses"
            :key="item.id"
            class="border-b border-border"
          >
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar shape="square">
                  <AvatarImage :src="item.image" :alt="item.courseName" />
                  <AvatarFallback>{{ item.courseName[0] }}</AvatarFallback>
                </Avatar>

                <div>
                  <RouterLink to="#" class="hover:underline">
                    <p class="text-sm font-medium leading-relaxed">
                      {{ item.courseName }}
                    </p>
                  </RouterLink>

                  <p class="text-xs text-gray-600 mt-0.5">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell>
              {{ item.category }}
            </TableCell>

            <TableCell>{{ currency(item.earned) }}</TableCell>
            <TableCell class="text-end">{{ item.visitor }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
</template>
