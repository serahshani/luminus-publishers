<script lang="ts" setup>
onMounted(() => {
  const formElement = document.getElementById("callback-form");
  if (formElement) {
    formElement.style.opacity = "1";
  }
});

const { $toast } = useNuxtApp();

const loading = ref(false);

const name = ref("");
const phoneNumber = ref("");

const requestCallback = async () => {
  if (loading.value) {
    $toast.success("Wait for loading to complete");
    return;
  }
  try {
    loading.value = true;
    console.log(name.value, phoneNumber.value);
   
    await saveRequestCallback({
      name: name.value,
      phoneNumber: phoneNumber.value,
    });
  } catch (error) {
    $toast.error(`Failed to send request. Please try again later. ${error}`);
  } finally {
    $toast.success(
      "Thank you for your request. We will get back to you shortly."
    );
    loading.value = false;
  }
};
</script>
<template>
  <section
    class="py-12 bg-cover bg-center bg-gray-200 relative"
    style="background-image: url(&quot;/callback-form.png&quot;)"
  >
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <!-- Dark overlay -->
    <div
      class="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <!-- Left Image Section for Large Screens -->
      <div class="hidden lg:block">
        <img
          src="/callback-form.png"
          alt="Callback Illustration"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <!-- Right Form Section -->
      <div
        id="callback-form"
        class="transition-opacity duration-700 ease-in-out opacity-0 pt-36"
      >
        <h2 class="text-4xl  text-center lg:text-left text-white font-extrabold mb-8">
          Request Call Back
        </h2>
        <form
          @submit.prevent="requestCallback"
          class="bg-white p-8 rounded-lg shadow-lg space-y-6 text-center lg:text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            v-model="name"
            required
            class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            v-model="phoneNumber"
            required
            class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
          <button
            class="w-full bg-blue-500 hover:bg-indigo-900 text-white font-extrabold px-4 py-2 rounded-md transition-all duration-300"
          >
            <UtilsLoadingButtonSpinner v-if="loading" />
            <span v-else> Request a Call Back </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style>
#callback-form {
  opacity: 0; /* Form will fade in on page load */
}
</style>
