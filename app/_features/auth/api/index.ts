export const signup = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  console.log(data)
}

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  console.log(data)
}

export const logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  console.log(data)
}
