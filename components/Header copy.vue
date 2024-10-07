<script lang="ts" setup>
import { useMain } from '~/store';


const store = useMain();

</script>
<template>
 <section class="w-[100%] flex flex-row justify-center items-center">
   <div class="w-full h-[70px] bg-primary">
    <!-- {{store.navLinks}} -->
    <!-- <nav class="w-full h-[70px] bg-primary flex flex-row justify-center items-center gap-8">
      <NuxtLink v-for="link in store.navLinks" :key="link.name" :to="link.href" class="text-white text-lg hover:text-primary-300">
        {{ link.name }}
      </NuxtLink>
    </nav> -->
    
    <nav class="w-full h-[70px] bg-primary flex flex-row justify-between items-center md:justify-center gap-8 px-4 md:px-0">
      <div class="flex flex-row items-center gap-4">
        <a href="/" class="text-white text-lg hover:text-primary-300">
          {{ store.brand }}
        </a>
      </div>
      <div class="hidden md:flex flex-row items-center gap-8">
        <NuxtLink v-for="link in store.navLinks" :key="link.name" :to="link.href" class="text-white text-lg hover:text-primary-300">
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="md:hidden flex flex-row items-center gap-2">
        <button @click="store.isMenuOpen = !store.isMenuOpen" class="text-white text-lg hover:text-primary-300">
          <Icon name="bi:list" class="w-6 h-6" />
        </button>
      </div>
    </nav>
   </div>
 </section>
</template>

<style></style>
