import __nuxt_component_2 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_1 from "./MobileDrawer.vue.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public2.mjs";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_MobileDrawer = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-neutral-100 text-black py-4" }, _attrs))}><div class="container mx-auto flex justify-between items-center"><h1 class="text-2xl font-bold"><img${ssrRenderAttr("src", _imports_0)} alt="LUMINUSPUBLISHERS" class="w-16 h-16"></h1><button class="md:hidden focus:outline-none">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:list",
        class: "w-6 h-6 text-black"
      }, null, _parent));
      _push(`</button><nav class="hidden md:flex space-x-6"><ul class="flex flex-row space-x-8"><li><a href="#about" class="hover:text-blue-800 font-extrabold">About Us</a></li><li><a href="#services" class="hover:text-blue-800 font-extrabold">Services</a></li><li><a href="#contact" class="hover:text-blue-800 font-extrabold">Contact Us</a></li></ul></nav><div class="hidden md:flex space-x-4"><a href="#callback-form" class="bg-indigo-900 hover:bg-blue-500 px-4 py-2 rounded text-white font-extrabold flex items-center justify-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "si:phone-callback-fill",
        class: "w-6 h-6"
      }, null, _parent));
      _push(` Request Call Back </a><button class="bg-blue-800 hover:bg-rose-800 text-white px-4 py-2 rounded"> Get a Free Quote </button></div></div>`);
      _push(ssrRenderComponent(_component_MobileDrawer, {
        open: unref(menuOpen),
        onClose: ($event) => menuOpen.value = false
      }, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Header.vue.mjs.map
