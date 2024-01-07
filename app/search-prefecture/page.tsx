import React from 'react'
import Container from '../_components/layouts/container'
import Prefectures from '../_components/ui-parts/prefectures'

const SearchPrefecture = () => {
  return (
    <div className="bg-color-main-50 py-16">
      <Container narrow>
        <div className="p-8 bg-white rounded-2xl">
          <Prefectures />
        </div>
      </Container>
    </div>
  )
}

export default SearchPrefecture
