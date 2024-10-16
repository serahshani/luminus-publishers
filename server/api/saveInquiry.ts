export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, device, warranty, location, message } = body
  return SanityClient.create({
    _type: "inquiry",
    name,
    email,
    phone,
    device,
    warranty,
    location,
    message,
  });
})
