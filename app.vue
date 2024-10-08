<script lang="ts" setup>
useSeoMeta({
  title:"SIHO TECHNOLOGIES  | Service Center in Kisumu",
  description: "SIHO TECHNOLOGIES is an authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
  keywords:"SIHO TECHNOLOGIES, Authorized Service Center, Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung, iPhone Repairs, Phone Repairs, Gadget Repairs, Original Spare Parts, Phone Sales, Credit Phones, Kisumu, Kenya,Trust Us for Genuine Phone Repairs,Your Authorized Service Center in Kisumu,Expert Gadget Repair & Original Parts",
  ogTitle:"SIHO TECHNOLOGIES  | Home",
  ogDescription: "An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.",
  ogUrl: 'https://www.sihotechnologies.com',
  twitterTitle: 'SIHO TECHNOLOGIES  | Home',
  twitterDescription: 'An authorized service center for Huawei, Realme, Redmi, Tecno, Infinix, Itel, Samsung & iPhone Repairs. We offer expert repair, servicing, original spare parts, and sales of phones and accessories. Trust us for all your gadget repair needs.',
  twitterImage: 'https://www.sihotechnologies.com/logo.png',
  twitterCard: 'summary',
  twitterSite: '@siho_technologies',
  ogImage: 'https://www.sihotechnologies.com/logo.png',
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
        type: 'image/png',
        href: 'https://www.sihotechnologies.com/logo.png'
      },
      {
        rel: 'canonical',
        href: 'https://www.sihotechnologies.com'
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
