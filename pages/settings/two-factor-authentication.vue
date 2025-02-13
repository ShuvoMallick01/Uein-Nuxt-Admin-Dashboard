<script setup lang="ts">
definePageMeta({
  layout: "settings-layout",
  title: "Two Factor Authentication",
});
</script>

<template>
  <Card class="p-5 xl:p-6">
    <CardTitle>Two-Factor Authentication (2FA) </CardTitle>
    <p class="mt-2 text-xs text-gray-600">
      Enhance your account security by enabling Two-Factor Authentication in the
      settings.
    </p>

    <CardContent>
      <form class="mt-6">
        <div>
          <Label class="font-medium leading-relaxed" for="ac-password"
            >Account Password</Label
          >
          <p class="text-xs text-muted">
            Enter your current password to verify your identity.
          </p>
        </div>

        <div class="mt-3">
          <Input
            type="ac-password"
            id="ac-password"
            name="Account Password"
            placeholder="Account Password"
          />
          <p class="pt-2 text-xs ps-3 text-muted">
            This is the password you use to log in to your account.
          </p>
        </div>

        <div class="flex justify-end gap-4 mt-5">
          <Button color="error" class="px-6">Cancel</Button>
          <Button class="px-8">Save</Button>
        </div>
      </form>
    </CardContent>
  </Card>
</template>
