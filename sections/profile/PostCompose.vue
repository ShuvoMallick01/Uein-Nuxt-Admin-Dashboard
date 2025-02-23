<script setup lang="ts"></script>

<template>
  <Card class="px-6 space-y-6">
    <CardTitle class="mb-4">Create Post</CardTitle>

    <Textarea
      class="w-full bg-transparent rounded-lg appearance-none resize-none text-card-foreground placeholder:text-muted"
      rows="6"
      placeholder="What's on your mind?"
    ></Textarea>

    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="hidden gap-2 xxs:flex 2xl:gap-3">
        <Button
          class="h-8 px-2 text-xs rounded-full text-foreground bg-primary-25 hover:bg-primary-50 dark:bg-primary/5"
        >
          <Icon name="solar:gallery-broken" height="15" class="me-2" /> Photo /
          Video
        </Button>

        <Button
          class="h-8 px-2 text-xs rounded-full text-foreground bg-primary-25 hover:bg-primary-50 dark:bg-primary/5"
        >
          <Icon name="solar:user-plus-rounded-broken" size="16" class="me-1" />
          Tag Friends
        </Button>

        <Button
          class="h-8 px-2 text-xs rounded-full text-foreground bg-primary-25 hover:bg-primary-50 dark:bg-primary/5"
        >
          <Icon name="fluent:emoji-16-regular" size="16" class="me-1" />
          Feeling
        </Button>
      </div>

      <Button> <Icon name="lucide:send" size="16" class="me-2" /> Post </Button>
    </div>
  </Card>
</template>
