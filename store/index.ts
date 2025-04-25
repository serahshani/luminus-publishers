// Your existing store (where you want to access the other store)
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useOtherStore } from '~/store/otherStore'; // Import the other store

interface NavLink {
  name: string;
  href: string;
  active: boolean;
  children?: NavLink[];
}

interface MainStoreState {
  email: string;
  phone: string;
  address: string;
  operatingHours: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    tiktok: string;
  };
  isMenuOpen: boolean;
  brand: string;
  navLinks: NavLink[];
}

interface MainStoreGetters {}

interface MainStoreActions {
  callOtherAction: () => void;
}

export const useMain = defineStore<'main', MainStoreState, MainStoreGetters, MainStoreActions>('main', () => {
  const email = ref<string>('luminuspublishers@gmail.com');
  const phone = ref<string>('0741185838');
  const address = ref<string>('ThikaRoad, Nairobi');
  const operatingHours = ref<string>("Mon-Sat, 9 AM - 6 PM");
  const socials = ref<{
    facebook: string;
    twitter: string;
    instagram: string;
    tiktok: string;
  }>({
    facebook: 'https://web.facebook.com/Luminapublishers',
    twitter: 'https://x.com/SubmitLuminus',
    instagram: 'https://www.instagram.com/luminuspublishers',
    tiktok: 'https://www.tiktok.com/@luminuspublishers',
  });
  const isMenuOpen = ref<boolean>(false);
  const brand = ref<string>('Luminus Publishers');
  const navLinks = ref<NavLink[]>([
    {
      name: 'Home',
      href: '/',
      active: true
    },
    {
      name: 'About',
      href: '/about',
      active: false
    },
    {
      name: 'Services',
      href: '/services',
      active: false,
      children: [
        {
          name: 'Service 1',
          href: '/service-1',
          active: false
        },
        {
          name: 'Service 2',
          href: '/service-2',
          active: false
        },
        {
          name: 'Service 3',
          href: '/service-3',
          active: false
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      active: false
    }
  ]);

  // Access the other store
  const otherStore = useOtherStore();

  // You can now access data and actions from the other store
  console.log(otherStore.someData.value); // Access data

  const callOtherAction = () => {
    otherStore.someAction(); // Call an action
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
    otherStore, // Optionally expose the entire other store if needed
    callOtherAction // Optionally expose a function that uses the other store
  };
});