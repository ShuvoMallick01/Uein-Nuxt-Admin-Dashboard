<script setup lang="ts">
import { type FileRejectReason, useDropzone } from "vue3-dropzone";
const { value, errorMessage, setValue, setErrors } = useField<any>("image");

function onDrop(files: File[] | null, rejectReasons: FileRejectReason[]) {
  if (rejectReasons.length) {
    const firstRejectReason: any = rejectReasons[0].errors[0];
    setErrors(firstRejectReason.message);
    return;
  }

  if (files && files.length > 0) {
    const file = files[0];
    const newFile = { ...file, preview: URL.createObjectURL(file) };
    setValue(newFile);
  }
}

const { getRootProps, getInputProps } = useDropzone({
  onDrop,
  maxFiles: 1,
  maxSize: 3 * 1024 * 1024,
  accept: ["image/jpeg", "image/png", "image/gif", "image/jpg"],
  onDropRejected: () => {},
});
</script>

<template>
  <div
    v-bind="getRootProps()"
    :class="
      cn(
        'relative w-32 h-32 overflow-hidden transition-all duration-300 rounded-full bg-gray-100 cursor-pointer group outline-gray-300 outline-offset-8 outline-dashed outline-1',
        {
          'hover:opacity-75': !value,
          'outline-error bg-error-50 dark:bg-error/10': errorMessage,
          'hover:after:content-[\'\'] hover:after:absolute hover:after:w-full hover:after:h-full hover:after:bg-black/30 hover:after:inset-0 after:z-10':
            value,
        }
      )
    "
  >
    <img
      alt="User"
      v-if="value"
      :src="typeof value === 'string' ? value : value.preview"
      class="relative z-10 object-cover w-full h-full"
    />

    <div
      :class="
        cn(
          'absolute transition-all inset-0 grid place-items-center text-gray-400',
          {
            'group-hover:z-20 group-hover:text-white': value,
            'text-error': errorMessage,
          }
        )
      "
    >
      <input class="hidden" v-bind="getInputProps()" />
      <Icon name="solar:camera-broken" size="36" />
    </div>
  </div>

  <div class="max-w-56">
    <p class="mt-8 text-xs leading-relaxed text-center text-gray-400">
      Allowed *.jpeg, *.jpg, *.png, <br />
      *.gif max size of 3 Mb
    </p>

    <p v-if="errorMessage" class="mt-2 text-xs text-center text-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
