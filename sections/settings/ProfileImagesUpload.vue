<script setup lang="ts">
import { useField } from "vee-validate";
import { type FileRejectReason, useDropzone } from "vue3-dropzone";
import { cn } from "~/utils/utils";

function createDropHandlers(fieldName: string) {
  const { value, errorMessage, setValue, setErrors } = useField<any>(fieldName);

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
    accept: ["image/jpeg", "image/png", "image/jpg"],
  });

  return { value, errorMessage, getRootProps, getInputProps };
}

const {
  value: coverValue,
  getRootProps: getCoverRootProps,
  getInputProps: getCoverInputProps,
  errorMessage: coverErrorMessage,
} = createDropHandlers("coverImage");

const {
  value: profileValue,
  getRootProps: getProfileRootProps,
  getInputProps: getProfileInputProps,
  errorMessage: profileErrorMessage,
} = createDropHandlers("profileImage");
</script>

<template>
  <div class="rounded-t-lg">
    <!-- Cover Image -->
    <div
      v-bind="getCoverRootProps()"
      :class="
        cn(
          'relative h-40 lg:h-64 bg-gray-200 overflow-hidden transition-all duration-300 cursor-pointer group ',
          {
            'hover:opacity-60 ': !coverValue,
            'outline-error bg-error-50 dark:bg-error/10': coverErrorMessage,
            'hover:after:content-[\'\'] hover:after:absolute hover:after:w-full hover:after:h-full hover:after:bg-black/30 hover:after:inset-0 after:z-10':
              coverValue,
          }
        )
      "
    >
      <img
        v-if="coverValue"
        :src="typeof coverValue === 'string' ? coverValue : coverValue.preview"
        alt="Cover Image"
        class="relative z-10 object-cover w-full h-full"
      />

      <div
        :class="
          cn(
            'absolute transition-all inset-0 grid place-items-center text-gray-400',
            {
              'group-hover:z-10 group-hover:text-white': coverValue,
              'text-error': coverErrorMessage,
            }
          )
        "
      >
        <input class="hidden" v-bind="getCoverInputProps()" />
        <Icon name="solar:camera-broken" height="36" />
      </div>
    </div>

    <!-- Profile Image -->
    <div class="relative z-10 flex flex-col items-center -mt-16">
      <div
        v-bind="getProfileRootProps()"
        :class="
          cn(
            'relative w-28 h-28 bg-background rounded-full overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer group outline-gray-300 outline-offset-4 outline-dashed outline-1',
            {
              'hover:opacity-70 z-20 hover:outline-gray-400 hover:border-gray-200 ':
                !profileValue,
              'outline-error bg-error-50 dark:bg-error/10': profileErrorMessage,
              'hover:after:content-[\'\'] hover:after:absolute hover:after:w-full hover:after:h-full hover:after:bg-black/30 hover:after:inset-0 after:z-20':
                profileValue,
            }
          )
        "
      >
        <img
          v-if="profileValue"
          :src="
            typeof profileValue === 'string'
              ? profileValue
              : profileValue.preview
          "
          alt="Profile Image"
          class="relative z-20 object-cover w-full h-full"
        />

        <div
          :class="
            cn(
              'absolute transition-all inset-0 grid place-items-center text-gray-400',
              {
                'group-hover:z-20 group-hover:text-white': profileValue,
                'text-error': profileErrorMessage,
              }
            )
          "
        >
          <input class="hidden" v-bind="getProfileInputProps()" />
          <Icon name="solar:camera-broken" height="36" />
        </div>
      </div>
    </div>

    <!-- Error Messages -->
    <div class="mx-auto max-w-56">
      <p v-if="coverErrorMessage" class="mt-1 text-xs text-center text-error">
        {{ coverErrorMessage }}
      </p>

      <p v-if="profileErrorMessage" class="mt-1 text-xs text-center text-error">
        {{ profileErrorMessage }}
      </p>
    </div>
  </div>
</template>
