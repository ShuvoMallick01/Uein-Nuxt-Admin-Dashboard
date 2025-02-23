<script setup lang="ts"></script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Avatar size="xs" class="border cursor-pointer border-primary">
        <AvatarImage src="/images/users/12.png" alt="User" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
    </PopoverTrigger>

    <PopoverContent class="px-0 py-2 rounded-lg w-60">
      <ul class="text-sm cursor-pointer">
        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <div class="flex items-center gap-3 truncate">
            <Avatar shape="square">
              <AvatarImage src="/images/users/12.png" alt="Nabed" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>

            <div class="truncate">
              <RouterLink
                to="#"
                class="text-sm font-medium leading-relaxed truncate hover:underline"
              >
                Nabed Khan
              </RouterLink>

              <p class="text-xs text-gray-600 mt-0.5 truncate">
                nabedkhan@example.com
              </p>
            </div>
          </div>
        </li>

        <li class="py-1">
          <hr class="border-0 border-b border-border" />
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon
            name="lucide:user-round"
            class="text-gray-400 dark:text-gray-200"
          />
          Profile
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon
            name="si:settings-line"
            class="text-gray-400 dark:text-gray-200"
          />
          Account
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
        >
          <Icon
            name="lucide:users-round"
            class="text-gray-400 dark:text-gray-200"
          />
          Manage Team
        </li>

        <li class="py-1">
          <hr class="border-0 border-b border-border" />
        </li>

        <li
          class="flex items-center gap-2 px-5 py-2 transition-all text-error-400 hover:bg-hover"
        >
          <Icon name="material-symbols:logout-sharp" />
          Log Out
        </li>
      </ul>
    </PopoverContent>
  </Popover>
</template>
