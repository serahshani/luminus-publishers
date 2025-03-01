<template>
  <section
    class="bg-cover bg-center bg-no-repeat py-20 relative overflow-hidden"
    style="background-image: url('/hero-img.png')"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    ""

    <!-- Content Wrapper -->
    <div
      class="relative container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center h-full"
    >
      <!-- Left Text Content with Parallax and Slanted Effect -->
      <div class="relative z-10 text-white px-6 py-12 lg:py-20 lg:px-12 lg:col-span-3 bg-gradient-to-r from-black to-transparent lg:clip-hero"
      >
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transform"
          style="transform: translateY(0); transition: transform 0.8s ease-out"
        >
          <!-- Mobile & Computer Repair Service -->
          Authorized Service Center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung &
          iPhone Repairs
        </h1>
        <p
          class="text-lg md:text-xl mb-6 transform"
          style="transform: translateY(0); transition: transform 0.8s ease-out"
        >
        We offer expert repairs, servicing, original spare parts, and sales of phones and accessories.
          <!-- Fast and reliable repair service for all your gadgets. -->
        </p>
        <div class="space-x-2 grid grid-cols-1 gap-2 lg:grid-cols-5">
          <a href="#callback-form"
            class="bg-green-400 text-white font-extrabold px-3 py-3 rounded-lg P hover:bg-green-500 transition-all lg:col-span-2 z-40"
          >
            Book Appointment
          </a>
          <a href="#callback-form"
            class="bg-transparent border border-white text-white px-2 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all lg:col-span-2"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <!-- Right Image Content -->
      <div class="hidden lg:block relative lg:col-span-2">
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
