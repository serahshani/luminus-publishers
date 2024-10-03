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
  return {
    email,
    phone,
    address,
    socials,
  }
})
