import __nuxt_component_2 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { defineComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoadingButtonSpinner",
  __ssrInlineRender: true,
  props: {
    loadingText: {
      type: String,
      default: "Loading Please Wait"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row gap-4 items-center justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "eos-icons:loading",
        class: "w-12 h-12 text-white animate-spin"
      }, null, _parent));
      _push(`<span class="text-white">${ssrInterpolate(__props.loadingText)}</span></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=LoadingButtonSpinner.vue2.mjs.map
