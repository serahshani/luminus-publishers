<script lang="ts" setup>
import { useMain } from "~/store";

const store = useMain();
</script>
<template>
  <section
    class="flex flex-row w-[100%] bg-secondary px-4 text-white justify-center items-center"
  >
    <div class="w-full flex flex-row justify-center gap-8">
      <!-- phone section -->
      <div class="flex flex-row items-center gap-2 divide-x-2 border-primary px-4">
        <Icon name="bi:telephone-inbound-fill" class="topbar-icon" />
        <span class="text-sm p-2">{{ store.phone }}</span>

      </div>
      <!-- email section -->
      <div class="flex flex-row items-center gap-2">
        <span class="text-sm">Email us</span>
        <Icon name="bi:envelope-fill" class="topbar-icon" />
      </div>

      <!-- address -->
      <div class="flex flex-row items-center gap-2">
        <span class="text-sm">Address</span>
        <Icon name="bi:geo-alt-fill" class="topbar-icon" />
      </div>

      <!-- socials -->
      <div class="flex flex-row items-center justify-center gap-4 py-2 mt-2">
        <!-- <span class="text-sm">Socials</span> -->
        <a
          :href="store.socials.facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="bi:facebook" class="topbar-icon" />
        </a>
        <a
          :href="store.socials.instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="bi:instagram" class="topbar-icon" />
        </a>
        <a
          :href="store.socials.twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="bi:twitter" class="topbar-icon" />
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.topbar-icon{
  @apply text-primary w-5 h-5;
}
</style>
