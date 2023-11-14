export const getUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    credentials: 'include',
  })
  const data = await res.json()
  console.log(data)
  return data
}
