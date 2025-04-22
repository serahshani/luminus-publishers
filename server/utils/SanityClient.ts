// import  groq  from "@nuxtjs/sanity";
import  {createClient }  from "@sanity/client";

// console.log("================>" ,process.env.SANITY_API_TOKEN)
if(!process.env.SANITY_API_TOKEN){

    // throw new Error('Missing SANITY_API_TOKEN')
}


const SanityClient = createClient({
    token: process.env.SANITY_API_TOKEN,
    projectId: 'xpio1q22',
    dataset: 'production',  
    useCdn: false,
    apiVersion: '2024-10-16',
});


export { SanityClient }





