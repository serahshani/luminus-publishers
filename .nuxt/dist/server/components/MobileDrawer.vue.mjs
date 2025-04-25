import __nuxt_component_2 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "MobileDrawer",
  __ssrInlineRender: true,
  props: {
    open: Boolean
    // Receive the open state from parent component
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 bg-black bg-opacity-50" }, _attrs))} data-v-e44d3f67><div class="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg" data-v-e44d3f67><div class="flex justify-end p-4" data-v-e44d3f67><button class="focus:outline-none" data-v-e44d3f67>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "bi:x-lg",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button></div><nav class="mt-8 space-y-6 text-lg" data-v-e44d3f67><ul data-v-e44d3f67><li data-v-e44d3f67><a href="#about" class="block px-6 py-2 hover:bg-gray-800" data-v-e44d3f67>About Us</a></li><li data-v-e44d3f67><a href="#services" class="block px-6 py-2 hover:bg-gray-800" data-v-e44d3f67>Services</a></li><li data-v-e44d3f67><a href="#contact" class="block px-6 py-2 hover:bg-gray-800" data-v-e44d3f67>Contact Us</a></li></ul></nav><div class="mt-8 px-6 space-y-4" data-v-e44d3f67><button class="w-full bg-blue-500 hover:bg-indigo-900 px-4 py-2 rounded" data-v-e44d3f67> Request a Call Back </button><button class="w-full bg-blue-500 hover:bg-indigo-900 px-4 py-2 rounded" data-v-e44d3f67> Get a Free Quote </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e44d3f67"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=MobileDrawer.vue.mjs.map
