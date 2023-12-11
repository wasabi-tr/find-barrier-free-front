import { User } from '@/app/_common/types'
import { useQuery } from '@tanstack/react-query'

export const useQueryUser = () => {
  const getUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`)
    const data = await res.json()
    return data
  }

  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  })
}
