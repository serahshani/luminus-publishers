/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/app.vue",
    "/components/**/*.{vue,js}",
    "/layouts/**/*.vue",
    "/pages/**/*.vue",
    "/plugins/**/*.{js,ts}",
    "/nuxt.config.{js,ts}",
    "/utils/**/*.{js,ts}",
    "/composables/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

