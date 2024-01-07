import Modal from '@/app/_components/ui-element/modal'
import Prefectures from '@/app/_components/ui-parts/prefectures'
import React from 'react'

const SearchPrefectureModal = async () => {
  return (
    <Modal>
      <Prefectures />
    </Modal>
  )
}

export default SearchPrefectureModal
