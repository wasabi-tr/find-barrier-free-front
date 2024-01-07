import React from 'react'
import Container from '../_components/layouts/container'
import Features from '../_components/ui-parts/features'

const SearchFeature = () => {
  return (
    <div className="bg-color-main-50 py-16">
      <Container narrow>
        <div className="p-8 bg-white rounded-2xl">
          <Features />
        </div>
      </Container>
    </div>
  )
}

export default SearchFeature
