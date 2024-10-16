<script lang="ts" setup>
const props = defineProps({
  loadingText: {
    type: String,
    default: 'Loading Please Wait',
  }
})
</script>
<template>
  <div class="flex flex-row gap-4 items-center justify-center">
    <Icon name="eos-icons:loading" class="w-12 h-12 text-white animate-spin" />
    <span class="text-white">{{ loadingText }}</span>
  </div>
</template>

<style></style>
