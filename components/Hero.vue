<template>
  <section
    class="bg-cover bg-center bg-no-repeat py-20 relative overflow-hidden"
    style="background-image: url('/hero-img.png')"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Content Wrapper -->
    <div
      class="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center h-full"
    >
      <!-- Left Text Content with Parallax and Slanted Effect -->
      <div
        class="relative z-10 text-white px-6 py-12 lg:py-20 lg:px-12 bg-gradient-to-r from-black to-transparent"
        style="clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%)"
      >
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform"
          style="transform: translateY(0); transition: transform 0.8s ease-out"
        >
          Mobile & Computer Repair Service
        </h1>
        <p
          class="text-lg md:text-xl mb-6 transform"
          style="transform: translateY(0); transition: transform 0.8s ease-out"
        >
          Fast and reliable repair service for all your gadgets.
        </p>
        <div class="space-x-4">
          <button
            class="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all"
          >
            Book Appointment
          </button>
          <button
            class="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
          >
            Get a Quote
          </button>
        </div>
      </div>

      <!-- Right Image Content -->
      <div class="hidden lg:block relative">
        <!-- <img
          src="/hero-img.png"
          alt="Repair Service"
          class="w-full h-full object-cover rounded-lg shadow-lg"
        /> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// JavaScript for parallax effect on scroll
if (import.meta.client) {
  window.addEventListener("scroll", () => {
    const heroText = document.querySelectorAll(".transform");

    heroText.forEach((text: any) => {
      const scrollPos = window.scrollY;
      text.style.transform = `translateY(${scrollPos * 0.5}px)`; // Parallax effect
    });
  });
}
</script>

<style scoped>
/* Slanted container and parallax text animation */
</style>
