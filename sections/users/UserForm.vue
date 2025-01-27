<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
// CUSTOM COMPONENTS
import UserImageUpload from "./UserImageUpload.vue";
// TYPES
import type { User, UserPayload } from "~/types/User";

const { user } = defineProps<{ user?: User }>();

const router = useRouter();
const route = useRoute();

// CREATE NEW USER API REQUEST HANDLER
const createNewUser = async (body: UserPayload) => {
  try {
    const newUser = await $fetch<{ user: User }>("/api/users", {
      method: "POST",
      body: { body },
    });
    console.log(newUser);
    await router.push("/users");
    // push.success("User created successfully");
  } catch (error) {
    console.log(error);
    // push.error("Something went wrong");
  }
};

// UPDATE USER API REQUEST HANDLER
const updateUser = async (id: number, body: UserPayload) => {
  try {
    await $fetch<{ user: User }>(`/api/users/${route.params.userEditId}`, {
      method: "PUT",
      body: { id: id, updatedData: body },
    });
    await router.push("/users");
    // push.success("User updated successfully");
  } catch (error) {
    console.error(error);
    // push.error("Something went wrong");
  }
};

// FORM FIELDS VALIDATION SCHEMA
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  status: yup.string().required("Status is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
  image: yup.mixed().nullable().required("Image is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    name: user?.name || "",
    role: user?.role || "",
    email: user?.email || "",
    phone: user?.phone || "",
    image: user?.image || null,
    status: user?.status || "",
    address: user?.address || "",
  },
});

// FORM SUBMIT HANDLER
const onSubmit = handleSubmit((values, { resetForm }) => {
  const payload = {
    name: values.name,
    role: values.role,
    email: values.email,
    phone: values.phone,
    image: values.image!,
    status: values.status,
    address: values.address,
  };

  if (user) {
    updateUser(user.id, payload);
    router.push({ name: "Users" });
    return;
  }

  createNewUser(payload);
  resetForm();
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="grid items-start grid-cols-12 gap-7">
      <Card
        class="flex flex-col items-center justify-center min-h-96 col-span-full lg:col-span-4"
      >
        <UserImageUpload />
      </Card>

      <Card
        class="px-6 space-y-4 col-span-full lg:col-span-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-7"
      >
        <TextField
          id="name"
          name="name"
          label="User Name"
          placeholder="John Doe"
        />

        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="example@domain.com"
        />

        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="0123456789"
        />

        <SelectField
          id="status"
          name="status"
          label="Status"
          placeholder="Select a status"
        >
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Banned">Banned</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Rejected">Rejected</SelectItem>
        </SelectField>

        <TextField
          id="role"
          name="role"
          label="Role"
          placeholder="Web Developer"
        />

        <TextField
          id="address"
          name="address"
          label="Address"
          placeholder="New York, USA"
        />

        <Button
          type="submit"
          :disabled="isSubmitting"
          class="ms-auto col-span-full"
        >
          {{ user ? "Update User" : "Create User" }}
        </Button>
      </Card>
    </div>
  </form>
</template>
