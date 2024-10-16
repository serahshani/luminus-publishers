import  groq  from "@nuxtjs/sanity";
import  {createClient }  from "@sanity/client";

const client = createClient({
    token: process.env.SANITY_TOKEN,
    projectId: 'xpio1q22',
    dataset: 'production',  
    
});

export const saveRequestCallback = async ({
    name , phoneNumber
}:{
    name: string,
    phoneNumber: string
}) => {
  

  
};

export const saveSubscribeNewsLetter = async ({
  email}: {email: string}) => {
  
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

}


