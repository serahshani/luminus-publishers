import  groq  from "@nuxtjs/sanity";


export const saveRequestCallback = async ({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}) => {

   return await useFetch("/api/saveRequestCallBack", {
      method: "POST",
      body: {
        name,
        phoneNumber,
      },
    })
};

export const saveSubscribeNewsLetter = async ({
  email}: {email: string}) => {
    return  await useFetch("/api/saveNewsLetter", {
      method: "POST",
      body: {
        email,
      },
    })
  }

export const saveSubmitInquiry = async ({
  name,
  email,
  phone,
  device,
  warranty,
  location,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  device: string;
  warranty: string;
  location: string;
  message: string;
}) => {

  return  await useFetch("/api/saveInquiry", {
    method: "POST",
    body: {
      name,
      email,
      phone,
      device,
      warranty,
      location,
      message,
    },
  })
 
}


