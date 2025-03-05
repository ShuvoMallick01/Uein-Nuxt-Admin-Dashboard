<script lang="ts" setup>
defineProps<{ id: number }>();
const { remove } = useFieldArray("features");
</script>

<template>
  <div class="flex-1">
    <TextField
      :id="`features[${id}].name`"
      :name="`features[${id}].name`"
      placeholder="Ex: Feature name"
    />
  </div>

  <div class="flex-1">
    <TextField
      :id="`features[${id}].value`"
      :name="`features[${id}].value`"
      placeholder="Ex: Feature value"
    />
  </div>

  <div class="self-start px-2 item">
    <button class="p-3 text-error" @click="remove(id)">
      <Icon name="heroicons:trash" height="18" />
    </button>
  </div>
</template>
