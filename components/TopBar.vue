<script lang="ts" setup>
import { useMain } from "~/store";

const store = useMain();
</script>

<template>
  <section class="w-full bg-secondary text-white py-2 px-4 hidden lg:block">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Contact Info: Phone, Email, Address -->
      <div class="flex flex-col md:flex-row gap-4 items-center">
        <!-- Phone section -->
        <div class="flex flex-row items-center gap-2 hover-contact">
          <Icon name="bi:telephone-inbound-fill" class="topbar-icon" />
          <span class="text-sm">{{ store.phone }}</span>
        </div>

        <!-- Email section -->
        <div class="flex flex-row items-center gap-2 hover-contact">
          <Icon name="bi:envelope-fill" class="topbar-icon" />
          <span class="text-sm">Email us</span>
        </div>

        <!-- Address section -->
        <div class="flex flex-row items-center gap-2 hover-contact">
          <Icon name="bi:geo-alt-fill" class="topbar-icon" />
          <span class="text-sm">{{ store.address }}</span>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="flex gap-4 items-center mt-4 md:mt-0">
        <a
          :href="store.socials.facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="hover-social"
        >
          <Icon name="bi:facebook" class="topbar-icon" />
        </a>
        <a
          :href="store.socials.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="hover-social"
        >
          <Icon name="bi:instagram" class="topbar-icon" />
        </a>
        <a
          :href="store.socials.twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="hover-social"
        >
          <Icon name="bi:twitter" class="topbar-icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Icon Styling */
.topbar-icon {
  @apply w-5 h-5 text-white;
}

/* Hover and Scale Effect for Contact Info */
.hover-contact {
  @apply transition-transform duration-300 ease-in-out;
}

.hover-contact:hover {
  @apply text-primary;
  transform: scale(1.05);
}

/* Hover and Scale Effect for Social Icons */
.hover-social {
  @apply transition-transform duration-300 ease-in-out;
}

.hover-social:hover .topbar-icon {
  @apply text-primary;
  transform: scale(1.2);
}

/* On hover, the entire contact section scales and color changes */
.hover-contact:hover .topbar-icon {
  @apply text-primary;
}
</style>
