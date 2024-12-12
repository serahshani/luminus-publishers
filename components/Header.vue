<script setup>

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
<template>
  <header class="bg-neutral-100 text-black py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo/Title -->
      <h1 class="text-2xl font-bold">
        <!-- FIX POINT -->
         <img src="/logo.png" alt="FIX POINT" class="w-16 h-16" />
      </h1>

      <!-- Mobile Menu Button (Hamburger Icon) -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <Icon name="bi:list" class="w-6 h-6 text-black" />
      </button>

      <!-- Main Navigation -->
      <nav class="hidden md:flex space-x-6">
        <ul class="flex flex-row space-x-4">
          <li><a href="#about" class="hover:text-yellow-500">About Us</a></li>
          <li>
            <a href="#services" class="hover:text-yellow-500">Services</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-yellow-500">Contact Us</a>
          </li>
        </ul>
      </nav>

      <!-- Call to Action Buttons (Visible on large screens) -->
      <div class="hidden md:flex space-x-4">
        <a href="#callback-form" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
          Request a Call Back
        </a>
        <!-- <button class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
          Get a Free Quote
        </button> -->
      </div>
    </div>

    <!-- Mobile Menu Drawer Component -->
    <MobileDrawer :open="menuOpen" @close="menuOpen = false" />
  </header>
</template>
