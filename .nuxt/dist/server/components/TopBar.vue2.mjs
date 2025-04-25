import __nuxt_component_2 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { defineComponent, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useMain } from "../store/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TopBar",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMain();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-secondary text-white py-2 px-4 hidden lg:block" }, _attrs))} data-v-7cdfa68a><div class="container mx-auto flex flex-col md:flex-row justify-between items-center" data-v-7cdfa68a><div class="flex flex-col md:flex-row gap-4 items-center" data-v-7cdfa68a><div class="flex flex-row items-center gap-2 hover-contact" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:telephone-inbound-fill",
        class: "topbar-icon"
      }, null, _parent));
      _push(`<span class="text-sm" data-v-7cdfa68a>${ssrInterpolate(unref(store).phone)}</span></div><div class="flex flex-row items-center gap-2 hover-contact" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:envelope-fill",
        class: "topbar-icon"
      }, null, _parent));
      _push(`<span class="text-sm" data-v-7cdfa68a>Email us</span></div><div class="flex flex-row items-center gap-2 hover-contact" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:geo-alt-fill",
        class: "topbar-icon"
      }, null, _parent));
      _push(`<span class="text-sm" data-v-7cdfa68a>${ssrInterpolate(unref(store).address)}</span></div></div><div class="flex gap-4 items-center mt-4 md:mt-0" data-v-7cdfa68a><a${ssrRenderAttr("href", unref(store).socials.facebook)} target="_blank" rel="noopener noreferrer" class="hover-social" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:facebook",
        class: "topbar-icon"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(store).socials.instagram)} target="_blank" rel="noopener noreferrer" class="hover-social" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:instagram",
        class: "topbar-icon"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(store).socials.twitter)} target="_blank" rel="noopener noreferrer" class="hover-social" data-v-7cdfa68a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:twitter",
        class: "topbar-icon"
      }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=TopBar.vue2.mjs.map
