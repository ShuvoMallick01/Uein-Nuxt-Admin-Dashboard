<script setup lang="ts">
import { InputHTMLAttributes } from "vue";
import { useField } from "vee-validate";
// SHADCN COMPONENTS
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

// ==============================================================
interface TextFieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  isDisable?: boolean;
  type?: InputHTMLAttributes["type"];
}
// ==============================================================

const props = withDefaults(defineProps<TextFieldProps>(), {
  type: "text",
  isDisable: false,
});

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div>
    <Label
      v-if="label"
      :for="id"
      class="inline-block mb-2 text-sm font-medium text-gray-500"
      >{{ label }}</Label
    >

    <Input
      :id="id"
      step="0.01"
      :type="type"
      :disabled="isDisable"
      v-model:model-value="value"
      :error="!!errorMessage"
      :placeholder="placeholder"
    />

    <span
      role="alert"
      v-if="errorMessage"
      class="inline-block mt-2 ml-2 text-xs font-medium text-red-500"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
