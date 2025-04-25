import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "py-12 pt-36 bg-white text-center"
  }, _attrs))}><div class="container mx-auto"><h2 class="text-4xl font-bold mb-6">About Luminus</h2><p class="text-lg text-gray-700 mb-4"> At Luminus Publishers, we are passionate about your success as an author. With our book marketing services, we are committed to ensuring that your book receives the attention it deserves in a crowded marketplace. Let us take your book marketing to the next level and make your literary dreams a reality. Contact us today to learn more about our book marketing services and how we can help propel your book to new heights! Please note that this is a sample marketing content and can be customized further to align with Luminus Publishers&#39; specific services, target audience, and brand voice. </p><p class="text-lg text-gray-700"> Located in Nairobi, trust us for all your book publishing! </p></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=About.vue.mjs.map
