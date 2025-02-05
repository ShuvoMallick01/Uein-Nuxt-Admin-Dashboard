<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

definePageMeta({
  layout: false,
});

const { handleSubmit, isSubmitting } = useForm({
  initialValues: { email: "" },
  validationSchema: {
    email: yup.string().email("Invalid email").required("Email is required"),
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="relative grid min-h-screen p-4 place-items-center">
    <Card class="relative z-10 p-5 border shadow-xs sm:min-w-[35rem]">
      <div class="flex h-64 overflow-hidden rounded-xl">
        <img
          src="/images/covers/cover-3.jpg"
          alt="cover-image"
          class="object-cover w-full"
        />
      </div>

      <div class="mt-5 sm:mb-3 sm:px-10">
        <div class="mb-7">
          <h5 class="mb-1 font-semibold">Forgot Password? 👋</h5>
          <p class="text-sm text-justify text-gray-600">
            Enter your email and we'll send you instructions
            <br class="hidden sm:inline" />
            for resetting your password
          </p>
        </div>

        <!-- FORM -->
        <form @submit="onSubmit" class="space-y-4">
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter email"
          />
          <Button :disabled="isSubmitting" type="submit" class="w-full"
            >Send Reset Link</Button
          >
        </form>
      </div>
    </Card>

    <!-- BACKGROUND SHAPE -->
    <div
      class="absolute inset-0 pointer-events-none h-3/6 bg-primary-50 dark:bg-primary/5"
    ></div>
  </div>
</template>
