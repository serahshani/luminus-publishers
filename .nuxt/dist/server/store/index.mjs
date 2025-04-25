import { defineStore } from "../node_modules/pinia/dist/pinia.mjs";
import { ref } from "vue";
import { useOtherStore } from "./otherStore.mjs";
const useMain = defineStore("main", () => {
  const email = ref("luminuspublishers@gmail.com");
  const phone = ref("0741185838");
  const address = ref("ThikaRoad, Nairobi");
  const operatingHours = ref("Mon-Sat, 9 AM - 6 PM");
  const socials = ref({
    facebook: "https://web.facebook.com/Luminapublishers",
    twitter: "https://x.com/SubmitLuminus",
    instagram: "https://www.instagram.com/luminuspublishers",
    tiktok: "https://www.tiktok.com/@luminuspublishers"
  });
  const isMenuOpen = ref(false);
  const brand = ref("Luminus Publishers");
  const navLinks = ref([
    {
      name: "Home",
      href: "/",
      active: true
    },
    {
      name: "About",
      href: "/about",
      active: false
    },
    {
      name: "Services",
      href: "/services",
      active: false,
      children: [
        {
          name: "Service 1",
          href: "/service-1",
          active: false
        },
        {
          name: "Service 2",
          href: "/service-2",
          active: false
        },
        {
          name: "Service 3",
          href: "/service-3",
          active: false
        }
      ]
    },
    {
      name: "Contact",
      href: "/contact",
      active: false
    }
  ]);
  const otherStore = useOtherStore();
  console.log(otherStore.someData.value);
  const callOtherAction = () => {
    otherStore.someAction();
  };
  return {
    email,
    phone,
    address,
    socials,
    navLinks,
    brand,
    isMenuOpen,
    operatingHours,
    otherStore,
    // Optionally expose the entire other store if needed
    callOtherAction
    // Optionally expose a function that uses the other store
  };
});
export {
  useMain
};
//# sourceMappingURL=index.mjs.map
