<script lang="ts" setup>

</script>
<template>
  <div class="w-full h-full overflow-x-hidden">
    <div class="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <Header />
    </div>
    <slot />
    <Footer />
  </div>
</template>
<style scoped>

</style>