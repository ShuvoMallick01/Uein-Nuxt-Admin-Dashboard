<script setup lang="ts">
definePageMeta({
  layout: "support-layout",
});
</script>

<template>
  <Card class="max-w-screen-lg p-8 mx-auto mt-7">
    <CardTitle>Create Ticket</CardTitle>
    <p class="mt-1 text-sm text-gray-600">
      Please include as many details as possible about your question or problem.
    </p>

    <form class="pt-10">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-6">
          <TextField
            id="first-name"
            name="first-name"
            label="First Name"
            placeholder="First Name"
          />
        </div>

        <div class="col-span-6">
          <TextField
            id="last-name"
            name="last-name"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>

        <div class="col-span-full">
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Email"
          />
        </div>

        <div class="col-span-full">
          <SelectField
            id="product"
            name="product"
            label="Product"
            placeholder="Select product"
          >
            <SelectItem value="product-1"> Product-1 </SelectItem>
            <SelectItem value="product-2"> Product-2 </SelectItem>
            <SelectItem value="product-3"> Product-3 </SelectItem>
            <SelectItem value="product-4"> Product-4 </SelectItem>
          </SelectField>
        </div>

        <div class="col-span-full">
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            placeholder="Subject"
          />
        </div>

        <div class="col-span-full">
          <TextAreaField
            id="message"
            name="message"
            label="Message"
            placeholder="Write your message"
          />
        </div>
      </div>

      <Button class="px-8 mt-8">Submit</Button>
    </form>
  </Card>
</template>
