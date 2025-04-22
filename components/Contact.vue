<script lang="ts" setup>
const { $toast } = useNuxtApp();
const loading = ref<Boolean>(false);

const name = ref("");
const email = ref("");
const phone = ref("");
const device = ref("");
const warranty = ref("");
const location = ref("");
const message = ref("");

const submitInquiry = async () => {
  if (loading.value) {
    $toast.success("Wait for loading to complete");
    return;
  }
  try {
    loading.value = true;
    await saveSubmitInquiry({
      name: name.value,
      email: email.value,
      phone: phone.value,
      device: device.value,
      warranty: warranty.value,
      location: location.value,
      message: message.value,
    });
   
  } catch (error) {
    $toast.error(
      "An error occurred while submitting your request. Please try again later."
    );
  } finally {
    loading.value = false;
     $toast.success("Thank you for your request. We will get back to you shortly.");
    name.value = '';
    email.value = '';
    phone.value = '';
    device.value = '';
    warranty.value = '';
    location.value = '';
    message.value = '';
  }
};
</script>
<template>
  <section id="contact" class="py-12 pt-36 bg-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Map Section -->
        <div
          class="map-container bg-gray-100 h-full rounded-lg shadow-lg overflow-hidden"
        >
          <h2 class="text-3xl font-bold text-center mb-6">Find Us Here</h2>
          <iframe
            src="https://maps.app.goo.gl/4B8TzQEPgfj5K58MA"
            width="100%"
            height="100%"
            class="w-full h-full rounded-lg"
            style="border: 0"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>

        <!-- Right Contact Form Section -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center h-full"
        >
          <h2 class="text-3xl font-bold text-center mb-6">
            Submit Your Inquiry
          </h2>
          <form class="space-y-4"
            @submit.prevent="submitInquiry"
          >
            <div>
              <label for="name" class="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium"
                >Phone Number</label
              >
              <input
                type="tel"
                id="phone"
                v-model="phone"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label for="device" class="block text-sm font-medium"
                >Select Service</label
              >
              <select
                id="device"
                v-model="device"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              >
                <option selected  value="">Select Service</option>
                <option value="Publishing">Publishing</option>
                <option value="Printing">Printing</option>
                <option value="Author-website-creation">Author website creation</option>
              </select>
            </div>
            <div>
              <label for="location" class="block text-sm font-medium"
                >Location</label
              >
              <input
                type="text"
                id="location"
                v-model="location"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Your Location"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                v-model="message"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              class="w-full bg-indigo-500 text-white font-extrabold px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300"
            >
              <UtilsLoadingButtonSpinner v-if="loading" />
              <span v-else> Submit Inquiry </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-container {
  height: 100%; /* Ensures the map section is the same height as the form */
}

/* Make sure the grid items have the same height on large screens */
@media (min-width: 1024px) {
  .grid {
    grid-template-rows: 1fr;
  }
}
</style>
