<script setup lang="ts">
definePageMeta({
  layout: "settings-layout",
});
</script>

<template>
  <Card class="p-5 xl:p-6">
    <CardTitle class="mb-6 text-base leading-none">Notifications</CardTitle>

    <CardContent>
      <div class="space-y-5">
        <form class="space-y-8">
          <!-- SECURITY PREFERENCES -->
          <div class="space-y-4">
            <p class="text-sm font-semibold">Security preferences</p>

            <SecuritySwitchItem
              id="communication"
              title="Communication"
              description="Get news, announcements, and product updates."
            />

            <SecuritySwitchItem
              id="security"
              title="Security"
              description="Get important notifications about your account security."
            />

            <SecuritySwitchItem
              id="meetups"
              title="Meetups"
              description="Get an email when a Meetup is posted close to my location."
            />
          </div>

          <!-- ACCOUNT ACTIVITY -->
          <div class="space-y-4">
            <p class="text-sm font-semibold">Account Activity</p>

            <div
              class="border border-gray-200 divide-y divide-gray-200 rounded-lg dark:border-border dark:divide-border"
            >
              <ActivityItem
                label="Someone comments on one of my items"
                id="comments"
              />
              <ActivityItem label="Someone mentions me" id="mentions-me" />
              <ActivityItem label="Someone follows me" id="follows-me" />
              <ActivityItem
                label="Someone replies to my job posting"
                id="replies-job-posting"
              />
            </div>
          </div>

          <div class="flex justify-end gap-4">
            <Button color="error" class="px-6">Cancel</Button>
            <Button class="px-8">Save</Button>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
