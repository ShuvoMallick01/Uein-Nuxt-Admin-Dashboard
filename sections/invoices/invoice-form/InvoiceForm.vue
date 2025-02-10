<script setup lang="ts">
import { useRoute } from "vue-router";
import { useForm } from "vee-validate";
import { Icon } from "@iconify/vue";
import * as yup from "yup";
// CUSTOM COMPONENTS
import InvoiceItems from "./InvoiceItems.vue";
// TYPE
import type { Invoice, InvoicePayload } from "~/types/Invoice";
// PROPS
const { invoice } = defineProps<{ invoice?: Invoice }>();
// COMPOSABLES
const route = useRoute();

// CREATE NEW INVOICE API REQUEST HANDLER
const createNewInvoice = async (body: InvoicePayload) => {
  try {
    const items = body.products.reduce(
      (acc, item) => acc + (item.total || 0),
      0
    );
    const newInvoice = {
      ...body,
      issueDate: new Date().toDateString(),
      totalAmount: items + body.tax! + body.shippingCharge!,
    };

    await $fetch<{ invoice: Invoice }>("/api/invoices", {
      method: "POST",
      body: { newInvoice },
    });
    console.log("Invoice Create Successfully");
    // push.success("Invoice created successfully");
  } catch (error) {
    console.error(error);
    // push.error("Something went wrong");
  }
};

// UPDATE INVOICE API REQUEST HANDLER
const updateInvoice = async (id: string, body: InvoicePayload) => {
  try {
    await $fetch<{ invoice: Invoice }>(
      `/api/invoices/${route.params.invoiceId}`,
      {
        method: "PUT",
        body: { id, udpateData: body },
      }
    );
    console.log("Invoice updated successfully");
    // push.success("Invoice updated successfully");
  } catch (error) {
    console.error(error);
    // push.error("Something went wrong");
  }
};

// FORM FIELDS VALIDATION SCHEMA
const validationSchema = yup.object({
  address: yup.string().required("Address is required"),
  dueDate: yup.string().required("Due date is required"),
  customerName: yup.string().required("Customer name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup.string().required("Phone is required"),
  status: yup.string().required("Payment status is required"),
  cardHolder: yup.string().required("Card holder is required"),
  cardCVC: yup.string().required("Card CVC is required"),
  paymentMethod: yup.string().required("Payment method is required"),
  cardNo: yup
    .string()
    .required("Card number is required")
    .min(16, "Card number must be at least 16 digits"),
  products: yup
    .array()
    .of(
      yup.object({
        title: yup.string().required("Title is required"),
        quantity: yup.number().nullable().required("Quantity is required"),
        price: yup.number().nullable().required("Price is required"),
      })
    )
    .required("Products are required"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    invoiceId: invoice?.id || `INV-00${Math.floor(Math.random() * 1000)}`,
    status: invoice?.status || "",
    dueDate: invoice?.dueDate || "",
    customerName: invoice?.customer?.name || "",
    email: invoice?.billingAddress?.email || "",
    phone: invoice?.billingAddress?.phone || "",
    address: invoice?.billingAddress?.address || "",
    cardNo: invoice?.payment?.cardNo || "",
    cardCVC: invoice?.payment?.cardCVC || "",
    cardHolder: invoice?.payment?.cardHolder || "",
    paymentMethod: invoice?.payment?.paymentMethod || "",
    shipping: invoice?.shippingCharge || null,
    tax: invoice?.tax || null,
    products: invoice?.products || [
      { title: "", quantity: null, price: null, discount: null, total: null },
    ],
  },
});

// FORM SUBMIT HANDLER
const onSubmit = handleSubmit((values, { resetForm }) => {
  const payload = {
    id: values.invoiceId,
    status: values.status,
    dueDate: values.dueDate,
    tax: values.tax!,
    shippingCharge: values.shipping!,
    products: values.products.map((product) => ({
      id: Math.floor(Math.random() * 1000),
      title: product.title,
      price: product.price!,
      quantity: product.quantity!,
      discount: product.discount!,
      total: product.total!,
    })),
    payment: {
      cardNo: values.cardNo,
      cardCVC: values.cardCVC,
      cardHolder: values.cardHolder,
      paymentMethod: values.paymentMethod,
    },
    billingAddress: {
      email: values.email,
      phone: values.phone,
      address: values.address,
    },
  };

  if (invoice) {
    updateInvoice(invoice.id, { ...invoice, ...payload });
    navigateTo("/invoices");
    return;
  }

  createNewInvoice(payload);
  resetForm();
  navigateTo("/invoices");
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-12">
    <!-- GENERAL INFORMATION -->
    <div class="space-y-5">
      <h5 class="text-sm font-semibold">General Information</h5>
      <div class="mb-8 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
        <TextField
          :isDisable="true"
          id="invoiceId"
          name="invoiceId"
          label="Invoice Id"
          placeholder="Ex: #INV-0002"
        />

        <TextField
          id="dueDate"
          name="dueDate"
          label="Due Date"
          placeholder="Ex: MM/DD/YYYY"
        />

        <SelectField
          id="status"
          name="status"
          label="Status"
          placeholder="Select status"
        >
          <SelectContent>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </SelectField>
      </div>
    </div>

    <!-- BILLING INFORMATION -->
    <div class="space-y-5">
      <h5 class="text-sm font-semibold">Billing Information</h5>

      <div class="mb-8 space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
        <TextField
          id="customerName"
          name="customerName"
          label="Customer Name"
          placeholder="Ex: John Doe"
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder="Ex: email@domain.com"
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          placeholder="Ex: +1 202-555-0143"
        />

        <TextField
          id="address"
          name="address"
          label="Address"
          placeholder="Ex: 123 Street, New York, USA"
        />
      </div>
    </div>

    <!-- INVOICE ITEMS -->
    <InvoiceItems />

    <!-- PAYMENT DETAILS -->
    <div class="space-y-5">
      <h5 class="text-sm font-semibold">Payments Details</h5>

      <div
        class="mb-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5"
      >
        <TextField
          id="cardHolder"
          name="cardHolder"
          label="Card Holder Name"
          placeholder="Ex: Debit John"
        />

        <SelectField
          id="paymentMethod"
          name="paymentMethod"
          label="Payment Method"
          placeholder="Ex: Debit Card"
        >
          <SelectContent>
            <SelectItem value="Debit Card">Debit Card</SelectItem>
            <SelectItem value="Credit Card">Credit Card</SelectItem>
            <SelectItem value="Amex Card">Amex Card</SelectItem>
          </SelectContent>
        </SelectField>

        <TextField
          id="cardNo"
          name="cardNo"
          label="Card No"
          placeholder="Ex: xxxx xxxx xxxx 1402"
        />

        <TextField
          id="cardCVC"
          name="cardCVC"
          label="Card CVC"
          placeholder="Ex: 1324"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button type="submit" :disabled="isSubmitting">
        <Icon icon="mi:save" class="me-2" />
        {{ invoice ? "Update" : "Create" }}
      </Button>
    </div>
  </form>
</template>
