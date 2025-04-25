import __nuxt_component_2$1 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_2$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "py-12 pt-36 bg-gray-100"
  }, _attrs))}><div class="container mx-auto text-center"><h2 class="text-3xl font-bold mb-6">Our Services</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:phone",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Book Publishing</h3><p>We bring your Book to life!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:book",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Printing</h3><p>Quality Hard Copy printing</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Author Website Creation</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Copyright</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">ISBN &amp; BARCODE</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Copy Editing</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Layout &amp; Formating</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Cover Design</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Proofreading</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Ghost writing</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Content Editing</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">E-Book creation</h3><p>We give you an Online Presence!</p></div><div class="p-6 bg-white rounded-lg shadow-md">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "bi:credit-card",
    class: "text-4xl text-indigo-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-xl font-semibold">Type Setting</h3><p>We give you an Online Presence!</p></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Services.vue.mjs.map
