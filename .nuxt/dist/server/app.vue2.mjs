import __nuxt_component_0 from "./node_modules/nuxt/dist/app/components/server-placeholder.mjs";
import __nuxt_component_1 from "./node_modules/nuxt/dist/app/components/nuxt-layout.mjs";
import __nuxt_component_2 from "./node_modules/nuxt/dist/pages/runtime/page.mjs";
import { defineComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSeoMeta, useHead } from "./node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Luminus Publishers",
      description: "FIX POINT is an authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
      keywords: "FIX POINT, Authorized Service Center, Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung, iPhone Repairs, Phone Repairs, Gadget Repairs, Original Spare Parts, Phone Sales, Credit Phones, Kisumu, Kenya,Trust Us for Genuine Phone Repairs,Your Authorized Service Center in Kisumu,Expert Gadget Repair & Original Parts",
      ogTitle: "FIX POINT  | Service Center in Kisumu",
      ogDescription: "An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
      ogUrl: "https://www.fixpointkenya.co.ke",
      twitterTitle: "FIX POINT  | Service Center in Kisumu",
      twitterDescription: "An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
      twitterImage: "https://www.fixpointkenya.co.ke/logo.png",
      twitterCard: "summary",
      twitterSite: "@fixpointservicecenter",
      ogImage: "https://www.luminuspublishers.com/logo.png"
    });
    useHead({
      htmlAttrs: {
        lang: "en"
      }
    });
    useHead({
      link: [
        {
          rel: "icon",
          // type: 'image/png',
          type: "image/x-icon",
          // Changed from image/png to image/x-icon for .ico files
          href: "/JEPG-1.jpg"
        },
        {
          rel: "canonical",
          href: "https://www.fixpointkenya.co.ke"
        }
      ],
      script: [
        // {
        //   src: "https://embed.tawk.to/670f5df22480f5b4f58e0b99/1iaa0dvha",
        //   async: true
        // }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtRouteAnnouncer = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtRouteAnnouncer, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=app.vue2.mjs.map
