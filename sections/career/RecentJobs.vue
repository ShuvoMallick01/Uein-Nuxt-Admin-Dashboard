<script setup lang="ts">
// DATA LIST
import { recentJobs } from "~/data/dashboards/career";
</script>

<template>
  <Card class="p-0 col-span-full xl:col-span-7 2xl:col-span-8 overflow-x-auto">
    <CardTitle class="p-5">Recent Jobs Available</CardTitle>

    <Table class="min-w-[700px]">
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Posted At</TableHead>
          <TableHead>Salary</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="job in recentJobs"
          :key="job.id"
          class="border-b border-border"
        >
          <TableCell>
            <div class="flex items-center gap-3">
              <Avatar shape="square" class="bg-card">
                <AvatarImage :src="job.company.image" :alt="job.company.name" />
                <AvatarFallback>{{ job.company.name[0] }}</AvatarFallback>
              </Avatar>

              <div>
                <RouterLink
                  to="#"
                  class="text-sm font-medium leading-relaxed hover:underline"
                >
                  {{ job.company.name }}
                </RouterLink>

                <p class="mt-0.5 text-xs text-gray-600">
                  {{ job.company.type }}
                </p>
              </div>
            </div>
          </TableCell>

          <TableCell>
            {{ job.role }}
          </TableCell>

          <TableCell>{{ dateFormat(job.postedAt) }}</TableCell>
          <TableCell class="text-end">{{ job.salaryRange }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>
