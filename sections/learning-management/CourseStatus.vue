<script setup lang="ts">
import Scrollbar from "simplebar-vue";
import { currency } from "~/lib/currency";
// DATA LIST
import { courses } from "@/data/dashboards/learning-management";
</script>

<template>
  <Card class="px-0 py-5 col-span-full 2xl:col-span-8">
    <CardTitle class="px-5 pb-5">Course Status</CardTitle>

    <Scrollbar :autoHide="false">
      <Table class="min-w-[700px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Earned</TableHead>
            <TableHead>Visitor</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="item in courses" :key="item.id">
            <TableCell class="pt-4 pb-0">
              <div class="flex items-center gap-3">
                <Avatar shape="square">
                  <AvatarImage :src="item.image" alt="course" />
                  <AvatarFallback>{{ item.courseName[0] }}</AvatarFallback>
                </Avatar>

                <div>
                  <h6 class="font-medium leading-relaxed">
                    {{ item.courseName }}
                  </h6>

                  <p class="text-[12px] text-muted">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell class="pt-4 pb-0">
              <div
                class="flex items-center gap-2 shrink-0"
                :class="{
                  'text-primary [&_span]:bg-primary':
                    item.category === 'Graphic Template',
                  'text-warning [&_span]:bg-warning':
                    item.category === 'Development',
                  'text-success [&_span]:bg-success': item.category === 'Music',
                  'text-error [&_span]:bg-error': item.category === 'Editing',
                }"
              >
                <span class="w-2 h-2 rounded-full"></span>

                <p>{{ item.category }}</p>
              </div>
            </TableCell>

            <TableCell class="pt-4 pb-0">{{ currency(item.earned) }}</TableCell>
            <TableCell class="pt-4 pb-0">{{ item.visitor }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
</template>
