<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
} from "radix-vue";

import { cn } from "~/utils/utils";

const props = defineProps<
  CheckboxRootProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer h-[18px] w-[18px] shrink-0 rounded border-2 border-gray-500 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary data-[state=checked]:border-primary data-[state=checked]:bg-white',
        props.class
      )
    "
  >
    <CheckboxIndicator
      class="flex items-center justify-center w-full h-full text-current"
    >
      <slot>
        <Icon name="mingcute:check-fill" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
