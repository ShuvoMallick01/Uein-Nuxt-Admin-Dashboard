<script setup lang="ts">
definePageMeta({
  layout: "settings-layout",
  title: "Security",
});
</script>

<template>
  <Card class="p-5 xl:p-6">
    <CardTitle class="mb-6 text-base leading-none"
      >Change your password</CardTitle
    >

    <CardContent>
      <form>
        <div class="space-y-9">
          <div class="space-y-5">
            <TextField
              id="currentPassword"
              name="currentPassword"
              label="Current Password"
              placeholder="Current Password"
            />

            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password"
              placeholder="New Password"
            />

            <TextField
              id="confirmNewPassword"
              name="confirmNewPassword"
              label="Confirm New Password"
              placeholder="Confirm New Password"
            />
          </div>

          <hr class="border-border" />

          <div class="space-y-5">
            <p class="text-sm font-semibold leading-none">
              Security preferences
            </p>

            <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
              <SecuritySwitchItem
                id="2-step-authentication"
                title="Enable 2-step authentication"
                description="Protects you against password theft by requesting an authentication code via SMS on every login."
              />

              <SecuritySwitchItem
                id="ask-change-password"
                title="Ask to change password on every 6 months"
                description="A simple but an effective way to be protected against data leaks and password theft."
              />
            </div>
          </div>

          <div class="flex justify-end gap-3">
            <Button color="error" class="px-8">Cancel</Button>
            <Button class="px-8">Save</Button>
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
</template>
