import __nuxt_component_0 from "../components/TopBar.vue.mjs";
import _sfc_main$1 from "../components/Header.vue.mjs";
import __nuxt_component_2 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_3 from "../components/Footer.vue.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopBar = __nuxt_component_0;
  const _component_Header = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full overflow-x-hidden" }, _attrs))} data-v-6fd14b08><div class="fixed top-0 left-0 right-0 z-50" data-v-6fd14b08>`);
  _push(ssrRenderComponent(_component_TopBar, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<a href="https://wa.me/254741185838?Hello Luminus Publishers!" class="whatsapp animate-bob" target="_blank" data-v-6fd14b08>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:whatsapp-icon",
    class: "h-16 w-16"
  }, null, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6fd14b08"]]);
export {
  _default as default
};
//# sourceMappingURL=default.vue.mjs.map
