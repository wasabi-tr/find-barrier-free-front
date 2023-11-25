import React from 'react'
import Container from '../_components/layouts/container'
import SearchBox from '../_components/ui-element/searchBox'
const FactoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="flex items-start gap-9 py-8">
        <aside className="w-1/3 min-w-[407px] shadow-md rounded-lg p-10">
          <SearchBox />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </Container>
  )
}
export default FactoryLayout
