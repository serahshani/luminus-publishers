<template>
  <section class="py-12 bg-cover bg-center bg-gray-200 relative" style="background-image: url('/callback-form.webp')">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div> <!-- Dark overlay -->
    <div class="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Left Image Section for Large Screens -->
      <div class="hidden lg:block">
        <img src="/callback-form.webp" alt="Callback Illustration" class="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <!-- Right Form Section -->
      <div id="callback-form" class="transition-opacity duration-700 ease-in-out opacity-0">
        <h2 class="text-4xl font-bold text-center lg:text-left text-white mb-8">Request a Call Back</h2>
        <form class="bg-white p-8 rounded-lg shadow-lg space-y-6 text-center lg:text-left">
          <input
            type="text"
            placeholder="Your Name"
            class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
          <button
            class="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
          >
            Request a Call Back
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const formElement = document.getElementById('callback-form');
  if (formElement) {
    formElement.style.opacity = '1';
  }
});
</script>

<style>
#callback-form {
  opacity: 0; /* Form will fade in on page load */
}
</style>
