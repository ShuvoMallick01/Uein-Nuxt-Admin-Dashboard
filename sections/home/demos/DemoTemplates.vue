<script setup lang="ts">
import TemplateCard from "./TemplateCard.vue";
// DATA LIST
import { demosLight, demosDark } from "~/sections/home/demos/demoData";
</script>

<template>
  <div class="py-20 md:py-24">
    <div class="container px-4 mx-auto space-y-14">
      <div class="text-center">
        <h3 class="pt-6 text-base leading-loose text-balance text-muted">
          Production Ready & Developer Friendly <br />
          <span class="text-xl font-bold lg:text-3xl text-primary">
            Nuxt 3 Admin Dashboard Demos
          </span>
        </h3>
      </div>

      <div class="space-y-8 text-center">
        <Badge class="text-sm">Light Version</Badge>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <TemplateCard
            v-for="(item, index) in demosLight"
            :key="index"
            :image="item.image"
            :title="item.title"
            :route="item.route"
            :description="item.description"
          />
        </div>
      </div>

      <div class="space-y-8 text-center">
        <Badge class="text-sm">Dark Version</Badge>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <TemplateCard
            v-for="(item, index) in demosDark"
            :key="index"
            isDark
            :image="item.image"
            :title="item.title"
            :route="item.route"
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
