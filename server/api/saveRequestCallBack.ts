export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log(body)

  const { name, phoneNumber } = body
  if (!name || !phoneNumber) {
    throw createError({ statusCode: 400, statusMessage: "Phone Number Is Required" });
  }
  return  await SanityClient.create({
    _type: "requestCallback",
    name,
    phoneNumber,
  });
})
