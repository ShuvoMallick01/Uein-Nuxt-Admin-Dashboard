<script setup lang="ts">
const navLinks = [
  { id: 1, name: "Home", href: "/users/profile" },
  { id: 2, name: "Friends", href: "#" },
  { id: 3, name: "Followers", href: "#" },
  { id: 4, name: "Gallery", href: "#" },
];
</script>

<template>
  <div class="mb-6">
    <div class="overflow-hidden h-28 rounded-t-xl lg:h-60">
      <img
        alt="cover-image"
        src="/images/covers/cover-1.jpg"
        class="object-cover object-center w-full"
      />
    </div>

    <Card class="p-5 rounded-tl-none rounded-tr-none border-t-none">
      <div class="mx-auto xl:w-11/12">
        <div
          class="flex flex-col items-center justify-between gap-4 xl:flex-row"
        >
          <div
            class="flex flex-col justify-center gap-4 text-center xl:text-left xl:flex-row"
          >
            <Avatar
              size="lg"
              shape="square"
              class="mx-auto -mt-20 border-2 border-white rounded-xl dark:border-gray-100"
            >
              <AvatarImage src="/images/users/12.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div
              class="flex flex-col items-center justify-center gap-4 xl:flex-row"
            >
              <div class="xl:pe-6 xl:me-4 xl:border-e dark:xl:border-e-gray-50">
                <h5 class="text-base font-semibold">Pat Cummins</h5>
                <p class="text-sm text-gray-400">Brisbane, Australia</p>
              </div>

              <div class="flex flex-wrap gap-10">
                <div>
                  <h5 class="text-base font-semibold">561k</h5>
                  <p class="text-xs text-muted">FOLLOWERS</p>
                </div>

                <div>
                  <h5 class="text-base font-semibold">1.45k</h5>
                  <p class="text-xs text-muted">FOLLOWING</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-wrap hidden text-center xxs:gap-3 xxs:flex sm:gap-6">
            <RouterLink
              v-for="navLink in navLinks"
              :to="navLink.href"
              class="p-2 text-sm transition duration-300 hover:text-primary"
              :class="{ 'text-primary': navLink.name === 'Home' }"
            >
              {{ navLink.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
