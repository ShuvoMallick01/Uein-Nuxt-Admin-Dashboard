<script setup lang="ts">
// TYPE
import { type NavItem } from "./type";

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
        class="transition-all duration-300 ease-in-out border-l-2 cursor-pointer text-muted border-l-transparent hover:font-medium hover:border-l-primary hover:text-primary hover:bg-hover"
        :class="{ '!border-l-primary !text-primary bg-hover': isOpen }"
      >
        <div class="flex items-center justify-between p-4">
          <div class="flex text-[13px] font-medium truncate items-center gap-3">
            <Icon :name="item.icon" :size="20" :strokeWidth="1.2" />
            {{ item.label }}
          </div>

          <Icon
            :size="18"
            name="ChevronDown"
            class="transition-all duration-300 ease-in-out"
            :class="{ 'rotate-180': isOpen }"
          />
        </div>
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent>
      <RouterLink
        :to="child.route"
        @click="handleCloseSidebar()"
        v-for="child in item.children"
        class="flex items-center gap-4 p-4 duration-300 ease-in-out group text-[13px] font-medium text-muted hover:font-medium hover:text-primary hover:bg-hover"
        :class="{
          'bg-hover text-primary !border-l-primary': route.path === child.route,
        }"
      >
        <Icon name="Dot" :size="20" />
        {{ child.label }}
      </RouterLink>
    </CollapsibleContent>
  </Collapsible>
</template>
