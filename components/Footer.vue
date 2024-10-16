<script lang="ts" setup>
import { useMain } from "~/store";

const store = useMain();
const subscribeEmail = ref("");

const { $toast } = useNuxtApp();
const loading = ref(false);

const subscribeNewsLetter = async () => {
  if (loading.value) {
    $toast.success("Wait for loading to complete");
    return;
  }
  try {
    loading.value = true;
    console.log(subscribeEmail.value);
    await saveSubscribeNewsLetter({ email: subscribeEmail.value });
    $toast.success(
      "You have successfully subscribed to our newsletter. Thank you!"
    );
  } catch (error) {
    $toast.error(`Something went wrong. Please try again later. ${error}`);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col px-4 gap-3">
        <h4 class="text-lg font-bold">Contact Info</h4>
        <p class="text-sm">
          {{ store.address }}
        </p>
        <p class="text-sm">Phone: {{ store.phone }}</p>
        <p class="text-sm">Email: {{ store.email }}</p>
        <p class="text-sm">Operating Hours: {{ store.operatingHours }}</p>
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
        <form @submit.prevent="subscribeNewsLetter">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            v-model="subscribeEmail"
            class="w-full px-4 py-2 rounded border mb-2 text-black"
            required
          />
          <button
            class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded w-full"
            type="submit"
          >
            <UtilsLoadingButtonSpinner v-if="loading" />
            <span v-else>Subscribe</span>
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
