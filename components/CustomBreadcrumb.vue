<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ==============================================================
type Link =
  | { name: string; current: boolean; href?: never }
  | { name: string; href: string; current?: never };

interface Props {
  links: Link[];
  heading: string;
}
// ==============================================================

defineProps<Props>();
</script>

<template>
  <div class="pt-1 mb-8 space-y-3">
    <h2 class="text-lg font-semibold leading-none">{{ heading }}</h2>

    <Breadcrumb>
      <BreadcrumbList>
        <template v-for="link in links" :key="link.name">
          <template v-if="link.href">
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <RouterLink :to="link.href">
                  {{ link.name }}
                </RouterLink>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <Icon icon="lucide:chevron-right" />
            </BreadcrumbSeparator>
          </template>

          <BreadcrumbItem v-if="link.current">
            <BreadcrumbPage>{{ link.name }}</BreadcrumbPage>
          </BreadcrumbItem>
        </template>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</template>
