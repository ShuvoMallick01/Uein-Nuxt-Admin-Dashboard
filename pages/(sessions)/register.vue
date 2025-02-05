<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useForm } from "vee-validate";
import { Icon } from "@iconify/vue";
import * as yup from "yup";

definePageMeta({
  layout: false,
});

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .test("password Match", "Password do not match", function (value) {
      return this.parent.password === value;
    }),
});

const { values, handleSubmit, isSubmitting, setFieldValue } = useForm({
  initialValues: {
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  },
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="relative grid min-h-screen p-4 place-items-center">
    <Card class="relative z-10 grid max-w-screen-lg grid-cols-12 gap-6 p-5">
      <div class="col-span-full lg:col-span-6">
        <div
          class="flex h-64 overflow-hidden rounded-xl lg:h-full lg:rounded-tr-none lg:rounded-br-none"
        >
          <img
            src="/images/covers/cover-3.jpg"
            alt="cover-image"
            class="object-cover w-full"
          />
        </div>
      </div>

      <div
        class="self-center xs:px-8 col-span-full lg:col-span-6 sm:px-16 lg:px-12 lg:py-6"
      >
        <div class="mb-7">
          <h5 class="mb-1 font-semibold">Create an Account 👋</h5>
          <p class="text-sm text-justify text-gray-600">
            Kindly register to start managing your projects.
          </p>
        </div>

        <!-- FORM -->
        <form @submit="onSubmit">
          <TextField
            id="email"
            name="email"
            class="mb-4"
            label="Email or Username"
            placeholder="Enter your username or email"
          />

          <TextField
            class="mb-4"
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your password"
          />

          <div class="flex items-center gap-2 mt-4">
            <Checkbox
              id="terms"
              class="w-4 h-4 border rounded"
              :defaultChecked="values.terms"
              :onUpdate:checked="(value) => setFieldValue('terms', value)"
            />
            <label for="terms" class="text-sm font-medium leading-none">
              By registering you agree to the uno
            </label>
          </div>

          <Button :disabled="isSubmitting" type="submit" class="w-full mt-8"
            >Sign Up</Button
          >
        </form>

        <!-- DIVIDER -->
        <div class="flex items-center justify-between w-full gap-2 my-5">
          <hr class="flex-grow border-border" />
          <p class="text-sm font-medium leading-none">Or</p>
          <hr class="flex-grow border-border" />
        </div>

        <!-- SOCIAL ACTIONS -->
        <div class="space-y-3">
          <Button
            class="w-full bg-primary-25 text-foreground hover:bg-primary-50 dark:bg-primary/5 dark:hover:bg-primary/10"
          >
            <Icon icon="flat-color-icons:google" height="20" class="me-2" />
            Sign in with Google
          </Button>

          <Button
            class="w-full bg-primary-25 text-foreground hover:bg-primary-50 dark:bg-primary/5 dark:hover:bg-primary/10"
          >
            <Icon icon="logos:facebook" height="20" class="me-2" />
            Sign in with Facebook
          </Button>
        </div>

        <p class="mt-8 text-sm text-center text-gray-600">
          Already have an account?
          <RouterLink
            to="/login"
            class="text-sm font-medium underline text-primary underline-offset-2"
          >
            Sign In
          </RouterLink>
        </p>
      </div>
    </Card>

    <!-- BACKGROUND SHAPE -->
    <div
      class="absolute inset-0 pointer-events-none h-3/6 bg-primary-50 dark:bg-primary/5"
    ></div>
  </div>
</template>
