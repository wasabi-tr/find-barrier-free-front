export async function GET(request: Request) {
  const res = await fetch(`${process.env.API_URL}/factory`)
  return Response.json(res)
}
