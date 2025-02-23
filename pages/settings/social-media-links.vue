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
        <SocialLinkItem name="devicon:linkedin" icon="Linkedin" />
        <SocialLinkItem
          name="ri:twitter-x-fill"
          icon="Twitter"
          :isConnected="true"
          url="#"
        />
        <SocialLinkItem
          name="logos:facebook"
          icon="Facebook"
          :isConnected="true"
          url="#"
        />
        <SocialLinkItem name="devicon:google" icon="Google" />
      </div>
    </CardContent>
  </Card>
</template>
