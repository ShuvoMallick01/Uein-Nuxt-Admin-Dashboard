<script setup lang="ts">
import { watch, onMounted } from "vue";

// TABLE COLUMNS DEFINITION
import { columns } from "./usersColumns";
// TYPES
import type { User, UserStatus } from "~/types/User";

let isLoading = ref(true);

definePageMeta({
  title: "Users",
});

const { data: roles } = useAsyncData("roles", () => $fetch("/api/users/roles"));
const { data: statuses } = useAsyncData<UserStatus[]>("statuses", () =>
  $fetch("/api/users/status")
);

const {
  status,
  error,
  data: users,
} = useAsyncData<User[]>("users", () => $fetch("/api/users"));

// HANDLE DELETE USERS BY IDS
const handleDeleteUsers = async (users: User[]) => {
  try {
    isLoading.value = true;
    const ids = users.map((user) => user.id);
    // console.log(ids);
    await $fetch("/api/users", {
      method: "DELETE",
      body: { ids },
    });
    console.log("Users deleted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

if (error.value) {
  console.log(error.value);
}

onMounted(() => {
  isLoading.value = status.value === "pending";
});

watch(status, (newStatus) => {
  isLoading.value = newStatus === "pending";
});
</script>

<template>
  <div>
    <CustomBreadcrumb
      heading="Users"
      :links="[
        { name: 'Home', href: '/' },
        { name: 'Users', current: true },
      ]"
    />

    <Card class="p-0 pt-5">
      <!-- SHOW LOADING SKELETON -->
      <UserListSkeleton v-if="isLoading" />

      <!-- DATA NOT FOUND UI -->
      <DataNotFound v-else-if="users?.length === 0" />

      <!-- SHOW DATA TABLE WHEN DATA IS AVAILABLE -->
      <DataTable
        v-else-if="users"
        :data="users"
        :columns="columns"
        @delete="handleDeleteUsers"
      >
        <template
          v-slot:toolbar="{
            isFiltered,
            globalFilter,
            column,
            handleResetFilters,
            setGlobalFilter,
          }"
        >
          <div
            class="flex flex-col gap-4 px-5 mt-1 mb-5 lg:justify-between lg:flex-row lg:items-center"
          >
            <div
              class="flex flex-col items-center gap-4 lg:flex-row lg:w-3/4 2xl:w-3/5"
            >
              <!-- GLOBAL SEARCH FILTER -->
              <SearchInput
                placeholder="Find User"
                :modelValue="globalFilter"
                :updateModelValue="(value) => setGlobalFilter(String(value))"
              />

              <div class="flex items-center w-full gap-3">
                <!-- STATUS BASED FILTER -->
                <Select
                  :model-value="`${column('status')?.getFilterValue() || ''}`"
                  @update:model-value="column('status')?.setFilterValue($event)"
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Status"
                      :class="{
                        'text-muted': !column('status')?.getFilterValue(),
                      }"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem
                      v-for="status in statuses"
                      :key="status.id"
                      :value="status.value"
                    >
                      {{ status.title }}
                    </SelectItem>
                  </SelectContent>
                </Select>

                <!-- ROLE BASED FILTER -->
                <Select
                  :model-value="`${column('role')?.getFilterValue() || ''}`"
                  @update:model-value="column('role')?.setFilterValue($event)"
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Role"
                      :class="{
                        'text-muted': !column('role')?.getFilterValue(),
                      }"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem v-for="role in roles" :value="role" :key="role">
                      {{ role }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <!-- CLEAR FILTER BUTTON -->
              <Button
                v-if="isFiltered"
                @click="handleResetFilters"
                color="error"
              >
                <Icon name="heroicons:trash" height="18" class="me-2" />
                Clear
              </Button>

              <!-- NAVIGATE BUTTON -->
              <Button @click="$router.push('/users/create')">
                <Icon name="ic:round-plus" height="18" class="me-2" />
                Add User
              </Button>
            </div>
          </div>
        </template>
      </DataTable>
    </Card>
  </div>
</template>
