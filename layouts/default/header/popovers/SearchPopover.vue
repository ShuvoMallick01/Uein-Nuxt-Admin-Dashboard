<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import {
  Command,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <div class="relative hidden md:flex">
        <Input placeholder="Search here..." class="h-10 rounded-lg min-w-72" />

        <span
          class="absolute h-10 -translate-y-1/2 border-s top-1/2 end-10 border-border"
        >
        </span>

        <Icon
          height="20"
          icon="eva:search-outline"
          class="absolute text-gray-500 transform -translate-y-1/2 top-1/2 end-0 me-3"
        />
      </div>
    </DialogTrigger>

    <DialogContent class="p-0 border-0 shadow-none sm:max-w-screen-sm">
      <Command class="w-full border rounded-lg border-border">
        <CommandInput placeholder="Type a command or search..." class="my-2" />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">
              <Icon icon="uil:calender" class="w-4 h-4 me-2" />
              <span>Calendar</span>
            </CommandItem>

            <CommandItem value="Search Emoji">
              <Icon icon="uil:smile" class="w-4 h-4 me-2" />
              <span>Search Emoji</span>
            </CommandItem>

            <CommandItem value="Calculator">
              <Icon icon="proicons:calculator" class="w-4 h-4 me-2" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem value="Profile">
              <Icon icon="lucide:user-round" class="w-4 h-4 me-2" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem value="Billing">
              <Icon icon="f7:creditcard" class="w-4 h-4 me-2" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>

            <CommandItem value="Settings">
              <Icon icon="si:settings-duotone" class="w-4 h-4 me-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>
