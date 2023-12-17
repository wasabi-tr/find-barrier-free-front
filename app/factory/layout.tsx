import React from 'react'
import Container from '../_components/layouts/container'
const FactoryLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>
}
export default FactoryLayout
