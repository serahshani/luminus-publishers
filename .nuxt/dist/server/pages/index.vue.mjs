import __nuxt_component_0 from "../components/Hero.vue.mjs";
import __nuxt_component_1 from "../components/About.vue.mjs";
import __nuxt_component_2 from "../components/Services.vue.mjs";
import "../components/CallBackForm.vue.mjs";
import __nuxt_component_4 from "../components/Contact.vue.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import _sfc_main$1 from "../components/CallBackForm.vue2.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_About = __nuxt_component_1;
  const _component_Services = __nuxt_component_2;
  const _component_CallBackForm = _sfc_main$1;
  const _component_Contact = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_CallBackForm, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
