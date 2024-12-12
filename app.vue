<script lang="ts" setup>
useSeoMeta({
  title:"FIX POINT  | Service Center in Kisumu",
  description: "FIX POINT is an authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
  keywords:"FIX POINT, Authorized Service Center, Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung, iPhone Repairs, Phone Repairs, Gadget Repairs, Original Spare Parts, Phone Sales, Credit Phones, Kisumu, Kenya,Trust Us for Genuine Phone Repairs,Your Authorized Service Center in Kisumu,Expert Gadget Repair & Original Parts",
  ogTitle:"FIX POINT  | Service Center in Kisumu",
  ogDescription: "An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
  ogUrl: 'https://www.fixpointkenya.co.ke',
  twitterTitle: 'FIX POINT  | Service Center in Kisumu',
  twitterDescription: 'An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.',
  twitterImage: 'https://www.fixpointkenya.co.ke/logo.png',
  twitterCard: 'summary',
  twitterSite: '@fixpointservicecenter',
  ogImage: 'https://www.fixpointkenya.co.ke/logo.png',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useHead({
    link: [
      {
        rel: 'icon',
        // type: 'image/png',
        type: 'image/x-icon', // Changed from image/png to image/x-icon for .ico files
        href: 'https://www.fixpointkenya.co.ke/favicon.ico'
      },
      {
        rel: 'canonical',
        href: 'https://www.fixpointkenya.co.ke'
      }
    ],
    script: [
    {
      src: "https://embed.tawk.to/670f5df22480f5b4f58e0b99/1iaa0dvha",
      async: true
    }
  ]
});

</script>
<template>
  <div class="w-full">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
