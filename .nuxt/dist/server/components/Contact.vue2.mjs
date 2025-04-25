import "./utils/LoadingButtonSpinner.vue.mjs";
import { defineComponent, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _sfc_main$1 from "./utils/LoadingButtonSpinner.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { $toast } = useNuxtApp();
    const loading = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const device = ref("");
    ref("");
    const location = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilsLoadingButtonSpinner = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-12 pt-36 bg-white"
      }, _attrs))} data-v-60dc926a><div class="container mx-auto" data-v-60dc926a><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-60dc926a><div class="map-container bg-gray-100 h-full rounded-lg shadow-lg overflow-hidden" data-v-60dc926a><h2 class="text-3xl font-bold text-center mb-6" data-v-60dc926a>Find Us Here</h2><iframe src="https://maps.app.goo.gl/4B8TzQEPgfj5K58MA" width="100%" height="100%" class="w-full h-full rounded-lg" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" data-v-60dc926a></iframe></div><div class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center h-full" data-v-60dc926a><h2 class="text-3xl font-bold text-center mb-6" data-v-60dc926a> Submit Your Inquiry </h2><form class="space-y-4" data-v-60dc926a><div data-v-60dc926a><label for="name" class="block text-sm font-medium" data-v-60dc926a>Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Your Name" required data-v-60dc926a></div><div data-v-60dc926a><label for="email" class="block text-sm font-medium" data-v-60dc926a>Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(email))} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Your Email" required data-v-60dc926a></div><div data-v-60dc926a><label for="phone" class="block text-sm font-medium" data-v-60dc926a>Phone Number</label><input type="tel" id="phone"${ssrRenderAttr("value", unref(phone))} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Your Phone Number" required data-v-60dc926a></div><div data-v-60dc926a><label for="device" class="block text-sm font-medium" data-v-60dc926a>Select Service</label><select id="device" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" data-v-60dc926a><option selected value="" data-v-60dc926a>Select Service</option><option value="Publishing" data-v-60dc926a${ssrIncludeBooleanAttr(Array.isArray(unref(device)) ? ssrLooseContain(unref(device), "Publishing") : ssrLooseEqual(unref(device), "Publishing")) ? " selected" : ""}>Publishing</option><option value="Printing" data-v-60dc926a${ssrIncludeBooleanAttr(Array.isArray(unref(device)) ? ssrLooseContain(unref(device), "Printing") : ssrLooseEqual(unref(device), "Printing")) ? " selected" : ""}>Printing</option><option value="Author-website-creation" data-v-60dc926a${ssrIncludeBooleanAttr(Array.isArray(unref(device)) ? ssrLooseContain(unref(device), "Author-website-creation") : ssrLooseEqual(unref(device), "Author-website-creation")) ? " selected" : ""}>Author website creation</option></select></div><div data-v-60dc926a><label for="location" class="block text-sm font-medium" data-v-60dc926a>Location</label><input type="text" id="location"${ssrRenderAttr("value", unref(location))} class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Your Location" required data-v-60dc926a></div><div data-v-60dc926a><label for="message" class="block text-sm font-medium" data-v-60dc926a>Message</label><textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Your Message" required data-v-60dc926a>${ssrInterpolate(unref(message))}</textarea></div><button class="w-full bg-indigo-500 text-white font-extrabold px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300" data-v-60dc926a>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_UtilsLoadingButtonSpinner, null, null, _parent));
      } else {
        _push(`<span data-v-60dc926a> Submit Inquiry </span>`);
      }
      _push(`</button></form></div></div></div></section>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact.vue2.mjs.map
