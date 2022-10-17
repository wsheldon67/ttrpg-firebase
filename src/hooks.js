export async function handle({event, resolve}) {
  const response = await resolve(event, {
    ssr: false
  })
  return response
}
// TODO rachel & gabe keep leaving the campaign