<script setup lang="ts">
definePageMeta({
  layout: "settings-layout",
  title: "Social Media Links",
});
</script>

<template>
  <Card class="p-5 xl:p-6">
    <CardTitle class="mb-6 text-base leading-none"
      >Social Media Links</CardTitle
    >

    <CardContent>
      <div class="space-y-3">
        <SocialLinkItem icon="devicon:linkedin" name="Linkedin" />
        <SocialLinkItem
          icon="ri:twitter-x-fill"
          name="Twitter"
          :isConnected="true"
          url="#"
        />
        <SocialLinkItem
          icon="logos:facebook"
          name="Facebook"
          :isConnected="true"
          url="#"
        />
        <SocialLinkItem icon="devicon:google" name="Google" />
      </div>
    </CardContent>
  </Card>
</template>
