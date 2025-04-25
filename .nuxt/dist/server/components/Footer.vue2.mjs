import "./utils/LoadingButtonSpinner.vue.mjs";
import { defineComponent, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useMain } from "../store/index.mjs";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _sfc_main$1 from "./utils/LoadingButtonSpinner.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMain();
    const subscribeEmail = ref("");
    const { $toast } = useNuxtApp();
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilsLoadingButtonSpinner = _sfc_main$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white py-8" }, _attrs))} data-v-7677e9af><div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" data-v-7677e9af><div class="flex flex-col px-4 gap-3" data-v-7677e9af><h4 class="text-lg font-bold" data-v-7677e9af>Contact Info</h4><p class="text-sm" data-v-7677e9af>${ssrInterpolate(unref(store).address)}</p><p class="text-sm" data-v-7677e9af>Phone: ${ssrInterpolate(unref(store).phone)}</p><p class="text-sm" data-v-7677e9af>Email: ${ssrInterpolate(unref(store).email)}</p><p class="text-sm" data-v-7677e9af>Operating Hours: ${ssrInterpolate(unref(store).operatingHours)}</p></div><div class="px-4" data-v-7677e9af><h4 class="text-lg font-bold" data-v-7677e9af>Follow Us</h4><ul class="space-y-2 text-sm" data-v-7677e9af><li data-v-7677e9af><a href="{{ store.socials.facebook }}" class="hover:underline" data-v-7677e9af>Facebook</a></li><li data-v-7677e9af><a href="{{ store.socials.instagram }}" class="hover:underline" data-v-7677e9af>Instagram</a></li></ul></div><div class="px-4" data-v-7677e9af><h4 class="text-lg font-bold" data-v-7677e9af>Subscribe to Our Newsletter</h4><form data-v-7677e9af><input type="email" name="email" placeholder="Your Email"${ssrRenderAttr("value", unref(subscribeEmail))} class="w-full px-4 py-2 rounded border mb-2 text-black" required data-v-7677e9af><button class="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded w-full text-white font-extrabold" type="submit" data-v-7677e9af>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_UtilsLoadingButtonSpinner, null, null, _parent));
      } else {
        _push(`<span data-v-7677e9af>Subscribe</span>`);
      }
      _push(`</button></form></div></div></footer>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Footer.vue2.mjs.map
