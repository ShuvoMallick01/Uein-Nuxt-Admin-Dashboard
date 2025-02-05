<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

definePageMeta({
  layout: "settings-layout",
});

// FORM FIELDS VALIDATION SCHEMA
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  designation: yup.string().required("Designation is required"),
  company: yup.string().required("Company Name is required"),
  about: yup.string().required("About is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup.string().required("Phone is required"),
  country: yup.string().required("Country is required"),
  language: yup.string().required("Language is required"),
  profileImage: yup.mixed().nullable().required("Profile Image is required"),
  coverImage: yup.mixed().nullable().required("Cover Image is required"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    name: "",
    username: "",
    designation: "",
    company: "",
    about: "",
    email: "",
    phone: "",
    country: "",
    language: "",
    profileImage: "/images/users/12.png",
    coverImage: "/images/covers/cover-1.jpg",
  },
});

const onSubmit = handleSubmit((values, { resetForm }) => {
  const payload = {
    name: values.name,
    username: values.username,
    designation: values.designation,
    company: values.company,
    about: values.about,
    email: values.email,
    phone: values.phone,
    country: values.country,
    language: values.language,
    profileImage: values.profileImage!,
    coverImage: values.coverImage!,
  };

  console.log(payload);
  resetForm();
});
</script>

<template>
  <Card class="p-0 overflow-hidden">
    <form @submit="onSubmit" class="space-y-6">
      <!-- PROFILE & COVER IMAGE -->
      <ProfileImagesUpload />

      <div class="p-5 space-y-10 lg:p-6">
        <ProfileWidget title="Profile">
          <TextField id="name" name="name" label="Name" placeholder="Name" />
          <TextField
            id="username"
            name="username"
            label="User Name"
            placeholder="Username"
          />

          <TextField
            id="designation"
            name="designation"
            label="Designation"
            placeholder="Designation"
          />

          <TextField
            id="company"
            name="company"
            label="Company Name"
            placeholder="Company"
          />

          <div class="col-span-full">
            <TextAreaField
              id="about"
              name="about"
              label="About"
              placeholder="About here..."
            />
          </div>
        </ProfileWidget>

        <ProfileWidget title="Personal Information">
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="Email"
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            placeholder="Phone Number"
          />
          <TextField
            id="country"
            name="country"
            label="Country"
            placeholder="Country"
          />
          <TextField
            id="language"
            name="language"
            label="Language"
            placeholder="Language"
          />
        </ProfileWidget>

        <div class="flex justify-end gap-3">
          <Button type="reset" color="error" class="px-8">Cancel</Button>
          <Button type="submit" :disabled="isSubmitting" class="px-8"
            >Save</Button
          >
        </div>
      </div>
    </form>
  </Card>
</template>
