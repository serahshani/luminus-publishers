import { defineStore } from 'pinia'

export const useMain = defineStore('main', () => {
  const email = ref('info@sihotechnologies.com');
  const phone = ref('1234567890');
  const address = ref('KISUMU DALA');
  const socials = ref({
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  });
  const isMenuOpen = ref(false);
  const brand = ref('Siho Technologies');
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

  return {
    email,
    phone,
    address,
    socials,
    navLinks,
    brand,
    isMenuOpen,
  }
})
