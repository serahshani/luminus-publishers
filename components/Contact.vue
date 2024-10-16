<script lang="ts" setup>
const { $toast } = useNuxtApp();
const name = ref("");
const email = ref("");
const phone = ref("");
const device = ref("");
const warranty = ref("");
const location = ref("");
const message = ref("");

const requestCallback = async () => {
  try {
    await saveSubmitInquiry({
      name: name.value,
      email: email.value,
      phone: phone.value,
      device: device.value,
      warranty: warranty.value,
      location: location.value,
      message: message.value,
    });
    // $toast.success("Thank you for your request. We will get back to you shortly.");
    // name.value = '';
    // email.value = '';
    // phone.value = '';
    // device.value = '';
    // warranty.value = '';
    // location.value = '';
    // message.value = '';
  } catch (error) {
    $toast.error(
      "An error occurred while submitting your request. Please try again later."
    );
  }
};
</script>
<template>
  <section id="contact" class="py-12 bg-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Map Section -->
        <div
          class="map-container bg-gray-100 h-full rounded-lg shadow-lg overflow-hidden"
        >
          <h2 class="text-3xl font-bold text-center mb-6">Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099593!2d144.95373531531763!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0fbd5f63%3A0x5045675218cee90!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1629249122238!5m2!1sen!2sus"
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
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium"
                >Phone Number</label
              >
              <input
                type="tel"
                id="phone"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label for="device" class="block text-sm font-medium"
                >Select Device</label
              >
              <select
                id="device"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              >
                <option>Huawei</option>
                <option>Realme</option>
                <option>Redmi</option>
                <option>Tecno</option>
                <option>Infinix</option>
                <option>Itel</option>
                <option>Samsung</option>
                <option>iPhone</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium">Warranty Status</label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input type="radio" name="warranty" value="in" class="mr-2" />
                  In Warranty
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="warranty"
                    value="out"
                    class="mr-2"
                  />
                  Out of Warranty
                </label>
              </div>
            </div>
            <div>
              <label for="location" class="block text-sm font-medium"
                >Location</label
              >
              <input
                type="text"
                id="location"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                placeholder="Your Location"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              class="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
            >
              Submit Inquiry
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
