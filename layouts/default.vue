<script lang="ts" setup>

</script>
<template>
  <div class="w-full h-full overflow-x-hidden">
    <div class="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <Header />

      
    </div>
    <slot />


    <!-- whatsapp icon   -->

    <a href="https://wa.me/254741185838?Hello Luminus Publishers!" class="whatsapp animate-bob" target="_blank">
      <Icon name="logos:whatsapp-icon"  class="h-16 w-16"/>
    </a>

    <Footer />
  </div>
</template>
<style  scoped >
.whatsapp {
  position: fixed;
  bottom: 40px;
  right: 40px;
  /* background-color: green;
  color: white; */
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 50px;
  z-index: 100;
  font-size: 30px;
  animation: bob 2s infinite;
}

@keyframes bob {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
