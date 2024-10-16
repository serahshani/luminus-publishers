<script lang="ts" setup>
import { useMain } from '~/store';

  const store   = useMain();
  const subscribeEmail = ref('');

  const {$toast} = useNuxtApp();
  /**
   * Subscribe to the newsletter.
   * This function takes no parameters and subscribes the email address stored in
   * the subscribeEmail ref to the newsletter.
   */
  const subscribeNewsLetter = async () => {
    console.log(subscribeEmail.value);
    await saveSubscribeNewsLetter({email: subscribeEmail.value});
    $toast.success("You have successfully subscribed to our newsletter. Thank you!");
  }
</script>
<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col px-4 gap-3">
        <h4 class="text-lg font-bold">Contact Info</h4>
        <p class="text-sm">
          {{store.address}}
        </p>
        <p class="text-sm">Phone: {{store.phone}}</p>
        <p class="text-sm">Email: {{store.email}}</p>
        <p class="text-sm">Operating Hours: {{store.operatingHours}}</p>
      </div>
      <!-- Social Links -->
      <div class="px-4">
        <h4 class="text-lg font-bold">Follow Us</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Facebook</a></li>
          <li><a href="#" class="hover:underline">Instagram</a></li>
        </ul>
      </div>
      <!-- Newsletter Signup -->
      <div class="px-4">
        <h4 class="text-lg font-bold">Subscribe to Our Newsletter</h4>
        <form
          @submit.prevent="subscribeNewsLetter"
        >
          <input
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-2 rounded border mb-2"
            required
          />
          <button
            class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded w-full"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Ensure no overflow occurs */
footer {
  @apply overflow-x-hidden;
}
</style>
