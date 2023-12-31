import React from 'react'
import Container from '../_components/layouts/container'
const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container narrow>{children}</Container>
}
export default ReviewLayout
