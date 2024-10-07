<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col px-4 gap-3">
        <h4 class="text-lg font-bold">Contact Info</h4>
        <p class="text-sm">Pioneer House, 1st Floor, Shop 109, Oginga Odinga Street, Kisumu</p>
        <p class="text-sm">Phone: 0701482132</p>
        <p class="text-sm">Email: info@sihotechnologies.com</p>
        <p class="text-sm">Operating Hours: Mon-Sun, 9 AM - 6 PM</p>
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
        <form>
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

<script lang="ts" setup>
  // Add any necessary logic here
</script>

<style scoped>
/* Ensure no overflow occurs */
footer {
  @apply overflow-x-hidden;
}
</style>
