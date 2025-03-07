<script setup lang="ts">
import * as yup from "yup";
// CUSTOM COMPONENTS
import Sizes from "./Sizes.vue";
import Colors from "./Colors.vue";
import Categories from "./Categories.vue";
import ProductImages from "./ProductImages.vue";
import ProductFeatureItem from "./ProductFeatureItem.vue";
// TYPE
import type { Product, ProductPayload } from "~/types/Product";

// PROPS
const { product } = defineProps<{ product?: Product }>();

// COMPOSABLES
const router = useRouter();
const route = useRoute();

// CREATE NEW PRODUCT API REQUEST HANDLER
const createNewProduct = async (body: ProductPayload) => {
  try {
    const updateBody = {
      ...body,
      rating: 0,
      discount: 0,
      totalReviews: 0,
      featureImage: body.images[0],
      createdAt: new Date().toDateString(),
      status: body.status ? "Published" : "Draft",
      id: Date.now(),
      offers: [
        "Bank Offer 10% Instant Discount on Paypal, up to $1250 on orders of $5,000 and above T&C",
      ],
    };

    const newProduct = await $fetch<{ product: Product }>("/api/products", {
      method: "POST",
      body: { updateBody },
    });
    console.log(newProduct);
    await router.push("/products");
    // push.success("Product created successfully");
  } catch (error) {
    console.error(error);
    // push.error("Something went wrong");
  }
};

// UPDATE PRODUCT API REQUEST HANDLER
const updateProduct = async (id: number, body: ProductPayload) => {
  try {
    await $fetch<{ product: Product }>(`/api/products/${route.params.id}`, {
      method: "PUT",
      body: { id: id, updatedData: body },
    });
    await router.push("/products");
    // push.success("Product updated successfully");
  } catch (error) {
    console.error(error);
    // push.error("Something went wrong");
  }
};

// FIELDS VALIDATION SCHEMA
const validationSchema = yup.object({
  title: yup.string().required("Product title is required"),
  category: yup.string().required("Category is required"),
  code: yup.string().required("Code is required"),
  price: yup.number().required("Price is required"),
  colors: yup
    .array()
    .of(yup.string())
    .min(1, "At least one size is required")
    .required("Color is required"),
  sizes: yup
    .array()
    .of(yup.string())
    .min(1, "At least one size is required")
    .required("Size is required"),
  description: yup.string().required("Description is required"),
  features: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required("Name is required"),
        value: yup.string().required("Value is required"),
      })
    )
    .required("Features is required"),
  stock: yup.number().required("Stock is required"),
  images: yup
    .array()
    .of(yup.mixed())
    .min(2, "Must have at least 2 images!")
    .required("Images is required"),
});

const { values, isSubmitting, handleSubmit, setFieldValue } = useForm({
  validationSchema,
  initialValues: {
    title: product?.title || "",
    code: product?.code || "",
    category: product?.category || "",
    images: product?.images || [],
    price: product?.price || null,
    colors: product?.colors || [],
    sizes: product?.sizes || [],
    description: product?.description || "",
    features: product?.features || [{ name: "", value: "" }],
    stock: product?.stock || null,
    status: product?.status === "Published" || false,
  },
});

// FORM FEATURES FIELD
const { fields, push } = useFieldArray("features");

// FORM SUBMIT HANDLER
const onSubmit = handleSubmit((values, { resetForm }) => {
  const images = values.images.map((image: any) =>
    typeof image === "string" ? image : image.preview
  );
  const payload = {
    images,
    code: values.code,
    title: values.title,
    price: values.price!,
    stock: values.stock!,
    sizes: values.sizes,
    colors: values.colors,
    status: values.status,
    category: values.category,
    features: values.features,
    description: values.description,
  };

  if (product) {
    updateProduct(product.id, payload);
    return navigateTo("/products");
  }
  createNewProduct(payload);
  resetForm();
});
</script>

<template>
  <form @submit="onSubmit">
    <Card class="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
      <div class="col-span-full">
        <TextField
          id="title"
          name="title"
          label="Title"
          placeholder="Product title"
        />
      </div>

      <TextField
        id="code"
        name="code"
        label="Code"
        placeholder="Product code"
      />

      <Categories />

      <TextField
        type="number"
        id="price"
        name="price"
        label="Price"
        placeholder="Product price"
      />

      <TextField
        type="number"
        id="stock"
        name="stock"
        label="Stock"
        placeholder="Product quantity"
      />

      <Colors />

      <Sizes />

      <ProductImages />

      <div class="col-span-full">
        <TextAreaField
          id="description"
          name="description"
          label="Description"
          placeholder="Ex: Product Description"
        />
      </div>

      <div class="col-span-full">
        <h4 class="mb-3 text-sm font-medium">Features</h4>

        <div class="space-y-5">
          <div
            :key="id"
            v-for="(_, id) in fields"
            class="flex items-center justify-between gap-6"
          >
            <ProductFeatureItem :id="id" />
          </div>

          <Button
            size="sm"
            type="button"
            @click="push({ name: '', value: '' })"
          >
            <Icon
              name="mynaui:plus-solid"
              :size="18"
              style="font-size: large"
              class="me-1"
            />
            Add
          </Button>
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-6 col-span-full">
        <div class="flex items-center gap-2">
          <Switch
            id="status"
            :checked="values.status"
            @update:checked="setFieldValue('status', $event)"
          />
          <Label for="status" class="text-sm font-medium">Publish</Label>
        </div>

        <Button type="submit" :disabled="isSubmitting">{{
          product ? "Update" : "Create"
        }}</Button>
      </div>
    </Card>
  </form>
</template>
