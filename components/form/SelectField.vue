<script setup lang="ts">
// ==============================================================
interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
}
// ==============================================================

const props = defineProps<SelectFieldProps>();
const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div>
    <Label
      :for="id"
      class="inline-block mb-2 text-sm font-medium text-gray-500"
      >{{ label }}</Label
    >

    <Select :id="id" v-model:model-value="value">
      <SelectTrigger :class="{ 'border-red-500': errorMessage }">
        <SelectValue
          :placeholder="placeholder"
          :class="{ 'text-red-500': errorMessage }"
        />
      </SelectTrigger>

      <SelectContent>
        <slot></slot>
      </SelectContent>
    </Select>

    <span
      role="alert"
      v-if="errorMessage"
      class="inline-block mt-2 ml-2 text-xs font-medium text-red-500"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
