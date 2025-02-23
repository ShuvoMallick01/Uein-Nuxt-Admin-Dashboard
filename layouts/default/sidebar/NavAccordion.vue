<script setup lang="ts">
// TYPE
import { type NavItem } from "./type";
import { cn } from "~/utils/utils";

const props = defineProps<{ item: NavItem }>();

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const { handleCloseSidebar } = useSidebarStore();

const isActive = (path: string) => {
  const find = props.item.children?.find((item) => item.route === path);
  if (find) isOpen.value = true;
  else isOpen.value = false;
};

onMounted(async () => {
  await router.isReady();
  isActive(route.path);
});

watch(
  () => route.path,
  (newValue) => isActive(newValue)
);
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger class="w-full">
      <div
        class="text-gray-600 transition-all duration-300 rounded-lg cursor-pointer hover:text-primary-500 hover:font-medium hover:bg-primary-25 dark:hover:bg-primary/5"
        :class="{ 'text-primary-500 bg-primary-25 dark:bg-primary/5': isOpen }"
      >
        <div class="flex items-center justify-between p-3 mb-1">
          <div class="flex items-center gap-2">
            <Icon :name="item.icon" style="font-size: large" />
            <span class="text-sm font-medium truncate">{{ item.label }}</span>
          </div>

          <Icon
            name="material-symbols:keyboard-arrow-right"
            class="transition-all duration-300 rtl:rotate-180"
            :class="{
              'rotate-90 rtl:rotate-90': isOpen,
            }"
          />
        </div>
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent class="mb-4 space-y-1">
      <RouterLink
        v-for="child in item.children"
        :to="child.route"
        @click="handleCloseSidebar()"
        :class="
          cn(
            'text-gray-600 flex items-center gap-2 p-3 text-sm truncate duration-300 ease-in-out rounded-lg group hover:bg-primary-25 hover:text-primary dark:hover:bg-primary/5',
            {
              'text-primary bg-primary-25 dark:bg-primary/5':
                route.path === child.route,
            }
          )
        "
      >
        <span
          :class="
            cn('w-1 h-1 bg-gray-600 rounded-full ms-1 me-2', {
              'bg-primary bubble-effect': route.path === child.route,
            })
          "
        ></span>
        <span>{{ child.label }}</span>
      </RouterLink>
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped>
.bubble-effect {
  box-shadow: rgb(228, 220, 253) 0px 0px 0px 2px;
}

.dark .bubble-effect {
  box-shadow: rgb(41 64 211 / 0.23) 0px 0px 0px 2px;
}
</style>
