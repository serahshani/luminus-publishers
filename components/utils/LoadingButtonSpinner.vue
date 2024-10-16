<script lang="ts" setup>
const props = defineProps({
  loadingText: {
    type: String,
    default: 'Loading Please Wait',
  }
})
</script>
<template>
  <div class="flex flex-row gap-4">
    <Icon name="eos-icons:loading" class="w-5 h-5 text-white animate-spin" />
    <span class="text-white">{{ loadingText }}</span>
  </div>
</template>

<style></style>
