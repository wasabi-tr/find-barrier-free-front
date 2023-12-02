import { useEffect } from 'react'
import Container from '../_components/layouts/container'
import { getUser } from '../_features/user/api'
import { getServerSession } from 'next-auth'

const MyPage = async () => {
  const session = await getServerSession()
  const user = await getUser(session?.user.id)
  console.log(user)

  return (
    <Container>
      <p>mypage</p>
    </Container>
  )
}

export default MyPage
