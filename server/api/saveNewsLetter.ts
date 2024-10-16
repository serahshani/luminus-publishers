

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log(body)

  const { email } = body


  return SanityClient.create({
    _type: "newsletter",
    email,
  });

  
})



