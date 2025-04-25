import "./utils/LoadingButtonSpinner.vue.mjs";
import { defineComponent, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public.mjs";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _sfc_main$1 from "./utils/LoadingButtonSpinner.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CallBackForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { $toast } = useNuxtApp();
    const loading = ref(false);
    const name = ref("");
    const phoneNumber = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilsLoadingButtonSpinner = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-12 bg-cover bg-center bg-gray-200 relative",
        style: { "background-image": 'url("/callback-form.png")' }
      }, _attrs))}><div class="absolute inset-0 bg-black bg-opacity-40"></div><div class="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"><div class="hidden lg:block"><img${ssrRenderAttr("src", _imports_0)} alt="Callback Illustration" class="w-full h-auto rounded-lg shadow-lg"></div><div id="callback-form" class="transition-opacity duration-700 ease-in-out opacity-0 pt-36"><h2 class="text-4xl text-center lg:text-left text-white font-extrabold mb-8"> Request Call Back </h2><form class="bg-white p-8 rounded-lg shadow-lg space-y-6 text-center lg:text-left"><input type="text" placeholder="Your Name"${ssrRenderAttr("value", unref(name))} required class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"><input type="tel" placeholder="Your Phone Number"${ssrRenderAttr("value", unref(phoneNumber))} required class="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"><button class="w-full bg-blue-500 hover:bg-indigo-900 text-white font-extrabold px-4 py-2 rounded-md transition-all duration-300">`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_UtilsLoadingButtonSpinner, null, null, _parent));
      } else {
        _push(`<span> Request a Call Back </span>`);
      }
      _push(`</button></form></div></div></section>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CallBackForm.vue2.mjs.map
