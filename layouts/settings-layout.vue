<script setup lang="ts">
import DefaultLayout from "~/layouts/default/index.vue";

// DATA LIST
const navigation = [
  {
    label: "Personal",
    items: [
      { icon: "codicon:account", label: "Profile Info", route: "/settings" },
      {
        icon: "carbon:security",
        label: "Security",
        route: "/settings/security",
      },
      {
        icon: "solar:bell-broken",
        label: "Notification",
        route: "/settings/notification",
      },
      {
        icon: "tabler:social",
        label: "Social Media Links",
        route: "/settings/social-media-links",
      },
    ],
  },
  {
    label: "Security",
    items: [
      {
        icon: "fluent:payment-32-regular",
        label: "Plan & Billing",
        route: "/settings/plan-billing",
      },
      {
        icon: "carbon:two-factor-authentication",
        label: "Two Factor Authentication",
        route: "/settings/two-factor-authentication",
      },

      {
        icon: "line-md:account-delete",
        label: "Account Deactivation",
        route: "/settings/account-deactivation",
      },
    ],
  },
];

const route = useRoute();
</script>

<template>
  <DefaultLayout>
    <div class="grid grid-cols-12 mt-2 mb-6 gap-7">
      <div class="col-span-full 2xl:col-span-3">
        <div class="sticky px-5 pb-3 space-y-5 top-24">
          <div v-for="nav in navigation" :key="nav.label">
            <p class="mb-3 text-sm text-muted">{{ nav.label }}</p>

            <RouterLink
              v-for="item in nav.items"
              :to="item.route"
              :key="item.route"
              class="flex items-center gap-3 px-4 py-2.5 mb-1 text-sm duration-300 rounded-lg cursor-pointer hover:bg-primary/10 hover:text-primary"
              :class="{
                'bg-primary/10 text-primary': route.path == item.route,
              }"
            >
              <Icon :name="item.icon" :size="20" class="shrink-0" />
              <span class="truncate">{{ item.label }}</span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-span-full 2xl:col-span-9">
        <slot />
      </div>
    </div>
  </DefaultLayout>
</template>
