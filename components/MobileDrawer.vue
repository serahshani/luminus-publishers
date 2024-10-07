<script setup>
const props = defineProps({
  open: Boolean, // Receive the open state from parent component
});

const emit = defineEmits(["close"]); // Emit close event to parent

const closeDrawer = () => {
  emit("close"); // Close the drawer when the button is clicked
};
</script>
<template>
  <transition name="slide-fade">
    <div v-if="open" class="fixed inset-0 z-50 bg-black bg-opacity-50" @click="closeDrawer">
      <!-- Drawer Container -->
      <div
        class="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-4">
          <button @click="closeDrawer" class="focus:outline-none">
            <Icon name="bi:x-lg" class="w-6 h-6" />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="mt-8 space-y-6 text-lg">
          <ul>
            <li>
              <a href="#about" class="block px-6 py-2 hover:bg-gray-800"
                >About Us</a
              >
            </li>
            <li>
              <a href="#services" class="block px-6 py-2 hover:bg-gray-800"
                >Services</a
              >
            </li>
            <li>
              <a href="#contact" class="block px-6 py-2 hover:bg-gray-800"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>

        <!-- Call to Action Buttons -->
        <div class="mt-8 px-6 space-y-4">
          <button
            class="w-full bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
          >
            Request a Call Back
          </button>
          <button
            class="w-full bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Add smooth transition for the drawer sliding effect */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
