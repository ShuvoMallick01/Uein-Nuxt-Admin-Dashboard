<script setup lang="ts">
import { ErrorMessage, useField } from "vee-validate";
import { type FileRejectReason, useDropzone } from "vue3-dropzone";
import { Icon } from "@iconify/vue";
// CUSTOM UTILS METHOD
import { cn } from "~/lib/utils";

const { value, errorMessage, setValue, setErrors } = useField<any>("images");

function onDrop(files: File[] | null, rejectReasons: FileRejectReason[]) {
  if (rejectReasons.length) {
    const firstRejectReason: any = rejectReasons[0].errors[0];
    setErrors(firstRejectReason.message);
    return;
  }

  if (files) {
    const newFiles = files.map((file) => {
      return Object.assign(file, { preview: URL.createObjectURL(file) });
    });

    setValue(newFiles);
  }
}

const { getRootProps, getInputProps } = useDropzone({
  onDrop,
  multiple: true,
  maxSize: 3 * 1024 * 1024,
  accept: ["image/jpeg", "image/png", "image/gif", "image/jpg"],
});

const handleDelete = (index: number) => {
  const newImages = [...value.value];
  newImages.splice(index, 1);
  setValue(newImages);
};
</script>

<template>
  <div class="col-span-full">
    <Label for="images" class="inline-block mb-3 text-sm font-medium"
      >Images</Label
    >

    <div
      v-bind="getRootProps()"
      :class="
        cn(
          'relative flex flex-col items-center justify-center py-12 border border-gray-200 border-dashed shadow-xs outline-none cursor-pointer rounded-xl dark:border-gray-50',
          { 'bg-error/10 !border-error': errorMessage }
        )
      "
    >
      <Icon icon="solar:camera-broken" height="40" class="text-muted" />
      <p class="mt-4 mb-1 text-sm text-muted">Drop your images here or</p>
      <p
        class="text-sm font-medium"
        :class="errorMessage ? 'text-error' : 'text-primary'"
      >
        Select click to browse
      </p>

      <input class="hidden" v-bind="getInputProps()" />
    </div>

    <ErrorMessage name="images" class="block mt-3 text-xs ms-3 text-error" />

    <div class="inline-flex gap-4 mt-4" v-if="value?.length">
      <div
        class="relative overflow-hidden border rounded-lg size-20 border-border"
        v-for="(file, index) in value"
        :key="index"
      >
        <img
          alt="product"
          :src="typeof file === 'string' ? file : file.preview"
          class="object-cover w-full"
        />

        <button
          type="button"
          @click="handleDelete(index)"
          class="absolute grid rounded-md place-items-center bg-error/5 size-5 top-1 right-1"
        >
          <Icon icon="radix-icons:cross-2" height="13" class="text-error" />
        </button>
      </div>
    </div>
  </div>
</template>
