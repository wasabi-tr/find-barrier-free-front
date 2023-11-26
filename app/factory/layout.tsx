import React from 'react'
import Container from '../_components/layouts/container'
import SearchBox from '../_components/ui-element/searchBox'
const FactoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="flex items-start justify-center gap-9 py-8  sm:flex-col">
        <aside className="flex-shrink-0 basis-[407px] shadow-md rounded-lg p-10 mx-auto sm:w-full sm:basis-0">
          <SearchBox />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </Container>
  )
}
export default FactoryLayout
