<script setup lang="ts">
definePageMeta({
  layout: "support-layout",
  title: "Contact",
});
</script>

<template>
  <div class="grid grid-cols-12 gap-7 my-7">
    <Card class="p-6 col-span-full xl:col-span-6">
      <CardTitle class="mb-6">Send us Email</CardTitle>

      <form class="space-y-6">
        <TextField id="name" name="name" label="Name" placeholder="Full Name" />
        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder="Email Address"
        />
        <TextField
          id="subject"
          name="subject"
          label="Subject"
          placeholder="Subject"
        />
        <TextAreaField
          id="message"
          name="message"
          label="Message"
          placeholder="Your Message..."
        />
        <Button class="px-8">Submit</Button>
      </form>
    </Card>

    <Card class="overflow-hidden col-span-full xl:col-span-6">
      <iframe
        class="w-full h-full min-h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425354!3d40.697631233397885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1719158316768!5m2!1sen!2sbd"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Card>
  </div>
</template>
