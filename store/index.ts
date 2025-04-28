import { defineStore } from 'pinia';
import { useOtherStore } from '~/store/otherStore';

export const useMain = defineStore('main', {
  state: () => ({
    email: 'luminuspublishers@gmail.com',
    phone: '0741185838',
    address: 'ThikaRoad, Nairobi',
    operatingHours: "Mon-Sat, 9 AM - 6 PM",
    socials: {
      facebook: 'https://web.facebook.com/Luminapublishers',
      twitter: 'https://x.com/SubmitLuminus',
      instagram: 'https://www.instagram.com/luminuspublishers',
      tiktok: 'https://www.tiktok.com/@luminuspublishers',
    },
    isMenuOpen: false,
    brand: 'Luminus Publishers',
    navLinks: [
      { name: 'Home', href: '/', active: true },
      { name: 'About', href: '/about', active: false },
      { name: 'Services', href: '/services', active: false, children: [
        { name: 'Service 1', href: '/service-1', active: false },
        { name: 'Service 2', href: '/service-2', active: false },
        { name: 'Service 3', href: '/service-3', active: false },
      ]},
      { name: 'Contact', href: '/contact', active: false },
    ]
  }),
  actions: {
    callOtherAction() {
      const otherStore = useOtherStore();
      otherStore.someAction();
    }
  }
});
