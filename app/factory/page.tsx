import Container from '../_components/layouts/container'
import { getAllFactory } from '../_features/factory/api'

const Factory = async () => {
  const factory = await getAllFactory()
  console.log(factory)

  return (
    <Container>
      <h1>Factory</h1>
    </Container>
  )
}

export default Factory
