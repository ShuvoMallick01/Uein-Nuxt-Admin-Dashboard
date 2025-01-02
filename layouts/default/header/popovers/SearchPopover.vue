<script setup lang="ts"></script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <button>
        <Icon name="Search" class="stroke-muted" />
      </button>
    </DialogTrigger>

    <DialogContent class="p-0 border-0 shadow-none sm:max-w-screen-sm">
      <Command class="w-full border rounded-lg border-border">
        <CommandInput placeholder="Type a command or search..." class="my-2" />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">
              <Icon name="Calendar" class="w-4 h-4 mr-2" />
              <span>Calendar</span>
            </CommandItem>

            <CommandItem value="Search Emoji">
              <Icon name="Smile" class="w-4 h-4 mr-2" />
              <span>Search Emoji</span>
            </CommandItem>

            <CommandItem value="Calculator">
              <Icon name="Calculator" class="w-4 h-4 mr-2" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem value="Profile">
              <Icon name="User" class="w-4 h-4 mr-2" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem value="Billing">
              <Icon name="CreditCard" class="w-4 h-4 mr-2" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>

            <CommandItem value="Settings">
              <Icon name="Settings" class="w-4 h-4 mr-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>
