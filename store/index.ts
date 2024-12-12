import { defineStore } from 'pinia'

export const useMain = defineStore('main', () => {
  const email = ref('fixpointservicecentre@gmail.com');
  const phone = ref('0701482132');
  const address = ref('Pioneer House, 1st Floor, Shop 100B, Oginga Odinga Street, Kisumu');
  const operatingHours = ref("Mon-Sun, 9 AM - 6 PM");
  const socials = ref({
    facebook: 'https://www.facebook.com/fixpointrepairskisumu',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  });
  const isMenuOpen = ref(false);
  const brand = ref('Fix Point');
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
    operatingHours
  }
})
