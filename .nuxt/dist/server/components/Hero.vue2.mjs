import { defineComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "bg-cover bg-center bg-no-repeat py-20 relative overflow-hidden",
        style: { "background-image": "url('/hero-image.png')" }
      }, _attrs))} data-v-2c1c9f7f><div class="absolute inset-0 bg-black bg-opacity-50" data-v-2c1c9f7f></div> &quot;&quot; <div class="relative container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center h-full" data-v-2c1c9f7f><div class="relative z-10 text-white px-6 py-12 lg:py-20 lg:px-12 lg:col-span-3 bg-gradient-to-r from-black to-transparent lg:clip-hero" data-v-2c1c9f7f><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transform" style="${ssrRenderStyle({ "transform": "translateY(0)", "transition": "transform 0.8s ease-out" })}" data-v-2c1c9f7f> Get your Book Published by us today! </h1><p class="text-lg md:text-xl mb-6 transform" style="${ssrRenderStyle({ "transform": "translateY(0)", "transition": "transform 0.8s ease-out" })}" data-v-2c1c9f7f> As a premier ghostwriting and publishing company, we offer a wide range of services to help you bring your book to life. From ghostwriting and editing to cover design and distribution, we have the expertise and experience to make your book a success. </p><div class="space-x-2 grid grid-cols-1 gap-2 lg:grid-cols-5" data-v-2c1c9f7f><a href="#callback-form" class="bg-indigo-900 text-white font-extrabold px-3 py-3 rounded-lg P hover:bg-blue-500 transition-all lg:col-span-2 z-40" data-v-2c1c9f7f> Book Appointment </a><a href="#callback-form" class="bg-transparent border border-white text-white px-2 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all lg:col-span-2" data-v-2c1c9f7f> Get a Quote </a></div></div><div class="hidden lg:block relative lg:col-span-2" data-v-2c1c9f7f></div></div></section>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Hero.vue2.mjs.map
