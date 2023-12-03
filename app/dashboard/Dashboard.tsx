'use client'
import Container from '../_components/layouts/container'

export const Dashboard = () => {
  // const session = await auth()
  // const user = await getUser(session?.user.id)
  console.log(session)

  return (
    <Container>
      <input type="file" />
    </Container>
  )
}
